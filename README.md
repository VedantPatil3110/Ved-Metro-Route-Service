
🚇 Ved Metro Route Service
Ved Metro Route Service is a lightweight, browser-based metro pathfinding tool built using HTML, CSS, and JavaScript — with no frameworks or libraries involved.

This project allows users to:

View available metro stations

Calculate the shortest route based on distance

Find the least-cost (fare) route

Display full route paths (for both distance and cost)

📁 Project Structure
bash
Copy
Edit
📦 VedMetroRouteService/
├── index.html        # Main frontend layout
├── style.css         # Styles for the UI
└── app.js            # Graph logic and Dijkstra's algorithm
🚀 Features
✅ View all connected metro stations
✅ Get shortest path based on distance
✅ Get least cost route
✅ See complete travel path
✅ Mobile-responsive and fast
✅ Pure HTML + CSS + JS (no React, no backend needed)

🗺️ Available Metro Stations
Bata

NHPC

OldFaridabad

BadkalMor

Badarpur

Govindpuri

LajpatNagar

CentralSecretariat

RajivChowk

NehruEnclave

Janpath

🧪 How to Use
Clone or download the project files

Open index.html in any browser

Enter source and destination station names (case-sensitive)

Click a button to view routes, costs, or full paths

🔍 Sample Queries
Source	Destination	Example Output
Bata	LajpatNagar	Shows distance & cost route
NHPC	RajivChowk	Finds shortest path through CentralSecretariat
NehruEnclave	Janpath	Computes bidirectional connection
Badarpur	RajivChowk	Traverses multiple intermediate stations

⚙️ Technical Highlights
Uses Dijkstra's Algorithm for routing

Metro map stored as an adjacency list

Distinct weights for:

Distance (in units)

Cost (₹ fare)

No dependencies, no installation required

📌 Future Scope
Station selection via dropdown menus

Animated metro map visualization

API integration (C++ backend or Node.js)

Live fare updates and travel times

👨‍💻 Developed By
Vedant Patil
Computer Science Enthusiast | Web Developer | System Architect

Project: Ved Metro Route Service 🌐
