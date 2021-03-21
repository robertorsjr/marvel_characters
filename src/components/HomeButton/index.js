import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Button } from './styles';
import { useHistory } from 'react-router-dom'

function HomeButton({size}) {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faHome} size={size} />
    </Button>
  );
}

export default HomeButton;