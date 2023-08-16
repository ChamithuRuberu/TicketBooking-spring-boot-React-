import React, { useState } from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Register = () => {
  const [name, setName] = useState("")
  const[nic, setNIC]=useState("")
  const [email, setEmail] = useState("")
  const [conNo,setconNo]=useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { name: name,nic:nic, email: email,conNo:conNo, password: password, cpassword: cpassword }

    setRecValue([...recValue, newValue])
    console.log(newValue)

    setName("")
    setNIC("")
    setEmail("")
    setconNo("")
    setPassword("")
    setCpassword("")
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='nic' name='nic' value={nic} onChange={(e) => setNIC(e.target.value)} placeholder='NIC' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='contactNO' name='contactNO' value={conNo} onChange={(e) => setconNo(e.target.value)} placeholder='Contact Number' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required />

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Create an Account Successfully</h1>
                <h3>
                  Name : <p>{cureentValue.name}</p>
                </h3>
                <h3>
                  NIC : <p>{cureentValue.nic}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Contact Number : <p>{cureentValue.conNo}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
                <h3>
                  Confirm Password : <p>{cureentValue.cpassword}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Register
