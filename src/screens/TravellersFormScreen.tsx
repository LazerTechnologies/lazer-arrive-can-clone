import { CommonActions, TabActions } from '@react-navigation/routers'
import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { ProgressFooter } from '../components/ProgressFooter'
import { useUser } from '../utils/auth'
import { createTraveller } from '../utils/firestore'
import tw from '../utils/tw'

export const TravellersFormScreen = ({ navigation, route }: any) => {
  const user = useUser()
  const [state, setState] = React.useState({
    ...getInitialStateFromInputs(INPUTS),
    dateOfBirth: true,
    documentType: route.params.documentType,
  })
  const onSubmit = () => {
    createTraveller({ ...state, userId: user?.uid }).then(() => {
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
      )
      // setTimeout(() => {
      navigation.dispatch(TabActions.jumpTo('Travellers'))
      // }, 0)
    })
  }
  return (
    <View style={tw`flex-1 pt-3 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-4`}>
        <Text style={tw`font-bold text-xl`}>Add traveller profile</Text>
        <Text style={tw`mt-2 mb-4`}>Add your details here.</Text>
        <Form
          onSubmit={onSubmit}
          inputs={INPUTS}
          state={state}
          setState={setState}
        />
      </ScrollView>
      <ProgressFooter
        disabled={!Object.values(state).every(Boolean)}
        onSubmit={onSubmit}
      />
    </View>
  )
}
const INPUTS: IInput[] = [
  {
    source: 'documentType',
    type: 'select',
    choices: ['Passport', 'Canadian Permanent Resident Card'],
    placeholder: 'Document type',
  },
  {
    source: 'country',
    type: 'select',
    choices: ['Canada', 'United States of America'],
    placeholder: 'Country of issue',
  },
  {
    source: 'documentNumber',
    type: 'documentNumber',
    placeholder: 'Document number',
  },
  {
    source: 'surname',
    placeholder: 'Surname',
  },
  {
    source: 'givenNames',
    placeholder: 'Given names',
  },
  {
    source: 'dateOfBirth',
    type: 'date',
    placeholder: 'Date of birth',
  },
]
