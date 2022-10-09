import * as React from 'react'
import { View } from 'react-native'
import tw from '../utils/tw'

export const InfoView = ({
  children,
  style,
}: {
  style?: any
  children: React.ReactNode
}) => {
  return (
    <View
      style={[tw`bg-[#EBF3F6] border border-[#B8C8CF] rounded-lg p-4`, style]}>
      {children}
    </View>
  )
}
