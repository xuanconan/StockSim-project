module.exports = function(app) {
  app.get('/api/widget', findAllWidgets);

  var widgets = require('./widget.mock.service');

  function findAllWidgets(req, res) {
    res.json(widgets);
  }

}
