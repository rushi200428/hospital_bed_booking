document.addEventListener("DOMContentLoaded", function() {
    console.log('DOMContentLoaded event fired');

    const patientForm = document.getElementById('patientForm');
    
    patientForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');

        const name = document.getElementById('name').value;
        const mobNumber = document.getElementById('mobNumber').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const admissionDate = new Date(document.getElementById('admissionDate').value).toDateString();
        const reasonForAdmission = document.getElementById('reasonForAdmission').value;
        const emergencyContact = document.getElementById('emergencyContact').value;

        console.log('Name:', name);
        console.log('Mobile Number:', mobNumber);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Email:', email);
        console.log('Address:', address);
        console.log('Admission Date:', admissionDate);
        console.log('Reason for Admission:', reasonForAdmission);
        console.log('Emergency Contact:', emergencyContact);

        try {
            const bedType = document.querySelector('.bed.selected').textContent.split(' ')[0];
            console.log('Bed Type:', bedType);
        } catch (error) {
            console.log('Error getting bed type:', error);
        }

        const days = Math.ceil((Date.now() - Date.parse(admissionDate)) / (1000 * 60 * 60 * 24));
        console.log('Days since admission:', days);

        const generalRate = 1000;
        const icuRate = 5000;
        
        let totalAmount;

        try {
            if (bedType === 'General') {
                totalAmount = days * generalRate;
            } else if (bedType === 'ICU') {
                totalAmount = days * icuRate;
            }
            console.log('Total Amount:', totalAmount);
        } catch (error) {
            console.log('Error calculating total amount:', error);
        }
        
        const invoice = {
            name,
            mobNumber,
            age,
            gender,
            email,
            address,
            admissionDate,
            reasonForAdmission,
            emergencyContact,
            bedType,
            days,
            totalAmount
        };

        console.log('Invoice:', invoice);

        try {
            localStorage.setItem('invoice', JSON.stringify(invoice));
        } catch (error) {
            console.log('Error saving invoice to local storage:', error);
        }
        
        window.location.href = 'bill.html';
    });
});
