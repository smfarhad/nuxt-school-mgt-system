export default function (context) {
  console.log('IsAuthenticated Start')
  console.log(context.store.getters.isAuthenticated);

  console.log('IsAuthenticated End')
  if (!context.store.getters.isAuthenticated) {
    console.log('[Middleware] Auth');
    context.redirect("/admin/auth");
  }
}
