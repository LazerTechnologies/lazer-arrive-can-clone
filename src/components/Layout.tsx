import { View } from 'react-native'
import * as React from 'react'

export const Layout = ({ children }: { children: any }) => {
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
