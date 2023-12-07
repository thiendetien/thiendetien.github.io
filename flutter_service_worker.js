'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6f5ab3793d58950b0ecac1f86dfda2cd",
"index.html": "62b49ada393b5180e73278e4fd229bdc",
"/": "62b49ada393b5180e73278e4fd229bdc",
"main.dart.js": "3225c25ae48aa8dc1b3f77466db8180f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "c11d64e8bde0d3deaacdac18f3c72a79",
"icons/Icon-192.png": "f57f6e440272309346ca5a54ac8524a0",
"icons/Icon-maskable-192.png": "6f5e2cd36f19b90732a0e2480ab4937d",
"icons/Icon-maskable-512.png": "5b3933ef95e30a3ca3352ae13ec41368",
"icons/Icon-512.png": "063264635346e1ae920c5035031396aa",
"manifest.json": "0d36d791e16b716d3daa51bba3efaa70",
"assets/AssetManifest.json": "df01884ceab6ea5f73acdcb95536c890",
"assets/NOTICES": "469ba143a5e4262abc96ca4360e4b6e8",
"assets/FontManifest.json": "a56f6756277f6331c8234cb36587f78c",
"assets/AssetManifest.bin.json": "ed2517d844f18c3d6830a425a73e1c93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1c6662a9503953bf16a1dbc0ee9ce8a3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Regular.ttf": "40e6df55734232692408d76ad5f9c34a",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "6148e7019854f3bde85b633cb88f3c25",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Solid.ttf": "c0bf087a238488d351270a35c8f0cca0",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/FontAwesome6_Brands.ttf": "0ef11ce096706bcafc520aee12162ae4",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "4e85bc9ebe07e0340c9c4fc2f6c38908",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "339347cccb69360d42288c6a82cb8498",
"assets/fonts/MaterialIcons-Regular.otf": "80a0778b4a37009279276ba2b9e676be",
"assets/assets/images/a1.png": "4ffd1a115bb899af3e6834c84cd0eb00",
"assets/assets/images/a3.png": "32a14633c2815d599a3073a4eca40af1",
"assets/assets/images/ico_memu_rank.png": "ec4b0335f5a00ce0ec4179bf3a02c5f9",
"assets/assets/images/text_bxh.png": "4d79c7c321ddbc321bebd879526f67d8",
"assets/assets/images/giai_thang.png": "e592121ca96c74fd86cc720a1c7a45b8",
"assets/assets/images/text_thele.png": "c9a6e9ab8033b4abad4ad47f9639f069",
"assets/assets/images/a5.png": "21087676017601e0bd9bf8db256e8a51",
"assets/assets/images/text_time_start.png": "7694c7b61344bbf73f058fc896e41cc9",
"assets/assets/images/ico_memu_giaithuong.png": "086ee2684db58f06e8b0d0c8b0bb8582",
"assets/assets/images/manhua.png": "846980679c0795acf4382fd96cf857c6",
"assets/assets/images/ico_memu_coin.png": "4a0720e974979bde3c17d369795e5d2d",
"assets/assets/images/giai_tuan.png": "3ffe6698d5127a04fb715ec90a903bae",
"assets/assets/images/ico_memu_thele.png": "0cddffc4517368240abe78b137fe7f7e",
"assets/assets/images/top3.png": "1decb7a8af8ec462919a66c6df15ef45",
"assets/assets/images/backgroud.png": "d02a9d9ce6ffd3cf67e4b0ff7aad8a21",
"assets/assets/images/event_truyen.png": "b0d36b2692fe6b2188edc19c0fb27f0b",
"assets/assets/images/ico_memu_dangky.png": "949ead190ab0d48d474aaf2b89fdaf83",
"assets/assets/images/top2.png": "b59e86362a5964fbd0b018210c411859",
"assets/assets/images/top1.png": "4610608a036607d9dcdec575c04a49d7",
"assets/assets/images/ico_menu_upload.png": "f1638f71fe4c75ea8c29ac8fe604da10",
"assets/assets/images/text_giaithuong.png": "9e9af01d984c354e8db38d37c82f8b79",
"assets/assets/images/woa.png": "26d6e49cb4bf6d06cdc52cede498329b",
"assets/assets/images/giai_phu.png": "dcc182b4e86b49f1c6ccc7f15ee484e4",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
