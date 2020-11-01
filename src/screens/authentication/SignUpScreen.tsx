import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpScreen: React.FC = () => {
    return (
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.view}>
            <Text>
                Sign up screen
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#36467D'
    }
})

export default SignUpScreen;