import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components/Button'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { createTraveller } from '../utils/firestore'
import tw from '../utils/tw'

export const TravellersFormScreen = () => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    createTraveller(state)
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
      <SafeAreaView>
        <View style={tw`h-1 bg-primary w-full`} />
        <Button style={tw`mx-4 mt-3`} onPress={onSubmit}>
          Next
        </Button>
      </SafeAreaView>
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
    type: 'countrySelect',
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
