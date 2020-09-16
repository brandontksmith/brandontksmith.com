import React from 'react';

import './SkillBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillBar = ({ icon, color, weight }) => {
  const width = (weight / 10) * 100;

  return (
    <div className="skill-bar-wrapper">
      <div className="icon">
        <FontAwesomeIcon icon={ icon } size="lg" color={ color } />
      </div>

      <div className="skill-bar" style={{ borderColor: color }}>
        <div className="inner-bar" style={{ width: `${ width }%`, background: color }}></div>
        <div className="weight-label">{ weight } / 10</div>
      </div>
    </div>
  )
}

export default SkillBar;
