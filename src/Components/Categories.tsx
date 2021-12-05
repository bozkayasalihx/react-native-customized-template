import { useTheme } from '@/Hooks';
import { Props } from '@/types';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface CategoriesProps {}

const Categories: React.FC<Props> = ({ navigation }) => {
    const { Colors, Common } = useTheme();
    return (
        <View>
            <Text>Categories</Text>
            <Pressable
                onPress={() => {
                    if (navigation.canGoBack()) {
                        // navigation.goBack()
                        navigation.navigate('Login');
                    }
                }}
                style={[Common.button.outline]}
            >
                <Text> go back</Text>
            </Pressable>
        </View>
    );
};

export default Categories;
