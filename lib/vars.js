let colors = `
let colors = {
  'panel-grey-darker': '#606060',
  'panel-grey-light': '#b6bec6',
  'panel-grey-lighter': '#e9eef2',
  'panel-grey-lightest': '#f7f7f7',

  'input-grey-lightest': '#f1f1f1',

  'button-grey-darkest': '#acbbc9', // darken(#dae1e7, 15%)
  'button-grey-darker': '#bbc8d3', // darken(#dae1e7, 10%)
  'button-grey-dark': '#dae1e7',
  'button-grey': '#e9eef1', // lighten(#dae1e7, 5%)

  'panel-green-darkest': '#8ee396', // darken(#cbf2cf, 15%)
  'panel-green-darker': '#cbf2cf',
  'panel-green-dark': '#dff7e2', // lighten(#cbf2cf, 5%)

  'panel-red-darkest': '#ff8880', // darken(#ffd0cd, 15%)
  'panel-red-darker': '#ffd0cd',
  'panel-red-dark': '#ffe8e6', // lighten(#ffd0cd, 5%)

  'panel-teal-darkest': '#92e2e2', // darken(#cef2f2, 15%)
  'panel-teal-darker': '#cef2f2',
  'panel-teal-dark': '#e2f7f7', // lighten(#cef2f2, 5%)

  'button-yellow-darkest': '#ffb979', // darken(#ffe1c6, 15%)
  'button-yellow-darker': '#ffe1c6',
  'button-yellow-dark': '#ffeedf', // lighten(#ffe1c6, 5%)

  'datatable-grey': '#909399',

  'datatable-yellow': '#d3aa3b',
  'datatable-yellow-light': '#faf0c1',

`;

let req = function(filename) {
  return `
  let ls = require('./${filename}');

  module.exports = {
  `;
}

let init = `
module.exports = {

/*
|-----------------------------------------------------------------------------
| Larastrator configurations             https://docs.codolog.com/larastrator
|-----------------------------------------------------------------------------
|
| Murging larastrator config with tailwind configs. JavaScript configurations
| are used by larastrator to get rid of annoying SASS variables.
|
*/

ls: ls,
`;

module.exports = {
  req: req,
  init: init,
  colors: colors,
};
