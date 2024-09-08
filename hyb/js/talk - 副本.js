new TypeIt("#wjyzlh", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("你的标题")
    .pause(3000)
    .delete(null, {
        delay: 400
    })
    .type("想说的话")
    .pause(3000)
    .go();

new TypeIt('#talkTo', {
    lifeLike: false,
    cursorSpeed: 1000,
    waitUntilVisible: false,
    speed: 100
}).go();