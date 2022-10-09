import * as React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from './Button'
import tw from '../utils/tw'

export const ProgressFooter = (props: any) => (
  <SafeAreaView>
    {props.value != null && (
      <View style={tw`bg-[#ccc]`}>
        <View style={tw`h-[3px] bg-secondary w-[${props.value}%]`} />
      </View>
    )}
    <View style={tw`flex flex-row justify-between mt-3 mx-5`}>
      {props.onBack && (
        <Button variant="text" style={tw`w-10 mr-4`} onPress={props.onBack}>
          {props.backLabel || 'Back'}
        </Button>
      )}
      <Button
        disabled={props.disabled}
        style={[props.onBack ? tw`w-20` : tw`flex-1`]}
        onPress={props.onSubmit}>
        {props.submitLabel || 'Submit'}
      </Button>
    </View>
  </SafeAreaView>
)
