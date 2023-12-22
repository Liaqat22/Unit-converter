convert = () =>{
    a = (document.getElementById('km').value);
    b = 1000;
    document.getElementById('res').innerHTML = `${a*b} m` ;
}
convert1= () =>{
    a = (document.getElementById('km').value);
    b = 1/1000;
    document.getElementById('res').innerHTML = `${a*b} km` ;
}
convert2= () =>{
    a = (document.getElementById('km').value);
    b = 0.621371;
    document.getElementById('res').innerHTML = `${a*b} mile` ;
}
convert3= () =>{
    a = (document.getElementById('km').value);
    b = 1.60934;
    document.getElementById('res').innerHTML = `${a*b} km` ;
}

convert4= () =>{
    a = (document.getElementById('km').value);
    b = 12;
    document.getElementById('res').innerHTML = `${a*b} inch` ;
}

convert5= () =>{
    a = (document.getElementById('km').value);
    b = 1/12;
    document.getElementById('res').innerHTML = `${a*b} feet` ;
}