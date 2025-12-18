# Digi Dhost 

**Your Friendly Guide to the Digital World.**

Digi Dhost is a bilingual (English/Tamil) digital literacy assistant designed to help users learn technology—from basic smartphone usage to advanced professional tools.

---

##  Features

-   **Bilingual Support**: Seamlessly switches between English and Tamil.
-   **AI-Powered Chatbot**: Ask questions about technology and get instant, helpful answers.
-   **Interactive Tutorials**: Step-by-step guides for popular apps and tools.
-   **Practice Labs**: Safe environments to explore tech concepts.
-   **Fun Facts**: Learn interesting trivia about the digital world.

---

##  Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (React)
-   **AI Provider**: OpenRouter (Model: `nex-agi/deepseek-v3.1-nex-n1:free`)
-   **Styling**: CSS Modules / Framer Motion for animations.

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or higher) installed.
-   `npm` or `yarn` package manager.

### Installation

1.  Clone the repository (or download the source).
2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1.  Create a file named `.env.local` in the root directory.
2.  Add your OpenRouter API Key:
    ```env
    OPENROUTER_API_KEY=your_api_key_here
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Customization

### Background Image
The home page features a custom background image with a gradient overlay.
-   **Image File**: Located at `public/homepage-genai.png`.
-   **Changing the Image**: simple replace `public/homepage-genai.png` with your new image (keep the same name) OR update the path in `src/pages/index.js`.
-   **Opacity**: To adjust the overlay opacity, modify the `rgba` alpha values in the linear-gradient string in `src/pages/index.js`.

---

## Context

This project was built to bridge the digital divide by providing an accessible, friendly, and intelligent guide for digital literacy.
