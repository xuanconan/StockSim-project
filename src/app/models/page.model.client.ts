// define page class field and export for global use
export class Page {
  _id: String;
  name: String;
  websiteId: String;
  description: String;

  constructor (_id, name, developerId, description) {
    this._id = _id;
    this.name = name;
    this.websiteId = developerId;
    this.description = description;
  }
}
