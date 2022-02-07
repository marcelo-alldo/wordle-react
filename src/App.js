import { Provider } from 'react-redux';

// TODO: por que o import não precisa ser 'createTheme' como é a função exportada?

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

import store from './store';
import Routes from './routes';
import DefaultLayout from './config/layout/Default';

function App() {
  const Layout = DefaultLayout;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
