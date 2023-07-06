import { PropTypes } from 'prop-types'

import './Typografy.css'

const Texth5 = ({ children }) => {
  return (
    <h5>
      {children}
    </h5>
  )
}

export default Texth5

Texth5.propTypes = {
  children: PropTypes.string
}