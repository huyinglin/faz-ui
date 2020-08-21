import { ButtonType, ButtonSize, ButtonShap } from './interface';
declare type ButtonViewProps = {
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    block: boolean;
    ghost: boolean;
    danger: boolean;
    isLoading: boolean;
    shape?: ButtonShap;
};
declare type AncharViewProps = {
    buttonType: ButtonType;
    disabled: boolean;
    buttonSize: ButtonSize;
    danger: boolean;
    block: boolean;
};
export declare const ButtonView: import("styled-components").StyledComponent<"button", any, ButtonViewProps, never>;
export declare const AncharView: import("styled-components").StyledComponent<"a", any, AncharViewProps, never>;
export declare const ButtonIconView: import("styled-components").StyledComponent<"span", any, {
    iconOnly: boolean;
}, never>;
export {};
