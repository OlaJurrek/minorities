import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Patrons = ({ patron1 }) => {
  //   console.log(patron1);

  //   const ourPatron = patron1.split('uploads')[1].slice(1);

  //   console.log(ourPatron);

  //   const patronsQuery = graphql`
  //     query($ourPatron: String!) {
  //       allFile(filter: { relativePath: { eq: $ourPatron } }) {
  //         edges {
  //           node {
  //             publicURL
  //             absolutePath
  //           }
  //         }
  //       }
  //     }
  //   `;

  //   const data = useStaticQuery(patronsQuery);
  //   console.log(data);
  return <div>{patron1}</div>;
};

export default Patrons;
