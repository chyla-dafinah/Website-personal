function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
  
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove("hidden");
    }
  }
  