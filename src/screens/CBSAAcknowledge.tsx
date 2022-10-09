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
        <Text style={tw``}>
          Your CBSA Declaration(s) will be sent to the CBSA. You must arrive in
          Canada and certify your declaration within 72 hours or it will expire.
          If you intend to travel to Canada after 72 hours, you will need to
          submit a new CBSA Declaration(s), Ab sckowledgement of e-receipt of
          your CBSA Declaration will be sent to you by email.
        </Text>
        <View style={tw`my-3`}>
          <Text style={tw``}>
            Each traveller is responsible for their own CBSA Declaration. If
            your declaration(s) change between now and your arrival in Canada
            you must submit a new CBSA Declaration or submit a new declaration
            at a Primary Inspection Device upon your arrival in Canada. Under
            the law, failure to properly declare goods, currency and/or monetary
            instruments brought into Canada may result in an enforcement action
            including seizure, monetary penalties and/or criminal prosecution.
          </Text>
        </View>
        <Text style={tw`font-semibold my-4`}>
          I hereby acknowledge the following statements:
        </Text>
        <Text style={tw`my-2`}>
          Use of the CBSA Declaration Service is optional and there are no
          penalties if I choose not to provide this information until I enter
          Canada.
        </Text>
        <Text style={tw`my-2`}>
          I must certify my declaration upon entry to Canada by using a Primary
          Inspection Device.
        </Text>
        <Text style={tw`my-2`}>
          I agree to submit my CBSA Declaration to the Canda Border Services
          Agency and acknowledge that each traveller is responsible to submit a
          new declaration should it change.
        </Text>
      </ScrollView>
      <SafeAreaView>
        <View style={tw`h-1 bg-primary w-full`} />
        <Button style={tw`mx-4 mt-3`} onPress={onSubmit}>
          Submit
        </Button>
      </SafeAreaView>
    </View>
  )
}
