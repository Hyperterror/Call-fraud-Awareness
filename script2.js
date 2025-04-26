const scriptURL = "https://script.google.com/macros/s/AKfycbwz5dlBhvMq5VuMiRQq6EyaozlnzziGuviqXddfCAL_OvlRil8PyI1usin8z_tEvIt8Iw/exec"; // Fixed the URL
const form = document.getElementById("complaint-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitButton.innerHTML = "Submitting...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const formProps = Object.fromEntries(formData);

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formProps),
    mode: "no-cors"
  })
  .then(() => {
    alert("Submitted Successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error);
    alert("Submission failed! Please try again later.");
  })
  .finally(() => {
    submitButton.innerHTML = "Submit Complaint";
    submitButton.disabled = false;
  });
});
