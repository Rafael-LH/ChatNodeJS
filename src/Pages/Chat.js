import React, { useState } from 'react'
import { connect } from 'react-redux'
const Chat = (props) => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  const templateMessage = (message) => {
    return {
      `
      <p>${props.user.username}: ${message}</p>
      `
  }
}
const handleSubmit = async (e) => {
  e.preventDefault();

}
return (
  <div className="container-chat">
    <div id="content-messages" className='content-messages'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos fugiat numquam placeat atque architecto voluptate saepe distinctio molestias sint impedit in cupiditate tenetur, obcaecati doloribus esse laudantium, fuga culpa?</p>
    </div>
    <form className="form-container" onSubmit={handleSubmit}>
      <span htmlFor="">{props.user.username || 'Anonimo'}</span>
      <div className="form-item">
        <input type="text" name='message' placeholder='Ingresa el mensaje' onChange={handleChange} />
        <button type='submit'> > </button>
      </div>
    </form>
  </div>
)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(Chat)