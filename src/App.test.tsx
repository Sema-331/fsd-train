import React from 'react';
import { fireEvent, queryByText, render, screen } from '@testing-library/react';
import App from './app/App';
import TanstackProvider from './app/Provider/TanstackProvider';

describe('all tests', () => {
  test('renders learn react link', () => {
    render(
      <TanstackProvider>
        <App />
      </TanstackProvider>
    );
    const linkElement = screen.getByText(/submit/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('render server', async () => {
    render(
      <TanstackProvider>
        <App />
      </TanstackProvider>
    );
    const elem = await screen.findByText('dad');
    const elem2 = await screen.findByText('mom');
    const load = screen.queryByText('...Loading');
    expect(load).not.toBeInTheDocument();
    expect(elem).toBeInTheDocument();
    expect(elem2).toBeInTheDocument();
  });
  test('type input functionals', async () => {
    render(
      <TanstackProvider>
        <App />
      </TanstackProvider>
    );
    const inpu1 = screen.getByPlaceholderText('input1');
    const inpu2 = screen.getByPlaceholderText('input2');
    const res1 = screen.queryByText('Hello');
    const res2 = screen.queryByText('wrld');
    expect(res1).not.toBeInTheDocument();
    expect(res2).not.toBeInTheDocument();
    expect(inpu1).toHaveClass('input1');
    expect(inpu2).toHaveClass('input2');
    fireEvent.change(inpu1, { target: { value: 'Hello' } });
    fireEvent.change(inpu2, { target: { value: 'wrld' } });
    expect(inpu1).toHaveValue('Hello');
    expect(inpu2).toHaveValue('wrld');
    const btn = screen.getByText(/Submit/i);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    const res3 = await screen.findByText('Hello');
    const res4 = await screen.findByText('wrld');
    expect(res3).toBeInTheDocument();
    expect(res4).toBeInTheDocument();
  });
});
