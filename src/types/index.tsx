import { StackScreenProps } from '@react-navigation/stack';

export type TabParamList = {
    Home: undefined;
    Settings: undefined;
    About: undefined;
};

export type HomeStackParamList = {
    Slides: undefined;
    Categories: { title: string };
    Login: undefined;
};

export type AboutStackParamList = {
    UserInfo: undefined;
    AdminInfo: undefined;
};

export type Props = StackScreenProps<HomeStackParamList, 'Slides'>;
