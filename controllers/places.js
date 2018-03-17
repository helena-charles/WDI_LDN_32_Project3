const Place = require('../models/place');


function indexRoute(req, res, next) {
  Place.find()
    .then(places => res.json(places))
    .catch(next);
}


module.exports = {
  index: indexRoute
};
