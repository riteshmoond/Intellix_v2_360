
import ContactForm from "./component/ContactForm"
import Navbar from "./component/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./component/Pages/Home"



function App() {
  return (
    <div className="" >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contactForm" element={<ContactForm/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
      
      {/* jhiy */}
    </div>
  )
}

export default App