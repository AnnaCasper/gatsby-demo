import PropTypes from "prop-types"
import React from "react"

const Hero1 = ({content}) => {
  return (
    <div>
      {content.header}
    </div>
)}

Hero1.propTypes = {
  content: PropTypes.object,
}

Hero1.defaultProps = {
  content: {},
}

export default Hero1
