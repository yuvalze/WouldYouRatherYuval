import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const CheckRoute = ({ component: Component, ...restProps }) => {
  console.log('CheckRoute restProps=')
  console.log(restProps)
  console.log('CheckRoute component=')
  console.log(Component)

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
export default CheckRoute;