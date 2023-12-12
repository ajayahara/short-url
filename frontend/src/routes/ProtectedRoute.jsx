import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const isLoggedin=useSelector(store=>store.authReducer.isLoggedin);
    if(!isLoggedin){
       return <Navigate to='/login'/>
    }
  return children
}
