import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='selected'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/' activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}