// Add Note
function addNote() {
  document.getElementById('noteModal').classList.add('show');
}

function saveNote() {
  const text = document.getElementById('noteText').value.trim();
  if (text === '') return alert('Please enter a note.');
  alert('Note saved: ' + text);
  document.getElementById('noteText').value = '';
  closeModal('noteModal');
}

// Add Follow Up
function addFollowUp() {
  document.getElementById('followUpModal').classList.add('show');
}

function saveFollowUp() {
  const by = document.getElementById('followUpBy').value.trim();
  const activity = document.getElementById('followUpActivity').value.trim();
  const note = document.getElementById('followUpNote').value.trim();

  if (!by || !activity || !note) return alert('Please fill in all fields.');

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const tbody = document.getElementById('followup-body');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${dateStr}</td>
    <td>${by}</td>
    <td>${activity}</td>
    <td>${note}</td>
  `;
  tbody.insertBefore(row, tbody.firstChild);

  document.getElementById('followUpBy').value = '';
  document.getElementById('followUpActivity').value = '';
  document.getElementById('followUpNote').value = '';
  closeModal('followUpModal');
}

// Close Modal
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('show');
  });
});

// Follow Up button
function handleFollowUp() {
  addFollowUp();
}

// Action items
function handleAction(action) {
  if (action === 'Add Note') {
    addNote();
  } else if (action === 'Mark as Resolved') {
    if (confirm('Mark this claim as resolved?')) {
      alert('Claim marked as resolved.');
    }
  } else if (action === 'Escalate Claim') {
    if (confirm('Escalate this claim?')) {
      alert('Claim has been escalated.');
    }
  } else if (action === 'Upload Documents') {
    alert('Upload feature coming soon.');
  } else if (action === 'Assign to User') {
    alert('Assign to user feature coming soon.');
  }
}

// Download doc
function downloadDoc(name) {
  alert('Downloading: ' + name);
}

// View all docs
function viewAllDocs() {
  alert('Viewing all documents.');
}
