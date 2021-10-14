import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('should check initial checkbox and button', () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole('button', {
    name: 'Confirm order',
  });
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
    //'data-testid': 'agree-checkbox ',
  });
  expect(confirmButton).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

it('should enable button on click of checkbox', () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole('button', {
    name: 'Confirm order',
  });
  const checkbox = screen.getByRole('checkbox', {
    'data-testid': 'agree-checkbox ',
  });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
});

test('popover toggle on hover', async () => {
  render(<SummaryForm />);

  //popover starts out hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disapperas when we mouse out.
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
});
