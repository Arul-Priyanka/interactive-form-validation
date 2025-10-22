document.addEventListener("DOMContentLoaded", () => {
  const studentBtn = document.getElementById("studentBtn");
  const facultyBtn = document.getElementById("facultyBtn");
  const studentForm = document.getElementById("studentForm");
  const facultyForm = document.getElementById("facultyForm");
  const jsonOutput = document.getElementById("jsonOutput");

  let submissions = { students: [], faculty: [] }; // In-memory JSON

  // Toggle forms
  studentBtn.addEventListener("click", () => {
    studentForm.classList.remove("hidden");
    facultyForm.classList.add("hidden");
    studentBtn.classList.add("bg-indigo-600", "text-white");
    studentBtn.classList.remove("bg-gray-200", "text-gray-700");
    facultyBtn.classList.add("bg-gray-200", "text-gray-700");
    facultyBtn.classList.remove("bg-indigo-600", "text-white");
  });

  facultyBtn.addEventListener("click", () => {
    facultyForm.classList.remove("hidden");
    studentForm.classList.add("hidden");
    facultyBtn.classList.add("bg-indigo-600", "text-white");
    facultyBtn.classList.remove("bg-gray-200", "text-gray-700");
    studentBtn.classList.add("bg-gray-200", "text-gray-700");
    studentBtn.classList.remove("bg-indigo-600", "text-white");
  });

  // Utility
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showError = (input, errorEl, msg) => { input.classList.add("border-red-500"); errorEl.textContent = msg; errorEl.classList.remove("hidden"); };
  const hideError = (input, errorEl) => { input.classList.remove("border-red-500"); errorEl.classList.add("hidden"); };
  const updateJSONOutput = () => { jsonOutput.textContent = JSON.stringify(submissions, null, 2); };

  // --- STUDENT FORM ---
  const studentFields = {
    name: document.getElementById("studentName"),
    email: document.getElementById("studentEmail"),
    roll: document.getElementById("studentRoll"),
    course: document.getElementById("studentCourse"),
    year: document.getElementById("studentYear")
  };
  const studentErrors = {
    name: document.getElementById("studentNameError"),
    email: document.getElementById("studentEmailError"),
    roll: document.getElementById("studentRollError"),
    course: document.getElementById("studentCourseError"),
    year: document.getElementById("studentYearError")
  };

  // Real-time validation
  studentFields.name.addEventListener("input", () => studentFields.name.value.trim() === "" ? showError(studentFields.name, studentErrors.name, "Name required") : hideError(studentFields.name, studentErrors.name));
  studentFields.email.addEventListener("input", () => !isValidEmail(studentFields.email.value) ? showError(studentFields.email, studentErrors.email, "Invalid email") : hideError(studentFields.email, studentErrors.email));
  studentFields.roll.addEventListener("input", () => studentFields.roll.value.trim() === "" ? showError(studentFields.roll, studentErrors.roll, "Roll required") : hideError(studentFields.roll, studentErrors.roll));
  studentFields.course.addEventListener("input", () => studentFields.course.value.trim() === "" ? showError(studentFields.course, studentErrors.course, "Course required") : hideError(studentFields.course, studentErrors.course));
  studentFields.year.addEventListener("input", () => studentFields.year.value.trim() === "" ? showError(studentFields.year, studentErrors.year, "Year required") : hideError(studentFields.year, studentErrors.year));

  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    for (let key in studentFields) {
      if (studentFields[key].value.trim() === "" || (key==="email" && !isValidEmail(studentFields[key].value))) valid = false;
    }
    if (!valid) return;
    submissions.students.push({
      name: studentFields.name.value,
      email: studentFields.email.value,
      roll: studentFields.roll.value,
      course: studentFields.course.value,
      year: studentFields.year.value
    });
    studentForm.reset();
    updateJSONOutput();
    alert("Student submitted successfully!");
  });

  // --- FACULTY FORM ---
  const facultyFields = {
    name: document.getElementById("facultyName"),
    email: document.getElementById("facultyEmail"),
    dept: document.getElementById("facultyDept"),
    exp: document.getElementById("facultyExp"),
    subject: document.getElementById("facultySubject")
  };
  const facultyErrors = {
    name: document.getElementById("facultyNameError"),
    email: document.getElementById("facultyEmailError"),
    dept: document.getElementById("facultyDeptError"),
    exp: document.getElementById("facultyExpError"),
    subject: document.getElementById("facultySubjectError")
  };

  // Real-time validation
  facultyFields.name.addEventListener("input", () => facultyFields.name.value.trim() === "" ? showError(facultyFields.name, facultyErrors.name, "Name required") : hideError(facultyFields.name, facultyErrors.name));
  facultyFields.email.addEventListener("input", () => !isValidEmail(facultyFields.email.value) ? showError(facultyFields.email, facultyErrors.email, "Invalid email") : hideError(facultyFields.email, facultyErrors.email));
  facultyFields.dept.addEventListener("input", () => facultyFields.dept.value.trim() === "" ? showError(facultyFields.dept, facultyErrors.dept, "Department required") : hideError(facultyFields.dept, facultyErrors.dept));
  facultyFields.exp.addEventListener("input", () => facultyFields.exp.value.trim() === "" ? showError(facultyFields.exp, facultyErrors.exp, "Experience required") : hideError(facultyFields.exp, facultyErrors.exp));
  facultyFields.subject.addEventListener("input", () => facultyFields.subject.value.trim() === "" ? showError(facultyFields.subject, facultyErrors.subject, "Subject required") : hideError(facultyFields.subject, facultyErrors.subject));

  facultyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    for (let key in facultyFields) {
      if (facultyFields[key].value.trim() === "" || (key==="email" && !isValidEmail(facultyFields[key].value))) valid = false;
    }
    if (!valid) return;
    submissions.faculty.push({
      name: facultyFields.name.value,
      email: facultyFields.email.value,
      dept: facultyFields.dept.value,
      experience: facultyFields.exp.value,
      subject: facultyFields.subject.value
    });
    facultyForm.reset();
    updateJSONOutput();
    alert("Faculty submitted successfully!");
  });

});
