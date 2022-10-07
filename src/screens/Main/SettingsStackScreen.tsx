import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { CommonActions, ParamListBase } from '@react-navigation/routers'
import * as React from 'react'
import { Button, Text } from 'react-native'
import { Layout } from '../../components/Layout'
import { logout } from '../../utils/auth'

const SettingsStack = createNativeStackNavigator()

export const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen
      name="SettingsRootScreen"
      component={SettingsRootScreen}
    />
    <SettingsStack.Screen name="Details" component={DetailsScreen} />
  </SettingsStack.Navigator>
)

const DetailsScreen = () => (
  <Layout>
    <Text>Details screen</Text>
  </Layout>
)

const SettingsRootScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'SettingsRootScreen'>) => (
  <Layout>
    <Text>Settings screen</Text>
    <Button
      title="Logout"
      onPress={() =>
        logout().then(() =>
          navigation.dispatch(
            CommonActions.reset({ index: 0, routes: [{ name: 'Landing' }] }),
          ),
        )
      }
    />
  </Layout>
)
