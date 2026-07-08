// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from "./UserContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContext.Provider
        value={{
          name:"jayanti",
          age:20,
          contact: "9876543210"
        }}
        >
        <App/>
      </UserContext.Provider>

  </BrowserRouter>
)