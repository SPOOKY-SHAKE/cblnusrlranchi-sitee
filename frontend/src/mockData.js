// Helper function to get image from localStorage or use default
const getImg = (category, index, defaultImg) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`custom_${category}_${index}`);
    return stored || defaultImg;
  }
  return defaultImg;
};

const defaultServicesImages = [
"https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhdyUyMG9mZmljZXxlbnwwfHx8fDE3NzQ0MjEyODR8MA&ixlib=rb-4.1.0&q=85",
"https://images.pexels.com/photos/7841431/pexels-photo-7841431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.unsplash.com/photo-1534062310633-a22d6b04c01c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGxhdyUyMG9mZmljZXxlbnwwfHx8fDE3NzQ0MjEyODR8MA&ixlib=rb-4.1.0&q=85"];


const defaultBlogImages = [
"https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhdyUyMG9mZmljZXxlbnwwfHx8fDE3NzQ0MjEyODR8MA&ixlib=rb-4.1.0&q=85",
"https://images.pexels.com/photos/7841431/pexels-photo-7841431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.unsplash.com/photo-1534062310633-a22d6b04c01c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGxhdyUyMG9mZmljZXxlbnwwfHx8fDE3NzQ0MjEyODR8MA&ixlib=rb-4.1.0&q=85",
"https://images.unsplash.com/photo-1658249682487-882436e01650?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85"];


const defaultTeamImages = [
"https://images.unsplash.com/photo-1658249682487-882436e01650?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85",
"https://images.unsplash.com/photo-1658249682512-1bb162538ba9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85",
"https://images.unsplash.com/photo-1764592620941-a5bcaa79ce92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85"];


const defaultTestimonialImages = [
"https://images.unsplash.com/photo-1658249682487-882436e01650?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85",
"https://images.unsplash.com/photo-1658249682512-1bb162538ba9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJ8ZW58MHx8fHwxNzc0NDIxMjg4fDA&ixlib=rb-4.1.0&q=85"];


export const servicesData = [
{
  id: 1,
  title: "Research & Development",
  description: "Expert legal research and analysis for strategic business decisions and regulatory compliance.",
  image: getImg('services', 0, defaultServicesImages[0])
},
{
  id: 2,
  title: "Tailored Updates",
  description: "Weekly updates with our newsletter",
  image: getImg('services', 1, defaultServicesImages[1])
},
{
  id: 3,
  title: "Professional Consulting",
  description: "Foundation on reliability and ethical practices on professional services in business law, regulatory audit and taxation.",
  image: getImg('services', 2, defaultServicesImages[2])
},
{
  id: 4,
  title: "Industry Report",
  description: "Thorough audits and reports for ensuring your business adheres to all regulatory requirements and standards prevailing in the market trend.",
  image: getImg('services', 3, defaultServicesImages[3])
},
{
  id: 5,
  title: "Legal Insights",
  description: "Valuable insights into business law to keep you updated on pivotal regulations and industry trends.",
  image: getImg('services', 4, defaultServicesImages[4])
}];


export const testimonialsData = [
{
  id: 1,
  name: "John doe",
  company: "Testimonial Author Company",
  rating: 5,
  text: "The Center for Business Law has been instrumental in helping us navigate complex legal landscapes, offering sound advice and invaluable resources that have strengthened our business.",
  image: getImg('testimonials', 0, defaultTestimonialImages[0])
},
{
  id: 2,
  name: "shaan",
  company: "Testimonial Author Company",
  rating: 5,
  text: "Their team is knowledgeable and responsive, providing excellent support that has made a significant difference in our compliance and understanding business law.",
  image: getImg('testimonials', 1, defaultTestimonialImages[1])
}];


export const statsData = [
{
  label: "PUBLICATION WITH US",
  value: "500+"
},
{
  label: "",
  value: ""
},
{
  label: "",
  value: ""
},
{
  label: "OUR TEAM",
  value: "45+"
}];


export const blogData = [
{
  id: 1,
  title: "AI Adoption and Board Oversight in 2026",
  excerpt: "Explore the implications of AI maturation in business, required expertise in boardrooms, and ethical accountability in risk management.",
  date: "March 15, 2026",
  author: "Sarah Johnson",
  category: "Corporate Governance",
  image: getImg('blog', 0, defaultBlogImages[0]),
  content: "As artificial intelligence continues to mature and integrate into business operations..."
},
{
  id: 2,
  title: "Data Privacy and Cybersecurity Compliance Updates",
  excerpt: "Highlight the fragmented landscape of data privacy laws, AI-driven security threats, and expanding regulatory obligations for 2026.",
  date: "March 10, 2026",
  author: "Michael Chen",
  category: "Compliance",
  image: getImg('blog', 1, defaultBlogImages[1]),
  content: "The data privacy landscape continues to evolve rapidly..."
},
{
  id: 3,
  title: "International Trade and Supply Chain Resilience",
  excerpt: "Address updates on tariffs, bilateral trade deals, M&A diversification strategies, and geopolitical risks reshaping global business.",
  date: "March 5, 2026",
  author: "David Martinez",
  category: "International Law",
  image: getImg('blog', 2, defaultBlogImages[2]),
  content: "Global trade dynamics are shifting rapidly in response to new regulations..."
},
{
  id: 4,
  title: "ESG Implementation and Corporate Responsibility",
  excerpt: "Analyze shifts to measurable ESG implementation, oversight of sustainability reporting, and impacts from evolving stakeholder expectations.",
  date: "February 28, 2026",
  author: "Emily Roberts",
  category: "Sustainability",
  image: getImg('blog', 3, defaultBlogImages[3]),
  content: "Environmental, Social, and Governance considerations are no longer optional..."
},
{
  id: 5,
  title: "Contract Management Best Practices for 2026",
  excerpt: "Essential strategies for managing business contracts, avoiding disputes, and ensuring compliance with evolving legal standards.",
  date: "February 20, 2026",
  author: "James Wilson",
  category: "Contract Law",
  image: getImg('blog', 4, defaultBlogImages[4]),
  content: "Effective contract management is crucial for business success..."
},
{
  id: 6,
  title: "Employment Law Updates and Remote Work Policies",
  excerpt: "Cover NLRB changes, employee protections, benefits compliance, and hybrid work legal considerations for modern businesses.",
  date: "February 15, 2026",
  author: "Lisa Anderson",
  category: "Employment Law",
  image: getImg('blog', 5, defaultBlogImages[5]),
  content: "The workplace landscape has transformed dramatically..."
}];


export const teamData = [
{
  id: 1,
  name: "Prof. Dr. Hiral Mehta",
  position: "Faculty Convenor ",
  bio: "With over 25 years of experience in corporate law, she guide and lead our student body with vision and expertise.",
  image: getImg('team', 0, defaultTeamImages[0])
},
{
  id: 2,
  name: "Prof. Dr. Shantanu Braj Choubey",
  position: "Faculty Advisor",
  bio: "Specialization in company law and regulatory framework, brings deep expertise to complex legal challenges and contemporary issues.",
  image: getImg('team', 1, defaultTeamImages[1])
},
{
  id: 3,
  name: "Sarthak Kumar Ambastha",
  position: "Student Leader",
  bio: "Gaining specialized insights over corporate functioning and command in understanding the functioning intricacies. He help and guide student in meaningful way",
  image: getImg('team', 2, defaultTeamImages[2])
}];