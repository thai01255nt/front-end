import { Navigate } from 'react-router-dom'
import { AccountState } from '../stores/account/types'
import { useSelector } from 'react-redux'
import { AppState } from '../stores'

export const AccountRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account )
  return account.token ? <Navigate to="/admin/home" /> : <Navigate to="/login" />
}
