import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../app/screens/HomeScreen';
import ResourceScreen from '../app/screens/ResourceScreen';
import CommunityScreen from '../app/screens/CommunityScreen';
import BookmarkScreen from '../app/screens/BookmarkScreen';
import AccountScreen from '../app/screens/AccountScreen';
import { Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarBackgroundColor: '#b8baba',
            tabBarInactiveTintColor:'#fff',
            tabBarActiveTintColor: 'blue'
        }}>
            <Tab.Screen name="Home2" component={HomeScreen} options={{
                tabBarIcon: ({focused, color})=>{
                    return (
                    <Ionicons name="home" size={30} color={focused ? "#238396":"gray"} />
                    )

                }
            }} />
            <Tab.Screen name="Resource" component={ResourceScreen} options={{
                tabBarIcon: ({focused})=>{
                    return (
                    <FontAwesome5 name="book-open" size={30} color={focused ? "#238396":"gray"} />
                    )

                }
            }} />
            <Tab.Screen name="Community" component={CommunityScreen} options={{
                tabBarIcon: ({focused, color})=>{
                    return (
                    <MaterialCommunityIcons name="comment-question-outline" size={30} color={focused ? "#238396":"gray"} />
                    )

                }
            }} />
            <Tab.Screen name="Bookmarks" component={BookmarkScreen} options={{
                tabBarIcon: ({focused, color})=>{
                    return (
                    <Entypo name="bookmarks" size={30} color={focused ? "#238396":"gray"} />
                    )

                }
            }} />
            <Tab.Screen name="My Account" component={AccountScreen} options={{
                tabBarIcon: ({focused, color})=> (
                    <MaterialCommunityIcons name="account" size={30} color={focused ? "#238396":"gray"} />

                )
            }} />
            
        </Tab.Navigator>
    );
}

export default Tabs;