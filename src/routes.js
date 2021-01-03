import { BaseRedux } from 'containers/BaseContainer';
import { loginRedux } from 'containers/loginContainer';
import { newsRedux } from 'containers/newsContainer';
import { profileRedux } from 'containers/profileContainer'

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
    component: newsRedux
  },
  {
    path: '/profile',
    exact: true,
    component: profileRedux
  }
]