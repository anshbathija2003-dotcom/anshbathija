const fs = require('fs');

const cssToAppend = `

/* Achievements Section */
.achievements-section {
  padding: 5rem 0 15rem 0; /* Align with sections */
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr); /* Forces exactly 4 rows layout */
  gap: 3rem;
  width: 100%;
  padding: 0 4rem;
}

.ach-card {
  position: relative;
  aspect-ratio: 1; /* Make it a complete square */
  border-radius: 15px; /* Simple rounded corner square */
  border: 5px solid #fff; /* White border acting as a polaroid edge */
  overflow: hidden;
  cursor: pointer;
  background: #111;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s;
}

.ach-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(185, 255, 56, 0.2);
}

.ach-inner-img, .ach-outer-img {
  position: absolute;
  top: 0; left: 0; 
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.ach-inner-img {
  z-index: 1;
}

.ach-outer-img {
  z-index: 2;
}

/* Hover disappears the display image! */
.ach-card:hover .ach-outer-img {
  opacity: 0;
}

.ach-title-bar {
  position: absolute;
  bottom: 0; left: 0; width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
  z-index: 3;
  text-align: left;
  pointer-events: none;
}
.ach-title-bar span {
  color: var(--color-neon);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}
.ach-title-bar h4 {
  font-size: 1.8rem;
  color: #fff;
  line-height: 1.1;
}

/* Achievements Modal Popup */
.ach-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.85); /* Heavy blackout */
  backdrop-filter: blur(15px); /* Premium blur effect */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: fadeInModal 0.3s ease;
}
@keyframes fadeInModal {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

.ach-modal-content {
  position: relative;
  width: 100%;
  max-width: 900px;
  min-height: 500px; /* Expansive box */
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 80px rgba(0,0,0,0.8);
}

.ach-modal-bg {
  position: absolute; top:0; left:0; width:100%; height:100%;
  z-index: 1;
}
.ach-modal-bg img {
  width: 100%; height: 100%; object-fit: cover;
}
.ach-modal-tint {
  position: absolute; top:0; left:0; width:100%; height:100%;
  background: rgba(6, 22, 18, 0.90); /* Dark green elegant tint */
}

.ach-modal-close {
  position: absolute;
  top: 20px; right: 20px;
  width: 50px; height: 50px;
  border-radius: 12px;
  background: var(--color-neon);
  color: #000;
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s;
}
.ach-modal-close:hover {
  transform: scale(1.1);
}

.ach-modal-text {
  position: relative;
  z-index: 2;
  padding: 4rem;
  text-align: center;
}
.ach-modal-text h3 {
  font-size: 3.5rem;
  color: var(--color-neon);
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}
.ach-modal-text p {
  font-size: 1.25rem;
  color: #fff;
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .achievements-grid { grid-template-columns: 1fr; }
  .ach-modal-text h3 { font-size: 2.5rem; }
  .ach-modal-text p { font-size: 1.1rem; }
}
`;

fs.appendFileSync('src/index.css', cssToAppend);
console.log('CSS appended successfully!');
