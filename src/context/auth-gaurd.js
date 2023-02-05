import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from './auth-context';
import { getOrigin } from '../utils/get-origin';
import { auth, db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNotificationContext } from './notification-context';

export const AuthGuard = (props) => {
    const { children } = props;
    const { checkIfAuthenticated, user, signIn, updateUser } = useAuthContext();
    const { checkIfnotificationenticated } = useNotificationContext();
    const ignore = useRef(false);
    const [checked, setChecked] = useState(false);
    const [FCMToken, setFCMToken] = useState('');
    const navigate = useNavigate()
    useEffect(
        () => {
            const checkAuth = async () => {
                checkIfAuthenticated()
                checkIfnotificationenticated()
                    .then((data) => {
                        setChecked(true)
                        const path = getOrigin()
                        // if (path == 'login')
                        //     navigate('/')
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                // const docRef = doc(db, "donors", auth?.currentUser?.uid);
                // const docSnap = await getDoc(docRef);
                // const user = docSnap.data(); 
                // updateUser(user);
                // console.log("jhgfjdb")
            }
            if (!checked) {
                checkAuth();
            }
        },
        []
    );

    // if (!checked) {
    //     return null;
    // }

    // If got here, it means that the redirect did not occur, and that tells us that the user is
    // authenticated / authorized.

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};
