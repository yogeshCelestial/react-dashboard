import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import TopBar from './screens/globals/TopBar';

function App() {
  const [theme, colorMode] = useMode();
 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
