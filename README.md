# Huma Aslam - Portfolio Website

A premium, production-ready portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, professional design with dark blue and white theme
- Smooth animations and transitions using Framer Motion
- Fully responsive design for all devices
- Letter-by-letter animated hero section
- Interactive project showcase with hover effects
- Client testimonials section
- Pricing plans with highlighted popular option
- Contact form with validation
- Smooth scroll navigation
- Production-optimized build

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS (for contact form)
- React Icons
- Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## EmailJS Setup (Optional)

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key

5. Update the following values in `src/components/Contact.tsx`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS Service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key

## Customization

### Update Personal Information

- **Name and Title**: Edit `src/components/Home.tsx` and `src/components/Navbar.tsx`
- **About Section**: Modify content in `src/components/About.tsx`
- **Services**: Update the `servicesData` array in `src/components/Services.tsx`
- **Projects**: Update the `projectsData` array in `src/components/Projects.tsx`
- **Pricing**: Modify the `pricingData` array in `src/components/Pricing.tsx`
- **Reviews**: Update the `reviewsData` array in `src/components/Reviews.tsx`
- **Social Links**: Edit the `socialLinks` array in `src/components/Footer.tsx`

### Color Scheme

The primary color (dark blue) is `#0a1f44`. To change it:

1. Find and replace `#0a1f44` throughout the component files
2. Update gradient colors in relevant components

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Home.tsx         # Hero section with animated text
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services grid
│   ├── Projects.tsx     # Projects showcase
│   ├── Pricing.tsx      # Pricing plans
│   ├── Reviews.tsx      # Client testimonials
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with links
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles

```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

For inquiries, please use the contact form on the website or reach out via social media links in the footer.
