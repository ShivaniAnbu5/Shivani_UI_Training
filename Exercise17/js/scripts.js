$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });

    $( "#tabs" ).tabs();
  } );

var locationsContainer = $(".locations-container");

var table = $("<table>");
table.attr("class","table");

  fetch("./locations.json")
    .then(data => data.json())
    .then(data => {

      for(let temp in data){
        var tableRow = $("<tr>");
        console.log(tableRow);

        var country = $("<td>");
        var countryImgContainer =  $("<div>");
        countryImgContainer.attr("class","countryImgContainer");
        var countryImg = $("<img>");
        countryImg.attr("src","https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg");
        countryImg.attr("class","countryImg");
        countryImgContainer.append(countryImg);
        country.append(countryImgContainer);

        var state = $("<td>").text(data[temp].state);
        var city = $("<td>").text(data[temp].city);
        var contact = $("<td>").text(data[temp].contact);

        tableRow.append(country,state,city,contact);
        table.append(tableRow);
      }
      
      locationsContainer.append(table);

    })