import React from 'react';
import AboutTemplate from '../../components/templates/about-template';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutTemplate
    title={entry.getIn(['data', 'title'])}
    dates={entry.getIn(['data', 'dates'])}
    datesHeader={entry.getIn(['data', 'datesHeader'])}
    htmlContent={widgetFor('body')}
  />
);

export default AboutPagePreview;
