import React, { useState } from 'react';

import './ExpandableCard.css';

import ChevronRight from '../assets/chevron-right.svg';

const classnames = require('classnames');

const ExpandableCard = ({ title, color, children, bodyStyle = {} }) => {
  const [expanded, setExpanded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const toggleCard = (e) => {
    setExpanded(!expanded);
    setIsExpanding(true);

    setTimeout(() => {
      setIsExpanding(false);
    }, 500);
  }

  const classNames = classnames('expandable-card', {
    default: color !== 'primary' && color !== 'secondary',
    primary: color === 'primary',
    secondary: color === 'secondary',
    warning: color === 'warning',
    danger: color === 'danger'
  });
  
  const bodyClassNames = classnames('body', {
    'fade-exit-active': expanded && isExpanding,
    'fade-exit': !expanded && !isExpanding,
    'fade-enter-active': !expanded && isExpanding,
    'fade-enter': expanded && !isExpanding
  });

  const expandClassNames = classnames('expand', {
    'rotate-90': !expanded,
    'rotate-0': expanded
  });

  return (
    <div className={ classNames }>
      <div className="header" onClick={ toggleCard }>
        <div className="title">{ title }</div>
        <img className={ expandClassNames } src={ ChevronRight } width="12" height="12" />
      </div>

      <div className={ bodyClassNames } style={ bodyStyle }>{ children }</div>
    </div>
  )
}

export default ExpandableCard;
