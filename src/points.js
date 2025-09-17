import {ctx, canvas, grn} from "utils" 
import {Fish} from "fish"

export class Points {
    fish = new Fish()
    anather = new Fish()
    anather1 = new Fish()
    anather2 = new Fish()
    anather3 = new Fish()
    anather4 = new Fish()
    x = innerWidth /2
    y = innerHeight / 2    
    w = 50
    h = 50
    point = this.fish.w  / 100
    point1 = this.anather.w /100
    point2 = this.anather1.w /100
    point3 = this.anather2.w /100
    point4= this.anather3.w /100
    point5= this.anather4.w /100

    draw(){
        ctx.fillStyle = "red"
        ctx.font = "80px cursive"
        ctx.fillText("Herous point" + `${this.point}`, 20, 100) 

        ctx.fillStyle = "#00f"
        ctx.font = "40px cursive"
        ctx.fillText("Fish1 " + `${this.point1}`, 100, innerHeight - 60)

        ctx.fillStyle = "#00f"
        ctx.font = "40px cursive"
        ctx.fillText("Fish2 " + `${this.point2}`, 400, innerHeight - 60) 

        ctx.fillStyle = "#00f"
        ctx.font = "40px cursive"
        ctx.fillText("Fish3 " + `${this.point3}`, 700, innerHeight - 60) 

        ctx.fillStyle = "#00f"
        ctx.font = "40px cursive"
        ctx.fillText("Fish4 " + `${this.point4}`, 1000, innerHeight - 60) 

        ctx.fillStyle = "#00f"
        ctx.font = "40px cursive"
        ctx.fillText("Fish5 " + `${this.point5}`, 1300, innerHeight - 60) 
    }
}