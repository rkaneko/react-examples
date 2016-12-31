'use strict';

const Rx = require('rxjs');

const { setObservableConfig } = require('recompose');
setObservableConfig({
  fromESObservable: Rx.Observable.from
});
