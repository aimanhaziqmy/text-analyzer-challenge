import TextAnalyzer from './pages/TextAnalyzer'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextAnalyzer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
