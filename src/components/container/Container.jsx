import PropTypes from 'prop-types'

import './Container.css'

const Container = ({ children }) => {
  return (
    <main>{children}</main>
  )
}

export default Container

Container.propTypes = {
  children: PropTypes.any
}