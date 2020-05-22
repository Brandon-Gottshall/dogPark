import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'
export const UserContext = createContext()
const UserContextProvider = (props) => {
  const [ userID, setUserID ] = useState(false)
  const storeUserID = userID => setUserID(userID)
  return (
    <UserContext.Provider value={{ userID,  storeUserID }}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider;
