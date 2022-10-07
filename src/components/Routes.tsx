import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import { LandingScreen } from '../screens/Landing'
import { LoginScreen } from '../screens/Login'
import { CreateAccountEmailScreen } from '../screens/CreateAccountEmail'
import { CreateAccountPasswordScreen } from '../screens/CreateAccountPassword'
import { CreateAccountVerifyScreen } from '../screens/CreateAccountVerify'
import { MainScreen } from '../screens/Main'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="CreateAccountEmail"
        component={CreateAccountEmailScreen}
      />
      <Stack.Screen
        name="CreateAccountPassword"
        component={CreateAccountPasswordScreen}
      />
      <Stack.Screen
        name="CreateAccountVerify"
        component={CreateAccountVerifyScreen}
      />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes