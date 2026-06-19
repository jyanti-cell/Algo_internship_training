# Day 6: Building a Weather App with Mock Authentication & Fun Quotes

Today, I applied all my JavaScript knowledge to build a fully functional, creative Weather App from scratch. Instead of just creating a basic API fetch tool, I added a mock login/signup security layer using the browser's storage and integrated funny, desi contextual weather quotes based on live temperatures!

## 📝 What I Practiced & Implemented:

* **Mock Authentication Layer:** Used JavaScript functions (`showSignup`/`showLogin`) to toggle the visibility of forms dynamically without changing pages.
* **Local Storage Integration:** Practiced using `localStorage.setItem()` and `getItem()` to securely store user credentials in the browser so users can actually sign up and log in.
* **Real-time API Integration:** Used modern `async/await` syntax with the `fetch()` API to ping the OpenWeatherMap server and pull live data for any city.
* **Conditional Fun Logic (If/Else):** Wrote custom conditional logic blocks to check the temperature range and attach a hilarious, relatable Hindi quote to the output (e.g., Mummy's sweater kalesh mode for colds, or swarg ka visa for extreme heat).
* **DOM UI Rendering:** Handled application loading states, updated text strings dynamically, and safely rendered weather icons using innerHTML templates.

## 📂 Project Files Uploaded:
* `index.html` - The main structure containing the toggleable Login, Signup, and Weather layouts.
* `style.css` - Custom design stylesheet featuring modern linear gradients, clean inputs, and form container styling.
* `script.js` - Core logic script handling auth states, LocalStorage tokens, and the dynamic weather fetch engine.
*
