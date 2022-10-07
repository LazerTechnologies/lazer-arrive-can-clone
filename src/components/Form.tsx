import { View, TextInput, TextInputProps } from 'react-native'
import * as React from 'react'

export interface IInput extends TextInputProps {
  source: string
}

export const Form = ({
  inputs,
  state,
  setState,
}: {
  inputs: IInput[]
  state: Record<string, string>
  setState: any
}) => (
  <View style={{ width: '100%' }}>
    {inputs.map(input => (
      <TextInput
        key={input.source}
        value={state[input.source]}
        placeholder={input.placeholder}
        autoComplete={input.autoComplete}
        secureTextEntry={input.secureTextEntry}
        autoCapitalize={input.autoCapitalize}
        keyboardType={input.keyboardType}
        onChangeText={v => setState((s: any) => ({ ...s, [input.source]: v }))}
        style={{
          height: 40,
          backgroundColor: 'white',
          fontSize: 20,
          padding: 5,
          marginVertical: 5,
          width: '100%',
        }}
      />
    ))}
  </View>
)

export const getInitialStateFromInputs = (inputs: IInput[]) =>
  inputs.reduce((obj: any, c: any) => ({ ...obj, [c.source]: '' }), {})
