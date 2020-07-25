/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f356d832702e7be17c618a2dc51a7201"
  },
  {
    "url": "accumulate/index.html",
    "revision": "45d3b50abe4076a646d28ff448e57fa6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "aa0bb869ac2ae3c4411c7bd965d0fd01"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.826a1970.js",
    "revision": "f0d7b184c608eab22cbad45e3e204fe5"
  },
  {
    "url": "assets/js/3.4c4d88c2.js",
    "revision": "524a7887e095c8dc451ceb1e73188c2a"
  },
  {
    "url": "assets/js/4.1fe356a8.js",
    "revision": "946d0f7381a24b6ae6799b4a26e04b13"
  },
  {
    "url": "assets/js/5.a2bc08fb.js",
    "revision": "57c4a5d4f5a742fe4a9bf73e0c298f53"
  },
  {
    "url": "assets/js/6.fc00f5f8.js",
    "revision": "fcd40563bfd2a52cf3bb9b417a7954a9"
  },
  {
    "url": "assets/js/7.a45097a3.js",
    "revision": "fc382ecafcf415094a5a69b755a0281e"
  },
  {
    "url": "assets/js/8.7890efea.js",
    "revision": "228733d391f6cb4b2050691b8a8680da"
  },
  {
    "url": "assets/js/9.15149801.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.f3a8a450.js",
    "revision": "c925baa275d7ea6ae76b276183d0cd79"
  },
  {
    "url": "guide.html",
    "revision": "d2b161228c7ede3b175e752b89a73a05"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/logo.png",
    "revision": "5dd53f1a701735682d6dc28c004a37e9"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "3dee0e7eaab023d3cffb3838d9aefc7d"
  },
  {
    "url": "others/index.html",
    "revision": "8f44124b66eb7d69897f4ec0ebf3eecd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
