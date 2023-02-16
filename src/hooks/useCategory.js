import { useContext } from 'react'
import ContexCategory from '../context/CategoríasProvider'

function useCategory() {
  return useContext(ContexCategory)
}

export default useCategory
