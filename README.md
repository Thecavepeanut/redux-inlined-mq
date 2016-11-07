## Redux Media Query Component For Inlined CSS

This component is meant to hook up to a redux store and trigger a delta in props
of component who bring in the winSize property from the redux store they are connected to.
This is so components can use inlined css, yet still react to change in the media size.

This component uses a desktop first approach, thus the priority of the styling goes in the following order from highest priority to lowest!

1. S - Mobile Small
2. M - Mobile Medium
3. L - Mobile Large
4. T - Tablet
5. D - Desktop

The code implementation looks like this.
```javascript
export function getStyle(style, size) {
  switch (size) {
    case SMALL_MOBILE: return assign(style.D, style.T, style.L, style.M, style.S);
    case MED_MOBILE: return assign(style.D, style.T, style.L, style.M);
    case LARGE_MOBILE: return assign(style.D, style.T, style.L);
    case TABLET: return assign(style.D, style.T);
    case DESKTOP: return assign(style.D);
    default: return {};
  }
}
```
NOTE: These are the ones I am starting with I do have plans to extend this so these are configureable/extensible!

### Style Object Example

```javascript
import {getStyle} from 'inlined-mq-redux'


var exampleStyle = {
  D:{//desktop
    padding: '10px',
    fontSize: '18px',
    lineHeight: '36px'
  },
  T:{},//tablet styles
  L:{// Styles to add to large mobile size
    padding: '8px'
  },
  M:{},// styles to add to medium mobile size
  S:{// styles to add to small mobile size
    fontSize: '16px',
    lineHeight: '32px'
  }
}

```
#### RESULTING STYLES
##### DESKTOP (D)
  ```javascript
{
  padding: '10px',
  fontSize: '18px',
  lineHeight: '36px'
}
  ```
##### TABLET (T)
```javascript
{
  padding: '10px',
  fontSize: '18px',
  lineHeight: '36px'
}
```
##### MOBILE LARGE (L)
```javascript
{
  padding: '8px',// note change
  fontSize: '18px',
  lineHeight: '36px'
}
```
##### MOBILE MEDIUM (M)
```javascript
{
  padding: '8px',//note change from L is still there
  fontSize: '18px',
  lineHeight: '36px'
}
```
##### MOBILE SMALL (S)
```javascript
{
  padding: '8px',//note change from L is still there
  fontSize: '16px',//note change
  lineHeight: '32px'//note change
}
```
