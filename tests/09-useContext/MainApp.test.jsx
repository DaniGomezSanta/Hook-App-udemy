import { render, screen } from "@testing-library/react"
import MainApp from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp/>', () => {

    test('Debe mostrar el HomePage', () => {
      
        render( 
          <MemoryRouter>
              <MainApp/>
          </MemoryRouter> 
        );
        
        expect( screen.getByText('Home Page')).toBeTruthy(); 
    });

    test('Debe mostrar el LoginPage', () => {
      
        render( 
          <MemoryRouter initialEntries={['/login']}>
              <MainApp/>
          </MemoryRouter> 
        );
        
        expect( screen.getByText('Login')).toBeTruthy(); 
    });
    
  
})
