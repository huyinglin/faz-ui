import styled, { css } from 'styled-components/macro';
import {
  ButtonType,
  ButtonSize,
  ButtonShap,
} from './interface';
import { themeColor } from '../../styled';

type TypeCSSType = {
  color: string,
  background: string,
  borderColor: string,
  otherCSS?: string,
}

function getTypeCSS(
  base: TypeCSSType,
  hover: TypeCSSType,
  active: TypeCSSType,
) {
  return css`
    color: ${base.color};
    background: ${base.background};
    border-color: ${base.borderColor};
    ${base.otherCSS}

    &:hover, &.focus {
      color: ${hover.color};
      background: ${hover.background};
      border-color: ${hover.borderColor};
      ${hover.otherCSS}
    }

    &:active {
      color: ${active.color};
      background: ${active.background};
      border-color: ${active.borderColor};
      outline: 0;
      box-shadow: none;
      ${active.otherCSS}
    }
  `;
}

const defaultType = getTypeCSS(
  {
    color: 'rgba(0, 0, 0, 0.65)',
    background: '#fff',
    borderColor: '#d9d9d9',
  },
  {
    color: '#40a9ff',
    background: '#fff',
    borderColor: '#40a9ff',
  },
  {
    color: '#096dd9',
    background: '#fff',
    borderColor: '#096dd9',
  },
);

const primaryType = getTypeCSS(
  {
    color: '#fff',
    background: '#1890ff',
    borderColor: '#1890ff',
    otherCSS: 'text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);',
  },
  {
    color: '#fff',
    background: '#40a9ff',
    borderColor: '#40a9ff',
  },
  {
    color: '#fff',
    background: '#096dd9',
    borderColor: '#096dd9',
  },
);

const dashedType = getTypeCSS(
  {
    color: 'rgba(0, 0, 0, 0.65)',
    background: '#fff',
    borderColor: '#d9d9d9',
    otherCSS: 'border-style: dashed;'
  },
  {
    color: '#40a9ff',
    background: '#fff',
    borderColor: '#40a9ff',
  },
  {
    color: '#096dd9',
    background: '#fff',
    borderColor: '#096dd9',
  },
);

const textType = getTypeCSS(
  {
    color: 'rgba(0, 0, 0, 0.65)',
    background: 'transparent',
    borderColor: 'transparent',
    otherCSS: 'box-shadow: none;'
  },
  {
    color: 'rgba(0, 0, 0, 0.65)',
    background: 'rgba(0, 0, 0, 0.018)',
    borderColor: 'transparent',
  },
  {
    color: 'rgba(0, 0, 0, 0.65)',
    background: 'rgba(0, 0, 0, 0.028)',
    borderColor: 'transparent',
  },
);

const linkType = getTypeCSS(
  {
    color: '#1890ff',
    background: 'transparent',
    borderColor: 'transparent',
    otherCSS: 'box-shadow: none;'
  },
  {
    color: '#40a9ff',
    background: 'transparent',
    borderColor: 'transparent',
  },
  {
    color: '#096dd9',
    background: 'transparent',
    borderColor: 'transparent',
  },
);

const Size: any = {
  default: css`
    height: 32px;
    font-size: 14px;
    padding: ${({ shape }: { shape?: ButtonShap; }) => shape &&
      shape === 'round'
        ? '4px 16px'
        : shape === 'circle'
          ? 'padding: 0;'
          : '4px 12px'
    };
  `,
  large: css`
    height: 40px;
    padding: 6px 16px;
    font-size: 16px;
    ${({ shape }: { shape?: ButtonShap; }) => shape &&
      (shape === 'circle'
        ? 'min-width: 40px;width: 40px;padding: 0;'
        : 'width: auto;padding: 6px 20px;border-radius: 40px;')
    }
  `,
  small: css`
    height: 24px;
    padding: 0px 7px;
    font-size: 14px;
    ${({ shape }: { shape?: ButtonShap; }) => shape &&
      (shape === 'circle'
        ? 'min-width: 24px;width: 24px;padding: 0;'
        : 'width: auto;padding: 0px 12px;border-radius: 24px;')
    }
  `,
};

const Type: any = {
  default: defaultType,
  primary: primaryType,
  dashed: dashedType,
  link: linkType,
  text: textType,
};

const Shap: any = {
  circle: css`
    min-width: 32px;
    padding: 0;
    text-align: center;
    border-radius: 50%;
  `,
  round: css`
    height: 32px;
    padding: 4px 16px;
    font-size: 14px;
    border-radius: 32px;
  `,
};

const baseDisabled = css`
  color: rgba(0, 0, 0, 0.25);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
`;

const ancharDisabled = css`
  background: transparent;
  border-color: transparent;
  pointer-events: none;
  ${baseDisabled}
`;

const buttonBase = css`
  line-height: 1.5715;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border-radius: 2px;
  text-decoration: none;
  outline: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const ghostCSS = css<{ buttonType: ButtonType; }>`
  color: ${({ buttonType }) => buttonType === 'primary' ? '#1890ff' : '#fff'};
  background: transparent;

  &:hover,
  &.focus,
  &:active {
    color: ${({ buttonType }) => buttonType === 'primary' && '#1890ff'};
    background: transparent;
  }
`;

const dangerCSS = css<{ buttonType: ButtonType; }>`
  color: ${({ buttonType }) => buttonType === 'primary' ? '#fff' : '#ff4d4f'};
  background: ${({ buttonType }) => buttonType === 'primary' ? '#ff4d4f' : '#fff'};
  border-color: ${({ buttonType }) => buttonType !== 'link' && buttonType !== 'text' && '#ff4d4f'};

  &:hover, &.focus {
    color: ${({ buttonType }) => buttonType === 'primary' ? '#fff' : '#ff7875'};
    background: ${({ buttonType }) => buttonType === 'primary' ? '#ff7875' : '#fff'};
    border-color: ${({ buttonType }) => buttonType !== 'link' && buttonType !== 'text' && '#ff7875'};
  }

  &:active {
    color: ${({ buttonType }) => buttonType === 'primary' ? '#fff' : '#d9363e'};
    background: ${({ buttonType }) => buttonType === 'primary' ? '#d9363e' : '#fff'};
    border-color: ${({ buttonType }) => buttonType !== 'link' && buttonType !== 'text' && '#d9363e'};
  }
`;

type ButtonViewProps = {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  block: boolean;
  ghost: boolean;
  danger: boolean;
  shape?: ButtonShap;
}

type AncharViewProps = {
  buttonType: ButtonType;
  disabled: boolean;
  buttonSize: ButtonSize;
  danger: boolean;
  block: boolean;
}

export const ButtonView = styled.button<ButtonViewProps>`
  ${buttonBase}
  ${({ buttonType }) => Type[buttonType]}
  ${({ shape }) => shape && Shap[shape]}
  ${({ buttonSize }) => Size[buttonSize]}
  ${({ block }) => block && 'width: 100%;'}
  ${({ ghost }) => ghost && ghostCSS}
  ${({ danger }) => danger && dangerCSS}

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    ${baseDisabled}
    background: #f5f5f5;
    border-color: #d9d9d9;
  }
`;

export const AncharView = styled.a<AncharViewProps>`
  ${buttonBase}
  ${Type.link}
  ${({ buttonSize }) => buttonSize && Size[buttonSize]}
  ${({ disabled }) => disabled && ancharDisabled}
  ${({ block }) => block && 'width: 100%;'}
  ${({ danger }) => danger && dangerCSS}
`;

export const ButtonIconView = styled.span<{ iconOnly: boolean; }>`
  display: flex;
  align-items: center;
  ${({ iconOnly }) => iconOnly && 'margin-right: 8px;'}
`;
