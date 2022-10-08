import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
import { useUser } from '../utils/auth'
import { Layout } from '../components/Layout'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native'

export const LandingScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Landing'>) => {
  const user = useUser()
  React.useEffect(() => {
    if (user) {
      navigation.navigate('Main')
    }
  }, [user])
  return (
    <Layout isDark>
      <SafeAreaView
        style={{ flex: 1, width: '100%', justifyContent: 'flex-end' }}>
        <Button
          buttonColor="white"
          textColor="#245067"
          mode="contained"
          onPress={() => navigation.navigate('CreateAccountEmail')}>
          Create account
        </Button>
        <Button
          textColor="white"
          mode="outlined"
          onPress={() => navigation.navigate('Login')}
          style={{ marginVertical: 16 }}>
          Sign in
        </Button>
        <Button mode="text" textColor="#C4CCD2">
          Terms of Use
        </Button>
        <Button mode="text" textColor="#C4CCD2">
          Get Help
        </Button>
      </SafeAreaView>
    </Layout>
  )
}
