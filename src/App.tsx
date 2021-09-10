import React, {useState} from 'react';
import  Header  from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import ligth from './styles/themes/light';
import dark from './styles/themes/dark';
import usePeristedState from './utils/usePersistedState';
import Head from './components/Head';

const App = () => {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', ligth)

  const toggleTheme = () =>{
    setTheme(theme.title ==='light' ? dark: ligth)
}

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <GlobalStyle/>
          <Header toggleTheme={toggleTheme}/>
      </div>
      <div>
        <Head/>
      </div>
    </ThemeProvider>
  );
}

export default App;
