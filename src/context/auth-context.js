import { createContext, useContext, useState, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import { collection, query, where, getDocs, getDoc,doc } from "firebase/firestore";
import { db,auth } from "../utils/firebase";
import { AlertSnackBar } from '../Components/common/alert-snackbar';
import { getOrigin } from '../utils/get-origin';
const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
    UPDATE_USER: 'UPDATE_USER',
    SEARCH_USER:'SEARCH_USER',
    AUTHTYPE:'AUTHTYPE',
};

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: {},
   mapData:{},
   authType:"user",
};

const handlers = {
    [HANDLERS.INITIALIZE]: (state, action) => {
        const user = action.payload;
        const authType =action.payload;
        const mapData =action.payload;
        return {
            ...state,
            ...(
                // if payload (user) is provided, then is authenticated
                user
                    ? ({
                        isAuthenticated: true,
                        isLoading: false,
                        user
                    })
                    : ({
                        isLoading: false
                    }),
                    authType
                    ? ({
                        isAuthenticated: true,
                        isLoading: false,
                        authType
                    })
                    : ({
                        isLoading: false
                    }),
                    mapData
                    ? ({
                        isAuthenticated: true,
                        isLoading: false,
                        mapData
                    })
                    : ({
                        isLoading: false
                })    
            )
        };
    },
    [HANDLERS.SIGN_IN]: (state, action) => {
        const user = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    [HANDLERS.SIGN_OUT]: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    },
    [HANDLERS.UPDATE_USER]: (state, action) => {
        const user = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    [HANDLERS.AUTHTYPE]: (state, action) => {
        const authType = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            authType
        };
    },
    [HANDLERS.SEARCH_USER]: (state, action) => {
        const mapData = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            mapData,
        };
    },
};

const reducer = (state, action) => (
    handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const [showTost, setShowTost] = useState(false);
    const [tost, setTost] = useState({
        tostMsg: "",
        tostType: "success",
    });
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialized = useRef(false);

    const initialize = async () => {
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (initialized.current) {
            return;
        }

        initialized.current = true;

    };


    const signIn = async () => {
        // const docRf = query(
        //     collection(db, "donors"),
        //     where("uid", "==", auth.currentUser.uid),
        // );
        // const querySnapshot = await getDocs(docRf);
        // if (querySnapshot?.docs?.length == 0) {
        //     const path = getOrigin()
        //     console.log(path)
            // if (path == 'login') {
            //     setShowTost(true);
            //     setTost({
            //         tostMsg: "عنوان البريد أو كلمة السر غير صحيحة",
            //         tostType: "error",
            //     });
            // }
    //         throw Error("there is an error")
    //     }
    //     else {
    //         const user = querySnapshot.docs[0].data()
    //         console.log(user.email)
    //         localStorage.setItem('blood-bank-username', user.email)
    //         localStorage.setItem('blood-bank-password', user.password)
    //         delete user.password
    //         dispatch({
    //             type: HANDLERS.SIGN_IN,
    //             payload: user
    //         });
    //         return true
    //     }
     };

    const signOut = async () => {
        localStorage.setItem('blood-bank-username', '')
        localStorage.setItem('blood-bank-password', '')
        dispatch({
            type: HANDLERS.SIGN_OUT
        });
    };

     const searchUserAndCenters = (mapData)=>{
           dispatch({
              type: HANDLERS.SEARCH_USER,
              payload: mapData,
           })
           console.log(mapData);
       }
       const AuthTypeUserOrCenter = (authType)=>{
        dispatch({
           type: HANDLERS.SEARCH_USER,
           payload: authType,
        })
       // console.log(authType);
    }

    const updateUser = (user) => {
        dispatch({
            type: HANDLERS.UPDATE_USER,
            payload: user

        })
    }


    const checkIfAuthenticated = async () => {
       // const id=localStorage.getItem("uid");
       const id="JQfnKqa2aWNk1Gbaq39qUBmg0fb2";
        const docRef = doc(db, "donors",id);
        const docSnap = await getDoc(docRef);
        const user = docSnap.data(); 
        updateUser(user); 
        if (docSnap.exists()) {
            AuthTypeUserOrCenter("user");
            dispatch({
                        type: HANDLERS.SIGN_IN,
                        payload: user
                    });
                    return true
            
          } 
        else{
        const docCenter = doc(db, "centers",id);
        const docSnapCenter = await getDoc(docCenter);
        const user = docSnapCenter.data(); 
        updateUser(user);
        if (docSnap.exists()) {
            AuthTypeUserOrCenter("center");
            dispatch({
                        type: HANDLERS.SIGN_IN,
                        payload: user
                    });
                    return true
          } 
        }}

    const checkAuthenticated = async (user) => {
        dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user
        });
    }
    return (
        <AuthContext.Provider
            value={{
                ...state,
                user: state.user,
                mapData:state.mapData,
                authType:state.authType,
                AuthTypeUserOrCenter,
                signIn,
                signOut,
                checkAuthenticated,
                updateUser,
                checkIfAuthenticated,
                searchUserAndCenters,
            }}
        >
            <AlertSnackBar
                open={showTost}
                handleClose={() => setShowTost(false)}
                message={tost.tostMsg}
                type={tost.tostType}
            />
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
