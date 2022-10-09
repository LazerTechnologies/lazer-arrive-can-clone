import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { RootStackParamList } from '../../types'
import { ProgressFooter } from '../components/ProgressFooter'
import tw from '../utils/tw'

export const PostOnboardingInfoScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'PostOnboardingInfo'>) => {
  const [index, setIndex] = React.useState(0)
  const onSubmit = () => {
    if (index < 2) {
      setIndex(i => i + 1)
    } else {
      onSkip()
    }
  }
  const onSkip = () => {
    navigation.navigate('TravellersInfo')
  }
  return (
    <View style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`flex-1 justify-end mx-4`}>
        <View style={tw`flex-1 justify-center mt-10 mx-4`}>
          <Image
            style={tw`w-full max-h-80`}
            resizeMode="contain"
            source={STEPS[index].image}
          />
        </View>
        <Text style={tw`font-semibold text-lg mb-2`}>
          {STEPS[index].heading}
        </Text>
        <Text>{STEPS[index].description}</Text>
      </View>
      <ProgressFooter
        value={((index + 1) / 3) * 100}
        backLabel="Skip"
        onBack={onSkip}
        submitLabel="Next"
        onSubmit={onSubmit}
      />
    </View>
  )
}

const STEPS = [
  {
    heading: 'Let’s get started',
    image: require('../../assets/onboarding-1.png'),
    description:
      'This tool is designated to help Air Travellers arriving in Canada have a better border experience by completing their Advance Declaration in advance.',
  },
  {
    heading: 'Finish as you go',
    image: require('../../assets/edeclaration.png'),
    description:
      'Travellers can store traveller document information for this and future trips, and prepare their declaration up to 72 hours ahead of arrival.',
  },
  {
    heading: 'Submit your form',
    image: require('../../assets/traveller.png'),
    description:
      'To submit your form, you will need to enter your travel information, along with answering our Advance declaration questionnaire.',
  },
]
