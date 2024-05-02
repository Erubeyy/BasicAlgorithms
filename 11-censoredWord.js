 function censored(text=false, search=false){
    let result = "";

    if(!text && !search){
        result = "Can't read text or search"
    }else if(text && search){
        result = text.replace(new RegExp(search, 'gi'), '[-CENSORED-]')
    }


    return result
 }

 console.log(censored("erubey hola soy ERUBEY alexis adios erubey", "erubey"));