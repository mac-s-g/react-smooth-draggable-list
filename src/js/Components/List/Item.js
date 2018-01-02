import React, { Component } from "react"
import PropTypes from "prop-types"
import getElementType from "./../../helpers/getElementType"

export default class extends Component {
  static dragHandle = null
  static propTypes = {
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
    const { as, ...rest } = props
    this.ElementType = getElementType(<div />, { rest, as })
  }

  render() {
    const { children, style, as, ...props } = this.props
    return (
      <this.ElementType
        {...props}
        style={{ ...style, boxSizing: "border-box" }}
      >
        {children}
      </this.ElementType>
    )
  }
}
