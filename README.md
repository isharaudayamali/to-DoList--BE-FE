# To-Do List Web App

A beautiful, lightweight To-Do app built with **Bootstrap 5**, **vanilla JavaScript**, and **localStorage**. No backend required! Create, edit, complete, and delete tasks with time tracking, due dates, and real-time progress updates.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create tasks with optional due dates
- ✏️ **Edit Tasks** - Update task text anytime
- ✔️ **Complete Tasks** - Mark tasks as done with visual feedback
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- 📊 **Progress Tracking** - Real-time completion percentage with animated progress bar

### Time Management
- 📅 **Creation Timestamps** - Smart time formatting (Just now, 5m ago, 2h ago, Oct 17)
- ⏰ **Due Dates** - Optional date picker with color-coded priority badges:
  - 🔴 **Overdue** - Red gradient for past due dates
  - 🟡 **Today** - Yellow/orange gradient for today's tasks
  - 🔵 **Tomorrow** - Blue gradient for tomorrow
  - 🟢 **Upcoming** - Green gradient for 2-6 days out
  - ⚪ **Future** - Light purple for 7+ days

### Modern UI/UX
- 🎨 **Gradient Design** - Beautiful purple gradient background
- 💎 **Glass-morphism** - Frosted glass effects with backdrop blur
- ✨ **Smooth Animations** - Slide-in effects, hover states, and transitions
- 📱 **Responsive Design** - Mobile, tablet, and desktop optimized
- 🌈 **Color-coded Badges** - Visual priority indicators
- 🎯 **Empty State** - Friendly message when no tasks exist

## 🚀 Quick Start

**No installation needed!** Just open `index.html` in any browser:

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/isharaudayamali/to-DoList--BE-FE.git
   cd to-DoList--BE-FE
   ```

2. **Open in browser:**
   - Double-click `index.html`, or
   - Right-click → Open with → Chrome/Firefox/Edge

## 🌐 Deploy Your App (Free!)

### Option 1: GitHub Pages (Easiest)
```powershell
# Push your code
git add .
git commit -m "Static app ready"
git push origin main

# Then on GitHub:
# Settings → Pages → Source: main branch → Save
# Your app will be live at: https://yourusername.github.io/to-DoList--BE-FE/
```

### Option 2: Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder
3. Done! Get instant live URL

### Option 3: Vercel
```powershell
npm install -g vercel
vercel
```

## 📁 Project Structure

```
to-DoList--BE-FE/
├── index.html             # Main HTML with Bootstrap 5
├── app.js                 # Minified vanilla JS (localStorage CRUD)
├── style.css              # Minified Bootstrap-enhanced styles
├── assets/                # Icons and images
└── README.md              # Documentation
```

## 🎨 UI Components

### Header Card
- Task count and completion stats
- Animated progress bar
- Circular completion badge with hover effect

### Task Input Form
- Text input for task name
- Date picker for optional due date
- Gradient button with lift animation

### Task List
- Checkbox for completion toggle
- Creation timestamp with smart formatting
- Color-coded due date badges
- Edit and delete icons with hover effects
- Slide-in animation on add
- Strikethrough on completion

## 🛠️ Technologies Used

- **Framework**: Bootstrap 5.3.2 (CDN)
- **JavaScript**: Vanilla ES6+ (minified)
- **Storage**: localStorage (browser-based, no backend)
- **Fonts**: Google Fonts (Poppins)
- **Size**: Ultra-lightweight (~10KB total)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full layout with side-by-side inputs
- **Tablet**: 481px - 768px - Adjusted spacing and font sizes
- **Mobile**: ≤ 480px - Stacked layout, optimized touch targets

## 💾 Data Persistence

Tasks are stored in **browser localStorage** with this schema:

```javascript
{
  id: "timestamp",
  text: "Task description",
  completed: false,
  createdAt: "ISO-8601",
  dueDate: "YYYY-MM-DD or null"
}
```

### Clear All Tasks
Open browser console (F12) and run:
```javascript
localStorage.removeItem('tasks');
location.reload();
```

## 🎯 Usage Tips

1. **Quick Add**: Just type and press Enter (due date is optional)
2. **Set Priorities**: Use due dates to see color-coded urgency
3. **Track Progress**: Watch the progress bar fill as you complete tasks
4. **Edit Anytime**: Click the pencil icon to modify task text
5. **Safe Delete**: Confirmation dialog prevents accidental deletions

## ✨ Features

- ✅ **Zero Configuration** - No npm, no build, no server
- 💾 **Offline-Ready** - Works without internet after first load
- 📱 **Fully Responsive** - Bootstrap 5 mobile-first design
- ⚡ **Lightning Fast** - Minified code, optimized performance
- 🎨 **Beautiful UI** - Glass-morphism with gradient effects

## 📝 Notes

- **Storage**: localStorage limited to ~5-10MB per domain (thousands of tasks)
- **Privacy**: All data stays in your browser, never sent to servers
- **Sync**: Each browser stores tasks separately (use export/import for sync)
- **Browser Support**: Chrome, Firefox, Safari, Edge (ES6+ required)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Icons: Custom PNG images for edit and delete actions
- Design inspiration: Modern UI/UX trends with glass-morphism
- Color palette: Purple/violet gradients with semantic status colors

---

**Built with ❤️ using Node.js and Vanilla JavaScript**
