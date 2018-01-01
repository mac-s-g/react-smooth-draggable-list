import React, { Component } from "react"
import Styled from "styled-components"
import List from "./../../dist/main"

export default () => (
  <div>
    <h3>
      example 1: <i>controlled</i>
    </h3>
    <Example1 />
    <br />
    <h3>
      example 2: <i>uncontrolled, using augmentation</i>
    </h3>
    <Example2 />
    <br />
    <h3>
      example 3: <i>single item</i>
    </h3>
    <Example3 />
  </div>
)

const Example1Item = Styled.div`
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  height: 100px;
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: 2px 4px
`
const Example1Header = Styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  background-color: white;
  padding: 2px 4px;
  border-bottom: 1px solid #ccc;
  border-radius: 2px 2px 0px 0px;
`
const Example1Content = Styled.div`
  padding: 2px 4px;
  font-size: 14px;
`

class Example1 extends Component {
  state = {
    order: [1, 0, 2]
  }

  render() {
    const { order } = this.state
    return (
      <div>
        <List
          rowHeight={100}
          rowWidth={200}
          order={order}
          onReOrder={order => this.setState({ order: order })}
        >
          <Example1Item>
            <Example1Header>item 1</Example1Header>
            <Example1Content>
              order: <strong>{order[0]}</strong>
            </Example1Content>
          </Example1Item>
          <Example1Item>
            <Example1Header>item 2</Example1Header>
            <Example1Content>
              order: <strong>{order[1]}</strong>
            </Example1Content>
          </Example1Item>
          <Example1Item>
            <Example1Header>item 3</Example1Header>
            <Example1Content>
              order: <strong>{order[2]}</strong>
            </Example1Content>
          </Example1Item>
        </List>
      </div>
    )
  }
}

const Example2Item = Styled.div`
  background-color: #fff;
  height: 60px;
  border: 1px solid #999;
  text-align: right;
  font-style: italic;
  padding: 5px 8px;
  border-radius: 6px;
`

const Eg2 = props => (
  <Example2Item {...props} onClick={e => console.log("click")} class="eg2" />
)

const ex2items = ["item 1", "item 2", "item 3", "item 4"]

const Example2 = () => (
  <div>
    <List rowHeight={60} onReOrder={order => console.log(order)}>
      {ex2items.map((item, idx) => (
        <List.Item key={idx} as={Eg2}>
          {item}
        </List.Item>
      ))}
    </List>
  </div>
)

const Example3Item = Styled.div`
  background-color: #fff;
  height: 70px;
  border: 1px solid #999;
`

const Example3 = () => (
  <div>
    <List rowHeight={70}>
      <Example3Item>item 1</Example3Item>
    </List>
  </div>
)
