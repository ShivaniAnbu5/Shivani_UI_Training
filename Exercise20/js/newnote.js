let returnedNotesArray = JSON.parse(localStorage.getItem("Notes"));

let selectedNoteIndex = localStorage.getItem("selectedNoteIndex");

$(".selected-note-title").text(returnedNotesArray[selectedNoteIndex].notesTitle);



$(".fa-arrow-left").click(()=>{
    window.history.back();
})

