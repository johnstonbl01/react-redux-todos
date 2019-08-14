import { css } from '@emotion/core';
import colors from '../../theme/colors';

export const input = css({
  flex: 1,
  border: 'none',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  fontSize: '1rem',
  ':focus': css({ outline: 'none' })
});

export const layout = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'row'
});

export const outline = css({
  border: `1px solid ${colors.black}`
});

export const edit = css({
  border: `1px solid ${colors.gray}`,
  borderRadius: '0.25rem'
});
