function evenumbersloop (){
let i = 0;
    while(i < 3) {
        alert( `number ${i}!` );
        i++;
      }
}

function repeatuntilinputiscorrect(){
let i = 0;
    while(i <= 100 && i != null){
        i = prompt("Coloque un numero mayor a 100:",i);
    }
}

function primenumbers(){
    let i = 0;
    i = prompt("Coloque un numero:",i);
    for(num = 2; num < i; num++){
        if(num%1==0){
            alert(num);
        }
    }
}