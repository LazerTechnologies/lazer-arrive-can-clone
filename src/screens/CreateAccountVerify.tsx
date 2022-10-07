import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs } from '../components/Form'
import { Layout } from '../components/Layout'

export const CreateAccountVerifyScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountVerify'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  return (
    <Layout>
      <Form inputs={INPUTS} state={state} setState={setState} />
      <Button title="Next" onPress={() => navigation.navigate('Main')} />
    </Layout>
  )
}

const INPUTS = [
  {
    source: 'code',
    type: 'text',
    label: 'Verify Code',
    placeholder: 'Verify Code',
  },
]
