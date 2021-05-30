import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Click" />
    </header>
  )
}

Header.defaultProps = {
  title: "Movies Register"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
