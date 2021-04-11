controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _switch = !(_switch)
    if (_switch) {
        autoControl()
    } else {
        selfControl()
    }
})
function autoControl () {
    controller.moveSprite(mySprite, 0, 0)
    mySprite.setPosition(80, 90)
    vx = 100
    auto = 1
    mySprite.vx = vx
    mySprite.say("auto movement", 500)
}
function selfControl () {
    mySprite.vx = 0
    controller.moveSprite(mySprite, 100, 0)
    auto = 0
    mySprite.say("self control", 500)
}
let auto = 0
let vx = 0
let mySprite: Sprite = null
let _switch = false
_switch = false
scene.setBackgroundImage(assets.image`Basic-theme`)
game.splash("press A to switch mode..", "self control / auto movement")
mySprite = sprites.create(assets.image`personal-image-16x16`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(80, 90)
selfControl()
game.onUpdateInterval(600, function () {
    if (auto) {
        vx = vx * -1
        mySprite.vx = vx
    }
})
