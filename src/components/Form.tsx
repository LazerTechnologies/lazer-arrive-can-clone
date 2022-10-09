import { View, TextInput, TextInputProps, Text } from 'react-native'
import * as React from 'react'
import tw from '../utils/tw'

export interface IInput extends TextInputProps {
  source: string
  type?: string
  choices?: string[]
}
// TODO: handle types
// TODO: date type (yyyy/mm/dd) 3 inputs
// TODO: select type (a select with static choices)
// TODO: countrySelect type (a select with dynamic choices)
// TODO: documentNumber type (validate 2 chars followed by 6 numbers)
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
        <View key={input.source} style={tw`mb-3`}>
          <Text style={[tw`font-bold`, isDark ? tw`text-white` : tw``]}>
            {input.placeholder}
          </Text>
          <TextInput
            ref={el => (ref.current[i] = el)}
            autoFocus={i === 0}
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
            style={[
              {
                height: 40,
                backgroundColor: 'white',
                fontSize: 16,
                paddingHorizontal: 12,
                marginVertical: 5,
                borderRadius: 3,
                width: '100%',
              },
              isDark ? null : tw`border border-[#ccc]`,
            ]}
          />
        </View>
      ))}
    </View>
  )
}
export const getInitialStateFromInputs = (inputs: IInput[]) =>
  inputs.reduce((obj: any, c: any) => ({ ...obj, [c.source]: '' }), {})
