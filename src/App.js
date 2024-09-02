import React, { useContext, useState } from 'react'
import {userConText} from './context';
import Header2 from './context-header2';
import Content2 from './context-content2';



export default function App(){
  let [user, setUser] = useState('')

  
  return (
    <userConText.Provider value={[user, setUser]}>
      <Header2/>
      <Content2/>
    </userConText.Provider>
  )
}
