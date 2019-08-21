import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {config.siteTitle} 2019. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
