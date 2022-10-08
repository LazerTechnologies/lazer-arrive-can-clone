import { SafeAreaView, StatusBar, View } from 'react-native'
import * as React from 'react'

export const Layout = ({
  children,
  isDark,
  isSafe,
}: {
  isDark?: boolean
  isSafe?: boolean
  children: React.ReactNode
}) => {
  const Component = isSafe ? SafeAreaView : View
  return (
    <Component
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: isDark ? '#19354B' : '#fff',
      }}>
      <StatusBar barStyle={`${isDark ? 'light' : 'dark'}-content`} />
      {children}
    </Component>
  )
}
