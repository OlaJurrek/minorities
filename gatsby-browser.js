// import 'typeface-ibm-plex-sans';
// import "typeface-poppins";
const React = require('react');
const TransProvider = require('./src/components/templates/provider').default;

// exports.wrapPageElement = args => {
//   console.log('halo', args);
//   return <Provider {...args.props}>{args.element}</Provider>;
// };

exports.wrapRootElement = props => {
  console.log('root', props);
  //   console.log('halo root', typeof props.element, props.element);
  return <TransProvider>{props.element}</TransProvider>;
};
