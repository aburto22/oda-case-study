import { render, screen, waitFor } from './test-utils';
import App from '@app/App';
import { createApiResponse } from './factories';
import userEvent from '@testing-library/user-event';

const { fetchProducts } = vi.hoisted(() => {
  return { fetchProducts: vi.fn() };
});

vi.mock('@app/clients/oda.ts', () => {
  return {
    fetchProducts,
  };
});

fetchProducts.mockReturnValue(createApiResponse(10, 2));

test('App', async () => {
  render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent('Case study for Oda');

  expect(fetchProducts).toHaveBeenCalledTimes(1);
  expect(fetchProducts).toHaveBeenCalledWith('', 1);

  await waitFor(() =>
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0),
  );

  expect(screen.getAllByRole('listitem').length).toBe(10);

  expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();

  await userEvent.click(
    screen.getByRole('button', {
      name: 'Next',
    }),
  );

  expect(fetchProducts).toHaveBeenCalledTimes(2);
  expect(fetchProducts).toHaveBeenCalledWith('', 2);

  await userEvent.type(screen.getByLabelText('Search:'), 'eple');

  await waitFor(() => expect(fetchProducts).toHaveBeenCalledTimes(3));

  expect(fetchProducts).toHaveBeenCalledWith('eple', 1);
});
