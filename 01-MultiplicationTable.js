const createTable = (multiplier) => {
    console.log(`# Table of number ${multiplier} #`)

    for(let i = 1; i <= 10; ++i){
        console.log(`${i} x ${multiplier} = ${i * multiplier}`)
    }

}

createTable(13);