import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components/Button'
import tw from '../utils/tw'

export const CBSAAcknowledge = ({ navigation }: any) => {
  const onSubmit = () => {
    navigation.navigate(`CBSAConfirm`)
  }
  return (
    <View style={tw`flex-1 pt-3 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-4`}>
        <Text style={tw`font-bold text-xl`}>Acknowledge</Text>
      </ScrollView>
      <SafeAreaView>
        <View style={tw`h-1 bg-primary w-full`} />
        <Button style={tw`mx-4 mt-3`} onPress={onSubmit}>
          Next
        </Button>
      </SafeAreaView>
    </View>
  )
}
