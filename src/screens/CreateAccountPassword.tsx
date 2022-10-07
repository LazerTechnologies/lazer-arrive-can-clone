import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs } from '../components/Form'
import { Layout } from '../components/Layout'
import { createUser } from '../utils/auth'

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
  return (
    <Layout>
      <Form inputs={INPUTS} state={state} setState={setState} />
      <Button title="Submit" onPress={onSubmit} />
    </Layout>
  )
}

const INPUTS = [
  {
    source: 'password',
    type: 'text',
    autoCapitalize: 'none',
    secureTextEntry: true,
    label: 'Password',
    placeholder: 'Password',
  },
  {
    source: 'confirmPassword',
    type: 'text',
    autoCapitalize: 'none',
    secureTextEntry: true,
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
  },
]
