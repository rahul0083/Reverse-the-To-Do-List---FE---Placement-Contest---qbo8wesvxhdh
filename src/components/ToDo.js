import React from 'react'

export default function ToDo(props) {
  return (
    <div>
      <tr>
    <td>
      <p>{props.todoId}</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>{props.createdAt}</p>
    </td>
  </tr>
    </div>
  )
}
