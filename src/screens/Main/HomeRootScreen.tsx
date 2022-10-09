import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { Layout } from '../../components/Layout'
import { ParamListBase } from '@react-navigation/routers'
import tw from '../../utils/tw'
import { Button } from '../../components/Button'
import { headerScreenOptions } from './TravellersStackScreen'

const HomeStack = createNativeStackNavigator()

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{ ...headerScreenOptions, headerTitle: 'Home' }}>
    <HomeStack.Screen name="HomeRootScreen" component={HomeRootScreen} />
  </HomeStack.Navigator>
)

// paginated form that collects the following info
// arrival airport
// date of arrival
// phone number
// language: en/fr
//
const HomeRootScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'HomeRootScreen'>) => (
  <Layout>
    <StatusBar barStyle="light-content" />
    <Text style={tw`mb-4 text-center text-2xl font-semibold`}>
      Start your advance CBSA Declaration
    </Text>
    <Button onPress={() => navigation.navigate('CBSAConsent')}>Start</Button>
  </Layout>
)
