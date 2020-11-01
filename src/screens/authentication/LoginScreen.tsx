import { useNavigation } from '@react-navigation/native';
import { auth } from 'firebase';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import InputField from '../../components/forms/InputField';

const LoginScreen: React.FC = () => {
    const { control, handleSubmit, errors, register } = useForm();
    const navigation = useNavigation();

    const onSubmit = (data: any) => {
        auth().signInWithEmailAndPassword(data.login, data.password)
            .catch(() => {
                alert('Login failed')
            })
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
                <Button icon="login" mode='contained' style={styles.submitButton} onPress={handleSubmit(onSubmit)} >
                    Login
                </Button>
                <Text style={styles.signUpText} onPress={() => navigation.navigate('forgotPassword')}>
                    I forgot my password
                </Text>
                <Text style={styles.signUpText} onPress={() => navigation.navigate('signUp')}>
                    Don't have an account? Sign up!
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
    },
    input: {
        width: '80%'
    },
    submitButton: {
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    signUpText: {
        textDecorationLine: 'underline',
        marginTop: 10
    }
})

export default LoginScreen;