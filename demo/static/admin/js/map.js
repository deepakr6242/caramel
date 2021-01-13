$(function() {
  // Prepare demo data
  var data = [{
    "hc-key": "eu",
    "value": "EMMEA",
    "color": 'gold'
  }, {
    "hc-key": "oc",
    "value": "",
    
    "name": "hello",
  }, {
    "hc-key": "af",
    "value": "EEMEA",
    "color":"gold"
  }, {
    "hc-key": "as",
    "value":"APAC",
    "color":"green"
    
  }, {
    "hc-key": "na",
    "value": "USA"
  }, {
    "hc-key": "sa",
    "value": "EEMEA",
    "color": "gold"
  }];

  // Initiate the chart
  $('#vmap').highcharts('Map', {

    title: {
      text: ''
    },
    chart:{
    height:360,
    backgroundColor: 'transparent',
    },

    // subtitle: {
    //   text: 'Regions: World continents'
    // },
    plotOptions: {
      map: {
        point: {
          events: {
            click: function() {
              $('#vmap').trigger(this['hc-key']);
              // this.disabled = true;
              // alert("hello"+this['hc-key'])
            }
          }
        }
      }
    },

    series: [{
      data: data,
      mapData: Highcharts.maps['custom/world-continents'],
      
      
      // states: {
      //   hover: {
      //       enabled: false,
      //     color: '#BADA55',
          
      //   }
      // },

      dataLabels: {
        enabled: true,
        format:this['hc-key']
      }
    }]
  });
  $('#vmap').on('eu', function() {
    // alert('You have clicked on EEMEA!');
    var region ="EEMEA"
    $("#vmap").attr("disabled", true);
    getcountry(region);
     

  });
  $('#vmap').on('as', function() {
    alert('You have Chosen  on APAC!');
  });
  $('#vmap').on('na', function() {
    alert('You have clicked on North America!');
  });
  $('#vmap').on('sa', function() {
    alert('You have clicked on South America!');
  });
  $('#vmap').on('af', function() {
    alert('You have clicked on Africa!');
  });
  $('#vmap').on('oc', function() {  
    alert('You have clicked on Oceania!')
  });
});
