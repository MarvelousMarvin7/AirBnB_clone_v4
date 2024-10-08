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
    });
});