import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="skip-hire-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
