import { useEffect, useState } from 'react';
import { getAuth,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import initialize from '../Firebase/firebase.init';
initialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [destinations, setDestinations] = useState([]);
    const [destination, setDestination] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser({});
            alert("Sign Out Successfully!!!")
        })
    }
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    })
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [auth])
    return {
        user,
        setUser,
        destinations,
        setDestinations,
        destination,
        setDestination,
        logInUsingGoogle,
        logOut

    }
};

export default useFirebase;