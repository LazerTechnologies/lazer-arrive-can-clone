import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { ProgressFooter } from '../components/ProgressFooter'
import tw from '../utils/tw'

// TODO: enter manually button left on next button
// TODO: submitting with passport selected should open passport camera modal
export const TravellersAddScreen = ({ navigation }: any) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    navigation.navigate('TravellersForm', { documentType: state.documentType })
  }
  return (
    <View style={tw`flex-1 pt-5 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-5`}>
        <Text style={tw`font-bold text-xl`}>Add traveller profile</Text>
        <Text style={tw`mt-2 mb-4`}>
          Select the travel document being used to enter Canada
        </Text>
        <Text style={tw`mt-2 mb-4`}>
          Advance Declaration can only be used with a Passport or Canadian PR
          Card.
        </Text>
        <Form
          onSubmit={onSubmit}
          inputs={INPUTS}
          state={state}
          setState={setState}
        />
      </ScrollView>
      <ProgressFooter submitLabel="Next" onSubmit={onSubmit} />
    </View>
  )
}
const INPUTS: IInput[] = [
  {
    source: 'documentType',
    type: 'radio',
    choices: ['Passport', 'Canadian Permanent Resident Card'],
  },
]
