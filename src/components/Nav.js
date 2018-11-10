import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/homePage' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='selected'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/logout' activeClassName='active'>
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}