// `import {
//     atom,
//     selector
// } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 102
// });

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// });

// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: 12
// });

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({
//         get
//     }) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationsAtomCount = get(notificationsAtom);
//         const messagingAtomCount = get(messagingAtom);
//         return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
//     }
// })

import axios from "axios";
import {
    atom,
    selector
} from "recoil";

// using async data queries
export const allNotificationsAtom = atom({
    key: "allNotifications",
    /*      it also work
    default: axios.get('https://sum-server.100xdevs.com/notifications')
    .then((res) => {
        return res.data;
    })
    */

    //  wrap the default into selector for async data queries
    default: selector({
        key: 'defaultSelector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotifications",
    get: ({
        get
    }) => {
        const notification = get(allNotificationsAtom);
        return notification.network + notification.jobs + notification.messaging + notification.notifications;
    }
})

// normal approach
/*
export const allNotificationsAtom = atom({
    key: "allNotifications",
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0,
    }
});

export const totalNotificationSelector = selector({
    key: "totalNotifications",
    get: ({ get }) => {
        const notification = get(allNotificationsAtom);
        return notification.network + notification.jobs + notification.messaging + notification.notifications;
    }
})
*/