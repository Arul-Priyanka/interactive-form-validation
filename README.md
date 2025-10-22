# interactive-form-validation
interactive-form-validation

A responsive, client-side web application for capturing and managing **Student** and **Faculty** details through intuitive tabbed forms. Submissions are validated in real-time, stored in-memory as JSON arrays, and displayed dynamically below the forms for instant feedback. Perfect for educational prototypes, data collection demos, or simple CRUD interfaces.

---

## Features

* **Tabbed Forms**: Easily switch between Student and Faculty entry modes.
* **Real-Time Validation**: Inline error handling for required fields and email format.
* **In-Memory Storage**: Data persists across sessions in browser memory (upgradable to `localStorage`).
* **Dynamic JSON Preview**: Live-formatted display of all submissions.
* **Responsive Design**: Mobile-friendly with Tailwind CSS for modern, clean UI.
* **No Backend Required**: Pure front-end—runs directly in the browser.

---

## Tech Stack

* **HTML5**: Semantic structure for forms and output.
* **Tailwind CSS** (CDN): Utility-first styling for rapid, responsive design.
* **Vanilla JavaScript**: DOM manipulation, event handling, and data management.

---

## Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge).
* No additional setup—everything runs client-side.

---

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/interactive-forms-json.git
   cd interactive-forms-json
   ```
2. **Open the Project**:

   * With VS Code Live Server: Right-click `index.html` → *Open with Live Server*.
   * Or double-click `index.html` to open in your default browser.
3. **Test the App**:

   * Fill out the Student or Faculty form.
   * Submit valid data to see it added to the JSON output below.
   * Try invalid inputs (empty fields or invalid email) to see validation feedback.

---

## Usage

* **Student Form**: Enter `name`, `email`, `roll number`, `course`, and `year`.
* **Faculty Form**: Enter `name`, `email`, `department`, `experience (years)`, and `subject`.
* **Submission**: Forms reset after success; data appends to the respective JSON array.
* **View Data**: Scroll to the "Submitted Data" section for a pretty-printed JSON view.

### Example JSON Output

```json
{
  "students": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "roll": "12345",
      "course": "Computer Science",
      "year": "2"
    }
  ],
  "faculty": [
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "dept": "Computer Science",
      "experience": "5",
      "subject": "Mathematics"
    }
  ]
}
```

---

## Screenshots

![Home Layout](screenshots/home.png)
*Tabbed forms with JSON preview.*

![Submission Success](screenshots/submit.png)
*Updated JSON after form submission.*

*(Add actual screenshots to `/screenshots/` folder after testing.)*

---

## Deployment

Deploy as a static site for free:

* **Netlify / Vercel**: Drag-and-drop the project folder or connect GitHub repo.
* **GitHub Pages**: Enable in repo settings → Pages → Source: `main` branch.
* Update the live demo link in your README once deployed.

**Live Demo:** [Insert Deployed URL Here]

---

## Customization

* **Add Fields**: Extend form inputs in `index.html` and update validation/submission logic in `script.js`.
* **Persistence**: Replace in-memory storage with `localStorage` for browser-session persistence.
* **Styling**: Modify Tailwind classes or switch to a custom build.

---

## Contributing

1. Fork the repo.
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes:

   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request.

Feedback welcome—issues or PRs appreciated!

---

## License

This project is open-source under the **MIT License**. See [LICENSE](LICENSE) for details.


