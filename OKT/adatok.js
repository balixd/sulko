function show(obj){
   // console.log(obj.value)
    document.getElementById('pontErtek').innerHTML=obj.value
}
let pers={}

function kuldes(){
    let hibak=[]
    document.querySelector('.msg').innerHTML=""

   // console.log('adatok ellenőrzése')
    //név
    let nev=document.getElementById('nev').value
    console.log(nev)
    if(nev.length>2){
        pers.nev=nev
    }else{
       hibak.push("a név kitöltése kötelező")
    }
    //év
    let szev=document.getElementById('szev').value
    if(szev>1930){
        pers.szev=szev
    }else
        hibak.push('Helytelen évszám')
    
    //email
    let email=document.getElementById('email').value
    if(email.length>5){
        pers.email=email;
    }
    else{
        hibak.push('Helytelen Email')
    }

    //password
    let pass=document.getElementById('jeli').value
    if(pass.length>6){
        pers.pass=pass;
    }
    else{
        hibak.push('Helytelen jelszó')
    }

    //datum
    let date=document.getElementById('date').value
    if(date.length>0){
        pers.date=date;
    }
    else{
        hibak.push('Helytelen dátum')
    }
    //pontszam
    let pont=document.getElementById('pont').value
    if(pont.length>0){
        pers.pont=pont;
    }
    else{
        hibak.push("Helyetlen pontszám")
    }
    


    //agazat
    let agazat=document.getElementById('agazat').value
    if(agazat!=0)
    pers.agazat=agazat
    else{

        hibak.push("Ágazat kiválasztása kötelező")
    }
    //radiogomb
    let radioArr=document.getElementsByName('vegzettseg')
    for(let obj of radioArr){
     if(obj.checked)
     pers.vegzettseg=obj.value
    }
    if(pers?.vegzettseg==undefined)
    hibak.push('végzettség kiválasztása kötelező')

    //ha nincs hiba, kuldjuk az adatokat :)
    if(hibak.length==0){
    document.querySelector('.msg').innerHTML="Sikeres adatküldés"
    console.log(pers)
    }
    else
      //  console.log(hibak)
      errors(hibak)

    
    
}
function errors(arr){
    let strUL="<ul>"
    for(let txt of arr){
        strUL+=`<li>${txt}</li>`
    }
    strUL += "</ul>"
    document.querySelector('.msg').innerHTML=strUL
}