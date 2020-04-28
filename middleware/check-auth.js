export default function (context) {
  if (process.client) {
    console.log('[Middleware] Check Auth');
    context.store.dispatch('initAuth', context.req);
  }
}
