scene.setBackgroundColor(12) // This sets the backfground color to blue
tiles.setTilemap(tilemap`level`) // Sets the map

info.setLife (5)
let robert = sprites.create(img`
    ..ccccccccccccccccc...
    .cbbbbbbbbbbbbbbbbbc..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777667c..
    .cbbbbbbbbb77777677c..
    .cbbbbbbbbb77777667c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777666c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbb77777777c..
    .cbbbbbbbbbbbbbbbbbc..
    ..cccccccbbbccccccc...
    .........bbb..........
    ......cccbbbccc.......
    .....cbbbbbbbbbc..cccc
    .....cbbbbbbbbbc..cbbc
    .....cbbbbcccccccccbcc
    .....cbbbcbbbbbbbbbbc.
    .....cbbbcbbbbbbbbbbc.
    .....cbbbbcccccccccbcc
    .....cbbbbbbbbbc..cbbc
    .....cbbbbbbbbbc..cccc
    .....cbbbbbbbbbc......
    .....cbbbbbbbbbc......
    .....cbbbbccbbbc......
    .....cbbbcbbcbbc......
    .....cbbbcbbcbbc......
    ......ccccbbccc.......
    .........cbbc.........
    .........cbbc.........
    .........cbbc.........
    .........cbbc.........
    .........cbbc.........
    .........cbbc.........
    .........cbbbcc.......
    .........cbbbbbc......
    .........ccccccc......
`) // This creates the player
robert.setPosition(30, 310)

let enemy1 = sprites.create(img`
    7777......77777777....
    7777......77777777....
    ..7777..777777777777..
    ..7777..777777777777..
    ....77777711111111ff77
    ....77777711111111ff77
    ....77771111ff1111ffff
    ....77771111ff1111ffff
    ....77771111ffff11ffff
    ....77771111ffff11ffff
    ....77777711111111ff77
    ....77777711111111ff77
    ..7777..777777777777..
    ..7777..777777777777..
    7777......77777777....
    7777......77777777....
`) // This creates enemy1

controller.moveSprite(robert, 100, 0) // Makes you move the player

controller.B.onEvent(ControllerButtonEvent.Pressed, function(){
bullet = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . 6 6 6 .
    . . . . . . . . . . . . . . . . . 6 7 7 7 6
    . . . . . . . . . . . . . . . . . 6 7 7 7 6
    . . . . . . . . . . . . . . . . . 6 7 7 7 6
    . . . . . . . . . . . . . . . . . . 6 6 6 .
`, 150, 0)
bullet.setPosition(robert.x, robert.y)
bullet.setKind(SpriteKind.Projectile) // This makes you shoot

robert.ay = 350 // Gives the player gravity

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (robert.vy == 0) {
        robert.vy = -200}}) // Makes the player jump

        scene.cameraFollowSprite(robert)}) // This makes the camera follow the player

        let bullet: Sprite = null 

game.onUpdateInterval(500, function() {
    let enemy1 = sprites.create(img`
        7777......77777777....
        7777......77777777....
        ..7777..777777777777..
        ..7777..777777777777..
        ....77777711111111ff77
        ....77777711111111ff77
        ....77771111ff1111ffff
        ....77771111ff1111ffff
        ....77771111ffff11ffff
        ....77771111ffff11ffff
        ....77777711111111ff77
        ....77777711111111ff77
        ..7777..777777777777..
        ..7777..777777777777..
        7777......77777777....
        7777......77777777....
    `, SpriteKind.Enemy)
    enemy1.setVelocity(-100, 0)
    enemy1.setPosition (180, randint (-100, 0))}) // This creates enemy1