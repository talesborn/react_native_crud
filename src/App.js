import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import {Button, Icon} from "react-native-elements";
import {UsersProvider} from "./context/UserContext";

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                    <Stack.Screen name={'UserList'} component={UserList} options={userListOptions}/>
                    <Stack.Screen name={'UserForm'} component={UserForm} options={userFormOptions}/>
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle:{
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

const userListOptions = ({navigation}) => {
    return {
        title: 'Lista de Usuários',
        headerRight: () => (
            <Button onPress={() => navigation.navigate('UserForm')}
                    type={'clear'} icon={<Icon name="add" size={25} color="white"/>}/>
        )
    }
}

const userFormOptions = {
    title: 'Formulário de Usuários'
}
