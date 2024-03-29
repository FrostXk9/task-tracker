import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router-dom';

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

function Header({ title, onAdd, showAdd }) {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>)}
    </header>
  );
}

export default Header
