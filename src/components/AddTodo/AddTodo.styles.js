import { css } from '@emotion/core';
import colors from '../../theme/colors';

export const addTodo = css({
  display: 'flex',
  flexDirection: 'row',
  padding: '0 2rem 2rem 2rem',
  backgroundColor: colors.primary,
  borderBottomRightRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem'
});

export const button = css({
  marginLeft: '1rem',
  background: 'none'
});

export const input = css({
  padding: '1rem',
  fontSize: '1.5rem'
});

export const label = css({
  display: 'block',
  padding: '1rem 2rem 0.5rem 2rem',
  backgroundColor: colors.primary,
  color: colors.white
});
