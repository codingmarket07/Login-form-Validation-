var menu_items = document.querySelectorAll(".menu ul li");
var main_items = document.querySelectorAll(".main_item");

menu_items.forEach((menu_item, menu_index)=>{
	menu_item.addEventListener("click", ()=>{

		menu_items.forEach((menu_item)=>{
			menu_item.classList.remove("active");
		})

		menu_item.classList.add("active");

		main_items.forEach((main_item, main_index)=> {	
			if(main_index == menu_index){
				main_item.style.display = "block";
			}
			else{
				main_item.style.display = "none";
			}
		})

	})
})

/* Login Form Validation */
var input_fields = document.querySelectorAll(".input");
var error_msgs  = document.querySelectorAll(".error_msg");


function validate(event){
	var usernamevalue = document.getElementById("uname").value.trim();
	var passwordvalue = document.getElementById("password").value.trim();
	var username = document.getElementById("uname");
	var password = document.getElementById("password");

		if( usernamevalue == "" ){
			username.style.border = "1px solid #ff8471";
	    	error_message("un_err_msg", "This field cannot be empty");
	  	}
		else if( usernamevalue.length < 6 ){
			username.style.border = "1px solid #ff8471";
		    error_message("un_err_msg", "Please enter the valid username");
		}
		else{
			username.style.border = "1px solid #7b5be4";
		    error_message("un_err_msg", "");
		}

		if( passwordvalue == "" ){
			password.style.border = "1px solid #ff8471";
	    	error_message("pw_err_msg", "This field cannot be empty");
	  	}
		else if( passwordvalue.length < 6 ){
			password.style.border = "1px solid #ff8471";
		   	error_message("pw_err_msg", "Please enter the valid password");
		}
		else{
			password.style.border = "1px solid #7b5be4";
		    error_message("pw_err_msg", "");
		}

		if ( usernamevalue == "" || passwordvalue == "" || usernamevalue.length < 6 ||
			passwordvalue.length < 6) {
			return false;
		}
		else{
			console.log("final_else");
			return true;
		}
}

input_fields.forEach((input_item, input_index)=>{
	input_item.addEventListener("input", ()=>{	
		if(input_item.value.length == 0){
			input_item.style.border = "1px solid #ff8471";
			error_msgs.forEach((error_item, error_index)=>{
				if(input_index  == error_index){
					error_item.innerText = "This field cannot be empty";
				}
			})
		}	
		else{
			input_item.style.border = "1px solid #7b5be4";
			error_msgs.forEach((error_item, error_index)=>{
				if(input_index  == error_index){
					error_item.innerText = "";
				}
			})	
		}
	})
})

function error_message(id, message){
  document.getElementById(id).innerHTML = message;
}