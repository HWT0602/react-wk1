import { genActiveStyle, genBasicInputStyle, genDisabledStyle, genPlaceholderStyle, genStatusStyle, initInputToken } from '../../input/style';
import { genComponentStyleHook } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
const genMentionsStyle = token => {
  const {
    componentCls,
    colorTextDisabled,
    controlItemBgHover,
    controlPaddingHorizontal,
    colorText,
    motionDurationSlow,
    lineHeight,
    controlHeight,
    inputPaddingHorizontal,
    inputPaddingVertical,
    fontSize,
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary
  } = token;
  const itemPaddingVertical = Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2);
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genBasicInputStyle(token)), {
      position: 'relative',
      display: 'inline-block',
      height: 'auto',
      padding: 0,
      overflow: 'hidden',
      lineHeight,
      whiteSpace: 'pre-wrap',
      verticalAlign: 'bottom'
    }), genStatusStyle(token, componentCls)), {
      '&-disabled': {
        '> textarea': Object.assign({}, genDisabledStyle(token))
      },
      '&-focused': Object.assign({}, genActiveStyle(token)),
      [`&-affix-wrapper ${componentCls}-suffix`]: {
        position: 'absolute',
        top: 0,
        insetInlineEnd: inputPaddingHorizontal,
        bottom: 0,
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto'
      },
      // ================= Input Area =================
      [`> textarea, ${componentCls}-measure`]: {
        color: colorText,
        boxSizing: 'border-box',
        minHeight: controlHeight - 2,
        margin: 0,
        padding: `${inputPaddingVertical}px ${inputPaddingHorizontal}px`,
        overflow: 'inherit',
        overflowX: 'hidden',
        overflowY: 'auto',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontStyle: 'inherit',
        fontVariant: 'inherit',
        fontSizeAdjust: 'inherit',
        fontStretch: 'inherit',
        lineHeight: 'inherit',
        direction: 'inherit',
        letterSpacing: 'inherit',
        whiteSpace: 'inherit',
        textAlign: 'inherit',
        verticalAlign: 'top',
        wordWrap: 'break-word',
        wordBreak: 'inherit',
        tabSize: 'inherit'
      },
      '> textarea': Object.assign({
        width: '100%',
        border: 'none',
        outline: 'none',
        resize: 'none',
        backgroundColor: 'inherit'
      }, genPlaceholderStyle(token.colorTextPlaceholder)),
      [`${componentCls}-measure`]: {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: -1,
        color: 'transparent',
        pointerEvents: 'none',
        '> span': {
          display: 'inline-block',
          minHeight: '1em'
        }
      },
      // ================== Dropdown ==================
      '&-dropdown': Object.assign(Object.assign({}, resetComponent(token)), {
        position: 'absolute',
        top: -9999,
        insetInlineStart: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: 'border-box',
        fontSize,
        fontVariant: 'initial',
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        outline: 'none',
        boxShadow: boxShadowSecondary,
        '&-hidden': {
          display: 'none'
        },
        [`${componentCls}-dropdown-menu`]: {
          maxHeight: token.dropdownHeight,
          marginBottom: 0,
          paddingInlineStart: 0,
          overflow: 'auto',
          listStyle: 'none',
          outline: 'none',
          '&-item': Object.assign(Object.assign({}, textEllipsis), {
            position: 'relative',
            display: 'block',
            minWidth: token.controlItemWidth,
            padding: `${itemPaddingVertical}px ${controlPaddingHorizontal}px`,
            color: colorText,
            fontWeight: 'normal',
            lineHeight,
            cursor: 'pointer',
            transition: `background ${motionDurationSlow} ease`,
            '&:hover': {
              backgroundColor: controlItemBgHover
            },
            '&:first-child': {
              borderStartStartRadius: borderRadiusLG,
              borderStartEndRadius: borderRadiusLG,
              borderEndStartRadius: 0,
              borderEndEndRadius: 0
            },
            '&:last-child': {
              borderStartStartRadius: 0,
              borderStartEndRadius: 0,
              borderEndStartRadius: borderRadiusLG,
              borderEndEndRadius: borderRadiusLG
            },
            '&-disabled': {
              color: colorTextDisabled,
              cursor: 'not-allowed',
              '&:hover': {
                color: colorTextDisabled,
                backgroundColor: controlItemBgHover,
                cursor: 'not-allowed'
              }
            },
            '&-selected': {
              color: colorText,
              fontWeight: token.fontWeightStrong,
              backgroundColor: controlItemBgHover
            },
            '&-active': {
              backgroundColor: controlItemBgHover
            }
          })
        }
      })
    })
  };
};
// ============================== Export ==============================
export default genComponentStyleHook('Mentions', token => {
  const mentionsToken = initInputToken(token);
  return [genMentionsStyle(mentionsToken)];
}, token => ({
  dropdownHeight: 250,
  controlItemWidth: 100,
  zIndexPopup: token.zIndexPopupBase + 50
}));