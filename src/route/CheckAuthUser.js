import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const CheckAuthUser = ({ component: Component, ...restProps }) => {
  let isAuthUser =  {...restProps}.authUser;
  return (
    <Route
      {...restProps}
      render={props =>
        isAuthUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/'/>
        )
      }
    />
  )
}
export default CheckAuthUser;