let returnedNotesArray,selectedNoteIndex,isRemoved,selectedColor,noteColor;

let tickIcon = $("<i>");
tickIcon.attr("class","fa-solid fa-check");

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

if(localStorage.getItem("Notes") != null){
    returnedNotesArray = JSON.parse(localStorage.getItem("Notes"));
}

if(localStorage.getItem("selectedNoteIndex") != null){
    selectedNoteIndex = localStorage.getItem("selectedNoteIndex");
}

if(returnedNotesArray!=null && selectedNoteIndex != null)
{
    $(".selected-note-title").text(returnedNotesArray[selectedNoteIndex].notesTitle);
    $(".selected-note-date").text(returnedNotesArray[selectedNoteIndex].noteDate);

    $(".selected-note-image").attr("src",returnedNotesArray[selectedNoteIndex].imageUrl);

    $(".selected-note-content").text(returnedNotesArray[selectedNoteIndex].notesContent);

    $(".selected-note-circle").css("background-color",returnedNotesArray[selectedNoteIndex].noteBgColor)

    $(".delete-particular-note-button").click(()=>{
        $(".overlay").css("display","block");
        $(".delete-note-modal").css("display","block");
    })

    $(".delete-note-close-icon").click(()=>{
        $(".delete-note-modal").css("display","none");
        $(".overlay").css("display","none");
    })

    $(".delete-confirmation-msg").text("Are you sure you want to delete this note?")

    $(".selected-note-delete-conf-button").click(()=>{
        // $(".all-notes-container:nth-child("+selectedNoteIndex+")").remove();
        isRemoved = true;
        localStorage.setItem("isRemoved",isRemoved);
        localStorage.setItem("removedNoteIndex",selectedNoteIndex);

        returnedNotesArray.splice(selectedNoteIndex,1);

        localStorage.setItem("Notes",JSON.stringify(returnedNotesArray));
        if(returnedNotesArray.length == 0){
            localStorage.removeItem("Notes");
        }
        localStorage.removeItem("selectedNoteIndex");
        window.history.back();
    })
}

$(".edit-note-button").click(()=>{
   $(".edit-note-modal-container").css("display","block"); 
   $(".overlay").css("display","block");

    noteColor = returnedNotesArray[selectedNoteIndex].noteColor;
    selectedColor = $("."+returnedNotesArray[selectedNoteIndex].noteColor);
    selectedColor.append(tickIcon);

   let inputNotesTitle = returnedNotesArray[selectedNoteIndex].notesTitle;
   let inputImageUrl = returnedNotesArray[selectedNoteIndex].imageUrl;
   let inputNotesContent = returnedNotesArray[selectedNoteIndex].notesContent;

   $('textarea[name="SnotesTitle"]').val(inputNotesTitle);
   $('textarea[name="imageUrl"]').val(inputImageUrl);
   $('textarea[name="Scontent"]').val(inputNotesContent);

   $(".save-button").addClass("save-button-enabled");
    $(".save-button").removeClass("save-button-style");

})

$('textarea[name="SnotesTitle"]').keyup(()=>{
    $(".error-title").text("");
    if($('textarea[name="Scontent"]').val() != ""){
        $(".save-button").addClass("save-button-enabled");
        $(".save-button").removeClass("save-button-style");
    }
    if($('textarea[name="SnotesTitle"]').val() == ""){
        $(".error-title").text("Please enter the title before saving");
        $(".save-button").removeClass("save-button-enabled");
        $(".save-button").addClass("save-button-style");
    }

})

$('textarea[name="Scontent"]').keyup(()=>{
    $(".error-content").text("");
    if($('textarea[name="SnotesTitle"]').val() != ""){
        $(".save-button").addClass("save-button-enabled");
        $(".save-button").removeClass("save-button-style");
    }
    if($('textarea[name="Scontent"]').val() == ""){
        $(".error-content").text("Please enter the content before saving");
        $(".save-button").removeClass("save-button-enabled");
        $(".save-button").addClass("save-button-style");
    }
})

$(".colors-container").click((event)=>{
    noteColor = event.target.className.split(' ')[1];
    selectedColor = $("."+(noteColor));
    selectedColor.append(tickIcon);
})

$(".save-button").click(()=>{
    returnedNotesArray[selectedNoteIndex].notesTitle = $('textarea[name="notesTitle"]').val();
    returnedNotesArray[selectedNoteIndex].imageUrl = $('textarea[name="imageUrl"]').val();
    returnedNotesArray[selectedNoteIndex].notesContent = $('textarea[name="content"]').val();
    // console.log(colors[noteColor]);
    // console.log(colors[noteColor].color);
    console.log($('textarea[name="content"]').val());
    returnedNotesArray[selectedNoteIndex].noteBgColor = colors[noteColor].color;
    returnedNotesArray[selectedNoteIndex].noteColor = noteColor;

    // let editedNote = returnedNotesArray[selectedNoteIndex];
    // returnedNotesArray.splice(selectedNoteIndex,1);
    // returnedNotesArray.unshift(editedNote);

    localStorage.setItem("Notes",JSON.stringify(returnedNotesArray));
    $(".edit-note-modal-container").css("display","none"); 
    $(".overlay").css("display","none");  

    let inputNotesTitle = returnedNotesArray[selectedNoteIndex].notesTitle;
    let inputImageUrl = returnedNotesArray[selectedNoteIndex].imageUrl;
    let inputNotesContent = returnedNotesArray[selectedNoteIndex].notesContent;

    $(".selected-note-title").text(inputNotesTitle);
    $(".selected-note-image").attr("src",inputImageUrl);
    $(".selected-note-content").text(inputNotesContent);
    $(".selected-note-circle").css("background-color",returnedNotesArray[selectedNoteIndex].noteBgColor)


})

$(".edit-note-close-icon").click(()=>{
    $(".edit-note-modal-container").css("display","none");
    $(".overlay").css("display","none");
    
})


$(".fa-arrow-left").click(()=>{
    window.history.back();
})
