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

var vars = require('./vars');

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

  const twOutput = _fsExtra2.default.readFileSync(inputFile, 'utf8');
  twOutput.replace('let colors = {', vars.colors);
  twOutput.replace('module.exports = {', vars.reg(inputFile));
  _fsExtra2.default.outputFileSync(inputFile, twOutput.replace('module.exports = {', vars.init));

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
