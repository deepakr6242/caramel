function getcity(clicked_id){




$(document).on('click', '#newcountries', function(){
    
     document.getElementById('city').innerHTML = "";
        document.getElementById('second_jumbotron').innerHTML = "";
    if(document.getElementById('version_table')){
       document.getElementById('version_table'). innerHTML = "";
        document.getElementById('second_jumbotron'). styledisplay = null;
   }

   
       
    var country =  $(this).attr('value');
    // alert("after country")
    // alert(document.getElementById(this))
    document.getElementById('first_jumbotron')
    var country_region = clicked_id+','+country
    // document.getElementById("second_jumbotron").style.display = null;
    // alert(country_region)
    
$.ajax({
            url: 'getcity/',
            type: "POST",
            data:  country_region,
            success: function(data) {
  
                var sel = document.getElementById('city');

                data = data.split(',')
                for (var city = 0; city < data.length; city++) {

                
                var opt = document.createElement('button');
                opt.setAttribute("class","btn btn-info")
                opt.setAttribute("id","newcity")
                opt.setAttribute("value",data[city])

                // console.log(opt)
                
                opt.appendChild( document.createTextNode(data[city]) );
                sel.appendChild(opt);
						           swal({
						  title: "Loaded!",
						  text: "Applications for you!",
						  icon: "success",
						  type:"success"
						}); 
            $("#newcountries").attr("disabled", true);

            }

  }
							});


getcomponents(country_region)
});






}


