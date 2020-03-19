import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from "../Reusable/List"
import "../../Style/datatypes.css"

const MostFavorited = ({category_id, category_title}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`/api/favorites/all/${category_id}`).then(results => {
      setData(results.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>Most Favorited {category_title}</h1>
      {data && data.length > 0 && (
        <List list={data}
        />
      )}
    </div>
  )
}

export default MostFavorited