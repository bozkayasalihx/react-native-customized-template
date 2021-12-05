import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList, Props } from '@/types';
import { useTheme } from '@/Hooks';
import { Categories } from '@/Components';
import { Slides } from '@/Components';
import { View } from 'react-native';
import LoginScreen from '@/Screens/LoginScreen';

const HomeStack = createStackNavigator<HomeStackParamList>();
type HomeContainerProps = {
    title: string;
} & Props;

const HomeContainer: React.FC<HomeContainerProps> = () => {
    const { Colors, Layout, Common } = useTheme();
    return (
        <HomeStack.Navigator
            screenOptions={{
                header: () => null,
            }}
        >
            <HomeStack.Screen name="Slides" component={Slides} />
            <HomeStack.Screen name="Categories" component={Categories} />
            <HomeStack.Screen name="Login" component={LoginScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeContainer;
