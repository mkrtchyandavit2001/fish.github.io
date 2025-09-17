import { Fish } from "fish"
import { Points } from "points"
import {ctx, canvas} from "utils"

export class Game{
    bg = new Image()
    points = new Points()
    fish = new Fish()
    anather = new Fish(true)
    anather1 = new Fish(true)
    anather2 = new Fish(true)
    anather3 = new Fish(true)
    anather4 = new Fish(true)

    constructor(){
        this.bg.src = "images/d40506d2c691b53284269f7c2cf44151.jpg"
        this.bg.onload = () => ctx.drawImage(this.bg,  0, 0, canvas.width, canvas.height)
        this.id = requestAnimationFrame(()=> this.run())
        window.onkeydown = e => {
            if(e.key == "ArrowUp"){
                if(this.fish.y > 50){
                    this.fish.moveUp()
                }
            }
            if(e.key == "ArrowDown"){
                if(this.fish.y + 150 < innerHeight){
                    this.fish.moveDown()
                }
            }
        }
    }

    start(){
        this.id = requestAnimationFrame(() => this.run())
    }
    run(){
        ctx.clearRect(0,0, innerWidth, innerHeight)
        this.bg.onload()
        this.fish.draw()
        this.anather.move()    
        this.anather1.move()    
        this.anather2.move()   
        this.anather3.move()   
        this.anather4.move()   
        this.points.draw()
        this.id = requestAnimationFrame(() => this.run())

        if(Math.abs(this.fish.x - this.anather.x - 5) < this.fish.w){
            if(Math.abs(this.fish.y - this.anather.y) < this.fish.h){
                this.points.point -= Math.floor(this.fish.w)
                this.points.point1 += Math.floor(this.anather.w )
                this.fish.w = this.fish.w  - (this.anather.w * 0.001)
                this.fish.h = this.fish.h  - (this.anather.h * 0.001)
                this.anather.w = this.anather.w + (this.fish.w * 0.001)
                this.anather.h = this.anather.h + (this.fish.h * 0.001)
            }
        }
        if(Math.abs(this.fish.x - this.anather1.x - 5) < this.fish.w){
            if(Math.abs(this.fish.y - this.anather1.y) < this.fish.h){
                this.points.point -= Math.floor(this.fish.w)
                this.points.point2 += Math.floor(this.anather1.w )
                this.fish.w = this.fish.w  - (this.anather1.w * 0.001)
                this.fish.h = this.fish.h  - (this.anather1.h * 0.001) 
                this.anather1.w = this.anather1.w + (this.fish.w * 0.001) 
                this.anather1.h = this.anather1.h + (this.fish.h * 0.001) 
                
            }
        }
        if(Math.abs(this.fish.x - this.anather2.x - 5) < this.fish.w){
            if(Math.abs(this.fish.y - this.anather2.y) < this.fish.h){
                this.points.point += Math.floor(this.fish.w)
                this.points.point3 += Math.floor(this.anather2.w )
                this.fish.w = this.fish.w  + (this.anather2.w * 0.001)
                this.fish.h = this.fish.h  + (this.anather2.h * 0.001)
                this.anather2.w = this.anather2.w - (this.fish.w * 0.001)
                this.anather2.h = this.anather2.h - (this.fish.h * 0.001)

            }
        }
        if(Math.abs(this.fish.x - this.anather3.x - 5) < this.fish.w){
            if(Math.abs(this.fish.y - this.anather3.y) < this.fish.h){
                this.points.point += Math.floor(this.fish.w)
                this.points.point4 -= Math.floor(this.anather3.w )
                this.fish.w = this.fish.w  + (this.anather3.w * 0.001)
                this.fish.h = this.fish.h  + (this.anather3.h * 0.001)
                this.anather3.w = this.anather3.w - (this.fish.w * 0.001)
                this.anather3.h = this.anather3.h - (this.fish.h * 0.001)
            }
        }
        if(Math.abs(this.fish.x - this.anather4.x - 5) < this.fish.w){
            if(Math.abs(this.fish.y - this.anather4.y) < this.fish.h){
                this.points.point += Math.floor(this.fish.w)
                this.points.point5 -= Math.floor(this.anather4.w )
                this.fish.w = this.fish.w  + (this.anather4.w * 0.001)
                this.fish.h = this.fish.h  + (this.anather4.h * 0.001)
                this.anather4.w = this.anather4.w - (this.fish.w * 0.001)
                this.anather4.h = this.anather4.h - (this.fish.h * 0.001)
            }
        }
        if(this.points.point <= 0){
            cancelAnimationFrame(this.id)
            ctx.fillStyle = "#fff"
            ctx.fillText("Game Over", innerWidth / 2 - 160, innerHeight / 2 )
        }
    }
    over(){
        this.id = cancelAnimationFrame(() => this.run())
    }
}