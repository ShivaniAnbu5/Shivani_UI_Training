function upcomingProjectsFeature(data){
    const output =  $(".posters-container");
        
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
}

export default upcomingProjectsFeature
