import * as React from 'react'
import { View } from 'react-native'
import tw from '../utils/tw'

export const Paper = ({ children }: { children: React.ReactNode }) => (
  <View
    style={tw`my-3 shadow-[#bbb] shadow-offset-[0]/[4px] shadow-opacity-50 rounded-lg bg-white`}>
    {children}
  </View>
)
