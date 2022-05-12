fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
    .then(response => response.json())
    .then(json => {

        let list = document.querySelector('.list');
        let li = document.createElement('li');
        li.textContent = "Notebooks: " + json.amount_of_products;
        list.appendChild(li)


    })


