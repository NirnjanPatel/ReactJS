// forms in react works as Normal forms in html
import { useState } from 'react';
import { ReactDOM } from 'react';
import React from 'react';

function Forms1() {
  return (
      <div>
          <lable>Enter your name : </lable>
          <input type="text" name='name' />
          <input type={'button'} value={'Submit'} id='submitButton' />
    </div>
  )
}

export default Forms1;