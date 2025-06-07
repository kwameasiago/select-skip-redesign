[Code SandBox](https://codesandbox.io/p/github/kwameasiago/select-skip-redesign/main)
# Introduction

This is a modern, responsive React-based frontend application designed to allow users to select skip sizes for waste collection services. Built with **Vite** for lightning-fast development, **TailwindCSS** for utility-first styling, and integrated with external APIs to dynamically fetch skip data, the application ensures a seamless user experience optimized for both desktop and mobile platforms. 

---

##  Installation & Setup

### Local Development (via NPM)

> Prerequisites: Ensure you have **Node.js v18+** and **npm** installed.

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```
    
2. **Install dependencies**
    
    ```bash
    npm install
    ```
    
3. **Start the development server**
    
    ```bash
    npm run dev
    ```
    
4. Open your browser and navigate to:  
    [http://localhost:5173](http://localhost:5173)
    

---

###  Production Build (via NPM)

1. **Generate a production build**
    
    ```bash
    npm run build
    ```
    
2. **Preview the production build locally**
    
    ```bash
    npm run preview
    ```
    

> Alternatively, serve the contents of the `dist/` folder using a static server like `serve`, Nginx, or Netlify.

---

### 🐳 Running with Docker

#### 🔁 Development Mode

1. **Ensure Docker and Docker Compose are installed**
    
2. **Build and launch the development container**
    
    ```bash
    docker-compose up --build
    ```
    
3. Access the application at:  
    [http://localhost:5173](http://localhost:5173)
    

---

Let me know when you're ready to move on to the **Folder Structure** and **Design Decisions** sections.

---

##  Design Rationale 

### 1. Dark and Light toggle theme

![[Pasted image 20250607222105.png]]
![[Pasted image 20250607222125.png]]
- **Gives users control** – Some people prefer light mode during the day, others like dark mode at night. The toggle lets them choose what’s most comfortable.
    
- **Reduces eye strain** – Dark mode is easier on the eyes in low light. Light mode is clearer in bright settings. This makes the app more comfortable to use anywhere.
    
- **Improves accessibility** – It helps people with visual sensitivities or specific needs by giving them more visual options.
    
- **Saves battery** – On some phones, dark mode uses less power, which is great for people on the go.
    
- **Feels familiar and modern** – Most popular apps have it. Including this shows we care about user experience and keeping up with good design standards.


###  2. Multi-Step Progress Indicator with Color Coding
![[Pasted image 20250607222515.png]]
- **Shows users where they are** – People feel more confident when they know their place in a process. A progress tracker shows what’s done, what’s in progress, and what’s next.

- **Encourages users to finish** – Seeing completed steps gives a sense of achievement. It’s like checking off a to-do list, which motivates people to keep going.

- **Helps users understand the process** – When users see the number of steps, they get a clear idea of what’s involved. It removes uncertainty and makes the journey feel manageable.

### 3. Card Design UX Rationale
![[Pasted image 20250607223508.png]]

![[Pasted image 20250607223530.png]]

![[Pasted image 20250607223556.png]]
- **Enables quick decision-making** – Users tend to skim, not read. These cards highlight the most important info like title, cost, and hire period clearly, while tucking away less critical details. This makes it easy to compare and choose at a glance.

- **Uses color to guide choices** – Green cards feel safe and ready to go, making the “Selected” state reassuring. Orange or red cards draw attention to skips that might need a road permit or have added cost. The colors are there to help users decide faster and smarter.

- **Keeps layout consistent** – Every card follows the same structure, so comparing options is effortless. Users don’t need to re-learn how to read each one — they can instantly notice what’s different, like price or permissions.

- **Provides clear feedback** – When a user selects a card, it changes visually to confirm the action. If certain information is missing, it’s dimmed to avoid clutter but still communicates meaning. Status badges give helpful cues without overwhelming the layout.

- **Supports accessibility** – Color is always backed up by text labels, making it easy to understand even for users with colorblindness. The typography and spacing also follow good accessibility practices, so everything stays readable and clear.

- **Works well on all devices** – The cards are built to be flexible. Whether in a grid or list, on a phone or desktop, they stay clean, touch-friendly, and easy to interact with.

- **Drives user action** – The design isn’t just pretty — it encourages users to take the next step. Strong call-to-action buttons, paired with honest warnings, nudge people forward without being pushy.