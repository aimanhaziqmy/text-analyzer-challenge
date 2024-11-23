import TextAnalyzer from './pages/TextAnalyzer'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextAnalyzer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
