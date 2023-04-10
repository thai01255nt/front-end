import { Navigate } from 'react-router-dom'
import { AccountState } from '../stores/account/types'
import { useSelector } from 'react-redux'
import { AppState } from '../stores'

export const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account )
  console.log(account)
  return account.token ? children : <Navigate to="/login" />
}
