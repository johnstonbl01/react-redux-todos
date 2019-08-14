import { css } from '@emotion/core';
import colors from '../../theme/colors';

export const header = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2rem 2rem 1rem 2rem',
  color: colors.white,
  backgroundColor: colors.primary
});

export const app = css({
  backgroundColor: colors.white
});

export const main = css({
  flex: 1
});

export const headerText = css({
  margin: 0,
  fontSize: '1.25rem',
  color: colors.white
});

export const date = css({
  margin: 0,
  marginLeft: '1rem',
  color: colors.white
});
