import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/click the button/i);
  expect(linkElement).toBeInTheDocument();
});
it('test in progres',()=>{
  expect(2).toBe(2)
})