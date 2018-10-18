importScripts("/../public/precache-manifest.201de4467c3e3c2ed397060e85b9441c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
