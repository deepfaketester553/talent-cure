document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const context = urlParams.get("context") || "general";
  const testimonialDiv = document.getElementById("testimonial-content");

  fetch("assets/data/testimonials.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredTestimonials = data.filter(
        (testimonial) => testimonial.context === context || context === "general"
      );

      filteredTestimonials.forEach((testimonial) => {
        const testimonialElement = document.createElement("div");
        testimonialElement.className = "p-4 bg-white rounded shadow mb-4";
        testimonialElement.innerHTML = `
          <p class="text-gray-700">"${testimonial.quote}"</p>
          <p class="text-gray-500 mt-2 text-right">- ${testimonial.author}</p>
        `;
        testimonialDiv.appendChild(testimonialElement);
      });
    });
});