import {useState} from 'react'

const useInput = initialState => {
  const [values, setValues] = useState(initialState)
  return [values, ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }]
}

export default useInput