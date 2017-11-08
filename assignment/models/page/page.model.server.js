var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var WebsiteModel = require('../../models/website/website.model.server');
var PageModel = mongoose.model('PageModel', pageSchema);

module.exports = PageModel;

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite =findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

function deletePage(pageId){
  return PageModel.remove({_id: pageId});
}


function updatePage(pageId, newpage){
  var pageId = pageId;
  var newpage = newpage;
  return PageModel.update({_id: pageId},{
    $set: {
      name:newpage.name,
      title: newpage.description
    }
  });
}


function createPage(page) {
  var newPage = null;
  return PageModel
    .create(page)
    // put the page in the website array
    .then(function(page){
      newPage = page;
      WebsiteModel
        .findWebsiteById(newPage._website)
        .then(function(website){
          website.pages.push(newPage);
          //return the saved website
          return website.save();
        });
    });
}

function findPageById(pageId){
  return PageModel.findOne({_id: pageId});
}

function findAllPagesForWebsite(websiteId) {
  return PageModel
    .find({_website: websiteId})
    .populate('_website','name')
    .exec();
}
