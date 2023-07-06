import { PropTypes } from 'prop-types'

import './Typografy.css'

const TextP = ({ children }) => {
  return (
    <p>
      {children}
    </p>
  )

}

export default TextP

TextP.propTypes = {
  children: PropTypes.string
}