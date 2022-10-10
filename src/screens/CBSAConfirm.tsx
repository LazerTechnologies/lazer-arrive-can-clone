import { CommonActions } from '@react-navigation/routers'
import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { ProgressFooter } from '../components/ProgressFooter'
import tw from '../utils/tw'
import { Paper } from '../components/Paper'

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
        <Text style={tw`mb-3`}>
          Your advance declaration has been sent to CBSA and your should be
          recieving a confirmation email soon. The code below should match the
          one sown onscreen at a designated Primary Inspection Device upon
          arriving at your port of entry.
        </Text>

        <Paper>
          {/* <View style={tw`px-5 py-2`}>
            <Text style={tw`text-xs`}>
              Toronto Pearson International Airport - Terminal 1 (YYZ)
            </Text>
          </View> */}
          <View style={tw`bg-[#EBF3F6] py-5`}>
            <Text style={tw`text-4xl font-bold text-center`}>PKPUE</Text>
            <Text style={tw`text-center text-xs`}>2022-10-07 16:14:30</Text>
          </View>
          {/* <View style={tw`py-1.5`}></View> */}
        </Paper>

        {/* <Paper>
          <View style={tw`px-5 py-4`}>
            <Text style={tw`font-semibold mb-4`}>Traveller (1)</Text>
            <Text>Daniel Whiffing</Text>
          </View>
        </Paper> */}
      </ScrollView>

      <ProgressFooter submitLabel="Close" onSubmit={onSubmit} />
    </View>
  )
}
