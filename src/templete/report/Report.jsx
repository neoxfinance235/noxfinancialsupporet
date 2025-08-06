import { useState } from 'react'
import './report.css'
import axios from 'axios'

const Report = () => {
    const [reportData, setReportData] = useState()
    const handelReportData = (e) => {
        setReportData(
            {
                ...reportData,
                [e.target.name]: e.target.value
            }
        )
    }
    const handelSubmitReportData = async (e) => {
        e.preventDefault()
        try {
            const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/send/report/${localStorage.getItem('email')}`, reportData)
             
            if(resData.data.json.data==="DATA NOT FOUND"){
                localStorage.clear()
            }
            if (resData.data.json.status === 200) {
                document.getElementById('report').value = ''
                alert(resData.data.json.data)

            }
            else {
                alert(resData.data.json.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="main-div report-div">
            <form>
                <fieldset>
                    <legend>WRITE A REPORT</legend>
                    <textarea name="report" id='report' onChange={handelReportData} rows={15} placeholder='WRITE A REPORT' required maxLength={200}></textarea>
                    <button onClick={handelSubmitReportData}>SEND</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Report
