import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '../components/Button'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'
import { login } from '../utils/auth'
import { Text } from 'react-native'
import tw from '../utils/tw'

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
    <Layout isDark>
      <Text style={tw`text-white text-2xl text-center font-semibold mb-6`}>
        Sign into ArriveCAN
      </Text>
      <Form
        isDark
        onSubmit={onSubmit}
        inputs={INPUTS}
        state={state}
        setState={setState}
      />
      <Button color="secondary" onPress={onSubmit}>
        Sign in
      </Button>
      <Button variant="link" style={tw`mt-3`}>
        Forgot password?
      </Button>

      <Text style={tw`text-center text-white mt-12`}>
        Don't have an account?{' '}
        <Text
          onPress={() => navigation.navigate('CreateAccountEmail')}
          style={tw`underline font-bold`}>
          Create account
        </Text>
      </Text>
      <Button variant="link" style={tw`mt-2`}>
        Get Help
      </Button>
    </Layout>
  )
}

const INPUTS: IInput[] = [
  {
    source: 'email',
    autoComplete: 'email',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    placeholder: 'Email address',
  },
  {
    source: 'password',
    autoCapitalize: 'none',
    secureTextEntry: true,
    placeholder: 'Password',
  },
]
