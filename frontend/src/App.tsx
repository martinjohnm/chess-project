import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import { Game } from "./pages/Game"
import { Layout } from "./layout/Layout"
import { Login } from "./pages/Login"




function App() {

  return (
    <div className="bg-black h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Layout><Landing/></Layout>}/>
          <Route path="/game" element={<Layout><Game/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
