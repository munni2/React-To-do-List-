import React from 'react'
import './ListItem.css'

export default function ListItem(props) {
  const items = props.items;
  const listItem = items.map(item => {
    return <div className="list" key={item.key}>
      <p>{item.text} <span onClick={ () => props.deleteItem(item.key)}>Delete</span></p>
    </div>
  })
  return (
    <div>{listItem}</div>
  )
}
