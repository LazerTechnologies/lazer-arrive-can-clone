import { View } from 'react-native'
import * as React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#19354B',
      }}>
      {children}
    </View>
  )
}
