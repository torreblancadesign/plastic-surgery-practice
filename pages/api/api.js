export default function handler(req, res) {
  res.status(200).json({
    about: "We are a professional and modern plastic surgery practice...",
    services: ["Rhinoplasty", "Breast augmentation", "Liposuction"],
    doctorProfile: "Dr. John Doe is a board-certified plastic surgeon...",
    location: "1234 Surgery Lane, Beverly Hills, CA 90210",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  });
}
