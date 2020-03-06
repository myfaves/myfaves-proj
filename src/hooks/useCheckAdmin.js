import {useEffect} from 'react'

const useCheckAdmin = (user, push) => {
  useEffect(() => {
    if(!user.is_admin){
      push('/dashboard')
    }
  }, [user.is_admin, push])
}

export default useCheckAdmin