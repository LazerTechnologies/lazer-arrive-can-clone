import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Text } from 'react-native'
import { Layout } from '../../components/Layout'

const TravellersStack = createNativeStackNavigator()

export const TravellersStackScreen = () => (
  <TravellersStack.Navigator>
    <TravellersStack.Screen
      name="TravellersRootScreen"
      component={TravellersScreen}
    />
  </TravellersStack.Navigator>
)

const TravellersScreen = () => (
  <Layout>
    <Text>Travellers screen</Text>
  </Layout>
)
