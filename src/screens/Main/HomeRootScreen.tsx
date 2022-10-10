import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/routers'
import tw from '../../utils/tw'
import { Button } from '../../components/Button'
import { headerScreenOptions } from './TravellersStackScreen'
import { Paper } from '../../components/Paper'
import { InfoView } from '../../components/InfoView'

const HomeStack = createNativeStackNavigator()

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      ...headerScreenOptions,
      headerShown: false,
      headerTitle: '',
    }}>
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
  <View>
    <StatusBar barStyle="light-content" />
    <View
      style={tw`absolute left-0 right-0 top-0 h-50 rounded-b-3xl bg-primary`}
    />
    <View style={tw`px-4`}>
      <Text style={tw`text-white font-semibold my-3`}>
        Advance CBSA Declaration
      </Text>
      <InfoView style={tw`mb-2`}>
        <Text>
          Help save time at the kiosk/eGate by submitting your declaration in
          advance.
        </Text>
      </InfoView>
      <Paper>
        <View style={tw`px-4 py-8`}>
          <Text style={tw`mb-5 text-center text-xl leading-1.25 font-semibold`}>
            Start your advance CBSA Declaration
          </Text>
          <Button onPress={() => navigation.navigate('CBSAConsent')}>
            Start
          </Button>
        </View>
      </Paper>
    </View>
  </View>
)
