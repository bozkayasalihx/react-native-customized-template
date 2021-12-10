import { AboutContainer, HomeContainer } from '@/Containers';
import SettingsContainer from '@/Containers/SettingsContainer';
import { RootTabParamList } from '@/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import SetIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<RootTabParamList>();

// @refresh reset
const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ navigation, route }) => ({
                tabBarLabel: () => null,
                header: () => null,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeContainer}
                options={() => ({
                    tabBarIcon: ({ color }) => (
                        <HomeIcon name="home" size={30} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsContainer}
                options={() => ({
                    tabBarIcon: ({ color }) => (
                        <SetIcon name="settings" size={30} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="About"
                component={AboutContainer}
                options={() => ({
                    tabBarIcon: ({ color, size, focused }) => (
                        <InfoIcon
                            name="information-outline"
                            size={size}
                            color={color}
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default MainNavigator;
