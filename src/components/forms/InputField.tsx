import React, { useEffect, useRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Keyboard, StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { IconProps } from '../../models/IconProps';

interface OwnProps {
    control: Control<Record<string, any>>;
    name: string;
    label: string;
    style?: StyleProp<TextStyle>;
    placeholderTextColor?: string;
    icon?: IconProps;
    placeholder?: string;
    isDisabled?: boolean;
    isSecure?: boolean;
    defaultValue?: string;
}

const InputField: React.FC<OwnProps> = ({
    control,
    name,
    label,
    icon,
    style,
    placeholderTextColor,
    placeholder,
    isDisabled,
    isSecure,
    defaultValue = ''
}) => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", keyboardDidHide);
    
        return () => {
          Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
        };
    }, []);
    
    const keyboardDidHide = () => {
        if (inputRef.current) {
            //@ts-ignore
            inputRef.current.blur();
        }
    }

    return (
        <>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        ref={inputRef}
                        mode='outlined'
                        label={label}
                        placeholder={placeholder}
                        disabled={isDisabled ? true : false}
                        onBlur={onBlur}
                        left={(icon && icon.side === 'left') ? <TextInput.Icon name={icon.name} color={icon.color ? icon.color : undefined} /> : null}
                        right={(icon && icon.side === 'right') ? <TextInput.Icon name={icon.name} color={icon.color ? icon.color : undefined} /> : null}
                        autoCorrect={false}
                        secureTextEntry={isSecure ? true : false}
                        onChangeText={value => onChange(value)}
                        value={value}
                        style={style ? style : styles.input}
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : undefined}
                    />
                )}
                name={name}
                defaultValue={defaultValue}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%'
    }
})

export default InputField;