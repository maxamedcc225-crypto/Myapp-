// Function loogu kala gooshiyo Tab-yada App-ka (Bottom Navigation)
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Ka bixi active tan hore
    navItems.forEach(nav => nav.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Kusoo dar active tan cusub
    item.classList.add('active');
    const target = item.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// Submit Form Handler
document.getElementById('appContactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('appUser').value;
  alert(`Mahadsanid ${name}! Fariintaada waa la helay.`);
  this.reset();
});
