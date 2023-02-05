import {useContext, createContext,useReducer,useRef } from "react";
import {  db } from '../utils/firebase';
import PropTypes from 'prop-types';
import { collection, getDocs, query, where } from "firebase/firestore";

const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    NOTIFICATION_DONORS:' NOTIFICATION_DONORS',
};

const initialState = {
    isAuthenticated: false,
    isLoading: false,
   notificationDonors :[]
};
const handlers = {
    [HANDLERS.INITIALIZE]: (state, action) => {
        const notificationDonors = action.payload;
        return {
            ...state,
            ...(
                notificationDonors
                    ? ({
                        isAuthenticated: true,
                        isLoading: false,
                        notificationDonors
                    })
                    : ({
                        isLoading: false
                    })
            )
        };
    },
    [HANDLERS.NOTIFICATION_DONORS]: (state, action) => {
        const notificationDonors = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            notificationDonors,
        };
    },
};
const reducer = (state, action) => (
    handlers[action.type] ? handlers[action.type](state, action) : state
);

export const NotificationContext = createContext({undefined});
export const NotificationProvider = (props) => {
    
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialized = useRef(false);

    const initialize = async () => {
        if (initialized.current) {
            return;
        }

        initialized.current = true;

    };
    const DispatchNotificationDonors = (notificationDonors)=>{
        dispatch({
           type: HANDLERS.NOTIFICATION_DONORS,
           payload: notificationDonors,
        })
       // console.log(notificationDonors);
    }
    const checkIfnotificationenticated = async () => {
        const id=localStorage.getItem("uid");
        const q = query(
            collection(db, "notifications"), 
            where("donor_id", "==", id));
        await getDocs(q).then((response) => {
            const DataNotification = response.docs.map((doc) => ({ id:doc.id, data: doc.data() }));
            DispatchNotificationDonors(DataNotification);
           // console.log(DataNotification.id);
          })
        }
    return (
        <NotificationContext.Provider value={{
            ...state,
            notificationDonors: state.notificationDonors,
            checkIfnotificationenticated,
            DispatchNotificationDonors,

        }}>{props.children}</NotificationContext.Provider>

    );
};

NotificationProvider.propTypes = {
    children: PropTypes.node
};
export const NotificationConsumer = NotificationContext.Consumer;

export const useNotificationContext = () => useContext(NotificationContext);


