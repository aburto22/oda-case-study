import { render, screen } from './test-utils';
import App from '@app/App';

test('App', () => {
  render(<App />);

  expect(screen.getByRole('heading')).toBeInTheDocument();
});
