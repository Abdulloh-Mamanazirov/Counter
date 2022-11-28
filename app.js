let counter = 0;

function dec(){
    if(counter > 0){
        counter-=1;
        document.getElementById("count").innerHTML = counter;
    }else if(counter = 0){

    }
}
function res(){
    counter = 0;
    document.getElementById("count").innerHTML = counter;
}
function inc(){
    counter+=1;
    document.getElementById("count").innerHTML = counter;
}