fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1')
    .then(response => response.json())
    .then(json => {
        let descripcionNotebook = document.querySelector('.flex p')
        let imagenNotebook = document.querySelector('img');
        let titulo = document.querySelector('.section > h3');
        let fabricante = document.querySelector('.fabricante')
        let precio = document.querySelector('.precio');



        imagenNotebook.src = json.image_url;
        descripcionNotebook.textContent = json.description;
        titulo.textContent = json.title;
        fabricante.href = json.factory_url;
        precio.textContent = json.price;



    })


