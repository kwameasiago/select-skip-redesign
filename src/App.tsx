import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Index from './pages/Index';
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="skip-hire-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
