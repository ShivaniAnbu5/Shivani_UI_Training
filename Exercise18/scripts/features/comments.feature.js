function commentsFeature(data){

    const output =  $(".desc-comments");

    const commentsHeading = $("<h4>");
    commentsHeading.attr("class","comments-heading")
    commentsHeading.text("Comments");
    output.append(commentsHeading);

    const commentsContainer = $("<div>");
    commentsContainer.attr("class","commentsContainer");
    for(let tempData in data.comments){
        const commentContainer = $("<div>");
        commentContainer.attr("class","commentContainer flex");
        commentContainer.attr("width","100%");

        const personImageContainer = $("<div>");
        personImageContainer.attr("class","personImageContainer");

        const personImage = $("<img>");
        personImage.attr("src",data.comments[tempData].image);
        personImage.attr("alt",data.comments[tempData].name)
        personImageContainer.append(personImage);

        const comment = $("<div>");
        const commentTitle = $("<h4>");
        commentTitle.attr("class","commentTitle");
        const commentDescription = $("<p>");
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
}

export default commentsFeature;