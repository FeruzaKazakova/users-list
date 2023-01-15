import React from 'react'
import './UsersItem.css'

export const UsersItem = ({user}) => {
    const {text, number} = user;
  return (
    <li>
        <p>{text} ({number} years old)</p>
    </li>
  )
}
