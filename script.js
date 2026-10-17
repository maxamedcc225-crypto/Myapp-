document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Mahadsanid ${name}! Fariintaada waa la helay.`);
  this.reset();
});
