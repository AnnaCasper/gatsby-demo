import PropTypes from "prop-types"
import React from "react"

const Feat1 = ({content}) => {
  return (
    <div>
      {content.header}
    </div>
)}

Feat1.propTypes = {
  content: PropTypes.object,
}

Feat1.defaultProps = {
  content: {},
}

export default Feat1
