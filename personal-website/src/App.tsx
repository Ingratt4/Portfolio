import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Box } from "@mui/material";
import MainPage from "./Components/MainPage";

const theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "inter",
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100vh",
            width: "100%", // Ensure full width
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
          }}
        >
          <Box
            sx={{ height: "100vh", scrollSnapAlign: "start", width: "100%" }}
          >
            <MainPage />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
