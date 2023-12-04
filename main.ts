let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`pink flower`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bee with sunglasses`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
