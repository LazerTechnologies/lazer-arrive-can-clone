import * as React from 'react'
import { Button, Text } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { Layout } from '../../components/Layout'
import { ParamListBase } from '@react-navigation/routers'

const HomeStack = createNativeStackNavigator()

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeRootScreen" component={HomeRootScreen} />
  </HomeStack.Navigator>
)

const HomeRootScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'HomeRootScreen'>) => (
  <Layout>
    <Text>Home screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('HomeRootScreen')}
    />
  </Layout>
)
