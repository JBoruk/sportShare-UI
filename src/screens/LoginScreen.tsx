import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import InputField from '../components/forms/InputField';

const LoginScreen: React.FC = () => {
    const { control, handleSubmit, errors, register } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.view}>
                <InputField
                    control={control}
                    name='login'
                    label='Login'
                    placeholder='Type login'
                    icon={{
                        name: 'account',
                        side: 'left'
                    }}
                    style={styles.input}
                    placeholderTextColor='white'
                />
                <InputField
                    control={control}
                    name="password"
                    isSecure
                    label='Password'
                    placeholder='Type password'
                    icon={{
                        name: 'lock',
                        side: 'left'
                    }}
                    style={styles.input}
                />
                <Button icon="login" mode='contained' style={styles.submitButton} >
                    Login
                </Button>
                <Button icon="login" mode='contained' style={styles.submitButton} >
                    Login with FB
                </Button>
                <Button icon="login" mode='contained' style={styles.submitButton} >
                    Login with Instagram
                </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#36467D'
    },
    input: {
        width: '80%'
    },
    submitButton: {
        marginTop: '10px'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})

export default LoginScreen;