function toggleMenu() {
    document.querySelector(".align").classList.toggle("active");
}
// 
const words = ["Engage 🤩", "Optimize 😎", "$$$ 🤑"];
let index = 0;

function changeWord() {
    let wordElement = document.getElementById("changingWord");
    wordElement.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        wordElement.textContent = words[index];
        wordElement.style.opacity = 1; // Fade in effect
        index = (index + 1) % words.length;
    }, 500); // Wait for fade out before changing text
}


setInterval(changeWord, 2000); // Change word every 2 seconds
// 
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("logo-slider");

    if (window.innerWidth <= 768) {  
        const duplicate = slider.innerHTML;  
        slider.innerHTML += duplicate; // Duplicate logos for infinite scrolling effect
    }
});






// 
document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const featureImage = document.querySelector(".feature-image img");

    options.forEach(option => {
        option.addEventListener("click", function () {
            // Remove 'active' class from all options
            options.forEach(opt => opt.classList.remove("active"));

            // Add 'active' class to the clicked option
            this.classList.add("active");

            // Update image only if it exists
            if (featureImage) {
                featureImage.src = this.getAttribute("data-image");
            }
        });
    });
});
// 
const testimonials = [
    {
        text: "“Beautifully showcases our best videos...”",
        image: "asset/customer1.png",
        description: `"Media+ has created our own 'UNI-FLIX.' It’s exactly the OTT platform I’ve been looking for. It beautifully showcases relevant videos for students, sorted by courses, locations, universities, and more—all in a matter of minutes. Plus, I can create the sections I want for our audience."`,
        author: "Girish C. Ballolla",
        role: "Founder & CEO, Gen Next Education, Inc."
    },
    {
        text: "“A tool that can make videos viral with AI...”",
        image: "asset/customer2.png",
        description: `"For marketers & go-to-market teams, this is a great portal. It makes managing videos with AI easy and feels like a part of our own website."`,
        author: "Sarah J.",
        role: "Marketing Director, Tech Solutions"
    },
    {
        text: " “Integrates our media with HubSpot CRM...”",
        image: "asset/customer3.png",
        description: `"Media+ seamlessly integrates our media with HubSpot CRM, significantly boosting our lead generation pipeline. The auto-tagging feature delivers a personalized video experience for every viewer."`,
        author: "Tami Strand",
        role: "Senior Director of Marketing, Azuga"
    },
    {
        text: " “A tool that makes it easy to manage our videos...”",
        image: "asset/customer4.png",
        description: `"We do webinars twice a week. Media+ saves us time by allowing seamless integration with Hubilo without re-uploading our recordings."`,
        author: "Jule Hiller",
        role: "Senior Marketing Manager, EQS Group"
    }
];

let currentIndex = 0;

function changeTestimonial(index) {
    if (index === currentIndex) return; // Prevent unnecessary updates

    currentIndex = index;

    const textElement = document.getElementById("testimonial-text");
    const imageElement = document.getElementById("testimonial-image");
    const descriptionElement = document.getElementById("testimonial-description");
    const authorElement = document.getElementById("testimonial-author");
    const roleElement = document.getElementById("testimonial-role");
    const dots = document.querySelectorAll(".dot");

    // Fade-out effect
    textElement.style.opacity = "0";
    imageElement.style.opacity = "0";
    descriptionElement.style.opacity = "0";
    authorElement.style.opacity = "0";
    roleElement.style.opacity = "0";

    setTimeout(() => {
        // Update content
        textElement.innerHTML = testimonials[index].text;
        imageElement.src = testimonials[index].image;
        descriptionElement.innerHTML = testimonials[index].description;
        authorElement.innerHTML = testimonials[index].author;
        roleElement.innerHTML = testimonials[index].role;

        // Fade-in effect
        textElement.style.opacity = "1";
        imageElement.style.opacity = "1";
        descriptionElement.style.opacity = "1";
        authorElement.style.opacity = "1";
        roleElement.style.opacity = "1";
    }, 300);

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Auto-change testimonials every 5 seconds
setInterval(() => {
    let nextIndex = (currentIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
}, 5000);
// 
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".withmedia video");

    window.addEventListener("scroll", () => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) {
            video.pause();
        }
    });
});
// 
document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", function () {
            this.classList.toggle("open");
        });
    });
});
// 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual submission

        // Form validation
        const email = form.querySelector("input[type='email']").value;
        const firstName = form.querySelector("input[placeholder='John']").value;
        const lastName = form.querySelector("input[placeholder='Smith']").value;
        const companyName = form.querySelector("input[placeholder='Business Company Name']").value;
        const phone = form.querySelector("input[type='tel']").value;
        const termsChecked = form.querySelector("#terms").checked;

        if (!email || !firstName || !lastName || !companyName || !phone || !termsChecked) {
            alert("Please fill in all required fields and agree to the terms.");
            return;
        }

        alert("Thank you! Your request has been submitted.");
    });
});
// 
document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("subscribeBtn");

    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            const emailInput = document.querySelector(".email-input input").value;

            if (emailInput === "") {
                alert("Please enter a valid email.");
                return;
            }

            alert(`Thank you for subscribing with: ${emailInput}`);
        });
    }
});
