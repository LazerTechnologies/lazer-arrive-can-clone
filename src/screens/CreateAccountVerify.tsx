import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'

export const CreateAccountVerifyScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountVerify'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  return (
    <Layout isDark>
      <Form inputs={INPUTS} state={state} setState={setState} />
      <Button title="Next" onPress={() => navigation.navigate('Main')} />
    </Layout>
  )
}

const INPUTS: IInput[] = [
  {
    source: 'code',
    placeholder: 'Verify Code',
  },
]
