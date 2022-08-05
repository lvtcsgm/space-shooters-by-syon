controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 . . 2 . . . . . . . . . . . . 
        . 5 4 2 2 . . . . . . . . . . . 
        5 . . 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_saver, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    elo.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
})
let elo: Sprite = null
let projectile: Sprite = null
let space_saver: Sprite = null
space_saver = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . 1 . . 1 . . . . . . . . 
    . . . . . 1 1 . . . 1 . . . . . 
    . . . 1 1 9 9 1 1 1 5 4 2 . . . 
    . . . . . 1 1 . . . 1 . . . . . 
    . . . . 1 . . 1 . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_saver)
space_saver.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    elo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 7 7 . 7 . 7 . . . . 
        7 . 7 . 7 7 2 7 7 . 7 . 7 . . . 
        . 7 . 7 . 7 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    elo.setVelocity(-50, 0)
    elo.setPosition(160, randint(5, 115))
    elo.setFlag(SpriteFlag.AutoDestroy, true)
})
