import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'
import tw from '../utils/tw'
import { Button } from '../components/Button'

export const CreateAccountEmailScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountEmail'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => {
    // TODO: confirm that emails are the same
    navigation.navigate('CreateAccountPassword', { email: state.email })
  }
  const onSignIn = () => navigation.navigate('Login')
  return (
    <Layout isDark>
      <Text
        style={tw`text-white text-2xl text-center font-semibold mb-6 android:mt-20`}>
        What's your email address?
      </Text>
      <Form
        onSubmit={onSubmit}
        isDark
        inputs={INPUTS}
        state={state}
        setState={setState}
      />
      <View style={tw`mt-30`}>
        <Button color="secondary" onPress={onSubmit}>
          Continue
        </Button>

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
    source: 'email',
    autoComplete: 'email',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    placeholder: 'Email address',
  },
  {
    source: 'confirmEmail',
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    autoComplete: 'email',
    placeholder: 'Confirm email address',
  },
]
