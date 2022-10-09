import * as React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { ProgressFooter } from '../components/ProgressFooter'
import tw from '../utils/tw'

export const CBSAConsent = ({ navigation, route }: any) => {
  const onSubmit = () => {
    navigation.navigate(`CBSAStep1`)
  }
  return (
    <View style={tw`flex-1 flex justify-between`}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={tw`flex-1 h-full`}
        contentContainerStyle={tw`pt-3 px-4`}>
        <Text style={tw`font-bold text-2xl`}>
          Advance CBSA Declaration Privacy Statement
        </Text>
        <Text style={tw`font-bold text-xl my-2 leading-1.25`}>
          Terms and conditions of use and privacy statement: Advance Canada
          Border Services Agency Declaration
        </Text>
        <Text style={tw`my-2`}>
          The Canada Border Services Agency (CBSA) Advance Declaration service
          is intended to facilitate traveller entry to Canada through the
          voluntary provision of information to the CBSA in advance of arrival.
          The personal information you provide through the CBSA Advance
          Declaration is governed in accordance with the Privacy Act and the
          Customs Act.
        </Text>
        <Text style={tw`my-2`}>
          Certain traveller information is required upon entry into Canada in
          order to fulfill requirements under the Customs Act, Reporting of
          Imported Goods Regulations, the Customs Tariff, the Immigration and
          Refugee Protection Act and/or the Proceeds of Crime (Money Laundering)
          and Terrorist Financing Act. This information may be provided
          electronically prior to entry to Canada on a voluntary basis. If it is
          not provided prior to entry, it must be provided when entering Canada
          as part of the normal cross-border travel process. It is entirely
          optional whether this information is provided electronically prior to
          entry, and there are no penalties if you choose not to provide this
          information until you enter Canada.
        </Text>
        <Text style={tw`my-2`}>
          When you use this service, your personal information is encrypted and
          transmitted securely to, and retained by, the CBSA. When you scan your
          passport or Canadian permanent resident card at a primary inspection
          device (kiosk or other electronic device) upon entry to Canada, the
          CBSA matches it to your stored CBSA Declaration. You may then review
          and certify the declaration. You are not considered to have made a
          final declaration until you certify it at a primary inspection device.
        </Text>
        <Text style={tw`my-2`}>
          Your information, including email address, will be used to communicate
          with you in order to confirm receipt as well as for program evaluation
          purposes.
        </Text>
        <Text style={tw`my-2`}>
          If you do not arrive in Canada within 72 hours, your stored CBSA
          Advance Declaration will automatically expire and personal information
          will be deleted.
        </Text>
        <Text style={tw`font-bold text-xl my-2 leading-1.25`}>
          Upon entry to Canada: Primary Inspection Device
        </Text>
        <Text style={tw`my-2`}>
          Use of a Primary Inspection Device upon entry to Canada is contingent
          on biometric (photo and/or fingerprint) verification of identity.
          Authority for biometric verification of enrolled foreign nationals and
          permanent residents of Canada is authorized under the Immigration and
          Refugee Protection Act and related regulations. All other persons,
          including Canadian citizens, who do not wish to have their photograph
          captured may opt for in-person processing by an officer. By using the
          Primary Inspection Device, you are agreeing to the capture of your
          photo in order to verify your identity.
        </Text>
        <Text style={tw`my-2`}>
          The information that you are providing at the Primary Inspection
          Device, which includes information transmitted from your Advance
          Declaration, is collected under the authority of Section 12 of the
          Customs Act, Subsection 5(3), Reporting of Imported Goods Regulations,
          the Customs Tariff, the Immigration and Refugee Protection Actand/or
          the Proceeds of Crime (Money Laundering) and Terrorist Financing Act
          for the purposes of administering laws that enforce, prohibit, control
          or regulate the movement of persons, goods or currency into Canada.
          This includes facilitating compliance with reporting obligations under
          this legislation and the collection of duties and taxes owing on goods
          imported into Canada and for the purposes of administration and/or
          enforcement of the Customs Act or Immigration and Refugee Protection
          Act and may also be used for the administration or enforcement of
          other legislation or regulations administered or enforced by the CBSA
          and will be retained in accordance with the Privacy Act.
        </Text>
        <Text style={tw`my-2`}>
          This information may also be used in support of ongoing CBSA
          investigation or enforcement activities and may be disclosed in
          accordance with Section 107 of the Customs Act and/or Section 8 of the
          Privacy Act to:
        </Text>
        <Text style={tw`my-2 ml-4`}>
          - other government departments and agencies, police forces and other
          countries to administer laws that prohibit, control and regulate the
          importations of goods and movement of people
        </Text>
        <Text style={tw`my-2 ml-4`}>
          - other government departments, such as Statistics Canada, the Public
          Health Agency of Canada, and Employment and Social Development Canada
          and for the purpose of statistical reporting, public health, and
          program integrity
        </Text>
        <Text style={tw`my-2`}>
          Each traveller is responsible for their own declaration. Under the
          law, failure to properly declare goods and/or monetary instruments
          brought into Canada may result in seizure action, monetary penalties
          and/or criminal prosecution.
        </Text>
        <Text style={tw`my-2`}>
          Individuals have the right of access to and/or can request corrections
          of their personal information under the Privacy Act. Information about
          Programs and Information Holdings can be found in the Traveller
          Declaration cards Personal Information Bank CBSA PPU 018. Should you
          have concerns about the CBSA’s handling of your personal information
          you have a right to file a complaint with the Privacy Commissioner of
          Canada.
        </Text>
        <Text style={tw`my-2 font-bold`}>
          By selecting “I consent,” you are providing your consent to collect
          this information. If you do not want to provide this information,
          please select “Quit” to exit. There are no penalties if you do not
          provide this information.
        </Text>
      </ScrollView>
      <ProgressFooter value={5} submitLabel="I consent" onSubmit={onSubmit} />
    </View>
  )
}
