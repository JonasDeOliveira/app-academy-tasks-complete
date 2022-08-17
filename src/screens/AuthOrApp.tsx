import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Props from '../interfaces/props/AuthOrApp'
import State from '../interfaces/states/AuthOrApp'
import UserResponse from '../interfaces/response/User'

class AuthOrApp extends Component<Props, State> {

    componentDidMount = async (): Promise<void> => {
        let userDataJson: any;
        let userData: UserResponse;
        userDataJson = await AsyncStorage.getItem('userData');


        // try {
            userData = JSON.parse(userDataJson)
        // } catch (e) {
        //     // userData está inválido
        // }

        if (userData && userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            // this.props.navigation.navigate('Home', userData)
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Home',
                            params: userData,
                        },
                    ],
                })
            );
        } else {
            // this.props.navigation.navigate('Auth')
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Auth',
                        },
                    ],
                })
            )
        }
    }

    render(): React.ReactElement {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})

export default AuthOrApp