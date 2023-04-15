import { AccountState } from '../stores/account/types'
import { useSelector } from 'react-redux'
import { AppState } from '../stores'
import { Login } from '../pages/Account'

export const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account )
  return account.token ? children : <Login/>
}
