import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import tw from '../../utils/tw'

const ResourcesStack = createNativeStackNavigator()

export const ResourcesStackScreen = () => (
  <ResourcesStack.Navigator
    screenOptions={{
      headerBackground: () => <View style={tw`bg-background w-full h-full`} />,
      headerTitleStyle: tw`text-white`,
      headerTitleAlign: 'left',
      headerTitle: 'Resources',
    }}>
    <ResourcesStack.Screen
      name="ResourcesRootScreen"
      component={ResourcesScreen}
    />
  </ResourcesStack.Navigator>
)

const ResourcesScreen = () => (
  <Layout style={tw`justify-start pt-3`}>
    <StatusBar barStyle="light-content" />

    <Text style={tw`text-lg font-semibold mb-3`}>Information Links</Text>
    <Link>Use ArriveCAN to enter Canada</Link>
    <Link>Get help with ArriveCAN</Link>
    <Link>ArriveCAN accessibility notice</Link>
    <Link>Contact us about ArriveCAN</Link>
    <Link>ArriveCAN web</Link>

    <Text style={tw`text-lg font-semibold mt-6 mb-3`}>Travel Preparation</Text>

    <Link>Plan your trip across the border</Link>
    <Link>Travelling with disabilities</Link>
    <Link>Returning to Canada</Link>
    <Link>Canada Border Services Agency</Link>
    <Link>Border wait times (US to Canada)</Link>

    <View style={tw`h-[1px] w-full bg-[#ccc] my-4`} />
    <Text style={tw`mt-2 mb-2`}>Legal</Text>
    <Link>Privacy Notice - Advanced CBSA Declaration</Link>
    <Link>Privacy Notice - Saved traveller</Link>
  </Layout>
)

const Link = ({ children }: { children: React.ReactNode }) => (
  <Text onPress={() => {}} style={tw`text-primary underline mb-4`}>
    {children}
  </Text>
)
