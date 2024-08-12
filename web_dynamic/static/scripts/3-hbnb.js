$(document).ready(function () {
    let selectedAmenties = {};
    $('.amenities input[type="checkbox"]').change(funtion () {
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if (this.checked)  {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);

	$.ajax({
	    url: "http://0.0.0.0:5001/api/v1/status/";
	    type: "GET";
	    success: function (data) {
		if (data.status === 'OK') {
		    $('DIV#api_status').addClass('available');
		} else {
		    $('DIV#api_status').removeClass('available');
		}
	    }
	});

	$.ajax({
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({}),
        success: function (data) {
            for (let place of data) {
                const article = `
                <article>
                    <div class="title_box">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                        <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                        <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                        <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                    </div>
                    <div class="description">
                        ${place.description}
                    </div>
                </article>`;
                $('section.places').append(article);
            }
        }
    });
});
