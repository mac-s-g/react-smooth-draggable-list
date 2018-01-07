import React, { Component, cloneElement } from "react"
import PropTypes from "prop-types"
import getElementType from "./../../helpers/getElementType"

export default class extends Component {
  static propTypes = {
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
    const { as, ...rest } = props
    this.ElementType = getElementType(<div />, { rest, as })
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

  render() {
    const {
      children,
      disabled,
      style,
      onMouseDown,
      onTouchStart,
      dragHandle,
      as,
      ...props
    } = this.props
    return (
      <this.ElementType
        {...props}
        style={{
          position: "relative",
          boxSizing: "border-box",
          width: "100%",
          position: "absolute",
          pointerEvents: "auto",
          ...style
        }}
        onMouseDown={disabled === true || dragHandle ? null : onMouseDown}
        onTouchStart={disabled === true || dragHandle ? null : onTouchStart}
      >
        {[
          ...this.formatChildren(children),
          dragHandle && !disabled
            ? cloneElement(dragHandle, {
                key: "drag-handle",
                onMouseDown: onMouseDown,
                onTouchStart: onTouchStart
              })
            : null
        ]}
      </this.ElementType>
    )
  }
}
