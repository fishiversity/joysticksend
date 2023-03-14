joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("E")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("F")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("C")
})
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.showString("J")
