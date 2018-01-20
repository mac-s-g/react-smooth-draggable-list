import React, { cloneElement } from "react"
import { Motion, spring } from "react-motion"
import Styled from "styled-components"

import { reinsert, clamp } from "./../../helpers/"
const defaultSpringConfig = { stiffness: 300, damping: 50, precision: 0.05 }

const ListContainer = Styled.div`
  position: relative;
  ${props => (props.rowWidth ? "width:" + props.rowWidth + "px;" : null)}
  width: ${props => props.rowWidth}px;
  height: ${props => props.listHeight}px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      atRest: true,
      originalPosOfLastPressed: false
    }
  }

  defaultOverflow = document.body.style.overflow

  handleTouchStart = (key, pressLocation, e) => {
    // disable document scroll while dragging
    this.defaultOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    this.handleMouseDown(key, pressLocation, e.touches[0])
  }

  handleTouchMove = e => {
    this.handleMouseMove(e.touches[0])
  }

  handleMouseDown = (pos, pressY, { pageY }) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      atRest: false,
      originalPosOfLastPressed: pos
    })
  }

  handleMouseMove = ({ pageY }) => {
    const { isPressed, topDeltaY, originalPosOfLastPressed } = this.state
    const { onReOrder, gutter, rowHeight } = this.props
    const order = this.getOrder()

    if (isPressed) {
      const mouseY = pageY - topDeltaY
      const currentRow = clamp(
        Math.round(mouseY / (gutter + rowHeight)),
        0,
        this.getChildren().length - 1
      )
      let newOrder = order

      if (currentRow !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(
          order,
          order.indexOf(originalPosOfLastPressed),
          currentRow
        )
        onReOrder ? onReOrder(newOrder) : null
      }

      this.setState({ mouseY: mouseY, atRest: false })
    }
  }

  handleMouseUp = () => {
    document.body.style.overflow = this.defaultOverflow
    this.setState({ isPressed: false, topDeltaY: 0 })
  }

  getOrder = () => {
    const { order } = this.props
    return order ? order : this.getChildren().map((child, idx) => idx)
  }

  getSpringConfig = springConfig =>
    springConfig
      ? { ...defaultSpringConfig, ...springConfig }
      : defaultSpringConfig

  getChildren = () => {
    const { children } = this.props

    if (!children) {
      return []
    } else if (!children.length) {
      return [children]
    } else {
      return children
    }
  }

  render() {
    const { mouseY, isPressed, atRest, originalPosOfLastPressed } = this.state

    const { rowHeight, rowWidth, gutter, springConfig } = this.props

    return (
      <ListContainer
        rowWidth={rowWidth}
        listHeight={(rowHeight + gutter) * this.getChildren().length}
      >
        {this.getChildren().map((child, i) => {
          const style =
            originalPosOfLastPressed === i && isPressed
              ? {
                  scale: spring(1, this.getSpringConfig(springConfig)),
                  y: mouseY
                }
              : {
                  scale: spring(1, this.getSpringConfig(springConfig)),
                  y: spring(
                    this.getOrder().indexOf(i) * (gutter + rowHeight),
                    this.getSpringConfig(springConfig)
                  )
                }
          return (
            <Motion
              style={style}
              key={child.key !== null ? child.key : i}
              onRest={() => {
                this.state.isPressed ? null : this.setState({ atRest: true })
              }}
            >
              {({ scale, y }) =>
                cloneElement(child, {
                  style: {
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: !atRest && i === originalPosOfLastPressed ? 100 : 1,
                    height: `${rowHeight}px`
                  },
                  onMouseDown: this.handleMouseDown.bind(null, i, y),
                  onMouseUp: this.handleMouseUp.bind(null, i, y),
                  onMouseMove: this.handleMouseMove.bind(null, i, y),
                  onTouchStart: this.handleTouchStart.bind(null, i, y),
                  onTouchEnd: this.handleMouseUp.bind(null, i, y),
                  onTouchMove: this.handleTouchMove.bind(null, i, y)
                })}
            </Motion>
          )
        })}
      </ListContainer>
    )
  }
}
