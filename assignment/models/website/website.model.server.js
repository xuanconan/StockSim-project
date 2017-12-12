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
WebsiteModel.findAllClasses = findAllClasses;

function findAllClasses() {
  return WebsiteModel.find({})
    .populate('_user','username')
    .exec();;
}


function createWebsite(website) {
  var newWebsite = null;
  return WebsiteModel
    .create(website)
    // put the website in the user array
    .then(function(website){
      newWebsite = website;
      return UserModel
        .findUserById(newWebsite._user)
        .then(function(user){
          user.websites.push(newWebsite);
          //return the saved user
          return user;
        })
    });
}

function deleteWebsite(userId, websiteId){
  // return WebsiteModel.remove({_id: websiteId});
  return WebsiteModel
    .remove({_id: websiteId});
    // .then(function (websiteId) {
    //   return UserModel
    //     .findUserById(userId)
    //     .then(function (user){
    //       for(var x = 0; x < user.websites.length; x++){
    //         if (user.websites[x].id === websiteId){
    //           user.websites.splice(x,1);
    //           return user;
    //         }
    //       }
    //     });
    // });
}

function updateWebsite(websiteId, newWebsite) {
  var websiteId = websiteId;
  var website = newWebsite;
  return WebsiteModel.update({_id: websiteId}, {
    $set: {
      name: website.name,
      description: website.description
    }
  });
}

function findWebsiteById (websiteId) {
  return WebsiteModel.findOne({_id: websiteId});
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel
    .find({_user: userId})
    .populate('_user','role')
    .exec();
}
