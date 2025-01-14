# NuraNest

**NuraNest** is a mobile-first mental wellness application designed to provide accessible, AI-driven mental health care. Developed as part of the final project for the Higher National Diploma in Software Engineering at the National Institute of Business Management (NIBM - Sri Lanka), this app offers 24/7 emotional support, professional guidance, and curated resources to improve mental well-being.

---

## 🌟 Features

### 🧠 AI-Driven Emotional Support
- 24/7 availability with a fine-tuned Llama 2 AI chatbot.
- Personalized real-time conversations to promote positive mental health.

### 👩‍⚕️ Secure Therapy Sessions
- Voice and video therapy sessions with professional psychologists.
- Safe and secure onboarding process for psychologists to connect with users.

### 📚 Curated Mental Wellness Content
- Blogs and articles tailored to guide users on their mental health journey.

### 🌐 Accessible and User-Friendly
- Mobile-first design with a seamless user interface built using Flutter.

### 🖥️ React Web Admin Panel
- Manage patients and doctors effectively.
- Process doctor applications and oversee onboarding.
- View analytics for user engagement and service usage.
- Write and publish blog articles to share mental wellness resources.

---

## 🛠️ Technologies Used

### **Frontend**
- **Framework**: Flutter
- **UI/UX Design**: Figma

### **Admin Panel**
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS or Material-UI

### **Backend**
- **Framework**: Node.js with Express.js
- **Database**: PostgreSQL

### **AI Integration**
- Fine-tuned **Llama 2 7B** model for conversational AI.

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18) and npm (Node Package Manager)
- nvm (Node Version Manager)
- Flutter SDK
- PostgreSQL
- Android Studio Koala

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/nirmalfernando/NuraNest.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd nuranest/backend
   ```
3. **Install Node.js**

   Use `nvm` to install the required version of Node.js:

   ```bash
   nvm install # This installs the required node version
   nvm use node
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Set up environment variables:
   - Create a `.env` file in the `backend` folder.
   - Add the following variables:
     ```env
     DB_HOST=localhost # your db host
     DB_USER=<db_user> # your db user
     DB_PASS=<db_password> # your db password
     DB_NAME=<db_name> # your db name
     DB_DIALECT=postgres # your db dialect
     DB_PORT=5432 # your db port
     IP=<your_ip> # your ip
     PORT=8000 # your port
     JWT=<your_jwt>
     NODE_ENV=development
     ```
6. Run the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd nuranest/frontend
   ```
2. Install Flutter dependencies:
   ```bash
   flutter pub get
   ```
3. Run the Flutter app:
   ```bash
   flutter run
   ```

### Admin Panel Setup
1. Navigate to the admin panel folder:
   ```bash
   cd nuranest/admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
     
---

## 🎯 Vision
NuraNest is committed to:
- Providing impactful mental health care solutions.
- Aligning with the United Nations Sustainable Development Goals (SDGs).

---

## 📜 License
NuraNest is licensed under the [Apache License 2.0](LICENSE).

---
