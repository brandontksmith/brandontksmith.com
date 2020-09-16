import React from 'react';

import './ProfileCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faBriefcase, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ProfileCard = ({ image, name, title, company, location, linkedInUrl, githubUrl, email, phone }) => {
  return (
    <div className="profile-card">
      <div className="col-1">
        <img className="rounded avatar" src="./profile.jpeg" width="96" />

        { linkedInUrl ? <a className="linkedin-link" href={ linkedInUrl }><FontAwesomeIcon icon={ faLinkedin } size="lg" /></a> : null }
        { githubUrl ? <a className="github-link" href={ githubUrl }><FontAwesomeIcon icon={ faGithub } size="lg" /></a> : null }
        { email ? <a className="email-link" href={ "mailto:" + email }><FontAwesomeIcon icon={ faEnvelope } size="lg" /></a> : null }
        { phone ? <a className="phone-link" href={ "tel:" + phone }><FontAwesomeIcon icon={ faPhoneSquareAlt } size="lg" /></a> : null }
      </div>

      <div className="col-2">
        <h1 className="name">{ name }</h1>
        <div className="title"><FontAwesomeIcon icon={ faBriefcase } size="sm" /> { title } at { company }</div>
        <div className="location"><FontAwesomeIcon icon={ faMapMarkerAlt } size="sm" /> { location }</div>
      </div>
    </div>
  );
}

export default ProfileCard;
