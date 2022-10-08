import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Form, getInitialStateFromInputs, IInput } from '../../components/Form'
import { Layout } from '../../components/Layout'
import { createTraveller } from '../../utils/firestore'
import tw from '../../utils/tw'

const TravellersStack = createNativeStackNavigator()

export const TravellersStackScreen = () => (
  <TravellersStack.Navigator
    screenOptions={{
      headerBackground: () => <View style={tw`bg-background w-full h-full`} />,
      headerTitleStyle: tw`text-white`,
      headerTitleAlign: 'left',
      headerTitle: 'Saved Travellers',
      headerBackTitle: '',
    }}>
    <TravellersStack.Screen
      name="TravellersRootScreen"
      component={TravellersHomeScreen}
    />
    <TravellersStack.Screen
      name="TravellersAddScreen"
      component={TravellersScreen}
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
      <Button onPress={() => navigation.navigate('TravellersAddScreen')}>
        Start
      </Button>
    </Layout>
  )
}

const TravellersScreen = () => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    createTraveller(state)
  }
  return (
    <Layout>
      <StatusBar barStyle="light-content" />
      <Form
        onSubmit={onSubmit}
        inputs={INPUTS}
        state={state}
        setState={setState}
      />
      <Button onPress={onSubmit}>Submit</Button>
    </Layout>
  )
}
const INPUTS: IInput[] = [
  {
    source: 'documentType',
    placeholder: 'Document Type',
  },
  {
    source: 'country',
    placeholder: 'country of issue',
  },
  {
    source: 'documentNumber',
    placeholder: 'document number',
  },
  {
    source: 'surname',
    placeholder: 'surname',
  },
  {
    source: 'givenNames',
    placeholder: 'given names',
  },
  {
    source: 'dateOfBirth',
    placeholder: 'DOB',
  },
]
