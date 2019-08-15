import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon from './Icon.component';
import icons from '../../theme/icons';
import colors from '../../theme/colors';

describe('Icon', () => {
  it('should render an icon with default styles', () => {
    const { getByTestId } = render(<Icon icon={icons.check} />);

    const svg = getByTestId('icon-svg');
    const svgPath = getByTestId('icon-svg-path');

    expect(svg).toHaveAttribute('width', '1.25rem');
    expect(svg).toHaveAttribute('viewBox', '0 0 448 512');

    expect(svgPath).toHaveAttribute('fill', colors.black);
  });
});
