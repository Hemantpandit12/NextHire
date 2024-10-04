const Profiles = [
  {
    name: 'Emily Chen',
    email: 'emilychen@example.com',
    degree: 'Bachelor of Engineering',
    role: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/emilychen',
    github: 'https://github.com/emilychen',
    image: "https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"  
  },
  {
    name: 'David Lee',
    email: 'davidlee@example.com',
    degree: 'Master of Business Administration',
    role: 'Product Manager',
    linkedin: 'https://www.linkedin.com/in/davidlee',
    github: 'https://github.com/davidlee',
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: 'Sophia Patel',
    email: 'sophiapatel@example.com',
    degree: 'Bachelor of Arts',
    role: 'Graphic Designer',
    linkedin: 'https://www.linkedin.com/in/sophiapatel',
    github: 'https://github.com/sophiapatel',
    image: "https://plus.unsplash.com/premium_photo-1663051241451-709fa4de55bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: 'Jackson Brown',
    email: 'jacksonbrown@example.com',
    degree: 'Bachelor of Science',
    role: 'Data Analyst',
    linkedin: 'https://www.linkedin.com/in/jacksonbrown',
    github: 'https://github.com/jacksonbrown',
    image: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: 'Ava Wong',
    email: 'avawong@example.com',
    degree: 'Master of Science',
    role: 'Research Scientist',
    linkedin: 'https://www.linkedin.com/in/avawong',
    github: 'https://github.com/avawong',
    image: "https://images.unsplash.com/photo-1514355315815-2b64b0216b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: 'Ethan Kim',
    email: 'ethankim@example.com',
    degree: 'Bachelor of Fine Arts',
    role: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/ethankim',
    github: 'https://github.com/ethankim',
    image: "https://plus.unsplash.com/premium_photo-1679162280486-8736450a253a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"  
  },
  {
    name: 'Lily Tran',
    email: 'lilytran@example.com',
    degree: 'Bachelor of Commerce',
    role: 'Marketing Manager',
    linkedin: 'https://www.linkedin.com/in/lilytran',
    github: 'https://github.com/lilytran',
    image: "https://images.unsplash.com/photo-1527625243292-908353a57c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: 'Noah White',
    email: 'noahwhite@example.com',
    degree: 'Master of Engineering',
    role: 'DevOps Engineer',
    linkedin: 'https://www.linkedin.com/in/noahwhite',
    github: 'https://github.com/noahwhite',
    image: "https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxzdHVkZW50fGVufDB8fDB8fHww"  
  },
  {
    name: 'Julia Hall',
    email: 'juliahall@example.com',
    degree: 'Bachelor of Science',
    role: 'Biologist',
    linkedin: 'https://www.linkedin.com/in/juliahall',
    github: 'https://github.com/juliahall',
    image: "https://images.unsplash.com/photo-1593985818125-f506da53a292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxzdHVkZW50fGVufDB8fDB8fHww" 
  },
  {
    name: 'Logan Brooks',
    email: 'loganbrooks@example.com',
    degree: 'Bachelor of Arts',
    role: 'Writer',
    linkedin: 'https://www.linkedin.com/in/loganbrooks',
    github: 'https://github.com/loganbrooks',
    image: "https://media.istockphoto.com/id/1141259759/photo/modern-bearded-young-businessman-working-on-laptop-computer-while-sitting-on-sofa-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kkyklku1zwJxk7YEqR-onCOLg5PfqmOWtdLwaaNJ0g0="  
  },
  {
    name: 'Abigail Martin',
    email: 'abigailmartin@example.com',
    degree: 'Master of Public Health',
    role: 'Epidemiologist',
    linkedin: 'https://www.linkedin.com/in/abigailmartin',
    github: 'https://github.com/abigailmartin',
    image: "https://images.unsplash.com/photo-1656313815939-6373a497bbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: 'Alexander Gray',
    email: 'alexandergray@example.com',
    degree: 'Bachelor of Science',
    role: 'Chemist',
    linkedin: 'https://www.linkedin.com/in/alexandergray',
    github: 'https://github.com/alexandergray',
    image: "https://images.unsplash.com/photo-1712068944618-21bbd010c8ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: 'Mia Sanchez',
    email: 'miasanchez@example.com',
    degree: 'Bachelor of Fine Arts',
    role: 'Artist',
    linkedin: 'https://www.linkedin.com/in/miasanchez',
    github: 'https://github.com/miasanchez',
    image: "https://plus.unsplash.com/premium_photo-1681491123726-d0d8cd3da9a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"  
  },
  {
    name: 'Daniel Davis',
    email: 'danieldavis@example.com',
    degree: 'Bachelor of Commerce',
    role: 'Accountant',
    linkedin: 'https://www.linkedin.com/in/danieldavis',
    github: 'https://github.com/danieldavis',
    image: "https://images.unsplash.com/photo-1613552464822-ba40bfb5f9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    degree: 'Bachelor of Science',
    role: 'Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    image: "https://images.unsplash.com/photo-1725695788329-1a609af281f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    degree: 'Master of Arts',
    role: 'Data Scientist',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
    image: "https://images.unsplash.com/photo-1560298803-1d998f6b5249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkdWx0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"  
  },
  {
    name: 'Michael Lee',
    email: 'michaellee@example.com',
    degree: 'Bachelor of Engineering',
    role: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/michaellee',
    github: 'https://github.com/michaellee',
    image: "https://plus.unsplash.com/premium_photo-1664036154110-0875f12fa2f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
      name: "Emily Carter",
      email: "emilyc234@marketingmail.com",
      degree: "Bachelor of Business Administration in Marketing",
      role: "Marketing Specialist",
      linkedin: "https://www.linkedin.com/in/emilycartermarketing",
      github: "https://github.com/emilyc234",
      image: "https://plus.unsplash.com/premium_photo-1661434380261-ca9305950dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1lcmljYW4lMjBzdHVkZW50fGVufDB8fDB8fHww"   
    },
    {
      name: "Alexa Turner",
      email: "alex.turner@techhub.com",
      degree: "Master of Science in Computer Science",
      role: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/alex-turner-softwareengineer",
      github: "https://github.com/alex-turner-dev",
      image: "https://images.unsplash.com/photo-1725759908147-9a26b5bd4581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
    {
      name: "Ravi Teli",
      email: "raviteli123r@techhub.com",
      degree: "BCA",
      role: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/alex-turner-softwareengineer",
      github: "https://github.com/alex-turner-dev",
      image: "https://images.unsplash.com/photo-1612299273045-362a39972259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
];
  export default Profiles;