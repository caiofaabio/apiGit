import { PropTypes } from 'prop-types'

import './Typografy.css'

const TextH2 = ({ children }) => {
  return (
    <h2>
      {children}
    </h2>
  )
}

export default TextH2

TextH2.propTypes = {
  children: PropTypes.string
}