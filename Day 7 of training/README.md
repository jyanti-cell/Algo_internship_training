# Day 7: Intro to Node.js & Building a Server-Side Student Registry

Today, I took my first major step into backend web development! I moved away from client-side code to build a live server from scratch using Node.js and Express.js. I designed a Student Registry system that doesn't just display a form, but actually captures user inputs, processes the backend routes, and writes data permanently to a local file.

## 📝 What I Practiced & Engineered Today:

* **Backend Server Initialization:** Set up a live local development server using `express()` running actively on port 3000.
* **Route Handling (GET & POST Methods):** Handled primary `GET` requests to serve the frontend interface and configured a secure `POST` route to collect incoming payload forms via `express.urlencoded()`.
* **File System Operations (`fs` Module):** Practiced working with Node's native File System module. Used `fs.appendFileSync()` to save student profiles permanently inside a `student_registry.txt` file, and `fs.readFileSync()` to fetch that data back.
* **Static Assets Middleware:** Implemented `app.use(express.static(__dirname))` to seamlessly link my external stylesheet asset directly through the Express routing pipeline.
* **Server-Generated Responsive UI Layouts:** Embedded custom HTML containers directly inside `res.send()` templates to ensure that the successful submission states and registered user logs look beautifully styled, centered, and clean.

## 📂 Structural Files Managed:
* `index.html` — Foundational frontend structure capturing student names and roll numbers.
* `style.css` — Custom styling sheet driving clean form layouts, inputs, and button component designs.
* `apps.js` — The core engine driving backend paths, text file appending, and live system logs.
* `student_registry.txt` — Local text document acting as my raw database log sheet.
* `package.json` & `package-lock.json` — Tracking framework dependencies and configuration modules.
* `node_modules/` — Downloaded ecosystem environment handling library dependencies.
*
