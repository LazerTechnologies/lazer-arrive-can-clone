import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '../components/Button'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'
import { createUser } from '../utils/auth'
import { Text, View } from 'react-native'
import tw from '../utils/tw'

export const CreateAccountPasswordScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountPassword'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    // TODO: confirm that passwords are the same
    createUser(route.params.email, state.password).then(() => {
      navigation.navigate('CreateAccountVerify')
    })
  }
  const onSignIn = () => navigation.navigate('Login')
  return (
    <Layout isDark>
      <Form
        onSubmit={onSubmit}
        isDark
        inputs={INPUTS}
        state={state}
        setState={setState}
      />
      <View style={tw`mt-30`}>
        <Button onPress={onSubmit}>Continue</Button>

        <Text style={tw`text-center text-white mt-6`}>
          Already have an account?{' '}
          <Text style={tw`underline font-bold`} onPress={onSignIn}>
            Sign in.
          </Text>
        </Text>
      </View>
    </Layout>
  )
}

const INPUTS: IInput[] = [
  {
    source: 'password',
    autoCapitalize: 'none',
    secureTextEntry: true,
    placeholder: 'Password',
  },
  {
    source: 'confirmPassword',
    autoCapitalize: 'none',
    secureTextEntry: true,
    placeholder: 'Confirm Password',
  },
]
