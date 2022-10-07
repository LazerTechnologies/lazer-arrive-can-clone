import * as React from 'react'
import Routes from './src/components/Routes'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#245067',
    outline: '#ffffff',
  },
}

const App = () => (
  <PaperProvider theme={theme}>
    <Routes />
  </PaperProvider>
)

export default App
