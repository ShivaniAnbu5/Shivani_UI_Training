import ajaxCall from "../services/dataHandler.js";
import createTable from "./table.js";

$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });

    $( "#tabs" ).tabs();

    ajaxCall("./locations.json").done((data)=>{

      createTable(data);
  
    });

  } );
