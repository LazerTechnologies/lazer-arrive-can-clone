import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ResourcesStackScreen } from './ResourcesStackScreen'
import { TravellersStackScreen } from './TravellersStackScreen'
import { SettingsStackScreen } from './SettingsStackScreen'
import { HomeStackScreen } from './HomeRootScreen'
import IonIcons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator()

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: '#4784AB' }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Travellers"
        component={TravellersStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="person-add-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IonIcons name="ios-bookmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="gear" size={size + 5} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
