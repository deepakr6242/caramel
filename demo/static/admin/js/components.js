function getcomponents(segment) {
	var segment = segment;

	$('#save').click(function(){


var table = document.getElementById('version_table_editable');
var row_num = 0;
var changed_version = new Array()
$("#version_table_editable tr").each(function() {
    var COMPONENTS = $(table.rows[row_num].cells[0]).text();
    var DEV = $(table.rows[row_num].cells[1]).find('option:selected').text();
    var SIT = $(table.rows[row_num].cells[2]).find('option:selected').text();
    var PREPROD = $(table.rows[row_num].cells[3]).find('option:selected').text();
    var PROD = $(table.rows[row_num].cells[4]).find('option:selected').text();
    // console.log(COMPONENTS+','+DEV+','+SIT+','+PREPROD+','+PROD) ;
    var changed_data = [COMPONENTS+','+DEV+','+SIT+','+PREPROD+','+PROD]

    console.log(typeof(changed_data))
    changed_version.push(changed_data)
    row_num++;
});

console.log("cscscs"+(changed_version))
console.log(typeof(changed_version) + changed_version.length)
// alert(changed_version);
// alert(clicked_id+'_'+document.getElementById('newcity').value)
var table_name = segment
// alert("segement is "+segment)
$.ajax({
            url: 'update_versions/',
            type: "POST",
            data:  {'version':changed_version,'table_name':table_name},
            success: function(data) {
                
swal({
  title: "Success!!",
  text: "Updated new  Versions!",
  
});


            }
        });

// alert("segment"+temp1);
});


}