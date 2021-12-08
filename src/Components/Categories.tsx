import { useTheme } from '@/Hooks';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
    const { Colors, Common } = useTheme();

    const navigation = useNavigation();
    return (
        <View>
            <Text>Categories</Text>
            <Pressable
                onPress={() => {
                    if (navigation.canGoBack()) {
                        // navigation.goBack()
                        navigation.navigate('Root');
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
