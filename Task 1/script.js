document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");
  const nextBtn = document.getElementById("nextBtn");
  
  nextBtn.addEventListener("click", function () {
    // Collect data from current page
    const name  = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
    const role  = document.getElementById("role").value;
    // Store data in local storage
    localStorage.setItem("name", name);
     localStorage.setItem("email",email); 
	 localStorage.setItem("phone", phone);
     localStorage.setItem("role",role);
	 
	// Navigate to the next page
    window.location.href = "page2.html";
  });
});

// Additional script for page2.html and page3.html will be similar,
// collecting and saving data, and navigating to the next page.
