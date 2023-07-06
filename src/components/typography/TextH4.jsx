import { PropTypes } from 'prop-types'

import './Typografy.css'

const TextH4 = ({ children }) => {
  return (
    <h4>
      {children}
    </h4>
  )

}

export default TextH4

TextH4.propTypes = {
  children: PropTypes.string
}