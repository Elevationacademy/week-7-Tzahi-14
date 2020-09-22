const getData = async function (){
    const getData = await $.get("/things")

    getData.forEach(thing => {
        $("#add").append(`<div>${thing.name}</div>`)
    });
}
getData()

$("#btn").on("click", async function(){
    console.log("hey")
    const name = $("input").val()
    await $.post("/things",{name})
    $("#add").append(`<div>${name}</div>`)
})