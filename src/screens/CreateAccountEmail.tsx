import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { RootStackParamList } from '../../types'

export const CreateAccountEmailScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateAccountEmail'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('CreateAccountPassword')}
      />
    </View>
  )
}
