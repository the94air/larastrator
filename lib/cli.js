#!/usr/bin/env node
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

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

let req = `
require('./larastrator');

module.exports = {
`;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-process-exit */

const packageJson = require(_path2.default.resolve(__dirname, '../package.json'));

_commander2.default.version(packageJson.version).usage('<command> [<args>]');

_commander2.default.command('init [filename]').usage('[options] [filename]').option('-c, --config [path]', 'Path to tailwind config file').action((filename = 'larastrator.js', options) => {
  let inputFile = _commander2.default.args[0];

  if(!inputFile) {
    inputFile = 'tailwind.js';
  }

  if(!_fsExtra2.default.existsSync(inputFile)) {
    console.error(`Destination ${inputFile} doesn't exists, aborting.`);
    _process2.default.exit(1);
  }

  if (!_path2.default.extname(filename).includes('.js')) {
    lsDestination += '.js';
  }

  let lsDestination = _path2.default.resolve(filename);

  if (_fsExtra2.default.existsSync(lsDestination)) {
    console.error(`Destination ${lsDestination} already exists, aborting.`);
    _process2.default.exit(1);
  }

  const lsOutput = _fsExtra2.default.readFileSync(_path2.default.resolve(__dirname, '../defaultConfig.stub.js'), 'utf8');
  _fsExtra2.default.outputFileSync(lsDestination, lsOutput);
  console.warn(`Generated Larastrator config: ${lsDestination}`);

  let twOutput = _fsExtra2.default.readFileSync(inputFile, 'utf8');
  twOutput = twOutput.replace('let colors = {', colors);
  twOutput = twOutput.replace('module.exports = {', req);
  _fsExtra2.default.outputFileSync(inputFile, twOutput.replace('module.exports = {', init));

  console.warn(`Added Larastrator to Tailwind config: ${inputFile}`);

  _process2.default.exit();
});

_commander2.default.command('*', null, {
  noHelp: true
}).action(() => {
  _commander2.default.help();
});

_commander2.default.parse(_process2.default.argv);

if (_commander2.default.args.length === 0) {
  _commander2.default.help();
  _process2.default.exit();
}
