$(document).ready(function () {
  $("#btn1").on("click", function () {
    var cle = $("#recherche").val();
    // console.log(cle);

    var api =
      "https://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=" +
      cle;

    $.getJSON(api, function (data) {
      // console.log(data.results)

      $.each(data.results, function (index, film) {
        $("#aff_res").append(
          '<div class="card m-3 col-lg-2 col-sm-3 shadow-lg rounded" ><div class="card-body gy-0 d-flex row"> <div class="card-title text-center align-items-start  p-3">' +
            film.title +
            '</div>  <div class="align-self-end"> <div class="card-text">Date de sortie: ' +
            film.release_date +
            '</div><div class="card-text"> Note des utilisateurs: '+
            film.vote_average +
            '</div></div></div><img class="card-img-bottom" src="http://image.tmdb.org/t/p/w185' +
            film.poster_path +
            '"></div>'
        );
      });
    });
  });
});
