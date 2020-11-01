import { Theme } from 'react-native-paper/lib/typescript/src/types';
import { DefaultTheme, DarkTheme } from 'react-native-paper';
import { CHANGE_THEME_DARK, CHANGE_THEME_LIGHT } from '../actions/theme/changeTheme';

export interface ThemeState {
    isDarkTheme: boolean;
    theme: Theme;
}

const initialState: ThemeState = {
    isDarkTheme: false,
    theme: DefaultTheme
}

const themeReducer = (
    state: ThemeState = initialState,
    action: any
): ThemeState => {
    switch (action.type) {
        case CHANGE_THEME_DARK:
            return {
                ...state,
                isDarkTheme: true,
                theme: DarkTheme
            };
        case CHANGE_THEME_LIGHT:
            return {
                ...state,
                isDarkTheme: false,
                theme: DefaultTheme
            }
        default:
            return state;
    }
}

export default themeReducer;