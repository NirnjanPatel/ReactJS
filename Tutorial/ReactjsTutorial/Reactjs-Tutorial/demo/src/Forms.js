// forms in react works as Normal forms in html

import React from 'react'

function Forms() {
  return (
      <div>
          {/* <lable>Enter your name : </lable> */}
          <input type="text" name='name' placeholder='Enter your name' />
      <input type={'button'} value={'Submit'} id='submitButton' /> 
      {/* uncontrolled component */}
    </div>
  )
}

export default Forms;