function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;

    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    function walkEast(time, callback) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        //going to make the character only walk for what the parameter let it
        setTimeout(() => {
            stop()
            if (callback) {
                //this set timeout is here to just simply make the npc pause like a 2d npc
                setTimeout(() => {
                    //after running the npc.walkEast(time,callback) function,
                    //can take a callback so that it can run another function.
                    //like npc.walkEast(time, walkWest(time, anotherCallback)) and another callback,another,another
                    callback()  
                }, 500);
            }
        }, time);
    }

    function walkNorth(time, callback) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        setTimeout(() => {
            stop()
            if (callback) {
                setTimeout(() => {
                    callback()  
                }, 500);  
            }
        }, time);
    }

    function walkWest(time, callback) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        setTimeout(() => {
            stop()
            if (callback) {
                setTimeout(() => {
                    callback()  
                }, 500);
            }
        }, time);


    }

    function walkSouth(time, callback) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        setTimeout(() => {
            stop()
            if (callback) {
                setTimeout(() => {
                    callback()  
                }, 500);
            }
        }, time);
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}