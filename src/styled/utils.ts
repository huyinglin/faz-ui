// 转换 marginLeft -> margin-left
export function styleHyphenFormat(cssName: string): string {
  return cssName.replace(/[A-Z]/g, (match: string) => '-' + match.toLowerCase());
}

// type为number的css值自动添加px
export function styledFormat(style: React.CSSProperties) {
  const cssRules: any = {};
  for (let cssName in style) {
    const cssValue = style[cssName as keyof React.CSSProperties];
    const cssRule = styleHyphenFormat(cssName);
    cssRules[cssRule] = isNumber(cssValue) ? `${cssValue}px` : cssValue;
  }
  return cssRules;
}

// 将字符串首字母转大写
export function firstUpperCase(value: string) {
  if (!isString(value)) {
    return value;
  }
  const [first, ...rest] = value.split('');
  return first.toUpperCase() + rest.join('');
}

export function getTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

export function isObjectLike(value: any) {
  return typeof value === 'object' && value !== null
}

export function isNumber(value: any) {
  return typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) === '[object Number]');
}

export function isString(value: any) {
  return typeof value === 'string' ||
    (isObjectLike(value) && getTag(value) === '[object String]');
}
