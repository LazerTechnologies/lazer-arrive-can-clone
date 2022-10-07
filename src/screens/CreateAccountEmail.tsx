import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'

export const CreateAccountEmailScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountEmail'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    // TODO: confirm that emails are the same
    navigation.navigate('CreateAccountPassword', { email: state.email })
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
    source: 'email',
    autoComplete: 'email',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    placeholder: 'Email',
  },
  {
    source: 'confirmEmail',
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    autoComplete: 'email',
    placeholder: 'Confirm Email',
  },
]
