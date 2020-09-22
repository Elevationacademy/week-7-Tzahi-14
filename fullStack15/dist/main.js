const getData = async function () {
    const load = await $.get("/things")

    $("#things").empty()
    load.forEach(thing => {
        $("#things").append(`<div>${thing.name}</div>`)
    });
}
getData()

$("#btn").on("click", async function () {
    const name = $("#input").val()
    await $.post("/word", {name} )
    getData()
})