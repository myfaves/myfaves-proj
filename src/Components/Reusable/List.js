import React from "react"
import Card from "../Card"

const List = ({ list, removeFavorite, favorite}) => (
  <div className="list-container">
    <div className="data-list-container">
      {list.map((e, i) => (
        <Card
          key={i}
          image={e.image}
          body={e}
          favorite_id={e.favorite_id}
          favorite={favorite}
          removeFavorite={removeFavorite && removeFavorite}
        />
      ))}
    </div>
  </div>
)

export default List
