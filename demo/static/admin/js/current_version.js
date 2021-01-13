function get_current_version(orderArray) {
	var orderArray =orderArray
    // get handle on div
    var container = document.getElementById('second_jumbotron');

    // create table element

   

    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    table.setAttribute('id','version_table');
    table.setAttribute('class','editable');
    table.appendChild(thead);
    var orderArrayHeader = ["COMPONENTS","SIT","PREPROD","PROD"];

    for(var environment=0;environment<orderArrayHeader.length;environment++){
        thead.appendChild(document.createElement("th")).
        appendChild(document.createTextNode(orderArrayHeader[environment]));
    }
    
    // loop array
    for (environment = 0; environment < orderArray.length; environment++) {
        // get inner array
        // alert("hello"+orderArray[environment])
        var vals = orderArray[environment];
        // create tr element
        var row = document.createElement('tr');
        row.setAttribute('class','info')
        // loop inner array
        for (var content = 0; content < vals.length; content++) {
            // create td element
            var cell = document.createElement('td');

            // set text
            // alert(content)
            console.log(vals[content])
            cell.textContent = vals[content].split('/')[0];
            // append td to tr
            row.appendChild(cell);
        }
        //append tr to tbody
        tbody.appendChild(row);
    }
    // append tbody to table
    table.appendChild(tbody);
    // append table to container
    container.appendChild(table);
}