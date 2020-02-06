
const routes = [
  {
    mode: 'history',
    base: process.env.BASE_URL,
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/users', component: () => import('pages/PageUsers.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/PageChat.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
