import { View, TextInput, TextInputProps, Text } from 'react-native'
import * as React from 'react'
import tw from '../utils/tw'

export interface IInput extends TextInputProps {
  source: string
}

export const Form = ({
  inputs,
  state,
  setState,
  isDark,
  onSubmit,
}: {
  isDark?: boolean
  onSubmit?: () => void
  inputs: IInput[]
  state: Record<string, string>
  setState: any
}) => {
  const ref = React.useRef<(TextInput | null)[]>([])
  return (
    <View style={{ width: '100%' }}>
      {inputs.map((input, i) => (
        <View style={tw`mb-3`}>
          <Text style={[tw`font-bold`, isDark ? tw`text-white` : tw``]}>
            {input.placeholder}
          </Text>
          <TextInput
            ref={el => (ref.current[i] = el)}
            autoFocus={i === 0}
            key={input.source}
            value={state[input.source]}
            autoComplete={input.autoComplete}
            secureTextEntry={input.secureTextEntry}
            autoCapitalize={input.autoCapitalize}
            autoCorrect={false}
            onSubmitEditing={() => {
              if (i < inputs.length - 1) {
                ref.current[i + 1]?.focus()
              } else {
                onSubmit?.()
              }
            }}
            keyboardType={input.keyboardType}
            onChangeText={v =>
              setState((s: any) => ({ ...s, [input.source]: v }))
            }
            style={{
              height: 40,
              backgroundColor: 'white',
              fontSize: 16,
              paddingHorizontal: 12,
              marginVertical: 5,
              borderRadius: 3,
              width: '100%',
            }}
          />
        </View>
      ))}
    </View>
  )
}
export const getInitialStateFromInputs = (inputs: IInput[]) =>
  inputs.reduce((obj: any, c: any) => ({ ...obj, [c.source]: '' }), {})
