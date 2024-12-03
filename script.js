document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards");
  const cardBottoms = [
      document.getElementById("cardBottom1"),
      document.getElementById("cardBottom2"),
      document.getElementById("cardBottom3"),
  ];
  const totalElement = document.querySelector(".total");

  const totals = [10, 18, 24];

  function resetCards() {
      cardBottoms.forEach((bottom, idx) => {
          bottom.style.display = "none";
          cards[idx].style.backgroundColor = "";
          cards[idx].style.border = ""; 
      });
  }

  function selectCard(index) {
      resetCards(); 
      cardBottoms[index].style.display = "flex"; 
      cards[index].style.backgroundColor = "#fff6f9";
      cards[index].style.border = "2px solid #f56a93"; 
      totalElement.textContent = `Total : $${totals[index]}.00 USD`; 
  }

  selectCard(1);

  cards.forEach((card, index) => {
      card.addEventListener("click", () => {
          selectCard(index);
      });
  });
});

