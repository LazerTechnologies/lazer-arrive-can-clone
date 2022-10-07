import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Button } from 'react-native'
import { Form, getInitialStateFromInputs, IInput } from '../../components/Form'
import { Layout } from '../../components/Layout'
import { createTraveller } from '../../utils/firestore'

const TravellersStack = createNativeStackNavigator()

export const TravellersStackScreen = () => (
  <TravellersStack.Navigator screenOptions={{ headerShown: false }}>
    <TravellersStack.Screen
      name="TravellersRootScreen"
      component={TravellersScreen}
    />
  </TravellersStack.Navigator>
)

const TravellersScreen = () => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    createTraveller(state)
  }
  return (
    <Layout>
      <Form inputs={INPUTS} state={state} setState={setState} />
      <Button title="Submit" onPress={onSubmit} />
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
