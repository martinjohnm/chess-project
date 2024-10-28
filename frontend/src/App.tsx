import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import { Game } from "./pages/Game"




function App() {

  return (
    <div className="bg-black h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
