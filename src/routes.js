import { BaseRedux } from 'containers/BaseContainer'
import { LoginForm } from 'components/loginForm'

export const routes = [
  
  {
    path: '/',
    exact: true,
    component: BaseRedux
  },
  {
    path: '/login',
    exact: true,
    component: LoginForm
  }
]