import React from "react"
import Card from "../Card"

const List = ({ list, removeFavorite }) => (
  <div className="list-container">
    <div className="data-list-container">
      {list.map((e, i) => (
        <Card key={i} image={e.image} body={e} favorite_id={e.favorite_id} removeFavorite={removeFavorite} />
      ))}
    </div>
  </div>
)

export default List
