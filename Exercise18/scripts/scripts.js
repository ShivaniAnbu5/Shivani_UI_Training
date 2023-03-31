import ajaxCall from '../scripts/services/data.handler.js';
import videoFeature from "../scripts/features/video.feature.js";
import commentsFeature from "../scripts/features/comments.feature.js";
import upcomingProjectsFeature from "../scripts/features/upcomingprojects.feature.js";


(function(){
  
 ajaxCall("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0").done((movieDetails)=>{

  videoFeature(movieDetails);
  commentsFeature(movieDetails);

});
  
  ajaxCall("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346").done((upcomingProjectsDetails)=>{

    upcomingProjectsFeature(upcomingProjectsDetails);

  });  

})();




