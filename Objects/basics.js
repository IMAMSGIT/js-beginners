//OOP
const circle={
    radius:1,
    
    location:{ // another object inside object
        x:1,
        y:2
    },
    isVisible:true,

    draw:function(){
        console.log('draw')

    }
}
circle.draw();

// if a function is part of an object, is called method