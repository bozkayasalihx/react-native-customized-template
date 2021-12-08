import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface WebViewProps {}

const WebViewScreen: React.FC<WebViewProps> = ({}) => {
    return (
        <View>
            <WebView source={{ uri: 'https://reactnative.dev/' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default WebViewScreen;
