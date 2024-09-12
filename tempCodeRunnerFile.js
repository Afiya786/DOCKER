class Shape{
    area(){
        return;
    }
}

class Circle extends shapes{
    constructor(radius){
        this.radius=radius;
    }


area(){
    return Math.PI*this.radius**2;
}
}


class Square extends shapes{
    constructor(side){
        this.side=side;
    }


area(){
    return this.side**2;
}
}

const Shape = [new Circle(5), new Square(2)];

Shape.forEach(shape => {
    console.log(`area ${shape.area()}`);
    
});
    


