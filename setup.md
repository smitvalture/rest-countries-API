With this templete you just have to run just one command in your terminal & you are good to go.
->run the following command (This will create node_module folder in your project folder.) :- 
npm i





Here are the steps if you Want to create it by yourself :----

Step 1 – Create Your Project Folder :- 
    npm create vite@latest your-project-name -- --template react

Step 2 – Navigate to Your Project Folder :- 
    cd your-project-name

Step 3 – Install Tailwind CSS and Other Dependencies :- 
    npm install -D tailwindcss postcss autoprefixer

Step 4 – Generate the Configuration Files :- 
    npx tailwindcss init -p

Step 5 – Configure Source Paths
    Add this in your content section of tailwind.config.cjs :- 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

Step 6 – Add Tailwind Directives to Your CSS (./src/index.css) :- 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Step 7 – Start Your Vite Server :- 
    npm run dev

Step 8 – Start Writing Tailwind CSS :- 
