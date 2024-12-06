const eventsContainer = document.getElementById('events-container');
const loadingText = document.getElementById('loading-text');
const featuresContainer = document.querySelector('.features-container');
const testimonialsContainer = document.querySelector('.testimonials-container');

const DEFAULT_EVENT_IMAGE = "https://via.placeholder.com/300?text=Event";
const featuresList = [
  { id: 1, icon: '📅', title: 'Easy Scheduling', details: 'Effortlessly plan and schedule your events.' },
  { id: 2, icon: '👥', title: 'Attendee Management', details: 'Manage RSVPs and invitations easily.' },
  { id: 3, icon: '📍', title: 'Venue Coordination', details: 'Find the perfect venue for your events.' },
  { id: 4, icon: '📊', title: 'Analytics & Reporting', details: 'Gain insights with detailed analytics.' },
];

const testimonials = [
  { name: 'Jag Jeevan', role: 'Event Planner', quote: 'This platform has revolutionized event management!' },
  { name: 'Aditya Tiwari', role: 'Organizer', quote: 'Powerful features make it our go-to solution!' },
  { name: 'Hujaifa Ahmed', role: 'Finance Manager', quote: 'An essential tool for wedding planning!' },
];

// Fetch Events Data
function fetchEvents() {
  setTimeout(() => {
    const sampleEvents = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: `Event ${i + 1}`,
      location: `Location ${i + 1}`,
      date: new Date().toLocaleDateString(),
      image: DEFAULT_EVENT_IMAGE,
    }));
    renderEvents(sampleEvents);
  }, 1000);
}

// Render Events
function renderEvents(events) {
  loadingText.style.display = 'none';
  events.forEach((event) => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.name}" style="width: 100%; border-radius: 10px 10px 0 0;">
      <h3>${event.name}</h3>
      <p>${event.location}</p>
      <p>${event.date}</p>
      <button>View More</button>
    `;
    eventsContainer.appendChild(eventCard);
  });
}

// Render Features
function renderFeatures() {
  featuresList.forEach((feature) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `
      <h3>${feature.icon} ${feature.title}</h3>
      <p>${feature.details}</p>
    `;
    featuresContainer.appendChild(featureCard);
  });
}

// Render Testimonials
function renderTestimonials() {
  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <p>"${testimonial.quote}"</p>
      <h4>${testimonial.name}</h4>
      <p>${testimonial.role}</p>
    `;
    testimonialsContainer.appendChild(testimonialCard);
  });
}

// View All Events Handler
function viewAllEvents() {
  alert('View All Events');
}

// Initialize Page
function initialize() {
  fetchEvents();
  renderFeatures();
  renderTestimonials();
}

initialize();


