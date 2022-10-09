import * as React from 'react'
import { View } from 'react-native'
import tw from '../utils/tw'
import IonIcons from 'react-native-vector-icons/Ionicons'

export const InfoView = ({
  children,
  style,
}: {
  style?: any
  children: React.ReactNode
}) => {
  return (
    <View
      style={[
        tw`flex-row bg-[#EBF3F6] border border-[#B8C8CF] rounded-lg py-4 pl-2 pr-10`,
        style,
      ]}>
      <IonIcons
        name="information-circle"
        color="#5683A7"
        style={tw`mr-2`}
        size={16}
      />
      {children}
    </View>
  )
}
