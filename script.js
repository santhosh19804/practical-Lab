// Enrollment button functionality
document.querySelectorAll(".enroll-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("You have successfully enrolled in this course!");
  });
});

// Category filter functionality (basic demo)
document.querySelectorAll(".categories button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.toLowerCase();
    document.querySelectorAll(".course-card").forEach(card => {
      if (card.querySelector("h3").textContent.toLowerCase().includes(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
