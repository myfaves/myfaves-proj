import {useEffect} from 'react'

const useCheckUser = (user, push) => {
  useEffect(() => {
    if(!user.user_id){
      push('/login')
    }
  }, [user.user_id, push])
}

export default useCheckUser