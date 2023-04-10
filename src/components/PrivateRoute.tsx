import { Navigate, RouteProps } from 'react-router-dom'

export const PrivateRoute = ({ children}: { children: JSX.Element}): JSX.Element => {
  const isLogin = true
  return isLogin ? children: <Navigate to="/login" />
}
