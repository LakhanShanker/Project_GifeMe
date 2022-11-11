import React from 'react'
import './Home.css'
import Card from './Card'
import Banner from './Banner'
import Footer from './Footer'
import Gform from './Gform'


function Home() {

  return (
    <div className='container-fluid'>
      
      <Gform />
     {/* <img src={img} alt="main_image" className = 'main-pic' /> */}
     <br />
      <h1 className='after-pic' style={{padding:'40px 0',color:'#7c0000'}}>Give your favourite person a gift of his personality.</h1>
      <h3 style={{color:'#7c0000'}} >Having problem while choosing a gift ?</h3>
      <h1 style={{padding:'10px 0',color:'#7c0000'}}>We are here to help you</h1>
      <br />
      <br />
      <Banner/>
      <h1 style={{padding:'10px 0',color:'#7c0000', marginLeft:'15px'}}>Top 5 gifts for men</h1>
      <hr style={{width:'100%'}}/>
      <Card/>
      <hr style={{width:'100%'}}/>
      <div>
      <h1 style={{padding:'10px 0',color:'#7c0000', marginLeft:'15px'}}>Top 5 gifts for women</h1>
        <hr style={{width:'100%'}}/>
      <Card/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>

  )
}

export default Home