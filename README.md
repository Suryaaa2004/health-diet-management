# Health & Diet Management System

## Project Overview

The **Health & Diet Management System** is a web-based application designed to help users manage their diet, track their health goals, and receive dietary recommendations based on their personal goals. It provides an intuitive user interface for managing food intake, setting health goals, and tracking progress.

### Key Features:
- **Diet Plan Selection:** Users can select their health goal (weight loss, muscle gain, or maintenance) and receive a recommended diet plan.
- **Health Tracker:** Users can log daily food items and track their calorie intake.
- **Contact Form:** Users can reach out for further assistance or inquiries through a contact form.
  
---

## Technologies Used

- **HTML:** For structuring the content of the pages.
- **CSS:** For styling the pages and ensuring the site is responsive across different devices.
- **JavaScript:** To handle interactivity, such as dynamic diet plan updates, form submissions, and tracking calorie intake.

---

## Pages Overview

### 1. **Home Page (`index.html`)**
- This page welcomes the users and introduces them to the Health & Diet Manager system.
- It includes navigation links to other sections: **Diet Plan**, **Tracker**, and **Contact**.
- The layout is responsive, using flexbox for easy viewing on all screen sizes.

### 2. **Diet Plan Page (`diet.html`)**
- On this page, users can select their health goal (weight loss, muscle gain, or maintenance).
- Based on their selection, a corresponding diet plan is displayed, offering guidance on food choices and meal recommendations.
- The diet plan updates dynamically when the user changes their goal.

### 3. **Health Tracker Page (`tracker.html`)**
- Users can log the food they consume on a daily basis by entering the food item and its corresponding calorie count.
- Entries are dynamically added to a list on the page, allowing users to keep track of their total intake.
- Simple form validation ensures users enter valid food and calorie data.

### 4. **Contact Page (`contact.html`)**
- This page provides a contact form where users can enter their name, email, and a message.
- Upon submission, the form triggers an alert to confirm that the message has been sent.
  
---

## How It Works

### Diet Plan Selection:
On the **Diet Plan** page, users are presented with three diet goals: **Weight Loss**, **Muscle Gain**, and **Maintenance**. Once a goal is selected, a tailored diet plan appears on the page, which suggests the best food types and portions for the selected goal.

### Health Tracker:
The **Health Tracker** page allows users to input their daily food intake. By entering the food item and its calorie content, the user can keep a log of their diet. This helps users track their progress towards their health goals.

### Contact Form:
The **Contact** page includes a simple form that allows users to reach out for more information or assistance. After submitting the form, an alert confirms that the message has been sent.

---

## How to Run the Project Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/health-diet-manager.git
