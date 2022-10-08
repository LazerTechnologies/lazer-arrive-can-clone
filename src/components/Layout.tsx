import { SafeAreaView, StatusBar, View } from 'react-native'
import * as React from 'react'
import tw from '../utils/tw'

export const Layout = ({
  children,
  isDark,
  isSafe,
  style,
}: {
  style?: any
  isDark?: boolean
  isSafe?: boolean
  children: React.ReactNode
}) => {
  const Component = isSafe ? SafeAreaView : View
  return (
    <View
      style={[tw`flex-1`, isDark ? tw`bg-background` : tw`bg-white`, style]}>
      <Component style={[tw`flex-1 justify-center mx-5`, style]}>
        <StatusBar barStyle={`${isDark ? 'light' : 'dark'}-content`} />
        {children}
      </Component>
    </View>
  )
}
