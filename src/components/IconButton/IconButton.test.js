import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import colors from '../../theme/colors';
import icons from '../../theme/icons';
import IconButton, { determineIconColor, ButtonText } from './IconButton.component';

describe('determineIconColor()', () => {
  it('should should return disabled color if the icon is disabled', () => {
    const result = determineIconColor({ disabled: true, isHovered: false });

    expect(result).toEqual(colors.gray);
  });

  it('should return the hover color if the icon is hovered', () => {
    const result = determineIconColor({ disabled: false, isHovered: true });

    expect(result).toEqual(colors.secondary);
  });

  it('should return the default color if the icon is not hovered or disabled', () => {
    const result = determineIconColor({ disabled: false, isHovered: false });

    expect(result).toEqual(colors.white);
  });
});

describe('IconButton', () => {
  it('should change the icon color when a user hovers over the button', () => {
    const { getByRole, getByTestId } = render(<IconButton onClick={() => {}} icon={icons.plus} />);

    const svgPath = getByTestId('icon-svg-path');
    const button = getByRole('button');

    expect(svgPath).toHaveAttribute('fill', colors.white);
    fireEvent.mouseEnter(button);
    expect(svgPath).toHaveAttribute('fill', colors.secondary);
    fireEvent.mouseLeave(button);
    expect(svgPath).toHaveAttribute('fill', colors.white);
  });
});

describe('ButtonText', () => {
  it('should return null if there is no text', () => {
    const { queryByTestId } = render(<ButtonText />);
    expect(queryByTestId('icon-button-text')).not.toBeInTheDocument();
  });

  it('should render text when it is provided as a prop', () => {
    const { getByTestId } = render(<ButtonText text="I am batman" />);

    const p = getByTestId('icon-button-text');
    expect(p.textContent).toEqual('I am batman');
  });

  it('should have hover styles when the button is hovered', () => {
    const { getByTestId } = render(
      <ButtonText text="I am batman" isHovered hoverColor={colors.white} />
    );

    const p = getByTestId('icon-button-text');
    const style = window.getComputedStyle(p);

    expect(style.cursor).toEqual('pointer');
    expect(style.color).toEqual('rgb(255, 255, 255)');
    expect(style.textDecoration).toEqual('underline');
  });
});
