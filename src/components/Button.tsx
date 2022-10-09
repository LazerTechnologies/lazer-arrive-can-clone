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
  color?: 'default' | 'white' | 'secondary'
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
            : color === 'secondary'
            ? tw`bg-secondary`
            : tw`bg-primary`
          : null,
        variant === 'outlined'
          ? color === 'white'
            ? tw`border border-white`
            : tw`border border-primary`
          : null,
        variant === 'outlined' && { backgroundColor: null },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          tw`text-center text-background`,
          variant === 'contained'
            ? color === 'white'
              ? tw`text-background`
              : tw`text-white`
            : null,
          variant === 'outlined'
            ? color === 'white'
              ? tw`text-white`
              : color === 'secondary'
              ? tw`text-secondary`
              : tw`text-primary`
            : null,
          variant === 'link' ? tw`text-[#ccc] underline` : null,
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
