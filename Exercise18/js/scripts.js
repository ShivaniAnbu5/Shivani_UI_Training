// FOR APPENDING DATA TO THE DESCRIPTION-COMMENTS SECTION
$.ajax({
    url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
    error: () => {
      console.log("Error has occured");
    },
    success: (data) =>{
        var output =  $(".desc-comments");

        var videoContainer = $(".video-container");
        var video = $("<video>");
        video.attr("src",data.videoUrl);
        video.attr("controls",true);
        video.attr("width","100%");
        video.attr("poster","./images/sprite-fright.png");

        let playIcon = $("<i>");
        playIcon.attr("class","fa-regular fa-circle-play");
        videoContainer.click(()=>{
            playIcon.css("display","none");
        })

        videoContainer.append(playIcon);
        videoContainer.append(video);
        output.append(videoContainer);


        var titleDescContainer = $("<div>");
        var title =$("<h3>");
        var description = $("<p>");
        titleDescContainer.attr("class","titleDescContainer");
        title.attr("class","title");
        title.text (data.title);
        description.text(data.description);
        description.attr("class","description");
        titleDescContainer.append(title);
        titleDescContainer.append(description);
        output.append(titleDescContainer);

        var horizontalBreak = $("<hr>");
        horizontalBreak.attr("class","hr");
        output.append(horizontalBreak);

        var commentsHeading = $("<h4>");
        commentsHeading.attr("class","comments-heading")
        commentsHeading.text("Comments");
        output.append(commentsHeading);

        var commentsContainer = $("<div>");
        commentsContainer.attr("class","commentsContainer");
        for(let tempData in data.comments){
            var commentContainer = $("<div>");
            commentContainer.attr("class","commentContainer flex");
            commentContainer.attr("width","100%");

            var personImageContainer = $("<div>");
            personImageContainer.attr("class","personImageContainer");

            var personImage = $("<img>");
            personImage.attr("src",data.comments[tempData].image);
            personImage.attr("alt",data.comments[tempData].name)
            personImageContainer.append(personImage);

            var comment = $("<div>");
            var commentTitle = $("<h4>");
            commentTitle.attr("class","commentTitle");
            var commentDescription = $("<p>");
            commentDescription.attr("class","commentDescription");
            comment.attr("class","comment");
            commentTitle.text(data.comments[tempData].name);
            commentDescription.text(data.comments[tempData].comment);
            comment.append(commentTitle);
            comment.append(commentDescription);
            
            
            commentContainer.append(personImageContainer);
            commentContainer.append(comment);

            commentsContainer.append(commentContainer);

        }
        output.append(commentsContainer);
    },
  });

// FOR APPENDING DATA TO THE UPCOMING-PROJECTS SECTION
$.ajax({
    url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
    error: () => {
        console.log("Error has occured");
      },
      success: (data) =>{
            var output =  $(".posters-container");
        
            for(let tempData in data){
                let posterImageContainer = $("<div>");
                posterImageContainer.attr("class","posterImageContainer");
                let posterImage = $("<img>");
        
                posterImage.attr("src",data[tempData].imageUrl);
                posterImage.attr("alt",data[tempData].title);
                posterImage.attr("class","posterImage");
        
                posterImageContainer.append(posterImage);
                output.append(posterImageContainer);
        
               }  
        },

  });