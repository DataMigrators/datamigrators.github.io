import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Logo = () => (
  <svg
    width="81"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 219.49 146.52">
    <title>DM Icon RGB White</title>
    <path d="M230.88,132.39c-10.94,0-21.43,3.61-31,10.3-9.51-6.65-20-10.3-31.08-10.3-33.57,0-62.86,34-74.62,86.66l-2.91,13.06h27.29v0h40.62v0h16.15l1.87-8.39C182,202.21,190,184.33,199.83,172a94.68,94.68,0,0,1,8.49,12.89c12.19,22.06,18.91,51.63,18.91,83.25V278.9h83.53V268.18c0-76.15-35.09-135.79-79.88-135.79Zm-72.56,78.27h.48v0H120v0h-1.4c10.57-34.49,29.93-56.82,50.24-56.82a31.1,31.1,0,0,1,15,4c-10.85,13.29-19.68,31.27-25.47,52.78Zm91.8,46.79h-1.67c-1.82-41.39-14.11-77-32.5-99.58a31.11,31.11,0,0,1,14.93-4c14.39,0,28.43,11,39.51,31.09,10.81,19.55,17.32,45,18.66,72.52Z"
    transform="translate(-160 -130)"
    fill="#fff"/>
  </svg>
);

const Content = ({ buildTime }) => (
  <>
    <p>
      This site was last updated on {buildTime}
    </p>
    <p>
      &copy;2020 Data Migrators Pty Ltd
    </p>
    <p>
      <a href="https://www.datamigrators.com">
        Data Migrators
      </a>
    </p>
  </>
);

/*
const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};
*/

const links = { }

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo}/>;

export default CustomFooter;
