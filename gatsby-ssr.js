/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <script async defer data-domain="live.tsg.ne.jp" src="https://plausible.tsg.ne.jp/js/plausible.js" key="plausible"/>
  ]);
};
