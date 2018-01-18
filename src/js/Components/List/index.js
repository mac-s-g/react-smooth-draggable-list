import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import Motion from "./Motion"

export default class extends Component {
  static Item = Item

  static propTypes = {
    order: PropTypes.array,
    onReOrder: PropTypes.func,
    rowHeight: PropTypes.number.isRequired,
    rowWidth: PropTypes.number,
    gutter: PropTypes.number,
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
      precision: PropTypes.number
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      order:
        props.order === undefined
          ? Array.from(Array(this.formatChildren(props.children).length).keys())
          : null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { order } = this.state
    const { children } = nextProps
    if (
      this.props.order === undefined &&
      this.formatChildren(children).length !== order.length
    ) {
      this.setState({
        order: Array.from(
          Array(this.formatChildren(nextProps.children).length).keys()
        )
      })
    }
  }

  onReOrder = newOrder => {
    const { order, onReOrder } = this.props
    this.setState({ order: newOrder })
    onReOrder ? onReOrder(newOrder) : null
  }

  formatChildren = children => {
    if (!children) {
      return []
    } else if (!children.length) {
      return [children]
    } else {
      return children
    }
  }

  getOrder = () => (this.props.order ? this.props.order : this.state.order)

  render() {
    const { children, gutter, ...props } = this.props

    return (
      <Motion
        {...props}
        order={this.getOrder()}
        onReOrder={this.onReOrder}
        gutter={typeof gutter === "number" ? gutter : 0.1 * props.rowHeight}
      >
        {this.formatChildren(children)
          .map((child, idx) => [child, this.getOrder()[idx]])
          .sort((a, b) => a[1] - b[1])
          .map(child => child[0])}
      </Motion>
    )
  }
}
