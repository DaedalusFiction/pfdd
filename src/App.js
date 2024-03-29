import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Photos from "./routes/Photos";
import Documents from "./routes/Documents";
import Nopage from "./routes/Nopage";
import Register from "./routes/Register";
import { createTheme, ThemeProvider } from "@mui/material";
import Admin01 from "./routes/Admin01";
import SampleQuestions from "./routes/SampleQuestions";

const theme = createTheme({
    palette: {
        primary: {
            main: "#758ecd",
        },
        secondary: {
            main: "#e72419",
        },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="photos" element={<Photos />} />
                        <Route path="documents" element={<Documents />} />
                        <Route path="register" element={<Register />} />
                        <Route
                            path="sample-questions"
                            element={<SampleQuestions />}
                        />
                        <Route path="admin01" element={<Admin01 />} />
                        <Route path="*" element={<Nopage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
