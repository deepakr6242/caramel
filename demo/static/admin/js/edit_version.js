function update_version(country_region)
{

$('body').on('click', '#edit_version', function(){
    // alert("edit clicked ")
   
    
    var city =  $(this).attr('value');
    document.getElementById('second_jumbotron').innerHTML = "";
    var city = document.getElementById('newcity').innerHTML
    // console.log(city)

    var segment = country_region+','+city;
    console.log(segment)

 $.ajax({
            url: 'getcomponents/',
            type: "POST",
            data:  segment,
            success: function(data) {
            table = document.createElement("table")
              
    var orderArray = data;
    

 
    // get handle on div
    var container = document.getElementById('second_jumbotron');
    // create table element
    
    

    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    table.setAttribute('id','version_table_editable');
    table.setAttribute('class','editable');
    // console.log("editable tabe")
    table.appendChild(thead);
    var orderArrayHeader = ["COMPONENTS","SIT","PREPROD","PROD"];

    for(var env=0; env<orderArrayHeader.length;env++){
        thead.appendChild(document.createElement("th")).
        appendChild(document.createTextNode(orderArrayHeader[env]));
    }
    
    // loop array
    for (innerelem = 0; innerelem < orderArray.length; innerelem++) {
        // get inner array
        var vals = orderArray[innerelem];
        console.log(vals)
        console.log("------------------")
        var row = document.createElement('tr');
        
        // create tr element
       
        // loop inner array
       
        var count = 1
        for (var compnt_version = 0; compnt_version < vals.length; compnt_version++) {
        row.setAttribute('class','info')
            // create td element
            var cell = document.createElement('td');
            // console.log("cell is"+cell)
            // console.log("vals "+vals[b])
            // console.log("cell.text"+cell.textContent)

            console.log ("each row",vals[compnt_version])


            if ((!/[^a-zA-Z]/.test(vals[compnt_version]))){
               cell.textContent=vals[compnt_version];
               cell.setAttribute("id", "environment");

               // alert(cell.textContent)
               // console.log ("each row",vals[compnt_version])
               // alert("I am here")
               
            }
 //vals[1] is the current version from db       
            else{
                
                nexus_version =[vals[compnt_version].split('/')];
                console.log("((())))))")
                console.log(nexus_version)
                var selectList = document.createElement("select");
                console.log("select created")
                selectList.setAttribute("id", "myselect"+count);
                selectList.setAttribute("mutiple", "true");
                selectList.setAttribute("class","form-control");
                var option = document.createElement("option");
                console.log("length is "+nexus_version.length)

                for (version=0;version<nexus_version.length;version++){
                
                console.log(option)
                option.setAttribute("value", nexus_version[version]);
                console.log(nexus_version[version])
                if (nexus_version[version].length >1){
                    var option = document.createElement("option");
                    console.log(nexus_version[version].length)
                    for(ver = 0;ver<nexus_version[version].length;ver++){
                      console.log(nexus_version[version][ver])
                      console.log(ver)
                      $(selectList).append(`<option value="${nexus_version[version][ver]}"> ${nexus_version[version][ver]} </option>`); 

                       // option.value=nexus_version[version]+count
                       // option.text=nexus_version[version][ver]

                       
                    }
                       // selectList.appendChild(option)
                        cell.appendChild(selectList)
                       console.log("appended")

                       
                count=count+1
                    // selectList.appendChild(option)

                  console.log(option)
                }
                else{
                option.text=nexus_version[version]
            }
            console.log(selectList)
                selectList.appendChild(option)
                
                cell.appendChild(selectList)
                count=count+1
}
    console.log(cell)           
        }
            // append td to tr
            row.appendChild(cell);
            // row.appendChild(cell);
            tbody.appendChild(row);
        }
        //append tr to tbody
         table.appendChild(tbody);
        
    }
    // append tbody to table
   
    // append table to container

    container.appendChild(table);
    var div =document.createElement('div')
    div.setAttribute('class','btn-group btn-group-lg')
    var save = document.createElement('button')
    save.setAttribute('class','btn btn-success  text-center')
    save.setAttribute('id','save')
    save.setAttribute('disabled','True')
    save.innerHTML = 'Deploy';
    save.style.cssText='text-align: center;\
    color: black;\
    margin-left: 420px;\
    width:200px ;\
    margin-top:20px;\
    cursor: pointer;\
    transition: all 0.5s;\
    position:relative;'
    div.appendChild(save)
    container.appendChild(div);

    container.appendChild(div)

// alert("I am here")

//  if (document.getElementById('version_table_editable')){
//     document.getElementById('second_jumbotron').innerHTML = "";
//     alert("I am heretoo")
//     apps_and_versions(segment)
    
// }

apps_and_versions(segment)


// alert("function executed")



}
});
 
  });





}