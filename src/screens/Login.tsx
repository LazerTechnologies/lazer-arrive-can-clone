import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'
import { login } from '../utils/auth'

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Login'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    login(state.email, state.password).then(() => {
      navigation.navigate('Main')
    })
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
    source: 'password',
    autoCapitalize: 'none',
    secureTextEntry: true,
    placeholder: 'Password',
  },
]
