let agora = new Date() //ENCONTRA O HORÁRIO ATUAL
let hora = agora.getHours()
                      
console.log(`São ${hora} horas.`)

if (hora <= 12){
    console.log(`Bom dia!`)
    } else if (hora <= 18){
       console.log(`Boa tarde!`)
    } else {
     console.log(`Boa noite!`)
}



