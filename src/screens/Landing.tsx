import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'

export const LandingScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Landing'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Landing Screen</Text>
      <Button title="Sign in" onPress={() => navigation.navigate('Login')} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('CreateAccountEmail')}
      />
    </View>
  )
}
