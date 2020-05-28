import React, { useState } from 'react'
import { connect } from 'react-redux'
import { formRequest } from '../actions'

const Register = (props) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.formRequest(form);
    props.history.push('/chat');
  }
  return (
    <div className="container-from-register">
      <form className='form-register' onSubmit={handleSubmit}>
        <h1>Form register</h1>
        <input type="text" name='username' id='username' placeholder='User name' onChange={handleChange} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
const mapDispatchToProps = {
  formRequest,
}
export default connect(null, mapDispatchToProps)(Register)