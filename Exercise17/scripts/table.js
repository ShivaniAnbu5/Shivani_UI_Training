function createTable(data){
    const locationsContainer = $(".locations-container");

    const table = $("<table>");
    table.attr("class","table");

        for(let temp in data){
            const tableRow = $("<tr>");

            const country = $("<td>");

            const countryImgContainer =  $("<div>");
            countryImgContainer.attr("class","countryImgContainer");
            const countryImg = $("<img>");
            countryImg.attr("src","https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg");
            countryImg.attr("class","countryImg");
            countryImgContainer.append(countryImg);
            country.append(countryImgContainer);

            const state = $("<td>").text(data[temp].state);
            const city = $("<td>").text(data[temp].city);
            const contact = $("<td>").text(data[temp].contact);

            tableRow.append(country,state,city,contact);
            table.append(tableRow);
        }
        
        locationsContainer.append(table);

}

export default createTable;