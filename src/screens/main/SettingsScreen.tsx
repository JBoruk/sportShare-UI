import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

const SettingsScreen: React.FC = () => {
    const { colors } = useSelector((state: RootState) => state.theme.theme);

    return (
        <View style={{backgroundColor: colors.background, height: '100%'}}>
            <Text style={{color: colors.text}}>
                SettingsScreen
            </Text>
        </View>
    )
}

export default SettingsScreen;