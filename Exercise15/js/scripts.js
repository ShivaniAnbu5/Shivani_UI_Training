// FOR APPENDING DATA TO THE DESCRIPTION-COMMENTS SECTION
fetch("./data/video.json")
    .then(data => data.json())
    .then(data => {
        
        var output =  document.getElementsByClassName("description-comments")[0];

        var videoContainer = document.getElementsByClassName("video-container")[0];
        var video = document.createElement("video");
        video.setAttribute("src",data.videoUrl);
        video.setAttribute("controls",true);
        video.setAttribute("width","100%");
        video.setAttribute("poster","./images/sprite-fright.png");
        videoContainer.appendChild(video);
        output.appendChild(videoContainer);


        var titleDescContainer = document.createElement("div");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        titleDescContainer.setAttribute("class","titleDescContainer");
        title.setAttribute("class","title");
        title.innerHTML = data.title;
        description.innerHTML = data.description;
        description.setAttribute("class","description");
        titleDescContainer.appendChild(title);
        titleDescContainer.appendChild(description);
        output.appendChild(titleDescContainer);

        var horizontalBreak = document.createElement("hr");
        horizontalBreak.setAttribute("class","hr");
        output.appendChild(horizontalBreak);

        var commentsHeading = document.createElement("h4");
        commentsHeading.setAttribute("class","comments-heading")
        commentsHeading.innerHTML = "Comments";
        output.appendChild(commentsHeading);

        var commentsContainer = document.createElement("div");
        commentsContainer.setAttribute("class","commentsContainer");
        for(let tempData in data.comments){
            var commentContainer = document.createElement("div");
            commentContainer.setAttribute("class","commentContainer flex");
            commentContainer.setAttribute("width","100%");

            var personImageContainer = document.createElement("div");
            personImageContainer.setAttribute("class","personImageContainer");

            var personImage = document.createElement("img");
            personImage.setAttribute("src",data.comments[tempData].image);
            personImage.setAttribute("alt",data.comments[tempData].name)
            personImageContainer.appendChild(personImage);

            var comment = document.createElement("div");
            var commentTitle = document.createElement("h4");
            commentTitle.setAttribute("class","commentTitle");
            var commentDescription = document.createElement("p");
            commentDescription.setAttribute("class","commentDescription");
            comment.setAttribute("class","comment");
            commentTitle.innerHTML = data.comments[tempData].name;
            commentDescription.innerHTML = data.comments[tempData].comment;
            comment.appendChild(commentTitle);
            comment.appendChild(commentDescription);
            
            
            commentContainer.appendChild(personImageContainer);
            commentContainer.appendChild(comment);

            commentsContainer.appendChild(commentContainer);

        }
        output.appendChild(commentsContainer);
        
})


// FOR APPENDING DATA TO THE UPCOMING-PROJECTS SECTION
fetch("./data/posters.json")
.then(data => data.json())
.then(data => {
    
    var output =  document.getElementsByClassName("posters-container")[0];

    for(let tempData in data){
        let posterImageContainer = document.createElement("div");
        posterImageContainer.setAttribute("class","posterImageContainer");
        let posterImage = document.createElement("img");

        posterImage.setAttribute("src",data[tempData].imageUrl);
        posterImage.setAttribute("alt",data[tempData].title);
        posterImage.setAttribute("class","posterImage");

        posterImageContainer.appendChild(posterImage);
        output.appendChild(posterImageContainer);

    }  
})