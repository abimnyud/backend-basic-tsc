/*
 * Don't change this!
 */

const fs = require('fs');
const path = require('path');
const submission = {};

const basename = path.basename(__filename);
fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    const name = file.slice(0, -3);
    submission[name] = require(path.join(__dirname, file));
});

module.exports = submission;
