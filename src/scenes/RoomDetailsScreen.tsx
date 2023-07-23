import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

import { Room } from "../api/types";
import { LightDetails } from "../components/LightDetails";
import LightDetailsSkeleton from "../components/LightDetailsSkeleton";
import {
  getGroupById,
  setGroupBrightness,
  turnGroupOn,
  turnGroupOff,
} from "../api/hueapi";
import useInterval from "../api/useInterval";

const STR_TUTORIAL1 = "Arrows Up / Down: Brightness";
const STR_TUTORIAL2 = "Select Button: On / Off";
const API_DELAY = 2000;

interface RoomDetailsLocation {
  id: string;
}

const RoomDetailsScreen = (): JSX.Element => {
  const location = useLocation();
  const state = location.state as RoomDetailsLocation;
  const navigate = useNavigate();
  const { ref, focusKey, focusSelf, setFocus } = useFocusable({
    focusKey: `room_details_screen_${state.id}`
  });

  React.useEffect(() => {
    fetchRoom();
  }, [state.id]);

  // Window keys listener => back button
  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.addEventListener("tizenhwkey", onKey); // No event type for Tizen events =/
    window.addEventListener("keydown", onKey);
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.removeEventListener("tizenhwkey", onKey); // No event type for Tizen events =/
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const onKey = (event: KeyboardEvent) => {
    if (
      event.keyCode === 10009 ||
      event.keyCode === 8 ||
      event.keyCode === 27
    ) {
      // back button
      navigate("/home", { state: "details" });
    }
  };

  const [room, setRoom] = React.useState<Room>();
  const [opacity, setOpacity] = React.useState<number>(1);

  useInterval(() => {
    fetchRoom();
  }, API_DELAY);

  const setRoomBrightness = async (brightness: number) => {
    await setGroupBrightness({ id: state.id, percentage: brightness });
    fetchRoom();
  };

  const switchOnOff = async (turnOn: boolean) => {
    turnOn ? await turnGroupOn(state.id) : await turnGroupOff(state.id);
    turnOn ? setOpacity(1) : setOpacity(0);
    fetchRoom();
  };

  const fetchRoom = async () => {
    const _group = await getGroupById(state.id); // Groups are rooms on Philips Hue universe
    if (_group) {
      setRoom(_group);
    }
  };

  const onArrow = (direction: string) => {
    if (!room) return;

    let newBrightness = room.brightPercentage;
    switch (direction) {
    case "up":
      newBrightness += 10;
      newBrightness < 100
        ? setRoomBrightness(newBrightness)
        : setRoomBrightness(100);
      break;

    case "down":
      newBrightness -= 10;
      if (newBrightness > 0) {
        setRoomBrightness(newBrightness);
      } else {
        switchOnOff(false);
        setRoomBrightness(0);
      }
      break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
      }}
    >
      {!room ? (
        <LightDetailsSkeleton />
      ) : (
        <FocusContext.Provider value={focusKey}>
          <Typography variant={"h3"}>{`${room.name}`}</Typography>
          <LightDetails
            // focusKey={`switch_${room.id}`}
            id={room.id}
            isOn={room.allOn || room.anyOn}
            opacity={opacity}
            brightnessPercentage={room.brightPercentage}
            color={room.color}
            // setBrightnessApi={setRoomBrightness}
            // switchOnOffApi={switchOnOff}
            // onArrowPress={onArrow}
            onEnterPress={() => {
              switchOnOff(!room.allOn || !room.anyOn);
            }}
          />
          <Typography sx={{ opacity: 0.75 }} gutterBottom variant={"subtitle2"}>
            {STR_TUTORIAL1}
          </Typography>
          <Typography sx={{ opacity: 0.75 }} gutterBottom variant={"subtitle2"}>
            {STR_TUTORIAL2}
          </Typography>
        </FocusContext.Provider>
      )}
    </Box>
  );
};

export default RoomDetailsScreen;
