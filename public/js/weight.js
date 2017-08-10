$(document).ready(function() {

    $(".delete-weight").click(function(event) {

        let resource = $(this).attr("href");
        let id       = $(this).attr("data-id");
        let url      = [resource, id].join("/");

        delete_weight(url);

    });

});


function delete_weight(url) {

    $.ajax({url:     url,
            type:    "DELETE",
            success: function(response) { window.location.reload(true); },
            error:   function(error) { console.log(error); }
    });

}
