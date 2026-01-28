import React from 'react'

const InputField = ({textarea, label,...props}) => {
  return (
    <div>
    <label>{label}</label>
    {textarea ? <textarea {...props}/> : <input {...props}/>}
    </div>
  )
}

export default InputField