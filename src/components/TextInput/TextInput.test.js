import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput.component';
import colors from '../../theme/colors';

describe('TextInput', () => {
  it('should have an outline by default', () => {
    const { getByDisplayValue } = render(
      <TextInput value="bacon" onKeyDown={() => {}} onTextChange={() => {}} />
    );

    const input = getByDisplayValue('bacon');
    const style = window.getComputedStyle(input);

    expect(style.border).toEqual(`1px solid ${colors.black}`);
  });

  it('should not have an outline when variant = none', () => {
    const { getByDisplayValue } = render(
      <TextInput value="bacon" onKeyDown={() => {}} onTextChange={() => {}} variant="none" />
    );

    const input = getByDisplayValue('bacon');
    const style = window.getComputedStyle(input);

    expect(style.border).toEqual('');
  });
});
