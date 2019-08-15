import React from 'react';
import * as styles from './TextInput.styles';

const TextInput = ({
  value,
  onKeyDown,
  onTextChange,
  inputStyle,
  variant = 'outline',
  ...props
}) => {
  const outlineStyle = variant === 'outline' && styles.outline;

  return (
    <div css={styles.layout}>
      <input
        aria-label={props.name}
        css={[styles.input, outlineStyle, inputStyle]}
        type="text"
        value={value}
        onChange={onTextChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    </div>
  );
};

export default TextInput;
