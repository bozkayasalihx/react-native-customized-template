import { Categories, Slides } from '@/Components';
import { useTheme } from '@/Hooks';
import LoginScreen from '@/Screens/LoginScreen';
import { HomeStackParamList, HomeStackProps } from '@/types';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeContainer: React.FC<HomeStackProps> = () => {
    const { Colors, Layout, Common } = useTheme();
    return (
        <HomeStack.Navigator
            screenOptions={{
                header: () => null,
            }}
        >
            <HomeStack.Screen name="HomePartOne" component={Slides} />
            <HomeStack.Screen name="HomePartTwo" component={Categories} />
            <HomeStack.Screen name="HomePartThree" component={LoginScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeContainer;
