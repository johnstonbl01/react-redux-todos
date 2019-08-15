import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/configure';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) => render(ui, { wrapper: ReduxProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
