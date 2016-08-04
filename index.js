/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var Plugin = require('spa-plugin-css/lib/plugin');


// public
module.exports = new Plugin({
    name: 'css',
    entry: 'build',
    config: require('./config')
});
