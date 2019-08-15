import React, { useState } from 'react';
import Icon from '../Icon/Icon.component';
import colors from '../../theme/colors';
import * as styles from './IconButton.styles';

export const ButtonText = ({
  text,
  isHovered,
  color = colors.black,
  hoverColor = colors.secondary
}) => {
  if (!text) {
    return null;
  }

  const hoverStyles = { color: hoverColor, cursor: 'pointer', textDecoration: 'underline' };

  return (
    <p data-testid="icon-button-text" css={[styles.text, { color }, isHovered && hoverStyles]}>
      {text}
    </p>
  );
};

const IconButton = ({ onClick, width, viewBox, hoverIcon, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconColor = determineIconColor({ ...props, isHovered });

  const icon = hoverIcon && isHovered ? hoverIcon : props.icon;

  return (
    <button
      aria-label={props.text || props.label}
      css={[styles.button, props.style]}
      onClick={onClick}
      disabled={props.disabled}
      onMouseEnter={() => !props.disabled && setIsHovered(true)}
      onMouseLeave={() => !props.disabled && setIsHovered(false)}
    >
      <ButtonText
        text={props.text}
        hovercolor={props.hoverColor}
        isHovered={isHovered}
        color={iconColor}
      />
      <Icon width={width} color={iconColor} icon={icon} viewBox={viewBox} />
    </button>
  );
};

export function determineIconColor({
  disabled,
  isHovered,
  color = colors.white,
  hoverColor = colors.secondary,
  disabledColor = colors.gray
}) {
  if (disabled) {
    return disabledColor;
  }

  if (isHovered) {
    return hoverColor;
  }

  return color;
}

export default IconButton;
