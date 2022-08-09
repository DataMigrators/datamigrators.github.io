import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>Welcome</p>;

const FirstRightText = () => (
  <p>
    This site provides documents supporting the onboarding of
    Data Migrators as a supplier of software and services.
    Please <a href="mailto:contact@datamigrsators.com">contact us</a> if
    you need some information which you can't find here.
  </p>
);

const BannerText = () => <h1>Data Migrators Documents</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: <p></p>,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
