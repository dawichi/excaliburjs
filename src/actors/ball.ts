import { Actor, Color, vec } from 'excalibur'

export class Ball extends Actor {
    constructor(width: number, height: number) {
        super({
            pos: vec(width / 2, height / 2),
            width: 15,
            height: 15,
            radius: 100,
            color: Color.Red,
        })
    }
}
