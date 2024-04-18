document.addEventListener("DOMContentLoaded", function() {
    populateBeds('generalBeds', 'General');
    populateBeds('icuBeds', 'ICU');
});

function populateBeds(containerId, type) {
    const container = document.getElementById(containerId);
    
    for (let i = 1; i <= 10; i++) {
        const bed = document.createElement('div');
        bed.className = 'bed';
        bed.textContent = `${type} ${i}`;
        bed.addEventListener('click', function() {
            selectBed(this);
        });
        container.appendChild(bed);
    }
}

function selectBed(selectedBed) {
    const beds = document.querySelectorAll('.bed');
    
    beds.forEach(bed => {
        bed.classList.remove('selected');  // Remove selected class from all beds
    });
    
    selectedBed.classList.add('selected');  // Add selected class to clicked bed
    document.getElementById('checkoutButton').classList.remove('hidden');
}

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}
