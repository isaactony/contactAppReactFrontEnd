import '../App.css';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";

import { ContactList } from './ContactList.js';
import { ContactForm } from './ContactForm.js';
import { ContactDetail } from './ContactDetail.js';




function App() {

  return (
      <div className="container">
        <BrowserRouter>
         <Routes>
          
            <Route path="/" element={<ContactList />} />
            <Route path="/addcontact" element={<ContactForm />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />

          </Routes>
  
          </BrowserRouter>
     
        
      </div>

  );
}

export default App;
