# To-Do List Web App (with Backend)

A beautiful, full-featured To-Do app with an Express.js backend and vanilla JavaScript frontend. Create, edit, complete, and delete tasks with time tracking, due dates, and real-time progress updates.

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm (comes with Node.js)

### Installation & Running

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/isharaudayamali/to-DoList_BackEnd.git
   cd to-DoList_BackEnd
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open in browser:**
   Navigate to http://localhost:3000

### Production Mode
```powershell
npm start
```

## 📡 API Endpoints

### Tasks API

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/tasks` | List all tasks | - |
| `POST` | `/api/tasks` | Create new task | `{ text: string, dueDate?: string }` |
| `PUT` | `/api/tasks/:id` | Update task | `{ text?: string, completed?: boolean, dueDate?: string }` |
| `DELETE` | `/api/tasks/:id` | Delete task | - |

### Response Format
```json
{
  "id": "1697500000000",
  "text": "Complete project",
  "completed": false,
  "createdAt": "2025-10-17T10:30:00.000Z",
  "dueDate": "2025-10-20"
}
```

## 📁 Project Structure

```
to-DoList_BackEnd/
├── server.js              # Express server and API routes
├── app.js                 # Frontend JavaScript (fetch-based CRUD)
├── index.html             # Main HTML structure
├── style.css              # Styles with animations and gradients
├── package.json           # Dependencies and scripts
├── data/
│   └── tasks.json        # JSON file storage (auto-created)
├── .gitignore            # Git ignore rules
└── README.md             # Documentation
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

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Storage**: JSON file-based persistence
- **Dev Tools**: Nodemon for auto-reload
- **Fonts**: Google Fonts (Poppins)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full layout with side-by-side inputs
- **Tablet**: 481px - 768px - Adjusted spacing and font sizes
- **Mobile**: ≤ 480px - Stacked layout, optimized touch targets

## 💾 Data Persistence

Tasks are stored in `data/tasks.json` with the following schema:

```json
[
  {
    "id": "timestamp-based-id",
    "text": "Task description",
    "completed": false,
    "createdAt": "ISO-8601-datetime",
    "dueDate": "YYYY-MM-DD or null"
  }
]
```

### Reset Data
To clear all tasks:
1. Stop the server
2. Delete `data/tasks.json`
3. Restart the server (file will be recreated)

## 🎯 Usage Tips

1. **Quick Add**: Just type and press Enter (due date is optional)
2. **Set Priorities**: Use due dates to see color-coded urgency
3. **Track Progress**: Watch the progress bar fill as you complete tasks
4. **Edit Anytime**: Click the pencil icon to modify task text
5. **Safe Delete**: Confirmation dialog prevents accidental deletions

## 🔧 Configuration

### Change Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 3000;
```

Or set environment variable:
```powershell
$env:PORT=8080; npm start
```

## 📝 Notes

- **CORS**: Not required - frontend and backend served from same origin
- **State Management**: Tasks loaded on page load, real-time updates
- **Auto-save**: All changes immediately persisted to JSON file
- **Time Zones**: Timestamps stored in UTC, displayed in local time
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

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
