import { css } from '@emotion/core';
// import colors from '../../theme/colors';

export const button = css({
  padding: 0,
  border: 'none',
  outline: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  ':hover': { cursor: 'pointer' }
});

export const text = css({
  marginRight: '0.5rem',
  fontSize: '0.875rem',
  fontFamily: 'Rubik',
  margin: '2px 0.5rem 0 0'
});
