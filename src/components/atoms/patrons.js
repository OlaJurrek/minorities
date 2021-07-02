import React from 'react';
import Img from 'gatsby-image';

const Patrons = ({ patron1 }) => {
  return (
    <div>
      <figure>
        <Img fluid={patron1.childImageSharp.fluid} />
      </figure>
    </div>
  );
};

export default Patrons;
