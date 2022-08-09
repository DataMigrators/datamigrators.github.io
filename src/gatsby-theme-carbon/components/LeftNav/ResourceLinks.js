import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'MettleCI Documentation',
    href: 'http://docs.mettleci.io',
  },
  {
    title: 'Rapid DataStage Upgrade',
    href: 'http://rapiddatastageupgrade.com',
  },
  {
    title: 'MettleCI IBM Sales Kit',
    href: 'http://seismic.mettleci.io',
  },
  {
    title: 'S2PX - Server to Parallel',
    href: 'http://s2px.mettleci.io/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
