import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import { useUser } from '../../utils/auth'
import { getTravellers, removeTraveller } from '../../utils/firestore'
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
  const user = useUser()
  const [travellers, setTravellers] = React.useState<any[] | null>(null)
  const [forceUpdate, setForceUpdate] = React.useState<any>(Date.now())
  React.useEffect(() => {
    if (user)
      getTravellers(user.uid).then(r => {
        let arr: any[] = []
        r.forEach(d => arr.push({ uid: d.id, ...d.data() }))
        setTravellers(arr)
      })
  }, [user, forceUpdate])
  return (
    <Layout style={travellers?.length ? tw`justify-start pt-4` : tw``}>
      <StatusBar barStyle="light-content" />
      {travellers && (
        <>
          {travellers.length > 0 ? (
            <>
              <Text style={tw`mb-4`}>
                You can add or update your list of travellers here for use in
                your next submission or later.
              </Text>
              <Text style={tw`mb-4`}>
                Start a new Advance Declaration form using the "Start" button.
              </Text>
              <Button onPress={() => navigation.navigate('TravellersAdd')}>
                Add Traveller
              </Button>
              {travellers.map((traveller, i) => (
                <View
                  key={i}
                  style={tw`shadow border border-[#ccc] rounded mt-4 bg-white p-3`}>
                  <Text style={tw`font-bold`}>
                    {traveller.givenNames} {traveller.surname}
                  </Text>
                  <Text>Issuing country: {traveller.country}</Text>
                  <Text>1991-05-25</Text>
                  <View style={tw`flex-row mt-3`}>
                    <Button style={tw`flex-1 mr-3`}>Edit</Button>
                    <Button
                      onPress={() => {
                        removeTraveller(traveller.uid)
                        setForceUpdate(Date.now())
                      }}
                      style={tw`flex-1`}>
                      Delete
                    </Button>
                  </View>
                </View>
              ))}

              <Text style={tw`my-4 font-semibold text-center`}>
                Get started on your forms to enter Canada
              </Text>
              <Button onPress={() => navigation.navigate('CBSAConsent')}>
                Start
              </Button>
            </>
          ) : (
            <>
              <Text style={tw`mb-4 text-center text-2xl font-semibold`}>
                You have no saved travellers on this account
              </Text>
              <Text style={tw`mb-4 text-center`}>
                Add your travel documents for faster checkout on future trips.
                You can edit, delete and add additional travellers at any time.
              </Text>
              <Button onPress={() => navigation.navigate('TravellersAdd')}>
                Add Traveller
              </Button>
            </>
          )}
        </>
      )}
    </Layout>
  )
}
