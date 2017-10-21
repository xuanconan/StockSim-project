// define widget class field and export for global use
export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: Number;
  text: String;
  url: String;

  constructor (_id, widgetType, pageId, size, text,url) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
  }


}
