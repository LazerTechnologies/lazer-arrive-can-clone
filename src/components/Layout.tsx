import { View } from 'react-native'
import * as React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      {children}
    </View>
  )
}
