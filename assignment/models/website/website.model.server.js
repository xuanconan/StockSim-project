var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', websiteSchema);
var UserModel = require('../../models/user/user.model.server');

module.exports = WebsiteModel;

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findAllWebsitesForUser =findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

function deleteWebsite(websiteId){
  return WebsiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, newWebsite) {
  var websiteId = websiteId;
  var website = newWebsite;
  return WebsiteModel.update({_id: websiteId}, {
    $set: {
      name: website.name
    }
  });
}

function createWebsite(website) {
  var newWebsite = null;
  return WebsiteModel
    .create(website)
    // put the website in the user array
    .then(function(website){
      newWebsite = website;
      UserModel
        .findUserById(newWebsite._user)
        .then(function(user){
          user.websites.push(newWebsite);
          //return the saved user
          return user.save();
        });
    });
}

function findWebsiteById (websiteId) {
  return WebsiteModel.findOne({_id: websiteId});
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel
    .find({_user: userId})
    .populate('_user','username')
    .exec();
}
