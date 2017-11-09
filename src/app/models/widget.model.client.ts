// define widget class field and export for global use
export class Widget {
  name: String;
  _id: String;
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;
  width: String;
  url: String;

  constructor (name, _id, widgetType, pageId, size, text, width, url) {
    this.name = name;
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.width = width;
    this.url = url;
  }


}
