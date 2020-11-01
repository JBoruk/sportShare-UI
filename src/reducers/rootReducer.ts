import { combineReducers } from "redux";
import authorization, { AuthorizationState } from "./authorizationReducer";
import theme, { ThemeState } from "./themeReducer";

export interface RootState {
    theme: ThemeState;
    authorization: AuthorizationState
}

const rootReducer = combineReducers({
    theme,
    authorization
});

export default rootReducer;