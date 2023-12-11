let eye_show = 0;

function mostrarOcultar() {
    if (eye_show == 1) {
        document.getElementById('senha').type = 'password';
        document.getElementById('eye-show').src = 'eye-hide.png';
        eye_show = 0;
    } else {
        document.getElementById('senha').type = 'text';
        document.getElementById('eye-show').src = 'eye.png';
        eye_show = 1;
    }
}

function mascara(i) {
    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }
    
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}
