import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../../types'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import tw from '../utils/tw'
import IonIcons from 'react-native-vector-icons/Ionicons'

export const TravellersInfoScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'TravellersInfo'>) => {
  const onSubmit = () => navigation.navigate('TravellersAdd')
  const onSkip = () => navigation.navigate('Main')
  return (
    <Layout isDark>
      <View style={tw`flex-1 pt-10`}>
        <IonIcons name="person-add-outline" color="white" size={32} />
        <Text style={tw`text-white text-2xl font-semibold mt-3 mb-1`}>
          Let's add a traveller
        </Text>
        <Text style={tw`text-white mb-5`}>
          Add your travel document to make future submissions quicker. You can
          edit, delete, and add additional travellers at any time. This feature
          is optional. Once you’ve successfully registered a traveller, you can
          submit your Advance Declaration form.
        </Text>
        <Text style={tw`text-white mb-4`}>Here’s what you’ll need:</Text>

        <Item
          index={1}
          heading="Travel Document"
          description="Register a travel document by scanning the document or entering information manually"
        />
        <Item
          index={2}
          heading="Upload your travel document(s)"
          description=""
        />
        <Item
          index={3}
          heading="Start your Advance Declaration form"
          description="Submit your travel and advance declaration information to save time at the airport"
        />
      </View>
      <View style={tw`flex-row justify-between mb-10`}>
        <Button
          style={tw`w-20`}
          textStyle={tw`text-white`}
          color="white"
          variant="text"
          onPress={onSkip}>
          I'll do it later
        </Button>
        <Button style={tw`w-20`} color="white" onPress={onSubmit}>
          Add
        </Button>
      </View>
    </Layout>
  )
}

const Item = ({ heading, description, index }: any) => (
  <View style={tw`my-2 flex-row items-center`}>
    <View style={tw`bg-white rounded-full h-5 w-5 justify-center items-center`}>
      <Text style={tw`text-primary`}>{index}</Text>
    </View>
    <View style={tw`my-2 ml-4`}>
      <Text style={tw`text-white text-base font-semibold`}>{heading}</Text>
      <Text style={tw`text-white `}>{description}</Text>
    </View>
  </View>
)
