/*
/ Module Dependencies
*/

import $ from 'jquery'
import page from 'page'
import template from 'src/template'
import render from 'src/render'
import * as shows from 'src/api-tvmaze'


$(function(){

	page('/', function(ctx, next){
		if(!localStorage.movies){
			shows.getShows();
		} else{
			render(JSON.parse(localStorage.movies));
		}
	})
		

		$(".header").find(".search").on("submit", ev => {
			ev.preventDefault();
			let texto = $(".search").find(".search__input").val();
			if(texto == ""){
				$(".show").remove();
				render(JSON.parse(localStorage.movies));
			}else{
				$(".show").remove();
				shows.searchShows();
			}
		
		})

	page();
	
})



