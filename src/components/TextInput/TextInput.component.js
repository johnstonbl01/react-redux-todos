import React, { useState } from 'react';
import * as styles from './TextInput.styles';

const TextInput = ({
  value,
  onKeyDown,
  onTextChange,
  inputStyle,
  variant = 'outline',
  ...props
}) => {
  const [pristine, setPristine] = useState(true);

  const onChange = event => {
    if (pristine && value.length > 0) {
      setPristine(false);
    }

    return onTextChange(event);
  };

  const outlineStyle = variant === 'outline' && styles.outline;

  return (
    <div css={styles.layout}>
      <input
        css={[styles.input, outlineStyle, inputStyle]}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    </div>
  );
};

export default TextInput;
