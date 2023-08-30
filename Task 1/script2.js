document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");
  const Submit = document.getElementById("Submit");
/*const back=document.getElementById("back");
back.addEventListener('click',function previous(){
	window.location.href = "index.html";
  });*/
 Submit.addEventListener("click", function Submit() {
    // Collect data from current page
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
	const q4 = document.getElementById("q4").value;
	const q5 = document.getElementById("q5").value;
// Store data in local storage
    localStorage.setItem("q1",q1);
    localStorage.setItem("q2",q2);
	localStorage.setItem("q3",q3);
	localStorage.setItem("q4",q4);
	localStorage.setItem("q5",q5);
    // Navigate to the next page
    alert("Submitted successfully");

 });
});


