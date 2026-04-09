
  # RESUMADE

  This is a code bundle for RESUMADE. The original project is available at https://www.figma.com/design/Up5Ea7Vxx2hVfOOmgigTRr/RESUMADE.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  # 🌐 ResuMade : Cloud-Based Resume Builder

## 📌 Project Overview

ResuMade is a cloud-integrated resume builder application that allows users to create and store resumes efficiently. This project demonstrates the use of AWS cloud services in a simple and scalable architecture.

---

## ☁️ Cloud Services Used

* **Amazon S3** – Used to store generated resume files
* **AWS Lambda** – Used for serverless backend processing
* **Amazon DynamoDB** – Used to store user resume data

---

## ⚙️ System Architecture

Frontend (Web App)
↓
API Gateway
↓
AWS Lambda
↓
DynamoDB (stores data)
↓
S3 (stores resume file)

---

## 🔄 Working Flow

1. User enters resume details in the application
2. User clicks **"Save to Cloud (AWS)"**
3. The frontend sends a request via API Gateway
4. AWS Lambda processes the request
5. Resume data is stored in DynamoDB
6. A resume file is generated and uploaded to S3
7. A download link is returned to the user

---

## 🛠️ Technologies Used

* HTML / CSS / JavaScript (Frontend)
* React (UI Framework)
* AWS S3
* AWS Lambda
* AWS DynamoDB
* API Gateway

---

## 🎯 Features

* Resume form input
* Cloud-based storage
* Serverless processing
* Downloadable resume file
* Simple and scalable architecture

---

## 📌 Conclusion

This project successfully demonstrates the integration of cloud services into a web application. It uses a serverless architecture which reduces infrastructure management and improves scalability.

---

## 👨‍💻 Author

Pooja Divekar , Pradnya Khanse , Kirtana Singh
