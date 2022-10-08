import { TouchableOpacity, Text, View } from 'react-native'
import * as React from 'react'
import tw from '../utils/tw'

export const Button = ({
  variant = 'contained',
  color = 'default',
  children,
  onPress,
  style,
  textStyle,
}: {
  color?: 'default' | 'white'
  variant?: 'contained' | 'outlined' | 'text' | 'link'
  onPress?: () => void
  style?: any
  textStyle?: any
  children: React.ReactNode
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        tw`py-2.5 rounded`,
        variant === 'contained'
          ? color === 'white'
            ? tw`bg-white`
            : tw`bg-primary`
          : null,
        variant === 'outlined' && tw`border border-white bg-background`,
        style,
      ]}
      onPress={onPress}>
      <View>
        <Text
          style={[
            tw`text-center text-background`,
            variant === 'link'
              ? tw`text-[#ccc] underline`
              : variant === 'contained'
              ? color === 'white'
                ? tw`text-background`
                : tw`text-white`
              : variant === 'text'
              ? null
              : tw`text-white`,
            textStyle,
          ]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
