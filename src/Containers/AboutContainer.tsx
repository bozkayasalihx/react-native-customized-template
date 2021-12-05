import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withSpring,
    withRepeat,
} from 'react-native-reanimated';

interface AboutContainerProps {}
// const AboutStack = createStackNavigator<AboutStackParamList>();

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
        <View style={styles.container}>
            <Animated.View style={[styles.animated, reanimatedStyle]} />
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
