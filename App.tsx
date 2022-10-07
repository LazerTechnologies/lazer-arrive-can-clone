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
    primary: 'tomato',
    secondary: 'yellow',
  },
}

const App = () => (
  <PaperProvider theme={theme}>
    <Routes />
  </PaperProvider>
)

export default App
