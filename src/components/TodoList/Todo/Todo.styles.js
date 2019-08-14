import { css } from '@emotion/core';
import colors from '../../../theme/colors';

const button = {
  padding: '0.5rem 1rem',
  background: 'none',
  borderRadius: '0.25rem',
  fontFamily: 'Rubik',
  fontSize: '0.875rem',
  outline: 'none',
  border: 'none',
  marginBottom: '1rem'
};

export const todo = css({
  borderBottom: `1px solid ${colors.lightGray}`
});

export const todoContent = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '1rem'
});

export const editContent = css({
  paddingBottom: '0.5rem'
});

export const editInput = css({
  border: `1px solid ${colors.gray}`,
  borderRadius: '0.25rem'
});

export const completeIcon = css({
  marginRight: '0.5rem',
  marginTop: '2px'
});

export const deleteIcon = css({
  marginLeft: '0.5rem'
});

export const input = css({
  border: `1px solid ${colors.white}`
});

export const cancelButton = css({
  ...button,
  color: colors.gray,
  ':hover': { textDecoration: 'underline', cursor: 'pointer' }
});

export const saveButton = css({
  ...button,
  marginLeft: 'calc(3rem + 3px)',
  marginRight: '0.25rem',
  backgroundColor: colors.primary,
  color: colors.white,
  ':hover': { backgroundColor: colors.primaryDark, cursor: 'pointer' }
});

export const buttonText = css({
  padding: 0,
  margin: 0
});

export const completedFontColor = css({
  color: colors.gray
});
