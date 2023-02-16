import { useEffect, createContext, useState } from 'react'

const ContexCategory = createContext()

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] =useState([])
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.json())
      .then(data => setCategories(data.drinks))
  }, [])

  return (
    <ContexCategory.Provider value={{
      categories,
    }}>{children}</ContexCategory.Provider>
  )
}

export default ContexCategory
export { CategoryProvider }
