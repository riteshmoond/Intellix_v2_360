
import ContactForm from "./component/ContactForm"
import Navbar from "./component/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
<<<<<<< HEAD
import Home from "./component/Pages/Home"
=======
import Home from "./Pages/Home"
import "./app.css"
>>>>>>> b8191333b449a188ccc0efd2d8910acb2de91604



function App() {
  return (
    <div className="" >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactForm" element={<ContactForm/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App