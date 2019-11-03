import React from 'react'
import { Route } from 'react-router-dom';
import Home from './containers/home';
import Login from './containers/login';
import NotFound from './containers/notFound';
import App from './App';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      },
      {
        component: NotFound,
        key: '404'
      },
    ]
  },
  
]

// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route> 
//   </div>
// )
