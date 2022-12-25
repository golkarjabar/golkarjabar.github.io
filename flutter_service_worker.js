'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0b287f62f70ccc7a04b2e08c928acd9",
".git/config": "dd5c1df358953b2cd11225d3f11d459f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "afdc516d341023b1f0981ef79643e1be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e70798f8bf191062e171e83b10618437",
".git/logs/refs/heads/master": "e70798f8bf191062e171e83b10618437",
".git/logs/refs/remotes/origin/master": "cc6af362e7c06a95663fad6a527f57a4",
".git/objects/01/4ff5c350bc83f43fd8910d676ef2a87677430a": "19121de92904516eb3f45d5396579207",
".git/objects/08/fed1eafa7e03399d9b6c607bd802594360ca95": "8e32c93f3fc4dd6e926dc964c5c150c2",
".git/objects/0b/818e634f306cf74ef196e75cd0e2e5aed54da5": "bfd6190b597b33199b65d349023e6f40",
".git/objects/0c/c87209ebb2fdb9a53dba94f8cdda533ac88a0b": "6cbfa70cace6f6417e1641e21d4a3174",
".git/objects/12/fbe9cb5041836b43527438f88d8e7fe44a7cc1": "016c872fe55d47227cfeb068d0e205eb",
".git/objects/17/4d319e1454955e16607d83fb17507db27dc90b": "533aa59ebcbcf61c6e1d732a2ade7fa8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/19c5d9312a74c08c7365c5ceaf61e657a5ad31": "884630c519b1efeb6b2c65bf4e9fa4ed",
".git/objects/26/122293e5455d509f44b7a8ff070dc073a60730": "b261ef6b8007050660ace4862bf94ccc",
".git/objects/26/1abc63b3d207f13100ccef1bd8ec27e613b32e": "fbfcedb49c4effa9a49e45872bbc3b55",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/73ff70ed73b3babeaed726f328dab196de0155": "9ba3380d921ad564afdcaa1a960faf69",
".git/objects/2e/dcf5bf89a08a13b54460fed76f8bd58039cf2f": "0478966a16125bcdffda0a2ea34b3180",
".git/objects/34/2694de2bc7b8e9028161cb3ccffaa78f6843f5": "6e43a7ec29bbb12733ac67fc838cbca5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/a851ff36ae19644412c6929e6a5989c151ccb5": "1f32900c8770d28cba290e4e2bef7192",
".git/objects/4d/d8e639bc45286053068152fead5ddbd9741833": "dba1ab5aac431e4b1ee983f09268b517",
".git/objects/4d/fabd3715bc3dd6eda9654a4a2adf9926a81a7c": "eb10ba76b848731e147dd2c0ae672bf4",
".git/objects/4e/0fb8533c41203cd019b28767168f413c230a68": "cfc5aa4d916aa5c5d52c1ba52b6522f9",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/60/b27e848dfd52aef20852b5bea3c7aeb1268cd1": "1019bdc12a374645f96485ea317e5f67",
".git/objects/62/831ffad947619267649b2a6175e720d2d1d39f": "67bae833ffc19e03d037a157cce910e3",
".git/objects/69/9f62805f441bf8c808245284c211f430418bfb": "97c78997dde33e4cb61e98fcddfaea47",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/8cbf77b323829ac2dadbc91ee1b99a05421712": "c8b0e4ace11854c484a57a506f764ce7",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/15996afff1cd835dcb12829687eb4bafb010b7": "055260e3f5a525a040340e78fd625267",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a4412a39d6f38db30a15ebc47f02fb967bc088": "d6ee14771711c35eb1f28078e737b666",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/725f643045696bd6034a44c6e67a104646db2f": "148219c4b97a461b55b1154611eaf8c4",
".git/objects/93/2394e2c36e7e20374a99e4b3dcf9ce26ab75d4": "251e76244e9bae8da165d0622eae4150",
".git/objects/95/f1f76c9dd995b1705753019ce14347ed3412ac": "2f2bb5fc86e8d136dc315655dc7ef1af",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/5171428b8467aa49e6b570f8f7559b041973f8": "67319dc76b19a418a1a6f72a7ee428b1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/7ccb1328cb011b542bd61c18952db4fb6ef43c": "b5cadd4cda4c480446d2e6f9ecddec5c",
".git/objects/a8/672e22d9864dfcd920b452578da03233620c98": "d800441296b2d0f94f093d68f04d3864",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/3873422700067e7f41d93d88353e11eaf28f45": "6e478710d9cb05ad8e926d755cc019f9",
".git/objects/b1/b216f2656f5732c632046295fcec42bfc3d5ff": "1b29df240ee5f2cac01f9cf25bb32cbd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/53db3dc677d302fe47dcce7c89f1ba000a8cf3": "b07d680c2361f71e7f523b5bab47505f",
".git/objects/c1/18bf66deef6d51fb8a555fcf2f9467c8a5a008": "9d39e24f549f252f51e0ce56f731f676",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/a560419568355361731b6585c298a8586d4e1c": "2d956f52ab423dc0dd49ea9ca693c687",
".git/objects/d6/4beee989f1c4f2eddececbf28ff2d630659e6e": "85769e6f18fe1136adf675a4344f046d",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2bfd8cb5806c3ea3534e40060a4eda967217b4": "8239c2594a18f3bcfbe431e65576a1c2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/742ada5bba1b3b500c893b3e2dccca855d964b": "14b5b5d122669db27bb1078ec6619b9a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/e4f69e5a1bd6b06f67a9484e7f6b175eebeaa7": "caa33ee114d4db042c0a6224844f37d1",
".git/objects/eb/1503184ced5e852c5e868af0bf7aa93c8f6c60": "b7906439e87e639fea33cea3b773fe97",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/32bfecb16e64638c7261d870365d678f617ecf": "dd6836da650074451da8a9a21fdc85ce",
".git/objects/f0/b9dfc583e473bc975acc6cf0f2daf057685e83": "2fb2e417b8c475fa1a4f27208fd65793",
".git/objects/f6/00442a966aea74a124a8ff39c957e7d7c19be2": "f5f90959e7db6dc9c48b01525fb0d69a",
".git/refs/heads/master": "b94ea82b3835ac83e07e77c67e87b58f",
".git/refs/remotes/origin/master": "b94ea82b3835ac83e07e77c67e87b58f",
"assets/AssetManifest.json": "35533510b33698702fbac44c2c7e1c3f",
"assets/assets/dprdkabkota.json": "573ba35b5b2f0e1891bae6de9b69dec6",
"assets/assets/fonts/Sen-Bold.ttf": "aee4d23fe0364c8c26d45cc0af3c8e99",
"assets/assets/fonts/Sen-ExtraBold.ttf": "972534ccb4ee3367d819ed8a1a2d6847",
"assets/assets/fonts/Sen-Regular.ttf": "782403861feb1b772dd57e0cd9ef2496",
"assets/assets/images.jpeg": "de4e378de314b1d4dfbe90f9cf6c75b4",
"assets/FontManifest.json": "833373857e9eb5765449832d560c8fcd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "923a2ceab7cd94b95f51fe69c946bd91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "792dbadbc6b4c86e2f498dd2f849ddb5",
"/": "792dbadbc6b4c86e2f498dd2f849ddb5",
"main.dart.js": "3097c3236d821225d985c2266acc91cd",
"manifest.json": "697e9818c3ac9a85917c27e238d95cbf",
"version.json": "73760ec4abd637e652e7938a93f6b941"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
