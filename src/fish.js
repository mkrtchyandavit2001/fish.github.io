import {ctx, grn} from "utils"

    const speed = grn(6, 3)
    const fishside = grn(((innerHeight / 2) - 100), ((innerHeight / 2) + 100))
    const fishes = ["images/Animal_Fish-64.webp", "images/aquarium_blowfish_fish_puffer_pufferfish-64.png", "images/clown_fish_fish_ocean_sea_sea_life-64.png", "images/Fish-64.webp", "images/tuna-meat-fish-protein-food-64.webp"]


export class Fish {
    image = new Image()
    constructor(type = false){
        this.w = 100
        this.h = 100
        this.x = !type ? 100 : grn((innerWidth + 80), (innerWidth + 300))
        this.y = !type ? innerHeight / 2 : grn(100, (innerHeight - 300))

        this.image.src = !type ? "images/gnome-fish.png" : fishes[grn(fishes.length)]
        this.image.onload = () => ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    draw(){
        this.image.onload()
    }
    move(){
        this.draw()
        this.x -= speed
    

        if(this.x < -100){
            this.x = grn(innerWidth + 150, innerWidth + 700)
            this.y = grn(0, innerHeight - 100) 
        }
    }

    moveUp(){
        this.y -= 50
    }
    moveDown(){
        this.y += 50
    }
}