$(document).ready(function () {
  $.getJSON("ajax_regions.json", function (data) {
    $.each(data.regions, function (index, region) {
      $("#select1").append(
        "<option value=" + (index + 1) + ">" + region.reg_v_nom + "</option>"
      );
    });

    $("#select1").on("click", function () {
      $("#select2 option").remove();
      var idReg = $("#select1").find(":selected").val();
      $.each(data.departements, function (index, departement) {
        $("#select2").removeClass("visually-hidden");
        console.log(idReg);
        if (departement.dep_reg_id == idReg) {
          $("#select2").append("<option>" + departement.dep_nom + "</option>");
        }
      });
    });
 
  });
});

// console.log(index);
// console.log(region.reg_v_nom)
// console.log(data);
// console.log(data.departements[10]);
// console.log(data.departements[10].dep_nom);
