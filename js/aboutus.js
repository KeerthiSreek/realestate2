// Team member data
const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "https://via.placeholder.com/200" },
    { name: "Jane Smith", role: "Real Estate Agent", image: "https://via.placeholder.com/200" },
    { name: "Robert Brown", role: "Marketing Specialist", image: "https://via.placeholder.com/200" },
    { name: "Emily Johnson", role: "Customer Support", image: "https://via.placeholder.com/200" }
];

// Project data
const projects = [
    { name: "Luxury Apartment Complex", completed: "June 2023", location: "Downtown City Center", image: "https://via.placeholder.com/400x250" },
    { name: "Modern Family Homes", completed: "March 2023", location: "Suburban Area", image: "https://via.placeholder.com/400x250" },
    { name: "Commercial Office Space", completed: "January 2023", location: "Business District", image: "https://via.placeholder.com/400x250" }
];

// Client testimonials data
const testimonials = [
    { name: "John Smith", feedback: "Realestate helped us find our dream home! Their team was professional and knowledgeable.", image: "https://via.placeholder.com/80" },
    { name: "Mary Johnson", feedback: "I made a great investment through Realestate. Their advice was invaluable.", image: "https://via.placeholder.com/80" },
    { name: "Tom Brown", feedback: "As a first-time homebuyer, I was nervous, but Realestate guided me every step of the way.", image: "https://via.placeholder.com/80" }
];

// Function to render team members
function renderTeam() {
    const teamGrid = document.getElementById('team-grid');
    teamMembers.forEach(member => {
        const teamCard = `
            <div class="team-member">
                <img src="${member.image}" alt="${member.name}" class="team-image">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
            </div>
        `;
        teamGrid.innerHTML += teamCard;
    });
}

// Function to render projects
function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.name}" class="project-image">
                <h3 class="project-name">${project.name}</h3>
                <p>Completed: ${project.completed}</p>
                <p>Location: ${project.location}</p>
            </div>
        `;
        projectGrid.innerHTML += projectCard;
    });
}

// Function to render testimonials
function renderTestimonials() {
    const testimonialGrid = document.getElementById('testimonial-grid');
    testimonials.forEach(client => {
        const testimonialCard = `
            <div class="testimonial-card">
                <img src="${client.image}" alt="${client.name}" class="client-image">
                <p>"${client.feedback}"</p>
                <h4>- ${client.name}</h4>
            </div>
        `;
        testimonialGrid.innerHTML += testimonialCard;
    });
}

// Call the render functions on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderProjects();
    renderTestimonials();
});
