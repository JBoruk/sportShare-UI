import React from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { requireNativeComponent } from 'react-native';

const FBLoginButton: React.FC = () => {
    return (
        <View>
            <LoginButton
                permissions={["email"]}
                onLoginFinished={
                    (error, result) => {
                    if (error) {
                        alert("Login failed");
                        console.log(error)
                    } else if (result.isCancelled) {
                        alert("Login was cancelled");
                    } else {
                        alert("Login was successful with permissions: " + result.grantedPermissions)
                    }
                    }
                }
                onLogoutFinished={() => alert("User logged out")}/>
        </View>
    )
}

export default FBLoginButton;