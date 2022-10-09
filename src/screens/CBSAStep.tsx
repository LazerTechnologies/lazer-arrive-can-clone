import { CommonActions } from '@react-navigation/routers'
import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { Form, getInitialStateFromInputs, IInput } from '../components/Form'
import tw from '../utils/tw'
import { InfoView } from '../components/InfoView'
import { ProgressFooter } from '../components/ProgressFooter'
import { useUser } from '../utils/auth'
import { getTravellers } from '../utils/firestore'

export const CBSAStep = ({ navigation, route }: any) => {
  const { inputs, index, infos, heading, description } = route.params
  const [state, setState] = React.useState({
    ...getInitialStateFromInputs(inputs),
    dateOfArrival: true,
  })
  const user = useUser()
  const [travellers, setTravellers] = React.useState<any[] | null>(null)
  React.useEffect(() => {
    if (user)
      getTravellers(user.uid).then(r => {
        let arr: any[] = []
        r.forEach(d => arr.push({ uid: d.id, ...d.data() }))
        setTravellers(arr)
      })
  }, [user])

  const onClose = () => {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: 'Main' }] }),
    )
  }
  const onSubmit = () => {
    if (index < STEPS.length - 1) {
      navigation.navigate(`CBSAStep${index + 1}`)
    } else {
      navigation.navigate(`CBSAAcknowledge`)
    }
  }
  return (
    <View style={tw`flex-1 pt-6 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={tw`px-4`}>
        <Text style={tw`font-medium text-xl leading-1.2 mb-3`}>{heading}</Text>
        {infos?.map((info: any, i: number) => (
          <InfoView description={info.description} key={i} style={tw`mb-5`}>
            <Text>{info.heading}</Text>
          </InfoView>
        ))}
        {description && <Text style={tw`mb-5`}>{description}</Text>}
        <Form
          onSubmit={onSubmit}
          inputs={inputs.map((i: any) =>
            i.source === 'travellers'
              ? {
                  ...i,
                  choices: travellers?.map(t => `${t.givenNames} ${t.surname}`),
                }
              : i,
          )}
          state={state}
          setState={setState}
        />
      </ScrollView>
      <ProgressFooter
        disabled={!Object.values(state).every(v => v !== '')}
        value={(index / STEPS.length) * 100}
        submitLabel="Next"
        onSubmit={onSubmit}
        backLabel="Exit"
        onBack={onClose}
      />
    </View>
  )
}

export const STEPS: {
  inputs: IInput[]
  title: string
  heading: string
  description?: string
  infos?: { heading: string; description?: string }[]
}[] = [
  {
    title: 'Arrival airport',
    heading: 'Select your arrival airport',
    description:
      'Enter the details of your planned arrival to Canada within the next 72 hours (3 days).  If your trip is not within the next 72 hours, come back and complete your submission later.',
    infos: [
      {
        heading:
          'Please note: Advance CBSA Declaration is only available for air entry at select airports.',
      },
    ],
    inputs: [
      {
        source: 'arrivalAirport',
        type: 'select',
        choices: [
          'Montreal - Trudeau International Airport (YUL)',
          'Toronto Pearson International Airport - Terminal 1 (YYZ)',
          'Toronto Pearson International Airport - Terminal 3 (YYZ)',
          'Vancouver International Airport YVR',
        ],
        placeholder: 'Arrival airport',
      },
      {
        source: 'dateOfArrival',
        type: 'date',
        placeholder: 'Date of arrival',
      },
    ],
  },
  {
    title: 'Contact information',
    heading: 'Enter your contact information',
    description:
      'Please provide your telephone number where you can be reached while in Canada.',
    inputs: [
      { source: 'phone', type: 'phone', placeholder: 'Phone number' },
      {
        source: 'language',
        type: 'radio',
        choices: ['English', 'French'],
        placeholder:
          'Which official language should we use to communicate with you?',
      },
    ],
  },
  {
    title: 'Select/Add traveller',
    heading: 'Select traveller for this trip',
    description:
      'Use the checkbox beside the traveller entries below to select traveller from this trip.  You may also update the information or add new traveller entries to your list.',
    inputs: [
      {
        source: 'travellers',
        type: 'radio',
        placeholder: 'Traveller',
      },
    ],
  },
  {
    title: 'Arrival information',
    heading: 'Where are you arriving from?',
    inputs: [
      {
        source: 'arrival',
        type: 'radio',
        choices: [
          'United States',
          'Other country direct',
          'Other country via United States',
        ],
      },
    ],
  },
  {
    title: 'Country/territory of residence',
    heading: 'Where do you live?',
    infos: [
      {
        heading: 'Coming to Canada to work or study?',
        description:
          'If this is your first entry to Canada for work or study purposes, enter your foreign residence.  Temporary Residents of Canada with a valid work or study permit must indicate their Canadian residence.',
      },
    ],
    inputs: [
      {
        source: 'residence',
        type: 'radio',
        choices: ['Canada', 'United States of America', 'Other'],
      },
    ],
  },
  {
    title: 'Duration of absence from Canada',
    heading: 'How long have you been away from Canada?',
    description:
      'Your duration of absence from Canada determines what personal exemptions you are entitled to.',
    infos: [
      {
        heading: 'How to calculate your duration of absence from Canada',
        description:
          'Less than 24 hours: A duration of absense from Canada less than 24 hours.  24 to less than 48 hours: A minimum absence of 24 hours from Canada is required. For example, if you left at 19:00 on Friday the 15th, you may return no earlier than 19:00 on Saturday the 16th to claim the exemption. 48 hours to less than 7 days: A minimum absense of 48 hours from Canada is required. For example, if you left at 19:00 on Friday the 15th, you may return no earlier than 19:00 on Sunday the 17th to claim the exemption. 7 days or more: A minimum absence of seven days is required. When calculating the number of days you have been absent, exclude the day you left Canada but include the day you returned. For example, we consider you to have been absent seven days if you left Canada on Friday the 7th and return no earlier than Friday the 14th to claim the exemption.',
      },
    ],
    inputs: [
      {
        source: 'duration',
        type: 'radio',
        choices: [
          'Less than 24 hours',
          '24 hours to less than 48 hours',
          '48 hours to less than 7 days',
          '7 days or more',
        ],
      },
    ],
  },
  {
    title: 'Personal exemptions',
    heading:
      'Do you exceed your personal exemptions including the total value of goods or the allowable quantity of alcohol/tobacco?',
    infos: [
      {
        heading: 'Absence of less than 24 hours',
        description:
          'There are no personal exemptions for travellers absent for less than 24 hours',
      },
      {
        heading:
          'Refer to alcoholic beverage and tobacco products exemption limits',
        description:
          'Based on your stated duration of absence you are not entitled to a duty free allowance of alcohol and tobacco products.',
      },
    ],
    inputs: [{ source: 'exemptions', type: 'boolean' }],
  },
  {
    title: 'Firearms/Weapons',
    heading:
      'I am/we are bringing into Canada: Firearms or other weapons (e.g. switchblades, Mace or pepper spray)',
    infos: [
      {
        heading: 'Additional details',
        description:
          'You must declare all weapons and firearms at the CBSA port of entry when you enter Canada. If not, the goods may be seized and you could face prosecution.',
      },
    ],
    inputs: [{ source: 'firearms', type: 'boolean' }],
  },
  {
    title: 'Commericial Goods',
    heading:
      'I am/we are bringing into Canada: Commercial goods, whether or not for resale (e.g. samples, tools, equipment)',
    inputs: [{ source: 'commerce', type: 'boolean' }],
  },
  {
    title: 'Agricultural Products',
    heading:
      'I am/we are bringing into Canada: Raw or cooked meat, fish, seafood, eggs, dairy products, fruits, vegetables, seeds, nuts flowers, insects, bulbs, plants, wood, live animals or any other animal or plant parts or their derivatives.',
    infos: [
      {
        heading: 'Additional details',
        description:
          "You must declare all food, plants, animal and related products that you import into Canada.  Failure to do so can result in your good being confiscated or you may be subject to a fine or prosecution. Importing a single piece of fruit or meat into Canada can be harmful to our ecosystems. Various food, plant and animal products are restricted or prohibited entry because they can harbour invasive species, foreign animal diseases and plant pests. These things can cause irreperable harm to Canada's crops, livestock, environment and threaten Canadas economy.  Some of these items are prohibited or regulated because they can carry foreign animal and plant pests and diseases.",
      },
    ],
    inputs: [{ source: 'agriculture', type: 'boolean' }],
  },
  {
    title: 'Currency',
    heading:
      'I am/we are bringing into Canada: Currency and/or monetary instruments totally CAN$10,000 or more.',
    infos: [
      {
        heading: 'Additional details',
        description:
          'There are no restrictions on the amount of money you can bring into or take out of Canada, nor is it illegal to do so.  However, any time you cross the border, you must declare any currency or monetary instruments you have in your possession that are valued at CAN$10,000 or more.  The CAN$10,000 can be any combination of Canadian or foreign currency and monetary instruments, such as stocks, bonds, bank draft, cheques and travellers cheques.  This requirement applies to you whether you are travelling on business, pleasure or if you are carrying money on behalf of someone else.',
      },
    ],
    inputs: [{ source: 'currency', type: 'boolean' }],
  },
  {
    title: 'Unaccompanied Goods',
    heading: 'I/we have: Unaccompanied goods (excluding your checked baggage)',
    infos: [
      {
        heading: 'Additional details',
        description:
          'If you have acquired goods outside of Canada, and have had these goods sent home with a courier or postal company, you have 40 days from the date of your return to Canada to claim these goods.  The goods mailed to Canada must qualify for the 7-day personal exemption.  The shipment must not contain alcohol or tabacco products.  Upon arrival, you must tell a border services officer that you have shipped goods to follow and request Form BSF192, Personal Exemption CBSA Declaration. Be sure to retain your copy of Form BSF192 until you have received and accounted for all your goods.',
      },
    ],
    inputs: [{ source: 'unaccompaniedGoods', type: 'boolean' }],
  },
  {
    title: 'Visited a Farm',
    heading: 'I/we have: Visited a farm and will be going to a farm in Canada.',
    inputs: [{ source: 'farm', type: 'boolean' }],
  },
  {
    title: 'Ebola',
    heading: 'In the past 21 days, have you ever been to Uganda?',
    inputs: [{ source: 'ebola', type: 'boolean' }],
  },
  {
    title: 'Cannabis',
    heading:
      'I am/we are bringing into Canada: Are you or any travellers in your group bringing into Canada cannabis or goods containing cannabis?',
    infos: [
      {
        heading: 'Additional details',
        description:
          'If you have cannabis with you in any form, you must declare it to the Canada Border Services Agency.  Not declaring cannabis in your possession at the Canadian border could also lead to arrest and prosecution.  Transporting cannabis across the border in any form - including any oils containing THC or cannabidiol (CBD) - without a permit or exemption authorized by Health Canada is a serious criminal offence subject to arrest and prosecution, despite the legalization of cannabis in Canada.  The prohibition applies regardless of the amount of cannabis you have with you, whether you hold a medical document authorizing the use of cannabis for medical purposes, or whether you are travelling from an area with legalized or decriminalized cannabis.',
      },
    ],
    inputs: [{ source: 'cannabis', type: 'boolean' }],
  },
]
