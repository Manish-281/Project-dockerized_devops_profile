# Dockerized DevOps Profile 🚀

A full-stack DevOps profile API built with Node.js, Express, and Docker — deployed on AWS EC2 with Elastic IP.

## 🌐 Live Demo

🔗 **Live:** http://43.205.164.180:5000/

> Deployed on AWS EC2 with Elastic IP (static IP — never changes)

## 🚀 Features

- REST API with Express
- Beautiful responsive UI
- Multiple pages (Welcome, Profile, Skills, Health)
- Dockerized with Docker Compose
- Deployed on AWS EC2 with Elastic IP
- Security Groups configured
- Professional README

## 🛠️ Tech Stack

| Technology | Version |
|-----------|---------|
| Node.js | 18 (Alpine) |
| Express | 4.18 |
| Docker | Latest |
| Docker Compose | 3.8 |
| AWS EC2 | Ubuntu 22.04 |

## 📁 Project Structure

dockerized-devops-profile/
│
├── public/
│   ├── index.html         
│   ├── welcome.html      
│   ├── profile.html      
│   ├── skills.html         
│   ├── health.html         
│   ├── style.css           
│   └── script.js           
│
├── app.js                 
├── package.json           
├── Dockerfile             
├── docker-compose.yml      
├── .dockerignore
├── .gitignore
|
└── README.md

## 🚦 How to Run Locally

### Prerequisites

- Docker installed
- Docker Compose installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Manish-281/Project-dockerized_devops_profile.git
cd /Project-dockerized_devops_profile

# 2. Build and run
docker compose up -d --build

# 3. Open browser
# http://43.205.164.180:5000/

# 4. Stop
docker compose down
```
 API Endpoints

Method	Endpoint	Description

GET	      /	        Welcome page
GET	     /welcome   Welcome message
GET	    /profile	Profile info
GET	   /skills	    Skills list
GET	  /health	    Health check

🏗️ Architecture

┌─────────────────────────────────────┐
│  User (Browser)                     │
│ http://43.205.164.180:5000/         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  AWS EC2 Instance                   │
│  (Ubuntu + Docker)                  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Docker Container             │  │
│  │  (profile-api)                │  │
│  │                               │  │
│  │  Express App (Port 5000)      │  │
│  │  - /welcome                   │  │
│  │  - /profile                   │  │
│  │  - /skills                    │  │
│  │  - /health                    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

🐳 Docker Commands Used

docker compose up -d --build
docker compose down
docker ps
docker logs profile-api
docker exec -it profile-api sh

☁️ AWS Setup

EC2 Instance: Ubuntu 22.04, t2.small
Elastic IP: Static IP attached
Security Group:     SSH (22) — My IP
                    HTTP (5000) — Anywhere

📝 What I Learned

Building REST APIs with Express

Dockerizing Node.js apps

Docker Compose for orchestration

Deploying on AWS EC2

Configuring Security Groups

Elastic IP setup (static IP)

SSH and Linux server management

Professional UI with HTML/CSS/JS

Author :

Manish

GitHub: @Manish-281

Live Demo:http: http://43.205.164.180:5000
                    
