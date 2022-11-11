import React from 'react'
import {isMobile} from 'react-device-detect'
import { useState } from 'react'
import './Gform.css'
function Gform() {
    const [val,setVal] = useState({
      gender:'',
      age:'',
      personality:'',
      price:'',
      occasion:'',
      relationship:''
    })
    const [range,setRange] = useState(0)
    const handleChangeGender = (e) =>{
      const data = {
        ...val,
        [e.target.name] : e.target.value
      }
      setVal(data)
      if(e.target.name === 'price'){
        setRange(e.target.value)
      }
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(val);
    }
    return (
   <div >
  <div style={{display: 'flex' ,justifyContent: 'center', marginTop:'10px'}}>
  <a className="btn btn-danger" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
 Customize your gift
  </a>
  </div>
<div className="collapse" id="collapseExample">
  
  <div className="card-body" 
  style={ !isMobile ? {marginTop:'10px', marginLeft:'330px', border:'2px solid #7c0000', textAlign:'center',width:'600px', height:'520px'}:{marginTop:'10px'}}>
    <form className='container'>
  <fieldset className="form-group" >
    <div className="row" style={{marginTop:'10px'}}>
      <legend className="col-form-label col-sm-2">Gender</legend>
      <div className="col-sm-10">
        
          <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="M" onChange={handleChangeGender}/>
          <label style={{marginLeft:'5px'}} className="form-check-label" htmlFor="gridRadios1">
           Male 
          </label>
          <br />
          <input className="form-check-input" type="radio" name="gender" id="gridRadios2" value="F" onChange={handleChangeGender}/>
          <label style={{marginLeft:'5px'}} className="form-check-label" htmlFor="gridRadios2" >
          Female
          </label>
        </div>
    </div>
  </fieldset>
  <br></br>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Age</legend>
      <div className="col-sm-10">
      <select className="custom-select" onChange={handleChangeGender} name="age">
    <option >Please select age</option>
    <option value="10">between 1 to 10</option>
    <option value="20">between 11 to 20</option>
    <option value="30">between 21 to 30</option>
    <option value="40">between 31 to 40</option>
    <option value="50">between 41 to 50</option>
    <option value="60">Above 50</option>
  </select>
  </div>
    </div>
  </fieldset>
  <br></br>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Personality</legend>
      <div className="col-sm-10">
      <select className="custom-select" onChange={handleChangeGender} name='personality'>
    <option >Please select Personality</option>
    <option value="Party Lover">Party Lover</option>
    <option value="Natural Lover">Natural Lover</option>
    <option value="Geek">Geek</option>
    <option value="Classy">Classy</option>
    <option value="Religious">Religious</option>
    <option value="Fitness Freak">Fitness Freak</option>
    <option value="Foodie">Foodie</option>
    <option value="Traveler">Traveler</option>
  </select>
  </div>
    </div>
  </fieldset>
  <br></br>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Price Range</legend>
      <div className="col-sm-10">
      <input type="range" className="custom-range" min="0" max="100" id="customRange1" onChange={handleChangeGender} name='price' />
      <p style={{border:'2px solid #7c0000', width:'50px', marginLeft:'376px'}}>{range}</p>
  </div>
    </div>
  </fieldset>
  <br></br>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Select Occasion</legend>
      <div className="col-sm-10">
      <select className="custom-select" onChange={handleChangeGender} name='occasion'>
    <option >Please select Occasion</option>
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
    <option value="Wedding">Wedding</option>
    <option value="House Warming">House Warming</option>
    <option value="Best Wishes">Best Wishes</option>
  </select>
  </div>
    </div>
  </fieldset>
  <br></br>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0"> Relationship</legend>
      <div className="col-sm-10">
      <select className="custom-select" onChange={handleChangeGender} name='relationship' >
    <option>Please select Relationship</option>
    <option value="Husband">Husband</option>
    <option value="Father">Father</option>
    <option value="Boyfriend">Boyfriend</option>
    <option value="Brother">Brother</option>
    <option value="Son">Son</option>
    <option value="Friend">Friend</option>
    <option value="Grandfather">Grandfather</option>
  </select>
  </div>
    </div>
  </fieldset>
  <br></br>
  <div className="form-group row">
    <div className="col-sm-12">
      <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
</form>
  </div>
</div>

</div>
           

    
  
  )
}

export default Gform
