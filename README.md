# react-draggable-sort

smooth, mobile-friendly, draggable list for react.

## How to Use It

## Examples
```bash
npm install react-smooth-draggable-list --save
```



```js
import List from 'react-smooth-draggable-list'

...

<List rowHeight={80}>
  <List.Item>
    Item 1
  </List.Item>
  <List.Item>
    Item 2
  </List.Item>
</List>
```

### Props
Name|Type|Default|Description
|:---|:---|:---|:---
`order`|`array`|null|`order` is optional - when it is not defined, the list will be uncontrolled.
`onReOrder`|`(order) => {}`|null|The `onReOrder` callback is invoked every time a user changes the list order.  `order` is a list of integers representing the order of items.
`rowHeight`|`integer`|0|*Required:* `RowHeight` defines the height of each list item in pixels.
`rowWidth`|`integer`|null|`RowWidth` defines the width of the list component in pixels.  Width defaults to 100% of parent.


## How to Contrubite
```bash
# install with dev dependencies
npm install react-smooth-draggable-list --save-dev
# run the dev server on port 2100
npm run dev
```
