$(document).ready(function() {

    $(".delete-weight").click(function(event) {

        let id  = $(this).attr("data-id");
        let url = "/weight/" + id;

        delete_weight(url);

    });

});


function delete_weight(url) {

    console.log("Deleting weight at: " + url);

    $.ajax({url:     url,
            type:    "DELETE",
            success: function(response) { window.location.reload(true); },
            error:   function(error) { console.log(error); }
    });

}
