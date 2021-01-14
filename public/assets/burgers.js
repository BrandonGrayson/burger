console.log("hello")
$(function () {
    // click listener to fire on button click
    $('#burger-list').children("button").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: {}
        }).then(
            function () {
                console.log("changed devoured to", id)
                location.reload()
            }
        )
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log(event);
        console.log($("#add-burger").val().trim())
        var newBurger = {
            burger: $("#add-burger").val().trim(),
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("we are here!")
                location.reload();
            }
        )
    });
})