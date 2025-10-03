# Password Vault

A secure and user-friendly web application for storing and managing your passwords. Built during the *Full-Stack Web Development by CodeWithHarry* course.

---

## 🛠️ Features

- Save credentials: store **URL**, **Username**, **Password**
- View, edit, delete saved entries
- Copy credentials with one click
- Responsive layout (desktop + mobile/tablet)
- Uses MongoDB for storage (or local storage if you’ve not connected backend yet)
- Secure and intuitive UI using React, Tailwind CSS

---

## 🔧 Tech Stack

| Layer            | Technology             |
|------------------|-------------------------|
| Frontend         | React.js, Tailwind CSS  |
| Routing          | React Router            |
| Backend / API    | Node.js + Express.js    |
| Database         | MongoDB                 |
| Build Tool       | Vite                    |

---

## 🚀 Installation / Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/faisalzGIT/Full-Stack-Web-Development-by-CodeWithHarry.git
   cd Full-Stack-Web-Development-by-CodeWithHarry/video130
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Set up environment variables  
   Create a `.env` file (if required) with values like:  
   ```
   MONGO_URI=mongodb://localhost:27017/
   PORT=3000
   ```

4. Run the development   
   ```bash
   npm run dev
   ```

5. Run the Backend   
   ```bash
    cd backend
    npm install
    node --watch server.js
   ```

6. Open in browser at `http://localhost:3000` (or whichever port)

---

## 🔐 Usage

- Use the **“Get Started”** button to navigate to the Vault page  
- Add a new credential (URL, username, password)  
- Edit or delete credential entries  
- Eye icon to show/hide password  
- Credentials are saved securely (via backend)

---

## 🧑‍💻 Author

**Mohammad Faisal**  
GitHub: [faisalzGIT](https://github.com/faisalzGIT)  
LinkedIn: [My-linkedin-profile  ](https://www.linkedin.com/in/faisalz1/)


---