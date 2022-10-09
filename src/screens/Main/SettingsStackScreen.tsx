import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { CommonActions, ParamListBase } from '@react-navigation/routers'
import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import { logout } from '../../utils/auth'
import tw from '../../utils/tw'
import { headerScreenOptions } from './TravellersStackScreen'

const SettingsStack = createNativeStackNavigator()

export const SettingsStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{ ...headerScreenOptions, headerTitle: 'Settings' }}>
    <SettingsStack.Screen
      name="SettingsRootScreen"
      component={SettingsRootScreen}
    />
  </SettingsStack.Navigator>
)

const SettingsRootScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'SettingsRootScreen'>) => (
  <Layout style={tw`justify-start`}>
    <StatusBar barStyle="light-content" />

    <Button
      variant="text"
      textStyle={tw`text-left font-semibold my-2`}
      onPress={() => {}}>
      Delete account
    </Button>

    <View style={tw`h-[1px] w-full bg-[#ccc]`} />

    <Button
      variant="text"
      textStyle={tw`text-left font-semibold mt-2`}
      onPress={() =>
        logout().then(() => {
          navigation.dispatch(
            CommonActions.reset({ index: 0, routes: [{ name: 'Landing' }] }),
          )
        })
      }>
      Sign out
    </Button>

    <Text style={tw`mt-4`}>v1.0.0 All Rights Reserved 2022</Text>
  </Layout>
)
