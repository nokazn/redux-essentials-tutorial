import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders a counter component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const linkElement = screen.getByTestId('counter');
  expect(linkElement).toBeInTheDocument();
});
