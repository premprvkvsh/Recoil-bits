
// import './App.css'
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
// import { useMemo } from 'react'


// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(networkAtom)
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   const notificationsAtomCount = useRecoilValue(notificationsAtom)
//   const messagingAtomCount = useRecoilValue(messagingAtom)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   // const totalNotificationCount = useMemo(() => {
//   //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
//   // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]) 

//   return (
//     <>
//       <button>Home</button>
      
//       <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
//       <button>Jobs {jobsAtomCount}</button>
//       <button>Messaging ({messagingAtomCount})</button>
//       <button>Notifications ({notificationsAtomCount})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// export default App

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { allNotificationsAtom, totalNotificationSelector } from './atoms'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [allNotification, setAllNotification] = useRecoilState(allNotificationsAtom);
  const totalCount = useRecoilValue(totalNotificationSelector);

  // normal way to get from server and then update to setAllNotification
  /*
  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/notifications')
      .then((res) => {
        // console.log(res.data);
        setAllNotification(res.data);
      })
  }, [])
  */

  function checkForConversion(count) {
    return (count > 6) ? "6+" : count
  }

  return (
    <>
      <button>Home</button>
      <button>My network ({checkForConversion(allNotification.network)})</button>
      <button>Jobs ({checkForConversion(allNotification.jobs)})</button>
      <button>Messaging ({checkForConversion(allNotification.messaging)})</button>
      <button>Notification ({checkForConversion(allNotification.notifications)})</button>
      <button>Me ({totalCount})</button>
    </>
  )
}

export default App