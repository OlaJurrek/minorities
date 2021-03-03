import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Headline from "../components/atoms/headline";
import Paragraph from "../components/atoms/paragraph";
import LanguageNav from "../components/molecules/language-nav";

const MinorityPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter);
  console.log(html);
  return (
    <Layout>
      <LanguageNav />
      <Headline text="Hello from minority page! This is headline" />
      <Paragraph text="Pierwsze duże migracje Czechów na tereny Polski związane były z czynnikami religijnymi. Ich historię otwiera rok 1548, gdy Ferdynand I nakazał wszystkim poddanym należącym do husyckiej Jednoty Braterskiej wstąpienie do Kościoła katolickiego albo opuszczenie kraju[5]. Osiedlenie się w Wielkopolsce braci czeskich, którzy jako ruch religijno-społeczny wyłonili się z husytyzmu, było niezwykle istotne dla rozwoju polskiej reformacji. Inspiracje czeskie odegrały zwłaszcza rolę w początkowej fazie formowania się polskiej literatury reformacyjnej w I połowie XVI wieku[6]." />
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `;

export default MinorityPage;
