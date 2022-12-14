export type RootStackParamList = {
  Landing: undefined
  Login: undefined
  CreateAccountEmail: undefined
  CreateAccountPassword: { email: string }
  CreateAccountVerify: undefined
  Main: undefined
  SettingsRootScreen: undefined
  HomeRootScreen: undefined
  TravellersRootScreen: undefined
  TravellersAdd: undefined
  TravellersForm: undefined
  ResourcesRootScreen: undefined
  CBSAConsent: undefined
  CBSAConfirm: undefined
  CBSAAcknowledge: undefined
  PostOnboardingInfo: undefined
  TravellersInfo: undefined
}

export interface ITraveller {
  documentType: string
  country: string
  documentNumber: string
  surname: string
  givenNames: string
  dateOfBirth: string
}
