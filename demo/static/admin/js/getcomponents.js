function  getcomponents(country_region) {



$(document).on('click', '#newcity', function(){

    if (document.getElementById('version_table')){
    document.getElementById('version_table').innerHTML = "";
    
}

    var city =  $(this).attr('value');

    document.getElementById('second_jumbotron').innerHTML = "";
    var segment = country_region+','+city;
       
    
$.ajax({
            url: 'getcomponents/',
            type: "POST",
            data:  segment,
            success: function(data) {
            table = document.createElement("table")
              
            var orderArray = data;
            // alert("data from db is "+data)

get_current_version(orderArray);

document.getElementById("second_jumbotron").style.display = null;  
document.getElementById("second_jumbotron").scrollIntoView();
 

  									}
	});
					 $("#newcity").attr("disabled", true);
					swal({
					  // title: "Good job!",
					  text: "Loaded App and Versions!",
					  icon: "success",
					});

 var container = document.getElementById('second_jumbotron');
 var edit= document.createElement("button")
 edit.innerHTML = "Change Version";
 edit.setAttribute("class","btn btn-info") 
 edit.setAttribute("id","edit_version")                  // Insert text
 container.appendChild(edit);

update_version(country_region)
//module edit_version.js is called

apps_and_versions(segment)
});

}