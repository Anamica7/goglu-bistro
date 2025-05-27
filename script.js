document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Girlie Pop Bistro! 💕");
  
    // === Carousel Setup ===
    let currentIndex = 0;
    const carousel = document.getElementById('menuCarousel');
    const totalItems = carousel.children.length;
  
    function moveCarousel(direction = 1) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = totalItems - 1;
      if (currentIndex >= totalItems) currentIndex = 0;
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(() => moveCarousel(1), 3000);
  
   

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('menuSearch');
    const items = document.querySelectorAll('.carousel-item');
  
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
  
      items.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        const desc = item.querySelector('p').textContent.toLowerCase();
  
        if (name.includes(query) || desc.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('menuSearch');
    const suggestionsBox = document.getElementById('suggestions');
  
    // Your menu items
    const menuItems = [
      "Goglu Special Burger",
      "Fresh Bowl",
      "Slay-ghetti",
      "Drama Ramen",
      "Sugar Daddy Cheesecake",
      "Goglu Glow"
    ];
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      suggestionsBox.innerHTML = "";
  
      if (query === "") {
        suggestionsBox.style.display = "none";
        return;
      }
  
      const matched = menuItems.filter(item => item.toLowerCase().includes(query));
  
      if (matched.length > 0) {
        suggestionsBox.style.display = "block";
        matched.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.onclick = () => {
            searchInput.value = item;
            suggestionsBox.style.display = "none";
          };
          suggestionsBox.appendChild(li);
        });
      } else {
        suggestionsBox.style.display = "none";
      }
    });
  
    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = "none";
      }
    });
  });
  
  