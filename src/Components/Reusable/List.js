import React from 'react'
import Card from '../Card'

const List = ({list}) => (
  <div className="list-container">
    <div className="data-list-container">
    {list.map((e, i) => (
      <Card key={i} image={e.image} body={e} favorite_id={e.favorite_id} />
    ))}
    </div>
  </div>
)

export default List