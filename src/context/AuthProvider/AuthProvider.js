import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app);

const createUser =(email,password)=>{
    //setLoading(false)
    return createUserWithEmailAndPassword(auth,email,password)
 }

const authInfo = {createUser};

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;