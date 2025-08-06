import { useState } from 'react'
import './employee.css'
import axios from 'axios'
const Employee = () => {
  const [connectorData, setConnectorData] = useState()
  const handelSetEmployeeData = (e) => {
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
          if (connectorData.password !== connectorData.cpassword) {
            alert('PASSWORD ARE NOT MATCHED...')
          }
          else {
            const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/path/set/employee/data/api/v6/${localStorage.getItem('email')}`, connectorData)
            resData.data.json.success === false ? alert(resData.data.json.data) : window.location.reload()
          }
        }
        else {
          alert('PLEASE SELECT THE GENDER')
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
          <legend>ADD EMPLOYEE</legend>
          <input type="text" name='name' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE FULL NAME' />
          <input type="email" name='email' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE EMAIL' />
          <input type="tel" name='phone' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE CONTACT SAME AS ADHAR' />
          <div className="gender">
            <p>*Select Gender</p>
            <div className="gender-box">
              <div className="g">
                <input type="radio" name='gender' onChange={(handelSetEmployeeData)} value={'MALE'} />
                <span>MALE</span>
              </div>
              <div className="g">
                <input type="radio" name='gender' onChange={(handelSetEmployeeData)} value={'FEMALE'} />
                <span>FEMALE</span>
              </div>
              <div className="g">
                <input type="radio" name='gender' onChange={(handelSetEmployeeData)} value={'OTHERS'} />
                <span>OTHERS</span>
              </div>
            </div>
          </div>
          <input type="text" name='pincode' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE PIN CODE' />
          <input type="text" name='country' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE COUNTRY' />
          <input type="text" name='state' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE STATE' />
          <input type="text" name='district' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE DISTRICT' />
          <input type="text" name='account' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE ACCOUNT NO' />
          <input type="text" name='account2' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE CONFORM ACCOUNT NO' />
          <input type="text" name='ifcs' onChange={(handelSetEmployeeData)} placeholder='*ENTER THE IFCS NO' />
          <input type="text" name='accname' onChange={(handelSetEmployeeData)} required placeholder='*ENTER THE ACCOUNT HOLDER NAME' />
          <input type="text" name='salary' onChange={(handelSetEmployeeData)} required placeholder='MONTHLY SALARY OF EMPLOYEE' />
          <input type="text" name="post" onChange={(handelSetEmployeeData)} required placeholder='ENTER THE POST OF EMPLOYEES' />
          <p>*Password is must be 8 charctor</p>
          <input type="password" name='password' minLength={8} maxLength={8} onChange={handelSetEmployeeData} required placeholder='*ENTER TEH PASSWORD' />
          <input type="password" name='cpassword' minLength={8} maxLength={8} onChange={handelSetEmployeeData} required placeholder='*ENTER THE CONFORM PASSWORD' />
          <p>*Please read the documents be care fully befour submit.Once you submit the form, you can't edit again. </p>
          <div className="button-box">
            <button type='reset'>RESET</button>
            <button>SUBMIT</button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}

export default Employee
