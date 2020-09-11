input.onButtonPressed(Button.A, function () {
    if (timmar < 23) {
        timmar += 1
    } else {
        timmar = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    tid = "" + timmar + (":" + minuter)
    basic.showString(tid)
})
radio.onReceivedString(function (receivedString) {
    if (true) {
        radio.setGroup(12)
        radio.sendValue("Sol", 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (minuter < 59) {
        minuter += 1
    } else {
        timmar = 0
    }
})
let timmar = 0
let minuter = 0
let tid = ""
radio.setGroup(11)
let AMPM = false
tid = ""
let adjust = 0
minuter = 0
timmar = 0
basic.forever(function () {
    basic.pause(60000)
    if (minuter < 59) {
        minuter += 1
    } else {
        minuter = 0
        if (timmar < 23) {
            timmar += 1
        } else {
            timmar = 0
        }
    }
})
