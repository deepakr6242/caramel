function apps_and_versions(segment,thead) {
	var segment = segment;
    var enviornment = ""
    jira_response = ""
	var thead = thead;
	console.dir(thead)
	var table = document.getElementById('version_table_editable');

	var row_num = 0;
	var changed_version = ""
	$('.form-control').on('change',function()


  {
    document.getElementById('save').disabled=false;
   
   var elem = $('#loadingmessage').show();  
   
    var selected_version = $(this). children("option:selected").val();
    // alert(selected_version)
    console.dir(selected_version)

    // alert(selected_version)
    // alert(thead)
    
    

   
   var component =  $(this).parents("tr").children("td:first").text()
   // alert(component)


 
    td  = $(this).parent('td');

    env_id = $(td).parent().children().index(td);
    // alert(env_id)

    if (env_id==1){
    	var enviroment_is = 'SIT';
        enviornment = enviornment+enviroment_is
        $(this).siblings().hide()
    	jira_ticket_hint = enviroment_is+'_'+ segment.split(',').join('_')+'_'+ component+'_'+selected_version.replace('[A]','');
    	// alert("segment is"+typeof(segment))

    	// alert(segment)
   		// alert(jira_ticket_hint)



    }
   if (env_id==2){
    	var enviroment_is = 'PREPROD';
        enviornment = enviornment+enviroment_is
    	jira_ticket_hint = enviroment_is+'_'+ segment.split(',').join('_')+'_'+ component+'_'+selected_version.replace('[A]','');
    	// alert("segment is"+typeof(segment))

    	// alert(segment)
   		// alert(jira_ticket_hint)

    }
   
   if (env_id==3){
    	var enviroment_is = 'PROD';
        enviornment = enviornment+enviroment_is
    	jira_ticket_hint = enviroment_is+'_'+segment.split(',').join('_')+'_'+ component+'_'+selected_version.replace('[A]','');
    	// alert("segment is"+typeof(segment))

    	// alert(segment)
   		// alert(jira_ticket_hint)

    } 



$.ajax({
            url: 'jira_ticket_flow/',
            type: "POST",
            data:  {'selected_version':jira_ticket_hint},
            success: function(data) {
                
            alert(data)
            // alert("i am here")
  jira_response = jira_response+data
  $('.form-control').attr('disabled',true);

    event.preventDefault();
    return false;


            },


        });





   
    });
// alert("segement is ")

	$('#save').click(function(){
// alert("clicked save")
var ticket = confirm("Do You want to proceed with the below ticket \n"+jira_response)


if (ticket == true){

deploy_flow(jira_response)

}

else{

    jira_response = prompt("Provide your ticket")
    if (jira_response!=null)
    {
    deploy_flow(jira_response)

    }

    else{
        alert("No Ticket  is provided and hence stopping here")

    }

}


function deploy_flow(jira_response){


var table = document.getElementById('version_table_editable');
var row_num = 0;
// var changed_version = ""

$("#version_table_editable tr").each(function() {
var COMPONENTS = $(table.rows[row_num].cells[0]).text();

   if (enviornment=='SIT')
   {
        var COMPONENTS = $(table.rows[row_num].cells[0]).text();
        var SIT = $(table.rows[row_num].cells[1]).find('option:selected').text().trim();
        if(SIT.endsWith('[A]') == true)
        {
             var SITOPTIONS = ($(table.rows[row_num].cells[1]).text())

            var changed_data = [COMPONENTS+','+SIT+'/'+SITOPTIONS]
            
            console.log(changed_data)
        }  
               
    }  
 



    if (enviornment=='PREPROD' )
    {
    
    var PREPROD = $(table.rows[row_num].cells[2]).find('option:selected').text().trim()   
    if(PREPROD.endsWith('[A]') == true)
            {
            var PREPRODOPTIONS = $(table.rows[row_num].cells[2]).text()
            var changed_data = [COMPONENTS+','+PREPROD+'/'+PREPRODOPTIONS]           
            console.log(changed_data)
            }
                                
    }



    if (enviornment=='PROD')
    {
        var PROD = $(table.rows[row_num].cells[3]).find('option:selected').text().trim();                
        console.log(PROD.endsWith('[A]'))
    if(PROD.endsWith('[A]') == true)
            {
                var PRODOPTIONS = $(table.rows[row_num].cells[3]).text()
                var changed_data = [COMPONENTS+','+PROD+'/'+PRODOPTIONS]
                console.log(changed_data)
            }  

    }
    // console.log(COMPONENTS+','+DEV+','+SIT+','+PREPROD+','+PROD) ;
    
    // alert(changed_data)

    // console.log(typeof(changed_data))
    changed_version = changed_version + changed_data
    row_num++;
});


var table_name = segment
// alert(enviornment)
// alert("segement is "+segment)
console.log(typeof(changed_version))
console.log(changed_version)
var changed_version = changed_version.trim('undefined')
// alert(changed_version)
alert(jira_response)


$.ajax({
            url: 'update_versions/',
            type: "POST",
            data:  {'version':changed_version,'table_name':table_name,'environment':enviornment,'jira_ticket':jira_response},
            success: function(data) {
                
swal({
  title: "Success!!",
  text: "Updated new  Versions!",
  
});


            }
        });

// alert("segment"+temp1);
}






});
}

