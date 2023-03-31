function ajaxCall(receivedUrl){

    return $.ajax({
        url: receivedUrl,
        error: () => {
          console.log("Error has occured");
        },
        success: (data) =>{
            
        },
    });
}


export default ajaxCall