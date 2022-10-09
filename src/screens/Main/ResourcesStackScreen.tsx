import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Linking, StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import tw from '../../utils/tw'
import { headerScreenOptions } from './TravellersStackScreen'

const ResourcesStack = createNativeStackNavigator()

export const ResourcesStackScreen = () => (
  <ResourcesStack.Navigator
    screenOptions={{ ...headerScreenOptions, headerTitle: 'Resources' }}>
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
    <Link href="https://www.cbsa-asfc.gc.ca/services/border-tech-frontiere/declare-before-avant-eng.html">
      Use ArriveCAN to enter Canada
    </Link>
    <Link href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan/help.html">
      Get help with ArriveCAN
    </Link>
    <Link href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html#accessibility-notice">
      ArriveCAN accessibility notice
    </Link>
    <Link href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan/contact-us.html">
      Contact us about ArriveCAN
    </Link>
    <Link href="https://arrivecan.cbsa-asfc.cloud-nuage.canada.ca/en/home/getstarted">
      ArriveCAN web
    </Link>

    <Text style={tw`text-lg font-semibold mt-6 mb-3`}>Travel Preparation</Text>

    <Link href="https://www.cbsa-asfc.gc.ca/travel-voyage/gbi-rgf-eng.html">
      Plan your trip across the border
    </Link>
    <Link href="https://travel.gc.ca/travelling/health-safety/disabilities">
      Travelling with disabilities
    </Link>
    <Link href="https://cbsa-asfc.gc.ca/travel-voyage/ifcrc-rpcrc-eng.html">
      Returning to Canada
    </Link>
    <Link href="https://www.cbsa-asfc.gc.ca/menu-eng.html">
      Canada Border Services Agency
    </Link>
    <Link href="https://www.cbsa-asfc.gc.ca/bwt-taf/menu-eng.html#s1">
      Border wait times (US to Canada)
    </Link>

    <View style={tw`h-[1px] w-full bg-[#ccc] my-4`} />
    <Text style={tw`mt-2 mb-2`}>Legal</Text>
    <Link href="/en/edeclaration/privacy-settings">
      Privacy Notice - Advanced CBSA Declaration
    </Link>
    <Link href="/en/privacy-notice">Privacy Notice - Saved traveller</Link>
  </Layout>
)

const Link = ({
  children,
  href,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Text
    onPress={() => Linking.openURL(href)}
    style={tw`text-primary underline mb-4`}>
    {children}
  </Text>
)
