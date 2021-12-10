import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { ReducerFromReducersMapObject } from 'redux';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList {}
    }
}

export type RootTabParamList = {
    Home: undefined;
    Library: undefined;
    About: undefined;
    Settings: undefined;
};

export type HomeStackParamList = {
    HomePartOne: undefined;
    HomePartTwo: undefined;
    HomePartThree: undefined;
};

export type SettingsStackParamList = {
    SettingsPartOne: undefined;
    SettingsPartTwo: undefined;
    SettingsPartThree: undefined;
};

export type LoginParamList = {
    Login: Record<string, any>;
    SignIn: undefined;
    SignUp: undefined;
};

export type LoginScreenProps = StackScreenProps<LoginParamList>;
export type AboutStackParamList = {
    AboutPartOne: undefined;
    AboutPartTwo: undefined;
    AboutPartThree: undefined;
};
export type HomeStackProps = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, 'Home'>,
    StackScreenProps<HomeStackParamList>
>;

export type SettingsStackProps = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, 'Settings'>,
    StackScreenProps<SettingsStackParamList>
>;

export type AboutStackProps = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, 'About'>,
    StackScreenProps<AboutStackParamList>
>;
