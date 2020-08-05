self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./style.css","./img/client/client-1.png","./img/client/client-2.png","./img/client/client-3.png","./img/client/client-4.png","./img/client/client-5.png","./img/client/client-6.png","./img/client/client-7.png","./img/client/client-8.png","./intro-carousel/1.jpg","./intro-carousel/2.jpg","./intro-carousel/3.jpg","./intro-carousel/4.jpg","./intro-carousel/5.jpg","./images/close.png","./images/loading.gif","./images/next.png","./images/prev.png","./img/portfolio/app1.jpg"]);
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
