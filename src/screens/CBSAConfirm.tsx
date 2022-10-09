import { CommonActions } from '@react-navigation/routers'
import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components/Button'
import tw from '../utils/tw'

export const CBSAConfirm = ({ navigation }: any) => {
  const onSubmit = () => {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
    )
  }
  return (
    <View style={tw`flex-1 pt-3 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-4`}>
        <Text style={tw`font-semibold text-xl mb-4`}>
          You have successfully submitted your CBSA Declaration form
        </Text>
        <Text style={tw``}>
          Your advance declaration has been sent to CBSA and your should be
          recieving a confirmation email soon. The code below should match the
          one sown onscreen at a designated Primary Inspection Device upon
          arriving at your port of entry.
        </Text>

        <View style={tw`my-3`}>
          <Text>Toronto YYZ</Text>
          <Text>PKPUE</Text>
          <Text>2022-10-07 16:14:30</Text>
        </View>

        <View style={tw`my-3`}>
          <Text>Traveller (1)</Text>
          <Text>Daniel Whiffing</Text>
        </View>
      </ScrollView>

      <SafeAreaView>
        <View style={tw`h-1 bg-primary w-full`} />
        <Button style={tw`mx-4 mt-3`} onPress={onSubmit}>
          Close
        </Button>
      </SafeAreaView>
    </View>
  )
}
