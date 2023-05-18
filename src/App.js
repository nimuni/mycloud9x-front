import { RouterProvider } from 'react-router-dom'
import router from './components/pages/router'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo ,green, purple } from '@mui/material/colors';

function App() {
  // https://mui.com/material-ui/customization/theming/
  const theme = createTheme({
    palette: { // 자주사용하는 컬러를 palette로 설정한다.
      primary: {
        main: indigo[900],
      },
      secondary: {
        main: indigo[900],
      },
      typography: { // 폰트설정
          fontFamily: ["Noto Sans KR", "sans-serif", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"].join(",")
      }
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
