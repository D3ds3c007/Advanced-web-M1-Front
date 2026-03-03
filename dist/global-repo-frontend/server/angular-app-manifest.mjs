
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RKD7SWIC.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RKD7SWIC.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RKD7SWIC.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YAKIM7MD.js",
      "chunk-BFTTS6QP.js"
    ],
    "route": "/forbidden"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/orders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/manufacturers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R5TYGO3P.js",
      "chunk-4MPJQORH.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/manufacturers/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js"
    ],
    "route": "/shop"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-OEIO7JFT.js",
      "chunk-CH4ASLED.js",
      "chunk-JCY2VN3F.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/shop/*/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-DGMTKM3E.js",
      "chunk-JCY2VN3F.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/shop/*/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-BA5SGWJ4.js"
    ],
    "route": "/shop/*/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-E675ERSF.js"
    ],
    "route": "/shop/*/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RMK3N7WK.js",
      "chunk-PTEDRKDH.js",
      "chunk-IPZTIRD6.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js"
    ],
    "redirectTo": "/shop",
    "route": "/shop/**"
  },
  {
    "renderMode": 1,
    "redirectTo": "/shop",
    "route": "/owner"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-YKSHQRIU.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/admin/commissions"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-KJHRML3W.js",
      "chunk-JCY2VN3F.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-U6YLQYCB.js",
      "chunk-CH4ASLED.js",
      "chunk-JCY2VN3F.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-WG6XFMFX.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/admin/shops"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js",
      "chunk-WZ32WDTT.js",
      "chunk-L6QSWWYE.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3RYXR74.js",
      "chunk-PTEDRKDH.js",
      "chunk-YFQ4HI7E.js",
      "chunk-7KLHR6TL.js"
    ],
    "redirectTo": "/admin/shops",
    "route": "/admin/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8608, hash: '8a1a743d01d9fe5d4f070570d433faaae10036c7bc8ed18944ef2d82a1f79df3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3948, hash: '3d8658fb0dc20736d3f20f76d8e2d8b2d15701b11b017bc9375592942341fcaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 23964, hash: 'ffd4231421bce5408fe1c79b8393cc09859929f701ccaa543bb056ac51a7c72c', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 23390, hash: 'd150d10e3f5ee24905faf009802c09ff307e35d23c4dc62905faecbd885c0b99', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 21891, hash: '6d6264ab1b306aafe663287947ddb01fae15c24493894241967f47821280e1ce', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'index.html': {size: 42288, hash: '561ca90ea45153e5c552c72e10913ab727ee180541a2a187ffe521dd88c66576', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/shops/index.html': {size: 29566, hash: '92a2f64258cdb3dc19453a7756fcd68c608f8d184c9dcfa19da552588d80521b', text: () => import('./assets-chunks/admin_shops_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 26827, hash: '536cc5ec6842c74005f957f3cf7b5765a6ff7c071984ea7a800abee4f1ace7cb', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 32066, hash: '59f6ffd01f4ce98b21b2a4782a2124042c4f8900809201c9ad1b5dd384984a4c', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 258, hash: '223c91a2fab1666a4c239b92d5649a31681c805984e60bd2868b0391a085ec55', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'forbidden/index.html': {size: 14045, hash: '09f90f6ebcce93c21ac19eeb37b49d5b38e1be8d86fbf556c0c1e82a4647e27e', text: () => import('./assets-chunks/forbidden_index_html.mjs').then(m => m.default)},
    'admin/users/index.html': {size: 26688, hash: '1e8b656affac389a8c100348d64bb990ac19b59c7fc86c3f5d500e98ae2772a1', text: () => import('./assets-chunks/admin_users_index_html.mjs').then(m => m.default)},
    'admin/commissions/index.html': {size: 23578, hash: '3f8e7a61211bc7362dd411aee46f43bc6f54ff0fed056a746bf0b4387f0b010b', text: () => import('./assets-chunks/admin_commissions_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 24650, hash: '3dd57879d8e50c33b8bf60e32eaac7f10e481bb1543dcb51c53a45bc41b105a7', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'manufacturers/index.html': {size: 43300, hash: 'c1faec7460c4e8c77be3517a42ef5ecda7e0cf7ded505b0d89810f1d83120098', text: () => import('./assets-chunks/manufacturers_index_html.mjs').then(m => m.default)},
    'admin/categories/index.html': {size: 24548, hash: '7f37e11baf3d2b9ed749ddb86cf0dd570bb880329f573df1fd2107bfd3b63efb', text: () => import('./assets-chunks/admin_categories_index_html.mjs').then(m => m.default)},
    'styles-MZCUBQGV.css': {size: 641538, hash: 'aZ0ifKXlwKY', text: () => import('./assets-chunks/styles-MZCUBQGV_css.mjs').then(m => m.default)}
  },
};
