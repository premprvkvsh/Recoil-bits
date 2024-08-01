import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { netWorkAtom } from './atoms'


function App() {
  return <RecoilRoot>
    <MainApp/>
    </RecoilRoot>
}

function MainApp() {
     const networkNotificationCount = useRecoilState(netWorkAtom);
     const jobsAtomCount = useRecoilState(jobsAtom);
     const notificationAtomCount = useRecoilState(notificationAtom);
     const messagingAtomCount = useRecoilState(messagingAtom);
       
     
  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({notificationAtomCount})</button>
      <button>Notification ({messagingAtomCount})</button>

      <button>Me</button>
     </>
  )
}

export default App
