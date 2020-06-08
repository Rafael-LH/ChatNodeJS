import React, { useState, useEffect, useRef } from 'react'

const Chat = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('formFile'))
    const file = document.getElementById('spoolerID').files[0]
    formData.append('spoolerID', file);

    await fetch('/chat/', {
      method: 'post',
      body: formData,
    })
  }
  return (
    <form className="form-container" id='formFile' onSubmit={handleSubmit}>
      <input type="file" name='spoolerID' id='spoolerID' />
      <button type='submit'>Save</button>
    </form>
  )
}
export default Chat