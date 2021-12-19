import React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Light from '../components/Light';

import { getGroups } from '../api/hueapi';
import { type Room } from '../api/types';

type FocusedProps = {
    node: HTMLElement,
};

type LightData = {
    id: string
};

const lightsArray: Array<LightData> = [];
for (let index = 0; index < 50; index++) {
    lightsArray.push({ id: `item_${index}` });
}

const Home = (): JSX.Element => {
    const handleScrolling = ({ node }: FocusedProps) => {
        node.scrollIntoView({ behavior: "smooth", block: 'center' });
    };

    const [rooms, setRooms] = React.useState<Array<Room>>([]);
    React.useEffect(() => {
        homeGetGroups();
    }, []);

    const homeGetGroups = async () => {
        const _rooms = await getGroups();
        if (_rooms !== null) {
            setRooms(_rooms);
        }
    };
    
    return (
        <div style={{padding: 100}}>
            <Fade in timeout={600}>
                <Box sx={{ display: 'grid', rowGap: 5, gridTemplateColumns: 'repeat(3, 1fr)' }}>   
                    {rooms.map((room: Room) => (
                        <Light 
                            key={room.id}
                            id={room.id}
                            name={room.name}
                            brightness={room.brightPercentage}
                            onFocus={handleScrolling}
                            isGroup
                            isOn={room.allOn || room.anyOn}
                        />
                    ))}
                </Box>
            </Fade>
        </div>
    );
};

export default Home;
