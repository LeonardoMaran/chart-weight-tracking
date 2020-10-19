import React from 'react';

const Item = (props) => {

  const { _id, weight, date, name } = props.info;

  const deleteItem = async () => {
    await fetch(`http://localhost:5000/api/${_id}`, {
      method: 'DELETE'
    })

    props.fetchInfo();
  };

  return (
    <>
      <tr>
        <td className='table-cell'>{name}</td>
        <td className='table-cell'>{weight}</td>
        <td className='table-cell'>{date.slice(0, 10)}</td>
        <td className='table-cell'>
          <i className='orange trash icon' style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`}} onClick={deleteItem}></i>
        </td>
      </tr>
    </>
  )
}

export default Item;