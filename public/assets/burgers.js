$(function () {
    // click listener to fire on button click
    $('#eat-burger').on("click", function (event) {
        event.preventDefault()
        console.log(this.val())
    })

})