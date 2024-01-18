import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMsg = () => {
  return (
    <FacebookProvider appId="142778725593069" chatSupport>
        <CustomChat pageId="147995528391633" minimized={true}/>
      </FacebookProvider>  
  )
}

export default FacebookMsg