
import ContactForm from "./component/ContactForm"
import Navbar from "./component/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"



function App() {
  return (
    <div className="" >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contactForm" element={<ContactForm/>}/>
         <Route path="/products" element={<div className="h-screen flex items-center justify-center">Products Page</div>} />
        {/* <Route path="/products/Genius Strix" element={<div className="h-screen flex items-center justify-center">Genius Strix Page</div>} /> */}
        {/* <Route path="/products/Cogni CampuX" element={<div className="h-screen flex items-center justify-center">Cogni CampuX Page</div>} /> */}
        {/* <Route path="/products/HMS Hostello" element={<div className="h-screen flex items-center justify-center">HMS Hostello Page</div>} /> */}
        {/* <Route path="/pricing" element={<div className="h-screen flex items-center justify-center">Pricing Page</div>} /> */}
        {/* <Route path="/support" element={<div className="h-screen flex items-center justify-center">Help & Support Page</div>} /> */}
        {/* <Route path="/talk-to-sale" element={<div className="h-screen flex items-center justify-center">Talk to Sales Page</div>} />  */}
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App