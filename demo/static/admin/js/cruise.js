function getcountry(region)
      
  {

document.getElementById('countries').innerHTML = ""; 
document.getElementById('city').innerHTML = "";


     
      $.ajax({
            url: 'getcountry/',
            type: "POST",
            data: region,
            
            success: function(data) {
             
                // alert(typeof(data));
                // console.log(data)
                var sel = document.getElementById('countries');
                for (var country = 0; country < data.length; country++) {
                // console.log(data[i]);    
                // console.log(sel)
                var opt = document.createElement('button');
                opt.setAttribute("class","btn btn-info")
                opt.setAttribute("id","newcountries")
                opt.setAttribute("value",data[country])
                // console.log(opt)                
                opt.appendChild( document.createTextNode(data[country]) );
                sel.appendChild(opt); 
           swal({
  // title: "Good job!",
  text: "Loaded Countries!",
  icon: "success",
});
                    }
  }
});
getcity(region)






 
  






}




