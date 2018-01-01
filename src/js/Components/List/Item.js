import React from "react"
import getElementType from "./../../helpers/getElementType"

export default ({ children, style, as, ...props }) => {
  const ElementType = getElementType(<div />, { props, as })
  return (
    <ElementType {...props} style={{ ...style, boxSizing: "border-box" }}>
      {children}
    </ElementType>
  )
}
