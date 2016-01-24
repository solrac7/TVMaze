/*
/ Module Dependencies
*/

import $ from 'jquery'
import template from 'src/template'

export default function render(shows){
	$(".showsList").find(".loader").remove();
	var showsList = $(".showsList");
		shows.forEach( show => { 
			var article = template
				.replace(':image:', show.image.medium)
				.replace(':alt:', show.name)
				.replace(':name:', show.name)
				.replace(':summary:', show.summary);
			showsList.append($(article));
		})	
}