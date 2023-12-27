import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import { useState } from "react";
import '../src/App.css'

const App = () => {
  const [category,setCategory] = useState("general"); 
  
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>

  
      {/* <Navbar/> */}
      {/* <NewsBoard/> */}

    
    </div>
  )
}

export default App