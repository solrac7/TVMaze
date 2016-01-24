import $ from 'jquery';

$(function(){
	
	var template = 
		`<article class="show">
			<div class="show__img">
				<img src=":image:" alt=":alt:">
			</div>
			<div class="show__desc">
				<h2 class="show__desc-title">:name:</h2>
				<div class="show__desc-txt">:summary:</div>
			</div>
		</article>`;

	let render = shows => {
		var showsList = $(".showsList");
		showsList.find(".loader").remove();
		shows.forEach( show => { 
				var article = template
					.replace(':image:', show.image.medium)
					.replace(':alt:', show.name)
					.replace(':name:', show.name)
					.replace(':summary:', show.summary);
				showsList.append($(article));
			})	
	}
	if(!localStorage.movies){
		$.ajax("http://api.tvmaze.com/shows")
			.then( shows => {
				localStorage.movies = JSON.stringify(shows);
				render(shows);	
			})
	} else{
		render(JSON.parse(localStorage.movies));
	}

	$(".header").find(".search").on("submit", ev => {
		ev.preventDefault();
		let texto = $(this).find(".search__input").val();

		if(texto == ""){
			$(".show").remove();
			render(JSON.parse(localStorage.movies));
		}else{
			$(".show").remove();
			$.ajax(`http://api.tvmaze.com/search/shows?q=${texto}`)
			.then( resp => {
				var show = resp.map( el => {
					return el.show;
				})
				render(show);	
			})
		}
	
	})

})

