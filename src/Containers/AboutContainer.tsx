import WebViewScreen from '@/Screens/WebView';
import { AboutScreenProp, AboutStackParamList } from '@/types';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
} from 'react-native-reanimated';

interface AboutContainerProps {}
const AboutStack = createStackNavigator<AboutStackParamList>();

const SIZE = 100.0;
const AboutContainer: React.FC<AboutContainerProps> = ({}) => {
    const progress = useSharedValue(1);
    const scale = useSharedValue(1);

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [{ scale: scale.value }],
            borderRadius: (progress.value * SIZE) / 2,
        };
    }, []);
    console.log('value', progress.value);
    console.log('scale', scale.value);

    useEffect(() => {
        progress.value = withSpring(0.5);
        scale.value = withRepeat(withSpring(2), 10, true);

        return () => {
            progress.value = 1;
            scale.value = 1;
        };
    }, []);

    return (
        <AboutStack.Navigator initialRouteName="Animation">
            <AboutStack.Screen name="Animation" component={Animation} />
            <AboutStack.Screen name="WebView" component={WebViewScreen} />
        </AboutStack.Navigator>
    );
};

const Animation: FC<AboutScreenProp> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.navigate('WebView');
                }}
            >
                <Animated.View style={styles.animated} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    animated: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'red',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default AboutContainer;
