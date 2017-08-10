$(document).ready(function() {

    $("#edit-form").submit(function(event) {

        event.preventDefault();

        let resource = $(this).attr("action");
        let id       = $(this).attr("data-id");
        let url      = [resource, id].join("/");
        let data     = $(this).serialize();

        edit_weight(url, data);

    });

});


function edit_weight(url, data) {

    $.ajax({url:     url,
            type:    "PATCH",
            data:    data,
            success: function(response) { window.location = "/weight"; },
            error:   function(error) { console.log(error); }
    });

}
