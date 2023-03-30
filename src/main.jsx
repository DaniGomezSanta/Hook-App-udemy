import React from 'react'
import ReactDOM from 'react-dom/client'
import CallbackHook from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
// import MemoHook from './06-memos/MemoHook'
// import Memorize from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect'
// import FocusScreen from './04-useREf/FocusScreen'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import HooksApp from './HooksApp'
// import './08-useReducer/intro-reducer'; 

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre/> */}
    <TodoApp/>
  </React.StrictMode>,
)
