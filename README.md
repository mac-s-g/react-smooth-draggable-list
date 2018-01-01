## react-smooth-draggable-list

smooth, mobile-friendly, draggable list HOC for react.

[Check out the Demo](https://mac-s-g.github.io/react-smooth-draggable-list/demo/dist/)

### How to Use It

#### Install
This component can be [installed with npm](https://www.npmjs.com/package/react-smooth-draggable-list).
```bash
npm install react-smooth-draggable-list --save
```

#### Include
```javascript
import List from 'react-smooth-draggable-list'
```

#### Examples
Simple Example:
```javascript
const items = [1, 2, 3]
<List rowHeight={80}>{
  items.map(item => <div>item {item}</div>)
}</List>
```

Controlled Example:
```javascript
// simple example
class MyList extends React.Component {
  // order index starts at zero
  state = {order: [1, 0, 2]}

  render() {
    return (
      <List
        rowHeight={50}
        order={this.state.order}
        onReOrder={order => this.setState({order})}
      >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </List>
    )
  }
}
```


You can find more examples in the [demo source code](https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/demo/js/Examples.js).

#### Props
Name|Type|Default|Description
|:---|:---|:---|:---
`order`|`array`|null|`order` is optional - when it is not defined, the list will be uncontrolled.
`onReOrder`|`(order) => {}`|null|The `onReOrder` callback is invoked every time a user changes the list order.  `order` is a list of integers representing the order of items.
`rowHeight`|`integer`|0|*Required:* `RowHeight` defines the height of each list item in pixels.
`rowWidth`|`integer`|null|`RowWidth` defines the width of the list component in pixels.  Width defaults to 100% of parent.


### How to Contrubite
```bash
# install with dev dependencies
npm install react-smooth-draggable-list --save-dev
# run the dev server on port 2100
npm run dev
```
This will run a dev server with hot reloading enabled.  The dev server runs on prot 2100.  Dev server source code [is here](https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/dev-server/js/Examples.js)