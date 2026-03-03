
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
      "chunk-5J75UQH3.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5J75UQH3.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5J75UQH3.js",
      "chunk-Q2THIFUR.js",
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
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/orders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
      "chunk-BFTTS6QP.js",
      "chunk-YFQ4HI7E.js"
    ],
    "route": "/manufacturers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JQU3GRJH.js",
      "chunk-Q2THIFUR.js",
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
    'index.csr.html': {size: 8608, hash: '2af3af9b454f434054fd09899d3d4ef402fe78fb4e1d9e7d2ebd377f9e6b1b5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3948, hash: 'e54326ab9a5f53af04676ab5dd4d921ac2ae036757de24a28aca266eb940e723', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 21891, hash: '46cea33cbc51677eac6c675b95cc0f5a27a4f3bde75971286a97bbf0c501f6c8', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 23390, hash: 'a22af7e46a61fdd840b189661efff40246f95eab21a112f5f1a4a0d6bb3dfb1b', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45225, hash: 'ac635b34f022b4e3c7028b61540c8ae9277cab4066dd818e74a563bb674deaab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 23964, hash: '292384b51bc72bb40949518ad431e0bfa34405644d7970bbd3aaf1543f73800c', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 32066, hash: '9d4120677421db107433c38b14d7aad692595d5c7a93ec10633707c53cb3c5cd', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'admin/shops/index.html': {size: 29566, hash: 'f5a8050ce6973282f2e674f0a91505b86f42dad625062b5410350b3e4c02b35c', text: () => import('./assets-chunks/admin_shops_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 26830, hash: 'f1ac864ccccaeeb1436d27845441daf9060c794c91720cefbb03379fec79542b', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'admin/users/index.html': {size: 26688, hash: 'e7a56c6592ef51cbddcc36e6f4f3097ab6340e5f2c2c2a117c3319d1ff784ed4', text: () => import('./assets-chunks/admin_users_index_html.mjs').then(m => m.default)},
    'forbidden/index.html': {size: 14040, hash: 'a916ddc13980dbb5102662bc32fba6b38198ce8b796054a9a8093da40c6539fb', text: () => import('./assets-chunks/forbidden_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 258, hash: '223c91a2fab1666a4c239b92d5649a31681c805984e60bd2868b0391a085ec55', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin/commissions/index.html': {size: 23740, hash: '5055c70f985afa0317c5bac0545a1e869ffe3659b5178cfc77bc201983bb843f', text: () => import('./assets-chunks/admin_commissions_index_html.mjs').then(m => m.default)},
    'manufacturers/index.html': {size: 45986, hash: '7fd7b6f836caae745c5bbf7bbac708a1bea29e5bd01a829378625f5f26e584e0', text: () => import('./assets-chunks/manufacturers_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 24658, hash: 'b30de6d32a11f621888c35bc2273a768bb8f91db5ee12fec13e113a401d8ffb3', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'admin/categories/index.html': {size: 24710, hash: '0ff83e174e766f4fe3e8b8aca10f2841a887c455ad6c80b49c22085081c8b307', text: () => import('./assets-chunks/admin_categories_index_html.mjs').then(m => m.default)},
    'styles-MZCUBQGV.css': {size: 641538, hash: 'aZ0ifKXlwKY', text: () => import('./assets-chunks/styles-MZCUBQGV_css.mjs').then(m => m.default)}
  },
};
