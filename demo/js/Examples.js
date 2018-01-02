import React, { Component } from "react"
import Styled from "styled-components"
import List from "./../../dist/main"

const Examples = Styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding-bottom: 80px;
  @media (min-width: 800px) {
    width: 800px;
  }
`
const PageHeader = Styled.div`
  font-size: 22px;
  margin-bottom: 30px;
`
const Header = Styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`
const SubHeader = Styled.div`
  font-size: 16px;
  color: #999;
`
const ExampleContainer = Styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
`
const Footer = Styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  z-index: 10000;
  background-color: #eee;
  padding-top: 20px;
  & >div {
    width: 200px;
    margin: 0 auto;
    & >a {
      display: inline;
      padding: 2px 10px;
    }
  }
`

export default () => (
  <Examples>
    <PageHeader>
      React <i>Smooth</i> Draggable List
      <SubHeader>
        a smooth, mobile-friendly, draggable list component for react
      </SubHeader>
    </PageHeader>

    <ExampleContainer>
      <Header>
        example 1: <SubHeader>controlled</SubHeader>
      </Header>

      <Example1 />
    </ExampleContainer>

    <ExampleContainer>
      <Header>
        example 2: <SubHeader>uncontrolled</SubHeader>
      </Header>
      <Example2 />
    </ExampleContainer>

    <ExampleContainer>
      <Header>
        example 3: <SubHeader>single item</SubHeader>
      </Header>
      <Example3 />
    </ExampleContainer>

    <ExampleContainer>
      <Header>
        example 4: <SubHeader>disabled items</SubHeader>
      </Header>
      <Example4 />
    </ExampleContainer>

    <Footer>
      <div>
        <a
          href="https://github.com/mac-s-g/react-smooth-draggable-list"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/react-smooth-draggable-list"
          target="_blank"
        >
          NPM
        </a>
        <a
          href="https://github.com/mac-s-g/react-smooth-draggable-list/blob/master/demo/js/Examples.js"
          target="_blank"
        >
          Examples
        </a>
      </div>
    </Footer>
  </Examples>
)

const Example1Item = Styled.div`
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  height: 100px;
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: 4px;
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
          onReOrder={order => {
            console.log(order)
            this.setState({ order: order })
          }}
        >
          <List.Item as={Example1Item}>
            <Example1Header>item 1</Example1Header>
            <Example1Content>
              order: <strong>{order.indexOf(0)}</strong>
            </Example1Content>
          </List.Item>
          <List.Item as={Example1Item}>
            <Example1Header>item 2</Example1Header>
            <Example1Content>
              order: <strong>{order.indexOf(1)}</strong>
            </Example1Content>
          </List.Item>
          <List.Item as={Example1Item}>
            <Example1Header>item 3</Example1Header>
            <Example1Content>
              order: <strong>{order.indexOf(2)}</strong>
            </Example1Content>
          </List.Item>
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
    <List rowHeight={60} rowWidth={270} onReOrder={order => console.log(order)}>
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
  padding: 4px 7px;
`

const Example3 = () => (
  <div>
    <List rowHeight={70} rowWidth={240}>
      <List.Item as={Example3Item}>item 1</List.Item>
    </List>
  </div>
)

const Example4Item = Styled.div`
  background-color: #eee;
  padding: 4px 7px;
  height: 42px;

  &.disabled {
    background-color: rgba(200, 0, 0, 0.3);
    cursor: not-allowed;
  }
`

const Example4 = () => (
  <div>
    <List rowHeight={42} rowWidth={300} gutter={0}>
      <List.Item as={Example4Item}>item 1</List.Item>
      <List.Item as={Example4Item} disabled class="disabled">
        item 2
      </List.Item>
      <List.Item as={Example4Item} disabled class="disabled">
        item 3
      </List.Item>
      <List.Item as={Example4Item}>item 4</List.Item>
      <List.Item as={Example4Item}>item 5</List.Item>
    </List>
  </div>
)
