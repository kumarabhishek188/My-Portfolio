# 🌟 Abhishek Kumar - Portfolio

A modern, responsive portfolio website built with React.js featuring dark/light theme toggle, smooth animations, and mobile-first design.

![Portfolio Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## ✨ Features

### 🎨 **Theme System**
- **Dark/Light Mode Toggle** - Beautiful animated theme switcher
- **Persistent Preferences** - Remembers user's theme choice
- **Smooth Transitions** - Elegant color transitions between themes
- **Accessibility** - Proper ARIA labels and keyboard navigation

### 📱 **Responsive Design**
- **Mobile-First Approach** - Optimized for all screen sizes
- **Touch-Friendly** - 44px minimum touch targets
- **Flexible Grid** - Adapts from 3 columns to 1 column
- **Cross-Device Compatibility** - Works on desktop, tablet, and mobile

### 🎭 **Animations & Effects**
- **Hover Animations** - Cards lift and glow on hover
- **Entrance Animations** - Staggered fade-in effects
- **Image Zoom** - Subtle image scaling on hover
- **Button Effects** - Shimmer and lift animations
- **Smooth Transitions** - 60fps animations with cubic-bezier easing

### 🚀 **Performance**
- **Optimized Images** - Proper sizing and lazy loading
- **CSS Variables** - Efficient theme switching
- **Minimal Dependencies** - Lightweight and fast
- **SEO Optimized** - Proper meta tags and structure

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript features
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Custom Properties** - Theme management
- **LocalStorage** - Theme persistence

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/kumarabhishek188/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
Portfolio-main/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── nav/
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── testimonials/
│   │   └── theme/
│   │       ├── ThemeToggle.jsx
│   │       └── themeToggle.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── assets/
│   │   ├── portfolio images
│   │   └── bg-texture.png
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Components

### Theme System
- **ThemeContext.jsx** - Manages theme state and localStorage
- **ThemeToggle.jsx** - Animated toggle button component
- **themeToggle.css** - Toggle button styling and animations

### Portfolio Section
- **Portfolio.jsx** - Main portfolio component with project grid
- **portfolio.css** - Responsive grid layout and animations

### Responsive Design
- **Mobile-first CSS** - Progressive enhancement approach
- **Flexible breakpoints** - 1024px, 768px, 600px, 400px
- **Touch optimization** - Mobile-friendly interactions

## 🎨 Theme System Details

### Dark Theme (Default)
```css
--color-bg: #1f1f38
--color-bg-variant: #2c2c6c
--color-primary: #4db5ff
--color-text: #fff
```

### Light Theme
```css
--color-bg: #f0f4f8
--color-bg-variant: #ffffff
--color-primary: #2563eb
--color-text: #0f172a
```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|---------|
| Desktop | >1024px | 3-column grid |
| Tablet | 768px-1024px | 2-column grid |
| Mobile | 600px-768px | 2-column grid |
| Small Mobile | 400px-600px | 1-column grid |
| Extra Small | <400px | 1-column grid |

## 🎭 Animation Features

### Hover Effects
- **Card Lift** - 10px upward movement
- **Image Zoom** - 1.05x scale on hover
- **Text Slide** - 5px horizontal movement
- **Button Glow** - Subtle shadow effects

### Entrance Animations
- **Fade In Up** - Staggered entrance effects
- **Delayed Loading** - 0.1s intervals between items
- **Smooth Easing** - cubic-bezier(0.175, 0.885, 0.32, 1.275)

## 🚀 Performance Optimizations

- **CSS Variables** - Efficient theme switching
- **Transform Animations** - GPU-accelerated animations
- **Optimized Images** - Proper sizing and formats
- **Minimal Re-renders** - Efficient React state management

## 📋 Features Checklist

- [x] Dark/Light theme toggle
- [x] Responsive design (mobile-first)
- [x] Smooth animations and transitions
- [x] Touch-friendly mobile interface
- [x] Theme persistence (localStorage)
- [x] Accessibility features
- [x] SEO optimization
- [x] Cross-browser compatibility
- [x] Performance optimization
- [x] Modern CSS techniques

## 🎯 Future Enhancements

- [ ] Project filtering by technology
- [ ] Search functionality
- [ ] Project details modal
- [ ] Contact form integration
- [ ] Blog section
- [ ] Multi-language support
- [ ] PWA features
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Kumar**
- GitHub: [@kumarabhishek188](https://github.com/kumarabhishek188)
- Portfolio: [Live Demo](https://abhishek-portfolio2025.netlify.app/)

## 🙏 Acknowledgments

- React.js community
- CSS Grid and Flexbox resources
- Modern web development best practices
- Open source contributors

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [https://abhishek-portfolio2025.netlify.app/](https://abhishek-portfolio2025.netlify.app/)


