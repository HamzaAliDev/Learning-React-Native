import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Frontend/Home';
import Profile from '../screens/Frontend/Profile';
import Notification from '../screens/Frontend/Notification';
import CreatePost from '../screens/Frontend/CreatePost';
import Friends from '../screens/Frontend/Friends';

const Tab = createBottomTabNavigator();
export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Friends" component={Friends} />
                <Tab.Screen name="Post" component={CreatePost} />
                <Tab.Screen name="Notification" component={Notification} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
