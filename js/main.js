/**

 */


(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		pathOpen = morphEl.getAttribute( 'data-morph-open' ),
		isAnimating = false;

	function init() {
		initEvents();
	}

    
    
	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			
			setTimeout( function() {
				
				path.attr( 'd', initialPath );
				isAnimating = false; 
			}, 300 );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// animate path
			path.animate( { 'path' : pathOpen }, 400, mina.easeinout, function() { isAnimating = false; } );
		}
		isOpen = !isOpen;
	}

	init();

})();


                                   
function validateForm() {    
    
  let name = document.forms["Formulaire_location"]["Nom_respo"].value;
  let client = document.forms["Formulaire_location"]["client"].value;
  let address = document.forms["Formulaire_location"]["addresse"].value;
  let contact = document.forms["Formulaire_location"]["contact"].value;
  let date = document.forms["Formulaire_location"]["date"].value;
  let city = document.forms["Formulaire_location"]["city"].value;
  
    
    
  if (name == "") { 
        alert("Veuillez entrer le nom du responsable de location.");
        return false;
      } else if (client == ""){
        alert("Veuillez selectionner le type de client.");
        return false;        
      } else if (address == ""){
        alert("Veuillez entrer votre addresse.");
        return false;        
      } else if (contact == ""){
        alert("Veuillez entrer votre contact.");
        return false;        
      } else if (date == ""){
        alert("Veuillez selectioner une date approximative.");
        return false;        
      } else if (city == null){
        alert("Veuillez selectionner un lieu de location.");
        return false;        
      } else{
            
            alert("Formulaire remplit et envoye avec succes.");
            genererformulairePdf.call(); 
            document.getElementById("Formulaire_location").reset();
    }             
             
    
}

function EnvoyerParCouriel() { 
    
      var name = document.forms["Formulaire_location"]["Nom_respo"].value;
      var client = document.forms["Formulaire_location"]["client"].value;
      var address = document.forms["Formulaire_location"]["addresse"].value;
      var contact = document.forms["Formulaire_location"]["contact"].value;
      var date = document.forms["Formulaire_location"]["date"].value;
      var city = document.forms["Formulaire_location"]["city"].value;
    
    
      var erBody = "Formulaire de Location AutoP Car\n\n" + "Nom du responsable de location : " + name + "\n " + "Date selectionee: " + date + "\n " + "Contact: " + address + "\n " + "Type de Client: " + client + "\n " + "\n " + "Location Choisie: " + city + "\n\n Merci d'avoir contacte AutoP Car."; 
      var erSub = name + " - Votre Formulaire AutoP Car";
    
      var erEmailURL = "mailto:" + erAgent + "&subject=" + erSub + "&body=" + erBody;

      if (name == "") {
        alert("Veuillez entrer le nom du responsable de location.");
        return false;
      } else if (client == ""){
        alert("Veuillez selectionner le type de client.");
        return false;        
      } else if (address == ""){
        alert("Veuillez entrer votre addresse.");
        return false;        
      } else if (contact == ""){
        alert("Veuillez entrer votre contact.");
        return false;        
      } else if (date == ""){
        alert("Veuillez selectioner une date approximative.");
        return false;        
      } else if (city == null){
        alert("Veuillez selectionner un lieu de location.");
        return false;        
      } else{
          ////TO BE COMPLETED HERE.
          
        alert("Formulaire remplit et envoye avec succes.");        
        document.getElementById("Formulaire_location").reset();
                    
    }    
    
}

function Abonement() { 

    let mail = document.forms["Form_abonement"]["mail_client"].value;
    if (mail == "") {
        alert("Veuillez entrer une addresse mail.");
        return false;
      }else{
          ////TO BE COMPLETED HERE.
          
        alert("Merci pour votre Abonement.");        
        document.getElementById("Form_abonement").reset();
                    
    }    
}
