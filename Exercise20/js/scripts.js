const colors = {
    purple : {
        name : "purple",
        color : "rgb(230, 205, 235)",
    },
    white : {
        name : "white",
        color : "rgb(252, 252, 252)",
    },
    yellow : {
        name : "yellow",
        color : "rgb(247, 204, 127)",
    },
    green : {
        name : "green",
        color : "rgb(230, 237, 156)",
    },
    red : {
        name : "red",
        color : "rgb(242, 171, 144)",
    },
}

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var date = new Date();
var todaysDate = months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();

var noteColor;

var notesArray = new Array();

let allNotesContainer = $(".all-notes-container");

if(localStorage.getItem("Notes") != null){
    $(".empty-page").css("display","none");
    $(".delete-button").css("display","inline");
   

    var returnedNotesArray = JSON.parse(localStorage.getItem("Notes"));
    for(let i=0;i<returnedNotesArray.length;i++){
    let inputNotesTitle = returnedNotesArray[i].notesTitle;
    let inputImageUrl = returnedNotesArray[i].imageUrl;
    let inputNotesContent = returnedNotesArray[i].notesContent;

    let noteContainer = $("<div>");
    noteContainer.attr("class","note-container");
    noteContainer.css("background-color",returnedNotesArray[i].noteBgColor);

    let note = $("<div>");
    note.attr("class","note");

    let noteTitle = $("<h1>");
    noteTitle.attr("class","note-title");
    noteTitle.text(inputNotesTitle);

    let noteDate = $("<p>");
    noteDate.attr("class","note-date");
    noteDate.text(returnedNotesArray[i].noteDate);

    note.append(noteTitle,noteDate);
    if($('textarea[name="imageUrl"]').val() != ""){
        let noteImageContainer = $("<div>");
        noteImageContainer.attr("class","note-image-container");
        let noteImage = $("<img>");
        noteImage.attr("alt","An image describing the note");
        noteImage.attr("src",inputImageUrl);
        noteImageContainer.append(noteImage);
        note.append(noteImageContainer);
    }


    let noteContent = $("<p>");
    noteContent.attr("class","note-content");
    noteContent.text(inputNotesContent);

    note.append(noteContent);
    noteContainer.append(note);
    allNotesContainer.append(noteContainer);
    }


}

$(".new-button").click(()=>{
    $(".new-note-modal-container").css("display","block");
    $(".overlay").css("display","block");
    let tickIcon = $("<i>");
    tickIcon.attr("class","fa-solid fa-check");
    $(".purple").append(tickIcon);
    let selectedColor = $(".purple");
    noteColor = "purple";
    $(".colors-container").click((event)=>{
        noteColor = event.target.className.split(' ')[1];
        selectedColor = $("."+(event.target.className.split(' ')[1]));
        selectedColor.append(tickIcon);
    })

    $(".close-icon").click(()=>{
        $(".new-note-modal-container").css("display","none");
        $(".overlay").css("display","none");
    })
})

$(".add-button").click(()=>{
    $(".empty-page").css("display","none");
    $(".delete-button").css("display","inline");

    let inputNotesTitle = $('textarea[name="notesTitle"]').val();
    let inputImageUrl = $('textarea[name="imageUrl"]').val();
    let inputNotesContent = $('textarea[name="content"]').val();

    let noteContainer = $("<div>");
    noteContainer.attr("class","note-container");
    noteContainer.css("background-color",colors[noteColor].color);

    let note = $("<div>");
    note.attr("class","note");

    let noteTitle = $("<h1>");
    noteTitle.attr("class","note-title");
    noteTitle.text(inputNotesTitle);

    let noteDate = $("<p>");
    noteDate.attr("class","note-date");
    noteDate.text(todaysDate);

    note.append(noteTitle,noteDate);
    if($('textarea[name="imageUrl"]').val() != ""){
        let noteImageContainer = $("<div>");
        noteImageContainer.attr("class","note-image-container");
        let noteImage = $("<img>");
        noteImage.attr("alt","An image describing the note");
        noteImage.attr("src",inputImageUrl);
        noteImageContainer.append(noteImage);
        note.append(noteImageContainer);
    }


    let noteContent = $("<p>");
    noteContent.attr("class","note-content");
    noteContent.text(inputNotesContent);

    note.append(noteContent);
    noteContainer.append(note);
    allNotesContainer.append(noteContainer);

    $(".new-note-modal-container").css("display","none");
    $(".overlay").css("display","none");
    $('textarea[name="notesTitle"]').val("");
    $('textarea[name="imageUrl"]').val("");
    $('textarea[name="content"]').val("");

    const noteObject = {
        notesTitle : "",
        noteDate : "",
        imageUrl : "",
        notesContent : "",
        noteBgColor : "",
    }

    noteObject.notesTitle = inputNotesTitle;
    noteObject.noteDate = todaysDate;
    noteObject.imageUrl = inputImageUrl;
    noteObject.notesContent = inputNotesContent;
    noteObject.noteBgColor = colors[noteColor].color;

    notesArray.push(noteObject);

    localStorage.setItem("Notes",JSON.stringify(notesArray));

})

$(".delete-button").click(()=>{
    $(".all-notes-container").empty();
    $(".empty-page").css("display","block");
    $(".delete-button").css("display","none");
    localStorage.clear();
    notesArray = new Array();
})