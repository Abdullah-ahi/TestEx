import { BaseRedux } from 'containers/BaseContainer';
import { loginRedux } from 'containers/loginContainer';
import { News } from 'components/news'

export const routes = [
  
  {
    path: '/',
    exact: true,
    component: BaseRedux
  },
  {
    path: '/login',
    exact: true,
    component: loginRedux
  },
  {
    path: '/news',
    exact: true,
    component: News
  }
]