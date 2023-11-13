const miniCompilador = (data) => {

    let value = 0;
    let resp = [];
    const simbolos = ["#", "@", "*" , "&"];
    const array = data.split("");

    for (const element of array) {
        if(element == "#") {value = value + 1}
        if(element == "@") {value = value - 1}
        if(element == "*") {value = value * value}
        if(element == "&") {
            resp.push(value);
        }

    }



    return console.log(resp.join(""))
}

miniCompilador("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&");