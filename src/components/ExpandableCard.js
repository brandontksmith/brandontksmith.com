import React, { useState } from 'react';

import './ExpandableCard.css';
import ChevronDown from '../assets/chevron-down.svg';
import ChevronRight from '../assets/chevron-right.svg';

const classnames = require('classnames');

const ExpandableCard = ({ title, color, children }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleCard = (e) => {
    setExpanded(!expanded);
  }

  const classNames = classnames('expandable-card', {
    default: color !== 'primary' && color !== 'secondary',
    primary: color === 'primary',
    secondary: color === 'secondary',
    warning: color === 'warning'
  });

  return (
    <div className={ classNames }>
      <div className="header" onClick={ toggleCard }>
        <div className="title">{ title }</div>
        <img className="expand" src={ expanded ? ChevronDown : ChevronRight } width="12" height="12" />
      </div>

      { expanded ? <div className="body">{ children }</div> : null }
    </div>
  )
}

export default ExpandableCard;
