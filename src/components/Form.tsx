import {
  View,
  TextInput,
  TextInputProps,
  Text,
  TouchableOpacity,
} from 'react-native'
import * as React from 'react'
import tw from '../utils/tw'
import DropDownPicker from 'react-native-dropdown-picker'

import { Button } from './Button'

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
    <View style={tw`w-full`}>
      {inputs.map((input, i) => {
        const [open, setOpen] = React.useState(false)
        const onSubmitEditing = () => {
          if (i < inputs.length - 1) {
            ref.current[i + 1]?.focus()
          } else {
            onSubmit?.()
          }
        }
        const inputStyle = [
          tw`w-full h-[40px] bg-white rounded-sm my-2 px-3`,
          isDark ? null : tw`border border-[#ccc]`,
          { zIndex: 9 },
        ]
        const choices = input.choices?.map((choice: string) => ({
          label: choice,
          value: choice,
        }))
        return (
          <View key={input.source} style={[tw`mb-4`, { zIndex: 10 - i }]}>
            {input.placeholder && (
              <Text style={[tw`font-semibold`, isDark ? tw`text-white` : tw``]}>
                {input.placeholder}
              </Text>
            )}
            {input.type === 'radio' ? (
              <View style={tw`mt-2`}>
                {input.choices?.map((choice: string) => (
                  <TouchableOpacity
                    key={choice}
                    onPress={() =>
                      setState((s: any) => ({ ...s, [input.source]: choice }))
                    }
                    style={tw`flex-row items-center py-2`}>
                    <View
                      style={[
                        tw`rounded-full border border-secondary w-4 h-4 mr-3`,
                        state[input.source] === choice
                          ? tw`bg-secondary`
                          : tw``,
                      ]}
                    />
                    <Text>{choice}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : input.type === 'select' || input.type === 'selectCountry' ? (
              <DropDownPicker
                open={open}
                value={state[input.source]}
                setOpen={setOpen}
                setValue={c => {
                  setState((s: any) => ({ ...s, [input.source]: c(choices) }))
                }}
                listMode="SCROLLVIEW"
                style={tw`mt-2 border-[#ccc] rounded min-h-0 py-3`}
                items={choices!}
                dropDownContainerStyle={[tw`border-[#ccc]`, { marginTop: 12 }]}
              />
            ) : input.type === 'boolean' ? (
              <View style={[tw`flex-row mt-3`]}>
                {['NO', 'YES'].map((choice: string, i) => (
                  <Button
                    key={i}
                    style={[i === 0 && tw`mr-2`, tw`w-14`]}
                    variant={
                      (state[input.source] && choice === 'YES') ||
                      (!state[input.source] && choice === 'NO')
                        ? 'contained'
                        : 'outlined'
                    }
                    onPress={() =>
                      setState((s: any) => ({
                        ...s,
                        [input.source]: choice === 'YES',
                      }))
                    }>
                    {choice}
                  </Button>
                ))}
              </View>
            ) : input.type === 'date' ? (
              <View style={[tw`flex-row`]}>
                {['YYYY', 'MM', 'DD'].map((part: string, i) => (
                  <TextInput
                    key={i}
                    value={state[input.source + part]}
                    placeholder={part}
                    keyboardType="numeric"
                    style={[...inputStyle, tw`flex-1`, i > 0 && tw`ml-3`]}
                    autoCorrect={false}
                    onChangeText={v =>
                      setState((s: any) => ({ ...s, [input.source + part]: v }))
                    }
                  />
                ))}
              </View>
            ) : (
              <TextInput
                ref={el => (ref.current[i] = el)}
                {...input}
                autoFocus={i === 0}
                value={state[input.source]}
                onSubmitEditing={onSubmitEditing}
                style={inputStyle}
                autoCorrect={false}
                onChangeText={v =>
                  setState((s: any) => ({ ...s, [input.source]: v }))
                }
              />
            )}
          </View>
        )
      })}
    </View>
  )
}

export const getInitialStateFromInputs = (inputs: IInput[]) =>
  inputs.reduce((obj: any, c: any) => ({ ...obj, [c.source]: '' }), {})
