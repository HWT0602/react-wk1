var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import pickAttrs from "rc-util/es/pickAttrs";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';
import warning from '../_util/warning';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import useStyle from './style';
import useItems from './useItems';
function getBreadcrumbName(route, params) {
  if (route.title === undefined) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  return typeof route.title === 'object' ? route.title : String(route.title).replace(new RegExp(`:(${paramsKeys})`, 'g'), (replacement, key) => params[key] || replacement);
}
const getPath = (params, path) => {
  if (path === undefined) {
    return path;
  }
  let mergedPath = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(key => {
    mergedPath = mergedPath.replace(`:${key}`, params[key]);
  });
  return mergedPath;
};
const Breadcrumb = props => {
  const _a = props,
    {
      prefixCls: customizePrefixCls,
      separator = '/',
      style,
      className,
      rootClassName,
      routes: legacyRoutes,
      items,
      children,
      itemRender,
      params = {}
    } = _a,
    restProps = __rest(_a, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "items", "children", "itemRender", "params"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  let crumbs;
  const prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const mergedItems = useItems(items, legacyRoutes);
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!legacyRoutes, 'Breadcrumb', '`routes` is deprecated. Please use `items` instead.') : void 0;
  }
  const mergedItemRender = itemRender || (route => {
    const name = getBreadcrumbName(route, params);
    return name;
  });
  if (mergedItems && mergedItems.length > 0) {
    // generated by route
    const paths = [];
    const itemRenderRoutes = items || legacyRoutes;
    crumbs = mergedItems.map((item, index) => {
      const {
        path,
        key,
        type,
        menu,
        overlay,
        separator: itemSeparator
      } = item;
      const mergedPath = getPath(params, path);
      if (mergedPath !== undefined) {
        paths.push(mergedPath);
      }
      const mergedKey = key !== null && key !== void 0 ? key : index;
      if (type === 'separator') {
        return /*#__PURE__*/React.createElement(BreadcrumbSeparator, {
          key: mergedKey
        }, itemSeparator);
      }
      const itemProps = {};
      const isLastItem = index === mergedItems.length - 1;
      if (menu) {
        itemProps.menu = menu;
      } else if (overlay) {
        itemProps.overlay = overlay;
      }
      let {
        href
      } = item;
      if (paths.length && mergedPath !== undefined) {
        href = `#/${paths.join('/')}`;
      }
      return /*#__PURE__*/React.createElement(BreadcrumbItem, Object.assign({
        key: mergedKey
      }, itemProps, pickAttrs(item, {
        data: true,
        aria: true
      }), {
        href: href,
        separator: isLastItem ? '' : separator
      }), mergedItemRender(item, params, itemRenderRoutes, paths));
    });
  } else if (children) {
    const childrenLength = toArray(children).length;
    crumbs = toArray(children).map((element, index) => {
      if (!element) {
        return element;
      }
      // =================== Warning =====================
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== "production" ? warning(!element, 'Breadcrumb', '`Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `items` instead.') : void 0;
      }
      process.env.NODE_ENV !== "production" ? warning(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children") : void 0;
      const isLastItem = index === childrenLength - 1;
      return cloneElement(element, {
        separator: isLastItem ? '' : separator,
        key: index
      });
    });
  }
  const breadcrumbClassName = classNames(prefixCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("nav", Object.assign({
    className: breadcrumbClassName,
    style: style
  }, restProps), /*#__PURE__*/React.createElement("ol", null, crumbs)));
};
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;
if (process.env.NODE_ENV !== 'production') {
  Breadcrumb.displayName = 'Breadcrumb';
}
export default Breadcrumb;