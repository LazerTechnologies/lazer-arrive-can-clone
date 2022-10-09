import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { RootStackParamList } from '../../types'
import { Button } from '../components/Button'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import { Layout } from '../components/Layout'

export const CreateAccountVerifyScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountVerify'>) => {
  const [state, setState] = React.useState(getInitialStateFromInputs(INPUTS))
  const onSubmit = () => navigation.navigate('Main')
  return (
    <Layout isDark>
      <Form
        onSubmit={onSubmit}
        isDark
        inputs={INPUTS}
        state={state}
        setState={setState}
      />
      <Button color="secondary" onPress={onSubmit}>
        Verify
      </Button>
    </Layout>
  )
}

const INPUTS: IInput[] = [
  {
    source: 'code',
    placeholder: 'Verify Code',
  },
]
