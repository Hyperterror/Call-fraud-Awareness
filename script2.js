const scriptURL = "Yhttps://script.google.com/macros/s/AKfycbwVX1HsFUlcGzFw-QIGFAQDQvKWtT_FtTa808g6_qliYHqVpAX_lMSC1n5FTL124NpdxQ/exec"; // <-- Replace with your actual Apps Script Web App URL
const form = document.getElementById("complaint-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default form action

  submitButton.innerHTML = "Submitting...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const formProps = Object.fromEntries(formData); // Convert FormData to JSON object

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formProps),
    mode: "no-cors" // IMPORTANT for Google Apps Script to avoid CORS error
  })
  .then(() => {
    // Cannot check response.ok in no-cors, so assume success
    alert("Submitted Successfully!");
    form.reset();
    submitButton.innerHTML = "Submit Complaint";
    submitButton.disabled = false;
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("Submission failed! Please try again later.");
    submitButton.innerHTML = "Submit Complaint";
    submitButton.disabled = false;
  });
});
