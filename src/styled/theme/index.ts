import { variables } from './variables';

const themeColor = {
  primary:   variables.color.blue,
  secondary: variables.color.gray_600,
  success:   variables.color.green,
  info:      variables.color.cyan,
  warning:   variables.color.yellow,
  danger:    variables.color.red,
  light:     variables.color.gray_100,
  dark:      variables.color.gray_800,
  white:     variables.color.white,
}

export {
  themeColor,
  variables as themeVariables,
}
