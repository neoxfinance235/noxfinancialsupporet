import { useState } from 'react'
import axios from 'axios'
import './connector.css'
const Connector = () => {
  const [connectorData, setConnectorData] = useState()
  const handelSetConnectorsData = (e) => {
    setConnectorData(
      {
        ...connectorData,
        [e.target.name]: e.target.value
      }
    )
  }
  const handelSubmitConnectorData = async (e) => {
    e.preventDefault()
    try {
      if (connectorData.account !== connectorData.account2) {
        alert('ACCOUNT AND CONFORM ACCOUNT ARE NOT SAME')
      } else {
        if (connectorData.gender === "MALE" || connectorData.gender === "FEMALE" || connectorData.gender === 'OTHERS') {
          if(connectorData.password!==connectorData.cpassword){
            alert("PASSWORDS ARE NOT MATCHED...")
          }
          const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/path/set/connector/data/api/v6/${localStorage.getItem('email')}`, connectorData)
          resData.data.json.success === false ? alert(resData.data.json.data) : window.location.reload()
        }
        else {
          alert('PLEASE SELECT YOUR GENDER')
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className="main-div add-connector-div">
      <form onSubmit={handelSubmitConnectorData}>
        <fieldset>
          <legend>ADD CONNECTOR</legend>
          <input type="text" name='name' onChange={handelSetConnectorsData} required placeholder='*ENTER THE FULL NAME' />
          <input type="email" name='email' onChange={handelSetConnectorsData} required placeholder='*ENTER THE EMAIL' />
          <input type="tel" name='phone' onChange={handelSetConnectorsData} required placeholder='*ENTER THE CONTACT SAME AS ADHAR' />
          <div className="gender">
            <p>*Select Gender</p>
            <div className="gender-box">
              <div className="g">
                <input type="radio" name='gender' onChange={handelSetConnectorsData} value={'MALE'} />
                <span>MALE</span>
              </div>
              <div className="g">
                <input type="radio" name='gender' onChange={handelSetConnectorsData} value={'FEMALE'} />
                <span>FEMALE</span>
              </div>
              <div className="g">
                <input type="radio" name='gender' onChange={handelSetConnectorsData} value={'OTHERS'} />
                <span>OTHERS</span>
              </div>
            </div>
          </div>
          <input type="text" name='pincode' onChange={handelSetConnectorsData} required placeholder='*ENTER THE PIN CODE' />
          <input type="text" name='country' onChange={handelSetConnectorsData} required placeholder='*ENTER THE COUNTRY' />
          <input type="text" name='state' onChange={handelSetConnectorsData} required placeholder='*ENTER THE STATE' />
          <input type="text" name='district' onChange={handelSetConnectorsData} required placeholder='*ENTER THE DISTRICT' />
          <input type="text" name='account' onChange={handelSetConnectorsData} required placeholder='*ENTER THE ACCOUNT NO' />
          <input type="text" name='account2' onChange={handelSetConnectorsData} required placeholder='*ENTER THE CONFORM ACCOUNT NO' />
          <input type="text" name='ifcs' onChange={handelSetConnectorsData} required placeholder='*ENTER THE IFCS NO' />
          <input type="text" name='accname' onChange={handelSetConnectorsData} required placeholder='*ENTER THE ACCOUNT HOLDER NAME' />
          <p>*Password is must be 8 charactor ..</p>
          <input type="password" name='password' maxLength={8} minLength={8} onChange={handelSetConnectorsData} required placeholder='*ENTER THE PASSWORD' />
          <input type="password" name='cpassword' maxLength={8} minLength={8} onChange={handelSetConnectorsData} required placeholder='*ENTER THE CONFORM PASSWORD' />
          <p>*Please read the documents be care fully befour submit.Once you submit the form, you can't edit again. </p>
          <div className="button-box">
            <button type='reset'>RESET</button>
            <button type='submit'>SUBMIT</button>
          </div>
        </fieldset>
      </form>
      <footer>
        <h3>&copy; ALL RIGHTS RESERVED BY <span className="c-r">NEOX </span> <span className="c-b">FINANCIAL </span> <span className="c-dp">SUPPORET</span></h3>
      </footer>
    </main>
  )
}

export default Connector
