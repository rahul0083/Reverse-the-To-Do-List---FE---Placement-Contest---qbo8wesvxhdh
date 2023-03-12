import React from 'react';

function ToDo({ todoId, createdAt, text }) {
  return (
    <tr>
      <td>{todoId}</td>
      <td>
        <input type="text" value={text} />
      </td>
      <td>{createdAt}</td>
    </tr>
  );
}

export default ToDo;
