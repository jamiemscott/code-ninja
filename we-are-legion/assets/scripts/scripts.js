function initMap() 
{
   const centerMap = {} // We'll add in some options shortly
		
   const mapOptions = {
      center: centerMap, // coordinates to center map
      zoom: 10, // level of zoom we want
   }
		
   const map = new google.maps.Map(document.getElementById("legionMap"), mapOptions);	
}