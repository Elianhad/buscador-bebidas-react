import { useContext } from 'react'
import ContexCategory from '../context/Categor√≠asProvider'

function useCategory() {
  return useContext(ContexCategory)
}

export default useCategory
