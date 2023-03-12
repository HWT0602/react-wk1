import type { CSSObject } from '@ant-design/cssinjs';
import type { AliasToken, DerivativeToken } from '../theme/internal';
export { operationUnit } from './operationUnit';
export { genPresetColor } from './presetColor';
export { roundedArrow } from './roundedArrow';
export declare const textEllipsis: CSSObject;
export declare const resetComponent: (token: DerivativeToken) => CSSObject;
export declare const resetIcon: () => CSSObject;
export declare const clearFix: () => CSSObject;
export declare const genLinkStyle: (token: DerivativeToken) => CSSObject;
export declare const genCommonStyle: (token: DerivativeToken, componentPrefixCls: string) => CSSObject;
export declare const genFocusOutline: (token: AliasToken) => CSSObject;
export declare const genFocusStyle: (token: DerivativeToken) => CSSObject;
