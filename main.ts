input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let heroe = game.createSprite(0, 2)
let villano = game.createSprite(randint(1, 4), randint(1, 4))
let villano_2 = game.createSprite(randint(1, 4), randint(1, 4))
let villano_3 = game.createSprite(randint(1, 4), randint(1, 4))
game.setScore(0)
villano.set(LedSpriteProperty.Brightness, 100)
villano_2.set(LedSpriteProperty.Brightness, 100)
villano_3.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        heroe.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        heroe.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (heroe.isTouching(villano)) {
        villano.delete()
        game.addScore(1)
    }
    if (heroe.isTouching(villano_2)) {
        villano_2.delete()
        game.addScore(1)
    }
    if (heroe.isTouching(villano_2)) {
        villano_3.delete()
        game.addScore(1)
    }
    if (game.score() == 3) {
    	
    }
})
