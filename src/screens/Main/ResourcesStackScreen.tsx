import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Text } from 'react-native'
import { Layout } from '../../components/Layout'

const ResourcesStack = createNativeStackNavigator()

export const ResourcesStackScreen = () => (
  <ResourcesStack.Navigator screenOptions={{ headerShown: false }}>
    <ResourcesStack.Screen
      name="ResourcesRootScreen"
      component={ResourcesScreen}
    />
  </ResourcesStack.Navigator>
)

const ResourcesScreen = () => (
  <Layout>
    <Text>Resources screen</Text>
  </Layout>
)
