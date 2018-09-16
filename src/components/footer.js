import React from 'react';
import { appName, vendor } from '../properties';

const Footer = () => (
    <footer className="text-muted pt-3 pb-3">
      <div className="container">
        <p className="float-right">
          <a href="/#" title="back to top">Back to top</a>
        </p>
        <p>
          &copy; {appName} is a basic example of representing competence in building
          single page applications with <strong>react</strong><br/>while
          consuming <strong>{vendor}&apos;s</strong> RESTful API.
        </p>
      </div>
    </footer>
);

export default Footer;
