import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ResourcesStackScreen } from './ResourcesStackScreen'
import { TravellersStackScreen } from './TravellersStackScreen'
import { SettingsStackScreen } from './SettingsStackScreen'
import { HomeStackScreen } from './HomeRootScreen'

const Tab = createBottomTabNavigator()

export const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Travellers" component={TravellersStackScreen} />
      <Tab.Screen name="Resources" component={ResourcesStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  )
}
