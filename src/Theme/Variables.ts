import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import Layout from './Layout';
import Fonts from './Fonts';
import Common from './Common';
export type StyleType = TextStyle & ViewStyle & ImageStyle;

export type ThemeFonts = { [P in keyof ReturnType<typeof Fonts>]: TextStyle };
export type ThemeLayout = { [P in keyof ReturnType<typeof Layout>]: StyleType };
export type ThemeGutters = { [P: string]: StyleType };
// export type ThemeCommon = {
//   [P in keyof typeof Common]: ReturnType<typeof Common>
// }
export type ThemeCommon = ReturnType<typeof Common>;
export type ThemeImages = { [key: string]: any };

export const Colors = {
    transparent: 'rgba(0,0,0,0)',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    text: '#212529',
    primary: '#E14032',
    success: '#28a745',
    error: '#dc3545',
};
export type ThemeColors = { [P in keyof typeof Colors]: StyleType & string };

export const NavigationColors: Partial<ThemeNavigationColors> = {
    primary: Colors.primary,
};
export type ThemeNavigationColors = {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
};
export type ThemeNavigationTheme = {
    dark: boolean;
    colors: ThemeNavigationColors;
};
export type ThemeVariables = {
    Colors: ThemeColors;
    NavigationColors: ThemeNavigationColors;
    FontSize: ThemeFontSize;
    MetricsSizes: ThemeMetricsSizes;
};

export const FontSize = {
    small: 16,
    regular: 20,
    large: 40,
};

export type ThemeFontSize = { [P in keyof typeof FontSize]: number };

const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
    tiny,
    small,
    regular,
    large,
};

export type ThemeMetricsSizes = { [P in keyof typeof MetricsSizes]: number };
export type Theme = {
    Colors: ThemeColors;
    NavigationColors: ThemeNavigationColors;
    FontSize: ThemeFontSize;
    MetricsSizes: ThemeMetricsSizes;
    Fonts: ThemeFonts;
    Images: ThemeImages;
    Layout: ThemeLayout;
    Gutters: ThemeGutters;
    Common: ThemeCommon;
    Variables?: Partial<ThemeVariables>;
};
export interface ThemeCommonParams {
    Colors: ThemeColors;
    NavigationColors: ThemeNavigationColors;
    FontSize: ThemeFontSize;
    MetricsSizes: ThemeMetricsSizes;
    Fonts: ThemeFonts;
    Images: ThemeImages;
    Layout: ThemeLayout;
    Gutters: ThemeGutters;
    Variables?: Partial<ThemeVariables>;
}

export default {
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
};
