function processform() {
    let fullName = document.getElementById("FullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("PhoneNumber").value.trim();
    let college = document.getElementById("CollegeName").value.trim();
    let course = document.getElementById("course").value;
    let eventName = document.getElementById("participatein").value;

    let genderOptions = document.getElementsByName("gender");
    let selectedGender = "";
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectedGender = genderOptions[i].value;
            break;
        }
    }

    if (fullName === "" || email === "" || phone === "" || college === "" || selectedGender === "") {
        alert("कृपया सभी जरूरी जानकारी भरें!");
        return;
    }

    let successBox = document.createElement("div");
    successBox.style.background = "#d4edda";
    successBox.style.color = "#155724";
    successBox.style.padding = "15px";
    successBox.style.marginTop = "20px";
    successBox.style.borderRadius = "5px";
    successBox.style.border = "1px solid #c3e6cb";
    
    successBox.innerHTML = `
        <h3>🎉 रजिस्ट्रेशन सफल रहा!</h3>
        <p><strong>नाम:</strong> ${fullName} (${selectedGender})</p>
        <p><strong>कॉलेज:</strong> ${college} - ${course}</p>
        <p><strong>इवेंट:</strong> ${eventName}</p>
        <p>आपके ईमेल <strong>${email}</strong> पर जल्द ही पास भेज दिया जाएगा।</p>
    `;

    let regSection = document.getElementById("RegistrationFormSection");
    
    let oldMessage = document.getElementById("success-msg");
    if (oldMessage) {
        oldMessage.remove();
    }
    
    successBox.id = "success-msg";
    regSection.appendChild(successBox);

    document.getElementById("festForm").reset();
}