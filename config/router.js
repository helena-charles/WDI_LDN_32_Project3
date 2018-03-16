const router = require('express').Router();
const events = require('../controllers/events');

const locations = require('../controllers/locations');

const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');


router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create);

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.update)
  .delete(secureRoute, events.delete);


router.post('/register', auth.register);
router.post('/login', auth.login);


router.route('/locations')
  .get(locations.index);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
