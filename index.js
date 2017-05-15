module.exports = async function metaStatus(ctx, next) {
  await next();

  ctx.state.meta = ctx.state.meta || {};

  if (inStatusRange(ctx.status, 200)) {
    ctx.state.meta.status = 'success';
  }

  if (inStatusRange(ctx.status, 400)) {
    ctx.state.meta.status = 'error';
  }

  if (inStatusRange(ctx.status, 500)) {
    ctx.state.meta.status = 'failure';
  }
};

function inStatusRange(status, min) {
  let max = min + 100;
  return status >= min && status < max;
}
