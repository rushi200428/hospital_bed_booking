document.addEventListener("DOMContentLoaded", function() {
    const billData = JSON.parse(localStorage.getItem('invoice'));
    
    document.getElementById('name').textContent = billData.name;
    document.getElementById('mobNumber').textContent = billData.mobNumber;
    document.getElementById('age').textContent = billData.age;
    document.getElementById('gender').textContent = billData.gender;
    document.getElementById('email').textContent = billData.email;
    document.getElementById('address').textContent = billData.address;
    document.getElementById('admissionDate').textContent = billData.admissionDate;
    document.getElementById('reasonForAdmission').textContent = billData.reasonForAdmission;
    document.getElementById('emergencyContact').textContent = billData.emergencyContact;
    document.getElementById('bedType').textContent = billData.bedType;
    document.getElementById('days').textContent = billData.days;
    document.getElementById('totalAmount').textContent = billData.totalAmount;
    document.getElementById('totalAmountPayable').textContent = billData.totalAmount;
});
