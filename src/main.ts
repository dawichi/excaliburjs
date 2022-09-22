import { CollisionType, Color, Engine, Loader, vec } from 'excalibur'
import { Ball } from './actors/ball'
import { Platform } from './actors/platform'
import { Resources } from './resources'


const width = 800
const height = 600
class Game extends Engine {
    constructor() {
        super({
            width,
            height,
            backgroundColor: Color.fromHex('#121212'),
        })
    }

    initialize() {
        const platform = new Platform(width, height)
        platform.body.collisionType = CollisionType.Fixed
        this.add(platform)

        const ball = new Ball(width, height)
        const ballSpeed = vec(100, 100)
        setTimeout(() => {
            ball.vel = ballSpeed
        }, 500);
        ball.body.collisionType = CollisionType.Passive
        this.add(ball)

        const loader = new Loader([Resources.Sword])
        this.start(loader)

        
        // Follow the mouse
        game.input.pointers.primary.on('move', (e) => {
            platform.pos.x = e.worldPos.x
        })
    }
}

export const game = new Game()
game.initialize()
