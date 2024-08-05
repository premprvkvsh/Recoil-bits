import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { netWorkAtom, jobsAtom, notificationAtom, messagingAtom } from './atoms'


function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const [networkNotificationCount] = useRecoilState(netWorkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({notificationAtomCount})</button>
      <button>Notification ({messagingAtomCount})</button>
      <button onClick={() => {
        setMessagingAtomCount(messagingAtomCount + 1);
      }}>Me</button>
    </>
  )
}

export default App
