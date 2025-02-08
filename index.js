
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1250
canvas.height = 680

const gravity = 0.5

class Player{
    constructor(position){
        this.position = position;
        this.velocity = {x: 0, y: 1}
        this.height = 100
    }

    draw(){
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, 100, 100)
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < canvas.height)
            this.velocity.y += gravity
        
        else
            this.velocity.y = 0
    }

}

const player = new Player({x: 100, y: 100})

function animate(){
    window.requestAnimationFrame(animate)
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.d.pressed)
        player.velocity.x = 3
    else if (keys.q.pressed)
        player.velocity.x = -3
    else
        player.velocity.x = 0
}

const keys = {
    d: {key: 'd', pressed: false},
    q: {key: 'q', pressed: false},
    z: {key: 'z', pressed: false}
}

animate();

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            break
        case 'q':
            keys.q.pressed = true
            break
        case 'z':
            player.velocity.y = -15
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
    }
})