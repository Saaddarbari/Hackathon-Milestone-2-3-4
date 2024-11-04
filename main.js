var _a;
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // Get form data
    var name = document.getElementById("name").value;
    var aboutme = document.getElementById("aboutme").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var company = document.getElementById("company").value;
    var role = document.getElementById("role").value;
    var skills = document.getElementById("skills").value;
    var projects = document.getElementById("projects").value;
    // Set preview values
    document.getElementById("preview-about-me").innerText = "About \n".concat(aboutme);
    document.getElementById("preview-email").innerText = "Email: ".concat(email);
    document.getElementById("preview-phone").innerText = "Phone: ".concat(phone);
    document.getElementById("preview-address").innerText = "Address: ".concat(address);
    // Display experience, skills, and projects in right-preview section
    var rightPreview = document.querySelector(".right-preview");
    rightPreview.innerHTML = "\n    <h2>".concat(name, "</h2>\n      \n    <h3>Education</h3>\n        <p><strong>Institute:</strong> ").concat(school, "</p>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <h3>Experience</h3>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Role:</strong> ").concat(role, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        \n        <h3>Projects</h3>\n        <p>").concat(projects, "</p>\n    ");
    // Handle profile picture
    var profilePicInput = document.getElementById("photo");
    var previewPic = document.getElementById("preview-picture");
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            previewPic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Display the resume preview
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.style.display = "flex";
});
