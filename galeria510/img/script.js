function agregarImagen() {
    var url = document.getElementById('imagenURL').value.trim();
    var pie = document.getElementById('pieFoto').value.trim();
    var galeria = document.getElementById('galeriaImagenes');
    if (url && pie) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');
        div.className = 'tarjeta';
        img.src = url;
        img.width = 300;
        img.height = 250;
        img.alt = pie;
        img.onerror = function() {
            alert('No se pudo cargar la imagen. Revisa la URL.');
            div.remove();
        };
        p.textContent = pie;
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);
        document.getElementById('imagenURL').value = "";
        document.getElementById('pieFoto').value = "";
    } else {
        alert('Por favor, introduce una imagen y un pie de foto');
    }
}