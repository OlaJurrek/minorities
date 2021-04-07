import React from 'react';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';

const AboutTemplate = ({ title, htmlContent, datesHeader, dates }) => {
  return (
    <>
      <Headline text={title} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      {dates.length > 0 && <Paragraph text={datesHeader} />}
    </>
  );
};

export default AboutTemplate;
