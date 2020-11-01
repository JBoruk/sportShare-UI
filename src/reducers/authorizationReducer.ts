import { SIGN_IN } from '../actions/authorization/signIn';
import { SIGN_OUT } from '../actions/authorization/signOut';

export interface AuthorizationState {
    isAuthorized: boolean;
    email: string;
    displayName: string;
    photoURL: string;
    uid: string;
    refreshToken: string;
}

const initialState: AuthorizationState = {
    isAuthorized: false,
    email: '',
    displayName: '',
    photoURL: '',
    uid: '',
    refreshToken: ''
}

const authorizationReducer = (
    state: AuthorizationState = initialState,
    action: any
): AuthorizationState => {
    switch (action.type) {
        case SIGN_IN:
            let { providerData, refreshToken } = action.payload;

            return {
                ...state,
                isAuthorized: true,
                email: providerData.email,
                displayName: providerData.displayName,
                photoURL: providerData.photoURL,
                uid: providerData.uid,
                refreshToken: refreshToken
            };
        case SIGN_OUT:
            console.log(state)
            console.log(initialState)
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export default authorizationReducer;