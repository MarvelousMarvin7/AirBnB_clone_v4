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
	    url = "http://0.0.0.0:5001/api/v1/status/";
	    type = "GET";
	    success: function (data) {
		if (data.status === 'OK') {
		    $('DIV#api_status').addClass('available');
		} else {
		    $('DIV#api_status').removeClass('available');
		}
	    }
	});
    });
});
