import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { auth } from 'firebase';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Avatar,
    Caption,
    Drawer,
    Switch, Text, Title,
    TouchableRipple
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../actions/authorization/signOut';
import { changeTheme } from '../../actions/theme/changeTheme';
import { RootState } from '../../reducers/rootReducer';

const MainDrawerContent: React.FC<DrawerContentComponentProps> = ( props ) => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const isAuthorized = useSelector((state: RootState) => state.authorization.isAuthorized);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(isDarkTheme ? changeTheme('light') : changeTheme('dark'));
    }

    const signUserOut = () => {
        auth().signOut()
            .then(() => {
                console.log('GOOD')
                dispatch(signOut());
                console.log('PO')
            })
            .catch(() => {
                alert('Signout failed')
            })
        
    }

    const AuthorizedOptionsSection = (
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Home"
                onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="account-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Profile"
                onPress={() => { props.navigation.navigate('Profile') }}
            />
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="settings-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Settings"
                onPress={() => { props.navigation.navigate('Settings') }}
            />
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="account-check-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Support"
                onPress={() => { props.navigation.navigate('Support') }}
            />
        </Drawer.Section>
    )

    const UnauthorizedOptionsSection = (
        <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Home"
                onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="login"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign in"
                onPress={() => { props.navigation.navigate('Authorization') }}
            />
            <DrawerItem 
                icon={({color, size}: any) => (
                    <Icon
                        name="settings-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Settings"
                onPress={() => { props.navigation.navigate('Settings') }}
            />
        </Drawer.Section>
    )

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {isAuthorized && (
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image 
                                    source={{
                                        uri: 'https://avatarfiles.alphacoders.com/633/thumb-1920-63329.png'
                                    }}
                                    size={50}
                                />
                                <View style={{marginLeft: 15}}>
                                    <Title style={styles.title}>
                                        Name Surname
                                    </Title>
                                    <Caption style={styles.caption}>
                                        @loginorsth
                                    </Caption>
                                </View>
                            </View>
                        </View>
                    )}

                    {isAuthorized ? (
                        <>
                            {AuthorizedOptionsSection}
                        </>
                    ) : (
                        <>
                            {UnauthorizedOptionsSection}
                        </>
                    )}

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            {isAuthorized && (
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}: any) => (
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign out"
                        onPress={() => { signUserOut() }}
                    />
                </Drawer.Section>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});

export default MainDrawerContent;