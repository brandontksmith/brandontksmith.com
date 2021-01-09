import React from 'react';
import './App.css';

import ExpandableCard from './components/ExpandableCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faDigitalOcean, faLinode, faJenkins, faBitbucket, faBootstrap, faReact, faDocker, faAws, faNode, faJs, faPython, faPhp, faLaravel, faAngular, faVuejs, faJava, faHtml5, faCss3Alt, faEmber, faGit, faNpm } from '@fortawesome/free-brands-svg-icons'

import Grid from './components/Grid';
import ProfileCard from './components/ProfileCard';
import SkillBar from './components/SkillBar';

function App() {
  let bodyStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-around'
  };

  return (
    <div className="App">
      <div className="header">
        <div style={{ display: "inline-block" }}>
          <ProfileCard
            image="./profile.jpeg"
            name="Brandon T. K. Smith"
            title="Software Engineer"
            company="T. Rowe Price"
            location="Washington DC-Baltimore Area"
            linkedInUrl="https://www.linkedin.com/in/brandontksmith/"
            githubUrl="https://github.com/brandontksmith"
            email="btks@brandontksmith.com"
            phone="4435008350"
          />
        </div>
      </div>

      <div className="body">
        <Grid.Row>
          <Grid.Column>
            <ExpandableCard title="About" color="primary">
              Hello! My name is Brandon. I have been programming since 2007 (at which point I was 12). I built my first website at a very young age, starting with an informational website that provided tips and secrets for the now-defunct virtual world Club Penguin. Over the years, I have had the opportunity to work at various start-ups and develop my skills rapidly in fast-paced environments. I have worn multiple hats and fulfilled various roles, but my primary expertise is Full-Stack Development in the Cloud.
            </ExpandableCard>

            <ExpandableCard title="In the News" color="default">
              <ul>
                <li>
                  <a href="https://technical.ly/baltimore/2019/10/01/reallist-engineers-best-software-developers-list-baltimore/">Meet 15 devs powering Baltimore tech: The inaugural RealLIST Engineers</a><br />
                  <span>Recognized for coding skills and community leadership by Technical.ly Baltimore in Oct. 2019</span>
                </li>
              </ul>
            </ExpandableCard>
          </Grid.Column>

          <Grid.Column>
            <ExpandableCard title="Frameworks & Languages" color="secondary">
              <SkillBar icon={ faNode } weight={ 8 } color="#6a9e66" />
              <SkillBar icon={ faJs } weight={ 10 } color="#e4a138" />
              <SkillBar icon={ faPython } weight={ 6 } color="#feda5b" />
              <SkillBar icon={ faPhp } weight={ 5 } color="#566693" />
              <SkillBar icon={ faJava } weight={ 5 } color="#0f768e" />
              <SkillBar icon={ faHtml5 } weight={ 10 } color="#e35230" />
              <SkillBar icon={ faCss3Alt } weight={ 10 } color="#1875B6" />
              <SkillBar icon={ faReact } weight={ 10 } color="#67dbf9" />
              <SkillBar icon={ faAngular } weight={ 5 } color="#c10933" />
              <SkillBar icon={ faVuejs } weight={ 5 } color="#47b785" />
              <SkillBar icon={ faLaravel } weight={ 5 } color="#FC312D" />
              <SkillBar icon={ faEmber } weight={ 5 } color="#de4f3f" />
            </ExpandableCard>

            <ExpandableCard title="Tools / Other" color="warning" bodyStyle={ bodyStyle }>
              <FontAwesomeIcon icon={ faDocker } color="#2e98ea" size="lg" />
              <FontAwesomeIcon icon={ faAws } color="#fd9927" size="lg" />
              <FontAwesomeIcon icon={ faBootstrap } color="#7955b1" size="lg" />
              <FontAwesomeIcon icon={ faGit } color="#f24e32" size="lg" />
              <FontAwesomeIcon icon={ faNpm } color="#ca3739" size="lg" />
              <FontAwesomeIcon icon={ faGitlab } color="#e04532" size="lg" />
              <FontAwesomeIcon icon={ faBitbucket } color="#2e87fc" size="lg" />
              <FontAwesomeIcon icon={ faJenkins } color="#d13a39" size="lg" />
              <FontAwesomeIcon icon={ faLinode } color="#29b260" size="lg" />
              <FontAwesomeIcon icon={ faDigitalOcean } color="#136dfb" size="lg" />
            </ExpandableCard>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <ExpandableCard title="Notable Projects & Integrations" color="danger">
              <ul>
                <li>
                  <a href="https://technical.ly/baltimore/2019/07/19/masschallenge-fintech-accelerator-pinkaloo-launches-charitable-giving-pilot-eastern-bank/">Eastern Bank Give for Good (Charitable Giving Pilot)</a><br />
                  <span>Worked with the COO of Pinkaloo and leaders at Eastern Labs (part of Eastern Bank) to integrate Pinkaloo's Charitable Giving Platform in the Core Banking of Eastern Bank. Today, Give for Good is available on Web and Mobile to all customers at Eastern Bank.</span>
                </li>

                <li>
                  <a href="https://apps.adp.com/en-US/apps/245151/modern-giving-by-pinkaloo-for-run-powered-by-adp/overview">Modern Giving by Pinkaloo for RUN Powered by ADP</a><br />
                  <span>Integrated with ADP RUN to bring Pinkaloo's Charitable Giving Platform to organizations via the ADP Marketplace. Through the click of a button in the ADP Marketplace, organizations can provide engaging and automated workplace giving benefits to their employees.</span>
                </li>
              </ul>
            </ExpandableCard>
          </Grid.Column>
        </Grid.Row>
      </div>
    </div>
  );
}

export default App;
