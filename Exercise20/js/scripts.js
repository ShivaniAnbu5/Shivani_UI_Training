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

var noteIndex = 0;

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var date = new Date();
var todaysDate = months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();

var noteColor;

var notesArray = new Array();
var returnedNotesArray,isRemoved,removedNoteIndex;
let allNotesContainer = $(".all-notes-container");

if(localStorage.getItem("Notes") != null){
    $(".empty-page").css("display","none");
    $(".delete-all-button").css("display","inline");

    returnedNotesArray = JSON.parse(localStorage.getItem("Notes"));
    // console.log("After removing,array is "+returnedNotesArray);

    if(localStorage.getItem("isRemoved") != null){
        isRemoved = localStorage.getItem("isRemoved");
        removedNoteIndex = localStorage.getItem("removedNoteIndex");
        // console.log("Inside if noteIndex "+noteIndex);
    }
    else isRemoved = false;
    
    // console.log("isRemoved :"+isRemoved);
    
    // console.log("local note index "+noteIndex);
    for(let i=0;i<returnedNotesArray.length;i++){
        let inputNotesTitle = returnedNotesArray[i].notesTitle;
        let inputImageUrl = returnedNotesArray[i].imageUrl;
        let inputNotesContent = returnedNotesArray[i].notesContent;

        let noteContainer = $("<div>");
        noteContainer.attr("class","note-container");
        noteContainer.css("background-color",returnedNotesArray[i].noteBgColor);

        let note = $("<div>");
        if(isRemoved && returnedNotesArray[i].noteIndex>removedNoteIndex){
            // console.log("isRemoved inside if "+isRemoved);
            // console.log("removedNoteIndex inside if "+removedNoteIndex);
            // console.log("minus index");
            returnedNotesArray[i].noteIndex -= 1;
            note.attr("class","note "+ (returnedNotesArray[i].noteIndex));   
        }
        else{
            note.attr("class","note "+returnedNotesArray[i].noteIndex);
        }
        

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
        allNotesContainer.prepend(noteContainer);

        // On reload, this notes array will again be newly created.So getting the values and storing them again at first
        notesArray[i] = returnedNotesArray[i];
    }
    if(isRemoved){
        localStorage.setItem("Notes",JSON.stringify(returnedNotesArray));
        localStorage.setItem("isRemoved",false);
        localStorage.setItem("removedNoteIndex",Number.MAX_VALUE);
    }
    noteIndex = returnedNotesArray[returnedNotesArray.length-1].noteIndex + 1;
   
}

var selectedColor;

$(".new-button").click(()=>{
    $(".add-button").removeClass("add-button-enabled");
    $(".add-button").addClass("add-button-style");
    $(".new-note-modal-container").css("display","block");
    $(".overlay").css("display","block");
    let tickIcon = $("<i>");
    tickIcon.attr("class","fa-solid fa-check");

    // First time note creation, set to purple
    if(localStorage.getItem("Notes") == null){
        $(".purple").append(tickIcon);
        selectedColor = $(".purple");
        noteColor = "purple";
    }
    // If already notes were created, set the tick for the previously added note's color
    else{
        noteColor = notesArray[notesArray.length-1].noteColor;
        selectedColor = $("."+noteColor);
        selectedColor.append(tickIcon);
    }
    
    $(".colors-container").click((event)=>{
        noteColor = event.target.className.split(' ')[1];
        selectedColor = $("."+(noteColor));
        selectedColor.append(tickIcon);
    })

    $(".close-icon").click(()=>{
        let inputNotesTitle = $('textarea[name="notesTitle"]').val();
        let inputImageUrl = $('textarea[name="imageUrl"]').val();
        let inputNotesContent = $('textarea[name="content"]').val();

        //During editing, if closed
        if(inputNotesTitle!="" || inputImageUrl!="" || inputNotesContent!=""){
            $(".editing-confirmation-note-modal").css("display","block");
            $(".overlay").css("display","block");
        }
        else{
            $(".overlay").css("display","none");
            $(".new-note-modal-container").css("display","none");
        }
    })

    $(".editing-conf-button").click(()=>{
        $(".new-note-modal-container").css("display","none");
        $(".editing-confirmation-note-modal").css("display","none");
        $(".overlay").css("display","none");
        $('textarea[name="notesTitle"]').val("");
        $('textarea[name="imageUrl"]').val("");
        $('textarea[name="content"]').val("");
    })

    $(".editing-conf-close-icon").click(()=>{
        $(".editing-confirmation-note-modal").css("display","none");
        $(".overlay").css("display","none");
    })
})

$(".add-button").click(()=>{
    $(".empty-page").css("display","none");
    $(".delete-all-button").css("display","inline");

    let inputNotesTitle = $('textarea[name="notesTitle"]').val();
    let inputImageUrl = $('textarea[name="imageUrl"]').val();
    let inputNotesContent = $('textarea[name="content"]').val();

    if(inputNotesTitle=="" || inputNotesContent==""){
        if(inputNotesTitle=="")
        $(".error-title").text("Please enter the title before adding");
        if(inputNotesContent=="")
        $(".error-content").text("Please enter the content before adding");
    }
    else{
        $(".error").text("");
        let noteContainer = $("<div>");
        noteContainer.attr("class","note-container");
        noteContainer.css("background-color",colors[noteColor].color);

        let note = $("<div>");
        console.log("Note index "+noteIndex);
        note.attr("class","note "+noteIndex);

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
        allNotesContainer.prepend(noteContainer);

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
            noteColor: "",
            noteIndex : ""
        }

        console.log("Note index before: "+noteIndex);
        noteObject.notesTitle = inputNotesTitle;
        noteObject.noteDate = todaysDate;
        noteObject.imageUrl = inputImageUrl;
        noteObject.notesContent = inputNotesContent;
        noteObject.noteBgColor = colors[noteColor].color;
        noteObject.noteColor = noteColor;
        noteObject.noteIndex = noteIndex++;

        console.log("Note index currently: "+noteIndex);
        notesArray.push(noteObject);

        localStorage.setItem("Notes",JSON.stringify(notesArray));
        returnedNotesArray = JSON.parse(localStorage.getItem("Notes"));

        selectedColor.empty();

        $(".note").click((event)=>{

            selectedNoteIndex = parseInt((event.currentTarget.className).split(" ")[1]);
            
            localStorage.setItem("selectedNoteIndex",selectedNoteIndex);
        
            window.location.href='note.html';
        
        })
        
    }

})

$('textarea[name="notesTitle"]').keyup(()=>{
    $(".error-title").text("");
    if($('textarea[name="content"]').val() != ""){
        $(".add-button").addClass("add-button-enabled");
        $(".add-button").removeClass("add-button-style");
    }
    if($('textarea[name="notesTitle"]').val() == ""){
        $(".error-title").text("Please enter the title before adding");
        $(".add-button").removeClass("add-button-enabled");
        $(".add-button").addClass("add-button-style");
    }

})

$('textarea[name="content"]').keyup(()=>{
    $(".error-content").text("");
    if($('textarea[name="notesTitle"]').val() != ""){
        $(".add-button").addClass("add-button-enabled");
        $(".add-button").removeClass("add-button-style");
    }
    if($('textarea[name="content"]').val() == ""){
        $(".error-content").text("Please enter the content before adding");
        $(".add-button").removeClass("add-button-enabled");
        $(".add-button").addClass("add-button-style");
    }
})

$(".delete-all-button").click(()=>{
    $(".overlay").css("display","block");
    $(".delete-note-modal").css("display","block");
    $(".delete-confirmation-msg").text("Are you sure you want to delete all notes?");

    $(".close-icon").click(()=>{
        $(".delete-note-modal").css("display","none");
        $(".overlay").css("display","none");
    })
})

$(".delete-conf-button").click(()=>{
    $(".all-notes-container").empty();
    $(".empty-page").css("display","block");
    $(".delete-all-button").css("display","none");
    $(".overlay").css("display","none");
    $(".delete-note-modal").css("display","none");
    noteIndex = 0;
    localStorage.clear();
    notesArray = new Array();
})

var selectedNoteIndex;
$(".note").click((event)=>{

    selectedNoteIndex = parseInt((event.currentTarget.className).split(" ")[1]);
    
    localStorage.setItem("selectedNoteIndex",selectedNoteIndex);

    window.location.href='note.html';

})

