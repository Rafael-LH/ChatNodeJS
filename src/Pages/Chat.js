import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import socket from '../services/clientSocket'

const Chat = (props) => {
  const [form, setForm] = useState({})
  const [dataMessages, setDataMessages] = useState({})
  const nameUser = useRef('anonimo')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  const templateMessage = (message) => {
    const html = message.map(item => {
      return (
        `
          <p>${item.name}: ${item.message}</p>
        `
      )
    }).join(" ")
    document.querySelector("#messages").innerHTML = html;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/chat/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    document.querySelector("#message").value = ''
  }
  useEffect(() => {
    // listen websocket
    socket.on('message', (data) => {
      templateMessage(data)
    })
    const fetchMessages = async () => {
      const response = await fetch('/chat/');
      const { result } = await response.json()
      setDataMessages(result)
    }
    fetchMessages()
  }, [])

  return (
    <div className="container-chat">
      <div className='content-messages'>
        <div id="messages" className='messages'>
          {
            dataMessages.length > 0 &&
            dataMessages.map(item => <p>{`${item.name} : ${item.message}`}</p>)
          }
        </div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <span htmlFor="">{nameUser.current.value || 'Anonimo'}</span>
        <div className="form-item">
          <input type="text" name='name' ref={nameUser} placeholder='Nombre' onChange={handleChange} required />
          <input type="text" name='message' id='message' placeholder='Ingresa el mensaje' onChange={handleChange} required />
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