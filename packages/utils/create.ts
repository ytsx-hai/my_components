/*
 * @Author: lh
 * @Date: 2023-12-11 08:35:51
 * @LastEditors: lh
 * @LastEditTime: 2024-01-02 15:14:21
 * @Description:
 */
// block 代码块  element 元素  modifier 装饰  state状态
// z-button
// z-button__element
// z-button_element--disabled
// is-checked is-enabeld
// :class=[bem.b( 'button' )]|

// 前缀名字 z-button-box__element--modifier
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `_${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''
  const be = (blockSuffix: string = '', element: string = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string = '', modifier: string = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element: string = '', modifier: string = '') =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    blockSuffix: string = '',
    element: string = '',
    modifier: string = ''
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : ''

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

export default function createNamespace(name: string) {
  const prefixName = `lh-${name}`
  return createBEM(prefixName)
}
/**
const bem = createNamespace('icon')
console.log(bem.b('box'))
console.log(bem.e('element'))
console.log(bem.m('modifier'))
console.log(bem.bem('box', 'element', 'modifier'))
console.log(bem.is('checked', true))
console.log(bem.be('bol', 'element'))
console.log(bem.bm('box', 'modifier'))
console.log(bem.em('element', 'modifier'))
 */