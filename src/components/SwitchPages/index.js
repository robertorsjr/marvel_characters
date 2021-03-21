import React from 'react';
import { Switch } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function SwitchPages({reverse, onClick}) {
  return (
    <Switch onClick={onClick}>
      <FontAwesomeIcon icon={reverse ? faChevronLeft : faChevronRight} size={'3x'} />
    </Switch>
  );
}

export default SwitchPages;