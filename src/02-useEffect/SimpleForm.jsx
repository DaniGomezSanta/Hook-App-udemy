import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] =useState({
        username: 'strider',
        email: 'ledangom@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target})=>{
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    useEffect(()=> {
        // console.log('email changed')
    }, [email])

    useEffect(()=> {
        // console.log('formState changed')
    }, [formState])

    useEffect(()=> {
        // console.log('useEffect called')
    }, [])



  return (
    <>
    <h1>Formulario simple</h1>
    <hr/>
    <input
    type='text'
    className='form-control'
    placeholder='Username'
    name='username'
    value={ username }   
    onChange= { onInputChange }
    />

   <input
    type='email'
    className='form-control mt-2'
    placeholder='Email'
    name='email'   
    value={ email }
    onChange= { onInputChange }
    />

    {
        (username === 'strider2') && <Message/>
    }

    </>
  )
}


