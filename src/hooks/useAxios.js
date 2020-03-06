import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (url, initialData = [], callback = () => {}) => {
  const [axiosData, setAxiosData] = useState(initialData)
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setAxiosData(data)
        callback(data)
      })
      .catch(err => console.log(err))
  }, [url, callback])
  return [
    axiosData,
    (url, method = "get", body = null, callback = () => {}) => {
      axios(url, { method, body }).then(({ data }) => {
        setAxiosData(data)
        callback(data)
      })
    }
  ]
}

export default useAxios
