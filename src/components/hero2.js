import PropTypes from "prop-types"
import React from "react"

const Hero2 = ({content}) => {
  return (
    <div>
      {content.header}
    </div>
)}

Hero2.propTypes = {
  content: PropTypes.object,
}

Hero2.defaultProps = {
  content: {},
}

export default Hero2
