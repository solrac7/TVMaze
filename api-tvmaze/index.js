/*
/ Module Dependencies
*/

import $ from 'jquery'
import render from 'src/render'


//Function getShows with promise
export function getShows(){
	$.ajax("http://api.tvmaze.com/shows")
		.then( shows => {
			localStorage.movies = JSON.stringify(shows);
			render(shows);	
		})
}

//Function searchShows with promise
export function searchShows(){
	let texto = $(".search").find(".search__input").val();
	$.ajax(`http://api.tvmaze.com/search/shows?q=${texto}`)
		.then( resp => {
			var show = resp.map( el =>{
				return el.show;
			})
			render(show);	
		})
}





/*
/Function with callback
*/

// function getShows(cb){
// 	$.ajax({
// 		url: "http://api.tvmaze.com/shows",
// 		succes: function(shows) {
// 			function cb(shows) {
// 				localStorage.movies = JSON.stringify(shows);
// 				render(shows);
// 			}
// 		}
// 	})		
// }