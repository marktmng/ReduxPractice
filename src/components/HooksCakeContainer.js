import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function HooksCakeContainer() {
   const numOfCakes = useSelector(state => state.numOfCakes)
   const useDispatch = useDispatch()
  return (
    <div>
        <h2> Num of cakes - {numOfCakes}</h2>
        <button > Buy Cake </button>
    </div>
  )
}

export default HooksCakeContainer

// video watched part 21 0:42