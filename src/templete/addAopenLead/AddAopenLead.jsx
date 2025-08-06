import {useState} from 'react'
import'./addAopenLead.css'
import axios from 'axios'

const AddAopenLead = () => {
    const [leadData , setLeadData] =useState()
    const handelSetLeadData = (e) =>{
        setLeadData(
            {
                ...leadData,
                [e.target.name] : e.target.value
            }
        )
    } 
    const handelSubmitLeadData = async (e) =>{
        e.preventDefault()
        try {
            const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/path/post/account/add/lead/connector/api/v6/${localStorage.getItem('email')}` , leadData)
            resData.data.json.success===false?alert(resData.data.json.data) : window.location.reload()
        } catch (error) {
            alert('INTERNAL SARVER ERROR...')
        }
    }
  return (
      <>
      <main className="main-div open-account">
        <form onSubmit={handelSubmitLeadData}>
            <fieldset>
                <legend>ADD ACCOUNT LEAD</legend>
                <input type="text" onChange={handelSetLeadData} required name='name' placeholder='ENTER THE NAME ' />
                <input type="email" onChange={handelSetLeadData} required name='email' placeholder='ENTER THE EMIAL' />
                <input type="text" onChange={handelSetLeadData} required name='customer_name' placeholder='ENTER THE CUSTOMER NAME' />
                <input type="email" onChange={handelSetLeadData} required name='customer_email' placeholder='ENTER THE CUSTOEMR EMAIL' />
                <input type="tel" onChange={handelSetLeadData} required name='customer_phone' placeholder='ENTER THE CUSTOEMR PHONE' />
                <p>*Please read the document be carefully befour submit.</p>
                <div className="btn-box">
                    <button type='reset'>RESET</button>
                    <button type='submit'>SUBMIT</button>
                </div>
            </fieldset>
        </form>
      </main>
      </>
  )
}

export default AddAopenLead
