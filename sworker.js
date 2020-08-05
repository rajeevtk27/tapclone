self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./css/style.css","./img/64px.png","./img/512px.png"]);
        })
    )
})


self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);

        })
    )
})
