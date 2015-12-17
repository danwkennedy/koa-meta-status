'use strict';


module.exports = function *metaStatus(next) {
  yield next;

  this.state.meta = this.state.meta || {};

  if (inStatusRange(this.status, 200)) {
    this.state.meta.status = 'success';
  }

  if (inStatusRange(this.status, 400)) {
    this.state.meta.status = 'error';
  }

  if (inStatusRange(this.status, 500)) {
    this.state.meta.statue = 'failure';
  }
};

function inStatusRange(status, min) {
  let max = min + 100;
  return status >= min && status < max;
}
