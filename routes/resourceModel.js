const db = require('../dbConfig');

function getResources() {
  return db('resources');
}

function addResource(resource) {
  return db('resources')
    .insert(resource);
}

module.exports = {
  getResources,
  addResource
}