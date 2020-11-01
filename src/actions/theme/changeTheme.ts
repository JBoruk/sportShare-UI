export const CHANGE_THEME_DARK = 'CHANGE_THEME_DARK';
export const CHANGE_THEME_LIGHT = 'CHANGE_THEME_LIGHT';

export const changeTheme = (theme: 'dark' | 'light') => {
    if (theme === 'dark') {
        return {
            type: CHANGE_THEME_DARK
        }
    } else {
        return {
            type: CHANGE_THEME_LIGHT
        }
    }
}