import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import { useUser } from '../utils/auth'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import tw from '../utils/tw'
import { useIsFocused } from '@react-navigation/native'

export const LandingScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Landing'>) => {
  const user = useUser()
  const isFocused = useIsFocused()

  React.useEffect(() => {
    if (user && isFocused) navigation.navigate('Main')
  }, [user, isFocused])

  return (
    <Layout isSafe isDark style={tw`justify-end`}>
      <Button
        color="white"
        onPress={() => navigation.navigate('CreateAccountEmail')}>
        Create account
      </Button>

      <Button
        style={tw`my-3`}
        variant="outlined"
        color="white"
        onPress={() => navigation.navigate('Login')}>
        Sign in
      </Button>

      <Button variant="link">Terms of Use</Button>

      <Button variant="link">Get Help</Button>
    </Layout>
  )
}
