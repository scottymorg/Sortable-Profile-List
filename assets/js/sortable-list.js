jQuery(document).ready(function(){


	// Initiate sortability for both sortable lists

	$('#sortable, #sortable-option').sortable({
		placeholder: 'sortable-placeholder', //placeholder class
		forcePlaceholderSize: true //force placeholder to adjust the size

	});

	// Make both lists interconnect

	$('#sortable-option').sortable({

		connectWith: [$('#sortable')],

	});

	$('#sortable').sortable({

		connectWith: [$('#sortable-option')],

	})


	//Count all items and class unique attribute for further usage

	/*

	$('.sortable-item-placeholder').each(function(i) {
		var SortableItemCountNumber = ++i;
	    $(this).attr('data-item-count',  SortableItemCountNumber);
	}); 

	*/


	//Add profile item 

	$('.create-profile-button').click(function(e){

			e.preventDefault();

			var userAvatarPlaceholder = 'https://randomuser.me/api/portraits/lego/1.jpg'; //Avatar image placeholder URL
			var userNamePlaceholder = 'Username'; // Name Placeholder
			var userSkillPlaceholder = 'Skill set'; // Skill Placeholdrer

			/* HTML placeholder  */

			var $itemToAdd = '<li class="sortable-item-placeholder item-to-sort option-item">'+
								'<div class="sortable-item"><div class="item-content-wrapper">'+
									'<div class="user-avatar"><img src="'+userAvatarPlaceholder+'"></div>'+
									'<div class="user-info">'+
										'<h4 class="user-name">'+userNamePlaceholder+'</h4> <p class="user-skill">'+userSkillPlaceholder+'</p>'+
										'<p class="call-to-action-wrapper"><a href="" class="call-to-action-button">See full profile</a></p>'+
									'</div>'+
									'<div class="item-dragger"></div>'+
								'</div></div>'+
							'</li>';

			/* HTML placeholder  */

			$("#sortable-option").append($itemToAdd); //append the above placeholder as new list
			$("#sortable-option").sortable('refresh'); // refresh sortable index 

			// If it is mobile screen, scroll to Option Panel after adding new profile

			if ( $(window).width() < 678 ){

				$('html, body').animate({
                    scrollTop: $("#profile-options").offset().top
                }, 500);

			}



	});


});