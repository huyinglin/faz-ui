import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import {
  ButtonType,
  ButtonSize,
} from './interface';
import { themeColor } from '../../styled';

function generateTypeCSS(
  background: string,
  borderColor: string,
  color: string,
  hoverBackground: string = lighten(0.75, background),
  hoverBorderColor: string = lighten(0.1, borderColor),
  hoverColor: string = color,
) {
  return css`
    background: ${background};
    border-color: ${borderColor};
    color: ${color};

    &:hover {
      color: ${hoverColor};
      background: ${hoverBackground};
      border-color: ${hoverBorderColor};
    }
    &:focus, &.focus {
      color: ${hoverColor};
      background: ${hoverBackground};
      border-color: ${hoverBorderColor};
      outline: 0;
    }
    &:disabled, &.disabled {
      color: ${color};
      background: ${background};
      border-color: ${borderColor};
    }
  `;
}

function generateSizeCSS(
  paddingY: string,
  paddingX: string,
  fontSize: string,
  borderRaduis: string,
) {
  return css`
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    border-radius: ${borderRaduis};
  `;
}

const Size = {
  large: generateSizeCSS('.5rem', '1rem', '1.25rem', '.3rem'),
  small: generateSizeCSS('.25rem', '.5rem', '.875rem', '.2rem'),
};

const TypeDefault = generateTypeCSS(
  themeColor.white,
  '#ced4da',
  '#212529',
  themeColor.white,
  themeColor.primary,
  themeColor.primary,
);

const TypePrimary = generateTypeCSS(
  themeColor.primary,
  themeColor.primary,
  themeColor.white,
);

const TypeDanger = generateTypeCSS(
  themeColor.danger,
  themeColor.danger,
  themeColor.white,
);

const Type = {
  default: TypeDefault,
  primary: TypePrimary,
  danger: TypeDanger,
  link: '',
};

export const ButtonView = styled.button<Partial<{ buttonType: ButtonType; buttonSize: ButtonSize }>>`
  position: relative;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background-image: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  box-shadow: inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  cursor: pointer;

  ${({ buttonSize }) => buttonSize && Size[buttonSize]}
  ${({ buttonType }) => buttonType && Type[buttonType]}

  &.disabled, &[disabled] {
    cursor: not-allowed;
    opacity: .65;
    box-shadow: none;
    > * {
      pointer-events: none;
    }
  }
`;

export const AncharView = styled.a`
  font-weight: 400;
  color: #0d6efd;
  text-decoration: none;
  box-shadow: none;
  &:hover {
    color: darken(0.15, '#0d6efd');
    text-decoration: underline;
  }
  &:focus, &.focus {
    text-decoration: underline;
    box-shadow: none;
  }
  &:disabled, &.disabled {
    color: #6c757d;
    pointer-events: none;
  }
`;
