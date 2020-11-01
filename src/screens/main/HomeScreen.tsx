import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

const HomeScreen: React.FC = () => {
    const { colors } = useSelector((state: RootState) => state.theme.theme);

    return (
        <View style={{backgroundColor: colors.background, height: '100%'}}>
            <Text style={{color: colors.text}}>
                HomeScreen
            </Text>
        </View>
    )
}

export default HomeScreen;