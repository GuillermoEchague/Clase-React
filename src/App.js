import {useState} from 'react'; // hook
import Splash from './Components/SplashScreen';
import {ThemeProvider} from 'styled-components';


const LightTheme = {
  pageBackground: 'white',
  titlecolor: '#dc658b',
  tagLineColor:'black'
};

const DarkTheme = {
  pageBackground: '#282c36',
  titlecolor: 'lightpink',
  tagLineColor:'lavender'
};


const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App(){
  const [theme, setTheme] = useState('light');
  return(
    <ThemeProvider theme= {themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}


export default App;