import { View, TextInput } from 'react-native'
import * as React from 'react'

export const Form = ({
  inputs,
  state,
  setState,
}: {
  inputs: any[]
  state: any
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

export const getInitialStateFromInputs = (inputs: any) =>
  inputs.reduce((obj: any, c: any) => ({ ...obj, [c.source]: '' }), {})
