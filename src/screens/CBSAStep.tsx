import { CommonActions } from '@react-navigation/routers'
import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components/Button'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import tw from '../utils/tw'

export const CBSAStep = ({ navigation, route }: any) => {
  const { inputs, index, heading } = route.params
  const [state, setState] = React.useState({
    ...getInitialStateFromInputs(inputs),
  })
  const onSubmit = () => {
    if (index < STEPS.length - 1) {
      navigation.navigate(`CBSAStep${index + 1}`)
    } else {
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
      )
    }
  }
  return (
    <View style={tw`flex-1 pt-3 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-4`}>
        <Text style={tw`font-bold text-xl`}>{heading}</Text>
        <Form
          onSubmit={onSubmit}
          inputs={inputs}
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

export const STEPS: { inputs: IInput[]; title: string; heading: string }[] = [
  {
    title: 'Arrival airport',
    heading: 'Select your arrival airport',
    inputs: [
      {
        source: 'arrivalAirport',
        type: 'select',
        choices: ['Passport'],
        placeholder: 'Arrival airport',
      },
      {
        source: 'dateOfArrival',
        type: 'date',
        placeholder: 'Date of arrival',
      },
    ],
  },
  {
    title: 'Contact information',
    heading: 'Enter your contact information',
    inputs: [
      { source: 'phone', type: 'phone', placeholder: 'Phone number' },
      { source: 'language', type: 'radio', choices: ['English', 'French'] },
    ],
  },
  {
    title: 'Select/Add travellers',
    heading: 'Select travellers for this trip',
    inputs: [
      {
        source: 'phone',
        type: 'phone',
        placeholder: 'Travellers',
      },
    ],
  },
  {
    title: 'Arrival information',
    heading: 'Where are you arriving from?',
    inputs: [
      {
        source: 'arrival',
        type: 'radio',
        choices: [
          'United States',
          'Other country direct',
          'Other country via United States',
        ],
      },
    ],
  },
  {
    title: 'Country/territory of residence',
    heading: 'Where do you live?',
    inputs: [
      { source: 'residence', type: 'radio', choices: ['United States'] },
    ],
  },
  {
    title: 'Duration of absence from Canada',
    heading: 'How long have you been away from Canada?',
    inputs: [{ source: 'duration', type: 'radio', choices: ['United States'] }],
  },
  {
    title: 'Personal exemptions',
    heading:
      'Do you exceed your personal exemptions including the total value of goods or the allowable quantity of alcohol/tobacco',
    inputs: [{ source: 'exemptions', type: 'boolean' }],
  },
  {
    title: 'Firearms/Weapons',
    heading:
      'I am/we are bringing into Canada: Firearms or other weapons (e.g. switchblades, Mace or pepper spray)',
    inputs: [{ source: 'firearms', type: 'boolean' }],
  },
  {
    title: 'Commericial Goods',
    heading:
      'I am/we are bringing into Canada: Commercial goods, whether or not for resale (e.g. samples, tools, equipment)',
    inputs: [{ source: 'commerce', type: 'boolean' }],
  },
  {
    title: 'Agricultural Products',
    heading:
      'I am/we are bringing into Canada: Raw or cooked meat, fish, seafood, eggs, dairy products, fruits, vegetables, seeds, nuts flowers, insects, bulbs, plants, wood, live animals or any other animal or plant parts or their derivatives.',
    inputs: [{ source: 'agriculture', type: 'boolean' }],
  },
  {
    title: 'Currency',
    heading:
      'I am/we are bringing into Canada: Currency and/or monetary instruments totally CAN$10,000 or more.',
    inputs: [{ source: 'currency', type: 'boolean' }],
  },
  {
    title: 'Visited a Farm',
    heading: 'I/we have: Visited a farm and will be going to a farm in Canada.',
    inputs: [{ source: 'farm', type: 'boolean' }],
  },
  {
    title: 'Cannabis',
    heading:
      'I am/we are bringing into Canada: Are you or any travellers in your group bringing into Canada cannabis or goods containing cannabis?',
    inputs: [{ source: 'cannabis', type: 'boolean' }],
  },
]
