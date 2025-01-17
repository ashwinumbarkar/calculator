import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './Calculator/Calculator';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Calculator/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Check initial Ouptut Screen 0', () => {
  render(<Calculator />);
  const outputScreen = screen.getByTestId('OutputScreen');
  expect(outputScreen).toBeInTheDocument();
  expect(outputScreen.textContent).toBe("0");
});


test('check All buttons are appeared', () => {
  render(<Calculator />);
 ["C",0,1,2,3,4,5,6,7,8,9,"+","-","/","*","="].map((singlebtn)=>{
  const outputScreen = screen.getByTestId(`Calbtn${singlebtn}`);
  expect(outputScreen).toBeInTheDocument();
 } )
 
});

test('Check all button are working except', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('+');


  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1+'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1+2');
  
});

test('Clear Button', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('+');
  const ClearBtn = screen.getByText('C');


  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1+'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1+2');

  fireEvent.click(ClearBtn);
  expect(outputScreen.textContent).toBe('0');
});