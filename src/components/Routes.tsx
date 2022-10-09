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
import { TravellersAddScreen } from '../screens/TravellersAddScreen'
import { TravellersFormScreen } from '../screens/TravellersFormScreen'
import { headerScreenOptions } from '../screens/Main/TravellersStackScreen'
import { CBSAStep, STEPS } from '../screens/CBSAStep'
import { CBSAConsent } from '../screens/CBSAConsent'
import { CBSAConfirm } from '../screens/CBSAConfirm'
import { CBSAAcknowledge } from '../screens/CBSAAcknowledge'
import { TravellersInfoScreen } from '../screens/TravellersInfo'
import { PostOnboardingInfoScreen } from '../screens/PostOnboardingInfo'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerTintColor: '#fff' }}>
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
      <Stack.Screen
        name="TravellersAdd"
        component={TravellersAddScreen}
        options={{ ...headerScreenOptions, headerTitle: 'Travel document' }}
      />
      <Stack.Screen
        name="TravellersForm"
        component={TravellersFormScreen}
        options={{ ...headerScreenOptions, headerTitle: 'Document details' }}
      />
      <Stack.Screen
        name="CBSAConsent"
        component={CBSAConsent}
        options={{ ...headerScreenOptions, headerTitle: '' }}
      />
      <Stack.Screen
        name="CBSAConfirm"
        component={CBSAConfirm}
        options={{
          ...headerScreenOptions,
          headerTitle: 'Advance CBSA Declaration',
        }}
      />
      <Stack.Screen
        name="CBSAAcknowledge"
        component={CBSAAcknowledge}
        options={{
          ...headerScreenOptions,
          headerTitle: 'Send your declaration to the CBSA',
        }}
      />
      <Stack.Screen
        name="TravellersInfo"
        component={TravellersInfoScreen}
        options={{ ...headerScreenOptions, headerTitle: '' }}
      />
      <Stack.Screen
        name="PostOnboardingInfo"
        component={PostOnboardingInfoScreen}
        options={{ headerTitle: '' }}
      />
      {STEPS.map((step, index) => (
        <Stack.Screen
          key={index}
          // @ts-ignore
          name={`CBSAStep${index + 1}`}
          component={CBSAStep}
          options={{ ...headerScreenOptions, headerTitle: step.title }}
          initialParams={{
            // @ts-ignore
            inputs: step.inputs,
            infos: step.infos,
            index: index + 1,
            heading: step.heading,
            description: step.description,
          }}
        />
      ))}
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
