export default async function (event, ctx) {
  ctx.log.info('Event received', { payload: event.payload });
}
