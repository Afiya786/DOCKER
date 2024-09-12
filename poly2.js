class Shapes{
    area(){
        return;
    }
}

class Circle extends Shapes{
    constructor(radius){
        super();
        this.radius=radius;
    }


area(){
    return Math.PI*this.radius**2;
}
}


class Square extends Shapes{

    constructor(side){
        super();
        this.side=side;
    }


area(){
    return this.side**2;
}
}

const graph = {
    circle :new Circle(5),
    square : new Square(4),

};

for(const key in graph) {
    const image = graph[key];
    console.log(`area of ${key}: ${image.area()}`);
}


