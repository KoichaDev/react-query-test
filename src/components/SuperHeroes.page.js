import { useState, useEffect, useContext } from 'react'
import endPointContext from 'store/end-points-context';
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const endPointCtx = useContext(endPointContext)

  const url = endPointCtx.superHeroes;

  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}
