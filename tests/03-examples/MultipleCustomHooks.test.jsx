import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en MultiplecustomHooks', () => {
  
    const mockIncrement = jest.fn(); 

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=> {
        jest.clearAllMocks(); 
    })


    test('debe mostar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
      
        render( <MultipleCustomHooks/>);

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect( nextButton.disabled).toBeTruthy();
        // screen.debug(); 
    });

    test('Debe mostar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Daniela', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null
        })


        render( <MultipleCustomHooks/>);
        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Daniela')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy(); 

        // screen.debug()
    });

    test('Debe llamar la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Daniela', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null
        })


        render( <MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton ); 

        expect( mockIncrement ).toHaveBeenCalled(); 

    })
    
    
    
})
