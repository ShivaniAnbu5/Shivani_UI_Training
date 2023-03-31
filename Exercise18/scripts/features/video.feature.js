function videoFeature(data){

    const output =  $(".desc-comments");

        const videoContainer = $(".video-container");
        const video = $("<video>");
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


        const titleDescContainer = $("<div>");
        const title =$("<h3>");
        const description = $("<p>");
        titleDescContainer.attr("class","titleDescContainer");
        title.attr("class","title");
        title.text (data.title);
        description.text(data.description);
        description.attr("class","description");
        titleDescContainer.append(title);
        titleDescContainer.append(description);
        output.append(titleDescContainer);

        const horizontalBreak = $("<hr>");
        horizontalBreak.attr("class","hr");
        output.append(horizontalBreak);
}

export default videoFeature