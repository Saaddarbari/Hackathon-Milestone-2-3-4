document.getElementById("generateResume")?.addEventListener("click", () => {
    // Get form data
   
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const Fathername = (document.getElementById("Fathername") as HTMLInputElement).value.trim();
    const dOb = (document.getElementById("dOb") as HTMLInputElement).value.trim();
    const CNIC = (document.getElementById("CNIC") as HTMLInputElement).value.trim();
    const domicile = (document.getElementById("domicile") as HTMLInputElement).value.trim();
    const martial = (document.getElementById("martial") as HTMLInputElement).value.trim();
    const religion = (document.getElementById("religion") as HTMLInputElement).value.trim();
    const nationality = (document.getElementById("nationality") as HTMLInputElement).value.trim();
    const aboutme = (document.getElementById("aboutme") as HTMLTextAreaElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const address = (document.getElementById("address") as HTMLInputElement).value.trim();
    const language = (document.getElementById("language") as HTMLInputElement)?.value.trim();
    const education = (document.getElementById("education") as HTMLInputElement).value.trim();
    const experience = (document.getElementById("experience") as HTMLInputElement).value.trim();
    const role = (document.getElementById("role") as HTMLInputElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

    const languageArray = language ? language.split(/,|\n/).map(language => language.trim()).filter(language => language) : [];
    const languageListHTML = languageArray.length > 0
        ? `<ul>${languageArray.map(language => `<li>${language}</li>`).join('')}</ul>`
        : "No language added";
        
    // Update the left preview section
    const leftPreview = document.querySelector(".left-preview") as HTMLElement;
    leftPreview.innerHTML = `
        <img id="preview-picture" src="#" alt="Profile Picture" style="display: none;" />
        <h3>Information</h3>
        <hr>
        <p><strong>FatherName:</strong> ${Fathername || "Not Provided"}</p>
        <p><strong>DateOFBirth:</strong> ${dOb || "Not Provided"}</p>
        <p><strong>CNIC:</strong> ${CNIC || "Not Provided"}</p>
        <p><strong>Domicile:</strong> ${domicile || "Not Provided"}</p>
        <p><strong>Martial Status:</strong> ${martial || "Not Provided"}</p>
        <p><strong>Religion:</strong> ${religion || "Not Provided"}</p>
        <p><strong>Nationality:</strong> ${nationality || "Not Provided"}</p>
        <h3>Contact</h3>
        <hr>
        <p><strong><i class="fa-solid fa-phone "></i></strong> ${phone || "Not Provided"}</p>
        <p><strong><i class="fa-solid fa-envelope"></i></strong> ${email || "Not Provided"}</p>
        <p><strong><i class="fa-solid fa-location-dot"></i></strong> ${address || "Not Provided"}</p>
        <h3>Language</h3>
        <hr>
        <p><strong></strong> ${languageListHTML || "Not Provided"}</p>
    `;

    // Handle profile picture
    const profilePicInput = document.getElementById("photo") as HTMLInputElement;
    const previewPic = document.getElementById("preview-picture") as HTMLImageElement;
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                previewPic.src = e.target.result as string;
                previewPic.style.display = "block"; // Ensure the image is visible
            }
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        previewPic.style.display = "none";
    }

    // Split the skills string into an array based on commas or newlines, then create list items
    const skillsArray = skills ? skills.split(/,|\n/).map(skill => skill.trim()).filter(skill => skill) : [];
    const skillsListHTML = skillsArray.length > 0
        ? `<ul>${skillsArray.map(skill => `<li>${skill}</li>`).join('')}</ul>`
        : "No skills added";

    

    // Update the right preview section
    const rightPreview = document.querySelector(".right-preview") as HTMLElement;
    rightPreview.innerHTML = `
       <div id="Name">
        <h2>${name || "Name Not Provided"}</h2>
        <p><strong></strong> ${role || "Not Provided"}</p>
       </div>
        
        </div>
        <h3>About me</h3>
        <hr>
        <p><strong></strong> ${aboutme || "Not Provided"}</p>
        
        
        <h3>Experience</h3>
        <hr>
        <pre><strong></strong> ${experience || "Not Provided"}</pre>
        
        <h3>Education</h3>
        <hr>
        <pre><strong></strong> ${education || "Not Provided"}</pre>

        <h3>Skills</h3>
        <hr>
        <p>${skillsListHTML || "No skills added"}</p>
        
        
    `;

    // Display the resume preview
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    resumePreview.style.display = "flex";
    
});

// Declare html2pdf as a global variable to avoid TypeScript errors
declare const html2pdf: any;

document.getElementById("downloadResume")?.addEventListener("click", () => {
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;

    // Check if resume preview exists
    if (!resumePreview) {
        alert("Please generate the resume before downloading.");
        return;
    }

    // Configure PDF options
    const options = {
        margin:       0.5,
        filename:     `${(document.getElementById("name") as HTMLInputElement).value || 'resume'}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Generate and save the PDF with 'html2pdf' bypassing strict typing
    (html2pdf as any)().set(options).from(resumePreview).save();
});
