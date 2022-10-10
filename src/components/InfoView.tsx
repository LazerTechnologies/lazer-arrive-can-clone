import * as React from 'react'
import { View } from 'react-native'
import tw from '../utils/tw'
import IonIcons from 'react-native-vector-icons/Ionicons'

export const InfoView = ({
  children,
  style,
  description,
}: {
  style?: any
  description?: string
  children: React.ReactNode
}) => {
  return (
    <View
      style={[
        tw`flex-row bg-[#EBF3F6] border border-[#B8C8CF] rounded-lg py-4 pl-2 pr-4 justify-between`,
        style,
      ]}>
      <View style={tw`flex-row pr-2`}>
        <IonIcons
          name="information-circle"
          color="#5683A7"
          style={tw`mr-2`}
          size={16}
        />
        {children}
      </View>
      {description ? (
        <IonIcons name="chevron-down" color="#aaa" size={16} />
      ) : null}
    </View>
  )
}
