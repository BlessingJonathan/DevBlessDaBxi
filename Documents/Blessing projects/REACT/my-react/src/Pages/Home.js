import React from 'react'
import './Home.css'
//import Popular from '../components/Popular/Popular'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Items from '../components/Item/Items'
import Footer from '../components/Footer/Footer'
function Home() {
 
  return (
    <div>
       <Navbar/>
       <Items/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Home
