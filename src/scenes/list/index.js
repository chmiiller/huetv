import React, { useEffect, useState } from 'react';
import { useNavigate } from 'renative';
import { TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

import { getLights } from '../../hueapi';
import LightItem from '../../components/Light';
import Theme, { themeStyles, hasWebFocusableUI } from '../../config';

const styles = StyleSheet.create({
    lightsContainer: { margin: 20, flexDirection: 'row', flexWrap: 'wrap' },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }
});

const List = (props) => {
    const navigate = useNavigate(props);
    const [isLoaded, setIsLoaded] = useState(false);
    const [lights, setLights] = useState([]);
    useEffect(() => {
        fetchLights();
    }, []);

    const fetchLights = async() => {
        const _lights = await getLights();
        setIsLoaded(true);
        setLights(_lights);
    };

    const renderItems = (allLights) => {
        const items = allLights.map((luz) => 
            (<LightItem
                key={luz.id}
                light={luz}
                switchCallback={fetchLights} 
            />)
        );
        return items;
    };

    if (!isLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <ScrollView contentContainerStyle={themeStyles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigate('details', '/[slug]');
                    }}
                >
                    <Text>Press Here List</Text>
                </TouchableOpacity>
                <View style={styles.lightsContainer}>
                    {renderItems(lights)}
                </View>
            </ScrollView>
        );
    }
};

export default List;
