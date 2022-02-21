input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
