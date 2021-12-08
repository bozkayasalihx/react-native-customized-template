import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Home: NavigatorScreenParams<RootTabParamList> | undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, Screen>;

export type TabParamList = {
    Home: undefined;
    Settings: undefined;
    About: undefined;
};

export type RootTabParamList = {};

export type HomeStackParamList = {
    Slides: undefined;
    Categories: { title: string };
    Login: undefined;
};

export type AboutStackParamList = {
    Animation: undefined;
    WebView: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        StackScreenProps<RootStackParamList>
    >;
