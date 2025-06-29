'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb9de0f7050f6d1004b230d6df1b222b",
"assets/AssetManifest.bin.json": "cd9ba008d42cf7afaa56cd77832fb736",
"assets/AssetManifest.json": "d583686cfded733d19e8c4e3c6ba8a3b",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "b9ca03e9742434a8a843b6402995f1c8",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "a6cfec0cb3e946398cffcd4fa7ac61d1",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "62a51d6c865b832053fc7f9066b0935c",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d76ccb1aa5bf679b387f48101058933a",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "8c75203c397f88159acb95fc09268a62",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "7e3a130b0433696f4d2f570122f5790d",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "06582556533e597755a368f022db5f5a",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "bafbc0b1fb65a719824724dc735ea88c",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "f03365b9383f96610bb69c2f92d7cb75",
"assets/assets/icons/email.svg": "d92a2362766b5c020ff5ec7fa3330ea2",
"assets/assets/icons/facebook.svg": "d6d4ff5abcd1d7b02a0b1a353d84070c",
"assets/assets/icons/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/icons/google.svg": "321f39a5b0f72e3277504d10de951b27",
"assets/assets/icons/linkedin.svg": "d9275f99a5109c6baa6a46cef6b99dbb",
"assets/assets/icons/location-pin.svg": "9c11827a256e7efbd73679ca36cb8441",
"assets/assets/icons/mobile.svg": "24b836bfd6603f8ef2c2df70e2ca6a4a",
"assets/assets/images/Android.png": "ff7628665bdaf630c21aab7375fd264c",
"assets/assets/images/azka-foods.png": "d9c255c6ea196b375ce54accfda6d134",
"assets/assets/images/backend.png": "1b5a72e6069881d04dee621cfe7365ac",
"assets/assets/images/coding.png": "271b7dcf5e822622566f2c13fe060bd8",
"assets/assets/images/crm.png": "c692ba531a587d6f0aca08402c577325",
"assets/assets/images/customs.png": "1e261e6c8cd770f3b38d0d54d84c4781",
"assets/assets/images/Dart.png": "3d4712fbcc4ccae798a6a212e78d686a",
"assets/assets/images/developer.png": "7b7bdad96e47c9dd8fdc6c324fb78ad9",
"assets/assets/images/fan-alfaisal.png": "8e019973d84bff5499063f52c00c461b",
"assets/assets/images/Firebase.png": "a437fec0dc5342244c27303a05c634ae",
"assets/assets/images/Flutter.png": "11d934b216851323c314f435701ff6d1",
"assets/assets/images/front-development.png": "c722694f1376ae737ca5e5efae146eb2",
"assets/assets/images/gift-merchant.png": "a9a7cf45162ac1de291900566a426a3e",
"assets/assets/images/gift.png": "bc8716b7ad1015380257189b8bbe7c62",
"assets/assets/images/github-actions.png": "9be43c05d9f4a41cc8628d096cc9c100",
"assets/assets/images/GitHub.png": "032fd53e63e0e3e506558bf2456a48ce",
"assets/assets/images/googan-real-estate.png": "c6e6ecc8d4abbd23cdbf76293a55a83c",
"assets/assets/images/hr.png": "f903ab7a720b41d4a02aa1e6aa4e9631",
"assets/assets/images/Jira.png": "7baead2b92045c3bdba8a0b11d420782",
"assets/assets/images/kian.png": "0b0494181b2566c689ec1ad21f1db400",
"assets/assets/images/Kotlin.png": "db1f9416f8a65ef37a517e812d836e8e",
"assets/assets/images/nafethly.png": "1ce06462443962c7ead54432e9b3c978",
"assets/assets/images/Postman.png": "5972522c58523d1ac196ae2edc797d68",
"assets/assets/images/programmer.png": "21755d56d2bf7f8e329086f03b26382d",
"assets/assets/images/snaydi.png": "4c8d1e00422999767d95957d2083a926",
"assets/assets/images/state-management.png": "3b8d17807f6866298b177b2c033a6817",
"assets/assets/images/Swift.png": "b143441a65536d2f75f3f3aae9361580",
"assets/assets/images/telecommunications.png": "69d303d7742bc1d427e098b77e5d0a44",
"assets/assets/images/wanna.png": "a0d2e263b75b2c028531a0a9af718377",
"assets/assets/images/web-programming.png": "a8a75d5811a3ae43b5dd20516a278612",
"assets/FontManifest.json": "dd1e0123fc3aa063e0df72152f8eeebb",
"assets/fonts/MaterialIcons-Regular.otf": "ea5d9990ce7a2fab3e7179fe5ab558bb",
"assets/NOTICES": "e995e3c082f71e1277afbb398eb6c3f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "6800e0ed315987021359e8842a29c53e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "716dbe5cb95ad17fb579d83edb01ed7e",
"index.html": "5b14cbf7d51f73a4eb390a8059af38a1",
"/": "5b14cbf7d51f73a4eb390a8059af38a1",
"main.dart.js": "e3cb6cfef7ceecbb69b6ac1bbff7f13a",
"manifest.json": "5ef8bb49a28d5ba6d496694373d89459",
"version.json": "349d1504901de71df633115e1d4bd70b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
