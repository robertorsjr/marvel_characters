import React from 'react';
import { Switch } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function SwitchPages({reverse, onClick, to}) {
  return (
    <Link to={to && to}>
      <Switch onClick={onClick}>
          <FontAwesomeIcon icon={reverse ? faChevronLeft : faChevronRight} size={'3x'} />
      </Switch>
    </Link>
  );
}

export default SwitchPages;