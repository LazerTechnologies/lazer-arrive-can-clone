import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { RootStackParamList } from '../../types'

export const CreateAccountVerifyScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountVerify'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Verify Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate('Main')} />
    </View>
  )
}
