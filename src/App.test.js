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

test('Addition perform', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('+');
  const euqlBtn = screen.getByText('=');


  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1+'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1+2');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('3');
});

test('subtraction perform', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('-');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1-'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1-2');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('-1');
});

test('multiplication perform', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('*');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1*'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1*2');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('2');
});

test('divide perform', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('/');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1/'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1/2');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('0.500');
});

test('divide by zero perform', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByTestId('Calbtn0');
  const operBtn = screen.getByText('/');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1/'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1/0');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('Infinity');
});

test('percentage', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('2');
  const operBtn = screen.getByText('%');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1%'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1%2');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('1');
});

test('with floating value', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('3');
  const operBtn = screen.getByText('/');
  const euqlBtn = screen.getByText('=');
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
  
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('1/'); 
  
  fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('1/3');

  fireEvent.click(euqlBtn);
  expect(outputScreen.textContent).toBe('0.333');
});

test('Checking backspace ', () => {
  render(<Calculator />);

  const numBtn1 = screen.getByText('1');
  const numBtn2 = screen.getByText('3');
  const numBtn3 = screen.getByText('4');
  const numBtn4 = screen.getByText('5');
  const numBtn5 = screen.getByText('6');
  const numBtn6 = screen.getByText('7');
  const operBtn = screen.getByText('/');
  const backSpacebtn = screen.getByText('Backspace');

  
  
  fireEvent.click(numBtn1);
  const outputScreen = screen.getByTestId('OutputScreen'); 
  expect(outputScreen.textContent).toBe('1');
    fireEvent.click(numBtn2);
  expect(outputScreen.textContent).toBe('13'); 
  fireEvent.click(numBtn3);
  expect(outputScreen.textContent).toBe('134'); 
  fireEvent.click(numBtn4);
  expect(outputScreen.textContent).toBe('1345'); 
  fireEvent.click(numBtn5);
  expect(outputScreen.textContent).toBe('13456'); 
  fireEvent.click(numBtn6);
  expect(outputScreen.textContent).toBe('134567'); 
  fireEvent.click(operBtn);
  expect(outputScreen.textContent).toBe('134567/'); 

  fireEvent.click(backSpacebtn);
  expect(outputScreen.textContent).toBe('134567'); 
 
 
});