import React, { useCallback } from 'react'
import { useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [ counter,setCounter ] = useState(10); 

    const incrementFather = useCallback(
        (value)=> {
            setCounter( (c) => c + value )
        },
        [],
    )

    // const incrementFather = ( ) => {
    //     setCounter( counter + 1 )
    // }

  return (
    <>
    <h1>useCalback Hook: { counter }</h1>
    <hr/>
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}

export default CallbackHook
