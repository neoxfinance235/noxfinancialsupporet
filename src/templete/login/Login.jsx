import { useState } from 'react'
import './login.css'
import axios from 'axios'
const Login = () => {
  const [loginData, setLoginData] = useState()
  const handelSetLoginData = (e) => {
    setLoginData(
      {
        ...loginData,
        [e.target.name]: e.target.value
      }
    )
  }
  const handelSubmitLoginForm = async (e) => {
    e.preventDefault()
    try {
      const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/path/login/v6`, loginData)
      if (resData.data.json.success === true) {
        localStorage.setItem('email', resData.data.json.data.email)
        localStorage.setItem('name', resData.data.json.data.name)
        localStorage.setItem('id', resData.data.json.data._id)
        localStorage.setItem('profilepic', resData.data.json.data.profilepic)
        localStorage.setItem('phone', resData.data.json.data.phone)
        window.location.reload()   
      }
      else {
        alert(resData.data.json.data)
      }
    } catch (error) {
      alert('INTERNAL SARVER ERROR')
    }
  }
  return (
    <>
      <div className="login-contrenar">
        <form onSubmit={handelSubmitLoginForm}>
          <fieldset>
            <legend>Log In Form</legend>
            <input type="email" onChange={handelSetLoginData} name='email' required placeholder='ENTER YOUR EMAIL' />
            <input type="password" minLength={8} maxLength={8} onChange={handelSetLoginData} name='password' required placeholder='ENTR YOUR PASSWORD' />
            <button type='submit'>LOGIN</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Login
