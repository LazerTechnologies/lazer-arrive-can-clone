import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import tw from '../../utils/tw'

const TravellersStack = createNativeStackNavigator()

export const headerScreenOptions = {
  headerBackground: () => <View style={tw`bg-background w-full h-full`} />,
  headerShown: true,
  headerTitleStyle: tw`text-white`,
  headerBackTitle: '',
}

export const TravellersStackScreen = () => (
  <TravellersStack.Navigator
    screenOptions={{ ...headerScreenOptions, headerTitle: 'Saved Travellers' }}>
    <TravellersStack.Screen
      name="TravellersRootScreen"
      component={TravellersHomeScreen}
    />
  </TravellersStack.Navigator>
)

const TravellersHomeScreen = ({ navigation }: any) => {
  return (
    <Layout>
      <StatusBar barStyle="light-content" />
      <Text style={tw`mb-4 text-center text-2xl font-semibold`}>
        Add a Traveller
      </Text>
      <Button onPress={() => navigation.navigate('TravellersAdd')}>
        Start
      </Button>
    </Layout>
  )
}
