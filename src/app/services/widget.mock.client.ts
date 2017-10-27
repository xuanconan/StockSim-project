import { Widget} from '../models/widget.model.client';

export const WIDGETS: Widget[] = [
    { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: '', url: ''},
    { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
    { _id: '345', widgetType: 'IMAGE', pageId: '321', size: 0, text: 'a', width: '100%', url: 'http://lorempixel.com/400/200/'},
    { _id: '456', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''},
    { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: 0, text: 'a', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E'},
    { _id: '789', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''}
  ];
