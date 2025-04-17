// Elements
const addFundsBtn = document.getElementById('addFundsBtn');
const fundsModal = document.getElementById('fundsModal');
const closeModal = document.getElementById('closeModal');
const submitFunds = document.getElementById('submitFunds');
const fundsInput = document.getElementById('fundsInput');
const balanceField = document.getElementById('balanceField');

// Show modal
addFundsBtn.addEventListener('click', () => {
  fundsInput.value = '';
  fundsModal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
  fundsModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === fundsModal) fundsModal.style.display = 'none';
});

// Submit funds
submitFunds.addEventListener('click', () => {
  const amount = parseFloat(fundsInput.value);
  if (!isNaN(amount) && amount > 0) {
    const currentText = balanceField.value;
    const currentAmount = parseFloat(currentText.replace(/[^0-9\.]/g, ''));
    const newBalance = (currentAmount + amount).toFixed(2);
    balanceField.value = `Available Balance: $${newBalance}`;
  }
  fundsModal.style.display = 'none';
});

const buildingSelect = document.getElementById('building');

buildingSelect.addEventListener('change', () => {
  const selectedBuilding = buildingSelect.value;
  localStorage.setItem('selectedBuilding', selectedBuilding);
});