//  $('#dropdown').on('change', function() {
//    debugger;
//   var value = $(this).val();
//   if(value=)
// });

//   $("#dropdown option").filter(function() {
//     return $(this).val() == $("#rangeselector_min").val();
// }).attr('selected', true);

// $("#dropdown").on("change", function() {

//    
//     $("#rangeselector_max").val($(this).find("option:selected").attr("type"));
// });

$(document).ready(function () {
  $("#dropdown").change(function (e) {
    let tyeAttr = $("option:selected").attr("timestamp");
    switch (this.value) {
      case 'second':
        //console.log("second");
         $("#rangeselector_min").attr("type", tyeAttr);
        break;
      case 'minute':
      case 'hour':
        //console.log("hour");
        $("#rangeselector_min").attr("type", tyeAttr);
        break;
      case 'day':
        //console.log("day");
        $("#rangeselector_min").attr("type", tyeAttr);
        break;
        case 'week':
          //console.log("week");
          $("#rangeselector_min").attr("type", tyeAttr);
          break;
      case 'month':
      case 'year':
        //console.log("month");
        $("#rangeselector_min").attr("type", tyeAttr);
        break;
    }

  });

});

$("#getdata").click(function(){
  console.log($("#rangeselector_min").val());
});