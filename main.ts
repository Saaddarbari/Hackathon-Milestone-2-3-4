document.getElementById("generateResume")?.addEventListener("click", () => {
    // Get form data

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const aboutme = (document.getElementById("aboutme") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const role = (document.getElementById("role") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const projects = (document.getElementById("projects") as HTMLInputElement).value;

    // Set preview values
    (document.getElementById("preview-about-me") as HTMLElement).innerText =`About \n${aboutme}`;
    (document.getElementById("preview-email") as HTMLElement).innerText = `Email: ${email}`;
    (document.getElementById("preview-phone") as HTMLElement).innerText = `Phone: ${phone}`;
    (document.getElementById("preview-address") as HTMLElement).innerText = `Address: ${address}`;
    
    // Display experience, skills, and projects in right-preview section
    const rightPreview = document.querySelector(".right-preview") as HTMLElement;
    rightPreview.innerHTML = `
    <h2>${name}</h2>
      
    <h3>Education</h3>
        <p><strong>Institute:</strong> ${school}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <h3>Experience</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
        
        <h3>Projects</h3>
        <p>${projects}</p>
    `;

    // Handle profile picture
    const profilePicInput = document.getElementById("photo") as HTMLInputElement;
    const previewPic = document.getElementById("preview-picture") as HTMLImageElement;
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewPic.src = e.target?.result as string;
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Display the resume preview
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    resumePreview.style.display = "flex";
});
