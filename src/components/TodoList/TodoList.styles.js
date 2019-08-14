import { css } from '@emotion/core';

export const todoList = css({
  display: 'flex',
  flexDirection: 'column-reverse',
  padding: '0 2rem',
  marginTop: '1rem',
  'div:first-of-type': { border: 'none' }
});

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 1.5rem 0 1.5rem'
});

export const showCompletedButton = css({
  alignSelf: 'flex-end'
});
