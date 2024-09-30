scene.setBackgroundColor(9)
 let mySprite = sprites.create(img`
     . . . . . . . . 2 2 2 . . . . .
     . . . . . . . . 2 2 2 2 2 . . .
     . . . . . . 2 2 2 2 2 2 2 . . .
     . . . . . . . . . 1 1 1 1 1 . .
     . . . . . . . . . 1 1 1 1 1 1 .
     . . . . . . . . . 1 1 4 1 1 5 5
     . . . . . . . . 1 1 1 1 1 5 5 5
     1 1 . . . . . . 1 1 1 1 1 . . .
     1 1 1 1 1 . . 1 1 d 1 1 1 . . .
     1 1 d d 1 1 1 1 d d 1 1 1 . . .
     1 1 d d d d d d d 1 1 1 1 . . .
     1 1 1 1 d d d d 1 1 1 1 . . . .
     1 1 1 1 1 1 1 1 1 1 1 1 . . . .
     . 1 1 1 1 1 1 1 1 1 1 . . . . .
     . . 1 1 4 1 1 4 1 . . . . . . .
     . . . . 4 4 . 4 4 4 . . . . . .
 `, SpriteKind.Player)

mySprite.x = 20
mySprite.ay = 200 // vertical acceleration


controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.vy = -100
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

game.onUpdate(function (){
    if (mySprite.top < 0 || mySprite.bottom > 120){
        game.over()
    }
    info.changeScoreBy(1)
})

game.onUpdateInterval(Math.randomRange(800, 1200), function() {
    let projectile = sprites.createProjectileFromSprite(img`
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        777ccc7ccccccccc
        c7c77c7cc7ccc777
        c777777cc777777c
        cc777e77777ec77e
        7c7e7777eecee77c
        e777eeeccecee7ec
        .ee7.....eeee7e.
        .........ee..e..
        ..........eee...
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ..e.......e.....
        eee7.....ee.....
        e.e7ee..eeeee.7.
        eeeeee7eeeeece7c
        7eeeceeee7e77e7e
        77777ce777e7ceee
        777c7cc777e7ceee
        7c7cc77c7ceeeccc
        777ccccccc77eccc
        c77ccccccccceecc
        cc7cccccccccceec
        ccccccccccccccec
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
    `, null, -100, 0)
    projectile.y = Math.randomRange(40,80)
})

