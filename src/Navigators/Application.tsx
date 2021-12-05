import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StartupContainer } from '@/Containers';
import { useTheme } from '@/Hooks';
import MainNavigator from './Main';
import { navigationRef } from './utils';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
    const { Layout, darkMode, NavigationTheme } = useTheme();
    const { colors } = NavigationTheme;

    const routeNameRef = React.useRef<string>();

    return (
        <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
            <NavigationContainer
                theme={NavigationTheme}
                ref={navigationRef}
                onReady={() => {
                    routeNameRef.current =
                        navigationRef.current?.getCurrentRoute()?.name;
                }}
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName =
                        navigationRef.current?.getCurrentRoute()?.name;

                    if (currentRouteName !== previousRouteName) {
                        await analytics().logScreenView({
                            screen_name: currentRouteName,
                            screen_class: currentRouteName,
                        });
                    }

                    routeNameRef.current = currentRouteName;
                }}
            >
                <StatusBar
                    barStyle={darkMode ? 'light-content' : 'dark-content'}
                />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Startup" component={StartupContainer} />
                    <Stack.Screen
                        name="Main"
                        component={MainNavigator}
                        options={{
                            animationEnabled: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default ApplicationNavigator;
