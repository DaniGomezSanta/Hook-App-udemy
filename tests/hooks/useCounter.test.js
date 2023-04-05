import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('Pruebas en el usecounter', () => {

    test('Debe retornar los valores por defecto', () => {
      
        const { result } = renderHook( ()=> useCounter());
        const { counter, decrement, increment, reset} = result.current; 

        expect( counter ).toBe(10); 
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ))
    });

    test(' debe generar el counter con el valor de 100', () => {

        // const { result } = renderHook( ()=> useCounter(100));
        // expect( result.current.counter ).toBe(100); 

        // otra forma de hacerlo:
        const { result } = renderHook( ()=> useCounter(100));
        const {counter} = result.current;
        expect( counter ).toBe(100); 

    });

    test('Debe incrementar el contador', () => {
      
        const { result } = renderHook( ()=> useCounter(100));
        const { counter, increment } = result.current;

        act(()=> {
            increment();
            increment(2);
        })

        expect( result.current.counter ).toBe(103)
    });

    test('Debe decrementar el contador', () => {
      
        const { result } = renderHook( ()=> useCounter(100));
        const { counter, decrement } = result.current;

        act(()=> {
            decrement();
            decrement(2);
        })

        expect( result.current.counter ).toBe(97)
    });

    test('Debe realizar el reset del contador', () => {
      
        const { result } = renderHook( ()=> useCounter(100));
        const { counter, reset } = result.current;

        act(()=> {
            reset();
        })

        expect( result.current.counter ).toBe(100)
    })
    
    

    
  
})
