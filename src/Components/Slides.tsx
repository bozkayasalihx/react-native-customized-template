import { useTheme } from '@/Hooks';
import { HomeStackProps } from '@/types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Slices: React.FC<HomeStackProps> = ({ navigation, route }) => {
    const { Layout, Gutters } = useTheme();
    return (
        <View>
            <Text>Slides</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
                style={[Layout.center, Gutters.smallBottomMargin]}
            >
                <Text> click me </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Slices;
