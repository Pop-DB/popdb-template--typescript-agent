export default async function (event, ctx) {
  ctx.log.info('Task received', { payload: event.payload });
}
