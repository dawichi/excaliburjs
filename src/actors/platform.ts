import { Actor, Color, vec } from 'excalibur'

export class Platform extends Actor {
    constructor(width: number, height: number) {
        super({
            pos: vec(width / 2, height - 100),
            width: 200,
            height: 15,
            color: Color.Azure,
        })
    }
}
