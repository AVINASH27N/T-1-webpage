// Categorized train data (sample subset; you can expand with your full list)
const trainData = {
  "Vande Bharat Express": [
    "New Delhi – Varanasi",
    "Chennai – Mysuru",
    "Mumbai – Gandhinagar",
    "Secunderabad – Visakhapatnam"
  ],
  "Rajdhani Express": [
    "Howrah Rajdhani",
    "Mumbai Rajdhani",
    "Chennai Rajdhani",
    "Patna Rajdhani"
  ],
  "Shatabdi Express": [
    "Bhopal Shatabdi",
    "Chennai Shatabdi",
    "Lucknow Shatabdi",
    "Amritsar Shatabdi"
  ],
  "Duronto Express": [
    "Mumbai Duronto",
    "Chennai Duronto",
    "Sealdah Duronto",
    "Ernakulam Duronto"
  ],
  "Tejas Express": [
    "Mumbai – Goa",
    "Lucknow – New Delhi",
    "Ahmedabad – Mumbai"
  ],
  "Humsafar Express": [
    "Chennai Humsafar",
    "Bengaluru Humsafar",
    "Tirunelveli Humsafar",
    "Kochuveli Humsafar"
  ]
};

// Representative images for each category
const trainImages = {
  "Vande Bharat Express": "images/image copy.png",
  "Rajdhani Express": "images/image copy 2.png",
  "Shatabdi Express": "images/image copy 3.png",
  "Duronto Express": "images/image copy 4.png",
  "Tejas Express": "images/image copy 5.png",
  "Humsafar Express": "images/image copy 6.png"
};

const container = document.getElementById("trainContainer");

Object.keys(trainData).forEach(category => {
  const section = document.createElement("div");
  section.className = "category";
  section.innerHTML = `<h3>${category}</h3>`;

  trainData[category].forEach(route => {
    const card = document.createElement("div");
    card.className = "train-card";
    card.innerHTML = `
      <img src="${trainImages[category]}" alt="${category}">
      <div class="train-details">
        <h4>${route}</h4>
        <p>${category}</p>
      </div>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
});
