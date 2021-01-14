console.log("hello")
$(function () {
    // click listener to fire on button click
    $('#burger-list').children("button").on("click", function (event) {
        event.preventDefault()
        console.log(this.text())
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

    // $(".create-form").on("submit", function (event))

})