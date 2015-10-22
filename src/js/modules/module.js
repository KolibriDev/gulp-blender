import domReady from 'vendor/domReady';

export default () => {
  domReady(() => {
    console.log('ES6 module importing require.js modules');
  });
};
