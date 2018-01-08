## React _Smooth_ Draggable List

smooth, mobile-friendly, draggable list component for react.

:star: [Check out the Demo](https://mac-s-g.github.io/react-smooth-draggable-list/demo/dist/) :star:

### How to Use It

#### Install
This component can be [installed with npm](https://www.npmjs.com/package/react-smooth-draggable-list):
```bash
npm install react-smooth-draggable-list --save
```

#### Include
```javascript
import List from 'react-smooth-draggable-list'
```

#### Examples
##### Simple Example:
```javascript
const items = [1, 2, 3]
<List rowHeight={80}>{
  items.map(item => <List.Item>item {item}</List.Item>)
}</List>
```

##### Controlled Example:
```javascript
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
        <List.Item>item 1</List.Item>
        <List.Item>item 2</List.Item>
        <List.Item>item 3</List.Item>
      </List>
    )
  }
}
```

##### More:
You can find more examples in the [demo source code](https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/demo/js/Examples.js).

#### Props
##### List:
Name|Type|Default|Description
|:---|:---|:---|:---
`order`|array|`null`|`order` is _optional_ - when it is not defined, the list will be uncontrolled.
`onReOrder`|`(order) => {}`|`null`|The `onReOrder` callback is invoked every time a user changes the list order.  `order` is a list of integers representing the order of items.
`rowHeight`|integer|`0`|*Required:* `RowHeight` defines the height of each list item in pixels.
`rowWidth`|integer|`null`|`RowWidth` defines the width of the list component in pixels.  Width defaults to 100% of parent.
`gutter`|number|`null`|Amount of space between list items in pixels. Defaults to `0.1 *  props.rowHeight`.
`springConfig`|object|`null`|Drag animation control. Object has three keys. `stiffness`: _optional_, defaults to `300`. `damping`: _optional_, defaults to `50`. `precision`: _optional_, defaults to `0.05`.

##### List.Item:
Name|Type|Default|Description
|:---|:---|:---|:---
`dragHandle`|_Component_|`null`|Pass in a functional component.  See `DragHandle` in [demo source code](https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/demo/js/Examples.js) for an example.
`disabled`|boolean|`false`|Allows user to disable list items.


### How to Contrubite
```bash
# install with dev dependencies
npm install react-smooth-draggable-list --save-dev
# run the dev server on port 2100
npm run dev
```
`npm run dev` will run a dev server with hot reloading enabled.  The dev server runs at http://localhost:2100.  Dev server source code [is here](https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/dev-server/js/Examples.js).