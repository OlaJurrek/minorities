import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const FacebookCard = ({ url, title, type, image, desc, locale }) => {
  const langCode = locale.replace('-', '_');
  return (
    <Helmet>
      <meta property="og:locale" content={langCode} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default FacebookCard;

FacebookCard.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
};

FacebookCard.defaultProps = {
  type: 'website',
};
