import React from "react";

import List from "@mui/material/List";
import { useNavigate, useLocation } from "react-router-dom";
import { setFocus } from '@noriginmedia/norigin-spatial-navigation';

import { MenuItem } from "./MenuItem";
import { sideMenuConfig, SideMenuObject } from "./SideMenuConfig";

type SideMenuItemsProps = {
  toggleMenu: (menuOpen: boolean) => void;
  ref: any;
};

const ListStyle = {
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "rgba(248, 248, 248, 0.45)",
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
};

export const SideMenuItems = ({
  toggleMenu,
  ref,
} :SideMenuItemsProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpened, setMenuOpened] = React.useState<boolean>(true);

  const focusedItem = React.useRef("");

  const exitApp = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.tizen.application.getCurrentApplication().exit();
  };

  const selectItem = (focusKey: string) => {
    focusedItem.current = focusKey;
    toggleMenu(true);
    setMenuOpened(true);
  };

  const deselectItem = () => {
    focusedItem.current = "";
    setTimeout(() => {
      if (focusedItem.current === "") {
        toggleMenu(false);
        setMenuOpened(false);
      }
    }, 100);
  };

  // Avoid rendering screens if current location is Light/Room Details Screen
  const onDetails: boolean =
    location.pathname === "/light" || location.pathname === "/room";
  // If item is selected from the Light/Room Details Screen back button, this screen should be focused and menu closed
  const fromDetails: boolean = location.state === "details";

  return (
    <div
      ref={ref}
      style={{
        paddingTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        marginBottom: 12,
        overflowX: "hidden",
      }}
    >
      <List sx={ListStyle}>
        {sideMenuConfig.items.map((sideMenuObject: SideMenuObject) => {
          return (
            <MenuItem
              key={sideMenuObject.id}
              path={sideMenuObject.path}
              focusKey={sideMenuObject.focusName}
              current={
                location.pathname == sideMenuObject.path && menuOpened === false
              } // if it's the current selected menu item
              menuOpened={menuOpened}
              icon={sideMenuObject.icon}
              title={sideMenuObject.title}
              onClick={() => {
                navigate(sideMenuObject.path, { state: "focus" });
                deselectItem();
              }}
              onArrow={(direction: string) => {
                if (direction === 'right') {
                  setTimeout(() => {
                    navigate(sideMenuObject.path, { state: "focus" });
                    setFocus(sideMenuObject.screenName);
                    deselectItem();
                  }, 100);
                }
                return true;
              }}
              onFocus={() => {
                if (location.state !== "details") {
                  selectItem(sideMenuObject.id);
                }
                // if on details, don't automatically render screen
                if (sideMenuObject.id !== "menu_item_settings" && !onDetails) {
                  navigate(sideMenuObject.path, {
                    state: fromDetails ? "focus" : null,
                  });
                }
              }}
              onBlur={() => {
                deselectItem();
              }}
            />
          );
        })}
      </List>
      {/* Second list of buttons */}
      <List sx={ListStyle}>
        {sideMenuConfig.extra.map((sideMenuObject: SideMenuObject) => {
          return (
            <MenuItem
              key={sideMenuObject.id}
              path={sideMenuObject.path}
              focusKey={sideMenuObject.focusName}
              current={
                location.pathname == sideMenuObject.path && menuOpened === false
              } // if it's the current selected menu item
              menuOpened={menuOpened}
              title={sideMenuObject.title}
              onClick={() => {
                if (sideMenuObject.id === "menu_item_exit") {
                  exitApp();
                  return;
                }
                // deselectItem();
                navigate(sideMenuObject.path, { state: "focus" });
              }}
              onArrow={(direction: string) => {
                if (direction === 'right' && sideMenuObject.id !== "menu_item_exit") {
                  setTimeout(() => {
                    navigate(sideMenuObject.path, { state: "focus" });
                    setFocus(sideMenuObject.screenName);
                    deselectItem();
                  }, 100);
                }
                return true;
              }}
              onFocus={() => selectItem(sideMenuObject.id)}
              onBlur={() => deselectItem()}
            />
          );
        })}
      </List>
    </div>
  );
};
