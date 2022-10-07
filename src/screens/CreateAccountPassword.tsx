import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { RootStackParamList } from '../../types'

export const CreateAccountPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountPassword'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Password Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('CreateAccountVerify')}
      />
    </View>
  )
}
