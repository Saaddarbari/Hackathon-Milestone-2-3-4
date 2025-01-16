var _a, _b;
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // Get form data
    var _a;
    var name = document.getElementById("name").value.trim();
    var Fathername = document.getElementById("Fathername").value.trim();
    var dOb = document.getElementById("dOb").value.trim();
    var CNIC = document.getElementById("CNIC").value.trim();
    var domicile = document.getElementById("domicile").value.trim();
    var martial = document.getElementById("martial").value.trim();
    var religion = document.getElementById("religion").value.trim();
    var nationality = document.getElementById("nationality").value.trim();
    var aboutme = document.getElementById("aboutme").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var language = (_a = document.getElementById("language")) === null || _a === void 0 ? void 0 : _a.value.trim();
    var education = document.getElementById("education").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var role = document.getElementById("role").value.trim();
    var skills = document.getElementById("skills").value.trim();
    var languageArray = language ? language.split(/,|\n/).map(function (language) { return language.trim(); }).filter(function (language) { return language; }) : [];
    var languageListHTML = languageArray.length > 0
        ? "<ul>".concat(languageArray.map(function (language) { return "<li>".concat(language, "</li>"); }).join(''), "</ul>")
        : "No language added";
    // Update the left preview section
    var leftPreview = document.querySelector(".left-preview");
    leftPreview.innerHTML = "\n        <img id=\"preview-picture\" src=\"#\" alt=\"Profile Picture\" style=\"display: none;\" />\n        <h3>Information</h3>\n        <hr>\n        <p><strong>Father/Husband Name:</strong> ".concat(Fathername || "Not Provided", "</p>\n        <p><strong>DateOFBirth:</strong> ").concat(dOb || "Not Provided", "</p>\n        <p><strong>CNIC:</strong> ").concat(CNIC || "Not Provided", "</p>\n        <p><strong>Domicile:</strong> ").concat(domicile || "Not Provided", "</p>\n        <p><strong>Martial Status:</strong> ").concat(martial || "Not Provided", "</p>\n        <p><strong>Religion:</strong> ").concat(religion || "Not Provided", "</p>\n        <p><strong>Nationality:</strong> ").concat(nationality || "Not Provided", "</p>\n        <h3>Contact</h3>\n        <hr>\n        <p><strong><i class=\"fa-solid fa-phone \"></i></strong> ").concat(phone || "Not Provided", "</p>\n        <p><strong><i class=\"fa-solid fa-envelope\"></i></strong> ").concat(email || "Not Provided", "</p>\n        <p><strong><i class=\"fa-solid fa-location-dot\"></i></strong> ").concat(address || "Not Provided", "</p>\n        <h3>Language</h3>\n        <hr>\n        <p><strong></strong> ").concat(languageListHTML || "Not Provided", "</p>\n        \n    ");
    // Handle profile picture
    var profilePicInput = document.getElementById("photo");
    var previewPic = document.getElementById("preview-picture");
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                previewPic.src = e.target.result;
                previewPic.style.display = "block"; // Ensure the image is visible
            }
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        previewPic.style.display = "none";
    }
    // Split the skills string into an array based on commas or newlines, then create list items
    var skillsArray = skills ? skills.split(/,|\n/).map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; }) : [];
    var skillsListHTML = skillsArray.length > 0
        ? "<ul>".concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>")
        : "No skills added";
    // Update the right preview section
    var rightPreview = document.querySelector(".right-preview");
    rightPreview.innerHTML = "\n       <div id=\"Name\">\n        <h2>".concat(name || "Name Not Provided", "</h2>\n        <p><strong></strong> ").concat(role || "Not Provided", "</p>\n       </div>\n        \n        </div>\n        <h3>About me</h3>\n        <hr>\n        <p><strong></strong> ").concat(aboutme || "Not Provided", "</p>\n        \n        \n        <h3>Experience</h3>\n        <hr>\n        <pre><strong></strong> ").concat(experience || "Not Provided", "</pre>\n        \n        <h3>Education</h3>\n        <hr>\n        <pre><strong></strong> ").concat(education || "Not Provided", "</pre>\n\n        <h3>Skills</h3>\n        <hr>\n        <p>").concat(skillsListHTML || "No skills added", "</p>\n        \n        \n    ");
    // Display the resume preview
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.style.display = "flex";
});
(_b = document.getElementById("downloadResume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var resumePreview = document.getElementById("resumePreview");
    // Check if resume preview exists
    if (!resumePreview) {
        alert("Please generate the resume before downloading.");
        return;
    }
    // Configure PDF options
    var options = {
        margin: 0.5,
        filename: "".concat(document.getElementById("name").value || 'resume', ".pdf"),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    // Generate and save the PDF with 'html2pdf' bypassing strict typing
    html2pdf().set(options).from(resumePreview).save();
});
