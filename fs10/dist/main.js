const getData = async function(){
    $("#test").empty()

    const fatch = await $.get("/fs")
    fatch.forEach(a => {
        $("#test").append(`<div>${a.name}</div>`)
    });
}
getData()

$("button").on("click",async function(){
    const name = $("input").val()
    await $.post("/fs",{name})

    getData()
})