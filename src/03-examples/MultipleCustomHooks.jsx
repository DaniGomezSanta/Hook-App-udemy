import React from 'react'
// import { useFetch } from '../hooks/useFetch';
// import { useCounter } from '../hooks/useCounter';
import { useCounter, useFetch } from '../hooks/index';
import { LoadingQuote, Quote } from './index';
// import {LoadingQuote} from './LoadingQuote';
// import {Quote} from './Quote';


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
// console.log({data,  isLoading, hasError});


const { author, quote } = !!data && data[0];



  return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr/>

    {/* {
      isLoading ? 
      (
        <div className='alert alert-info text-center'>
          Loading...
        </div>
      ):
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
    } */}

    {
      isLoading?
      <LoadingQuote/> 
      : 
      <Quote author={author} quote={quote}/>

    }


    <button 
      className='btn btn-primary'
      disabled={ isLoading }
      onClick={ ()=>increment() }>
      Next quote
    </button>
    </>
  )
}


