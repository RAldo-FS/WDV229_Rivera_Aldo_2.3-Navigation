
# 💻 Project & Portfolio II

# Project Name: WDP2 Portfolio Project

### Aldo Rivera

🆔 &nbsp; 0005413669

📪 &nbsp; arrivera@student.fullsail.edu


[Web Development - B.S. - Online](https://www.fullsail.edu/degrees/web-development-bachelor)
<br>
![Project and Portfolio II: Web Development - Online](https://img.shields.io/badge/Class-Project%20and%20Portfolio%20II-orange?logo=react)



<br>

## 📢 &nbsp; Milestone Check-Ins

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a succinct update on how things are going.  
Use the prompts below as a guide on what to write about.    
For each Milestone #2-4, you should use all 4 icons.   

⚙️ Overview - What I worked on this past week
<br>
🌵 Challenges - What problems did I have & how I'm addressing them
<br>
🏆 Accomplishments - What is something I "leveled up" on this week
<br>
🔮 Next Steps - What I plan to prioritize and do next

<br>

### Milestone 1

For this milestone I created a wireframe prototype in Figma.   
- [Figma Link](https://www.figma.com/design/uhXkxSB9ISSexvI6cIcdEF/WDV229_Rivera_Aldo_Milestone-1?node-id=0-1&t=JjmYZtcZRBBiajg4-1)


<br>

### Milestone 2
⚙️ Overview - In week 2 I worked on lesson 2.0 Research: MongoDB Or Local Storage. I decided to go with local storage using React Hooks. 
<br>
🌵 Challenges - Week two's primary impediment was time. I fell behind schedule due to personal/work related challenges. All I can do is keep moving forward. 
<br>
🏆 Accomplishments - Aside my time restraints. Assignment 1.4 Exercise 01: Library Tutorial was turned in on time. Began assignment 2.3 right after. Setup my Vite React project and installed my libraries (Chakra UI, React Router, react-simple-star-rating).
<br>
🔮 Next Steps - Complete assignment 2.3 Milestone 2: Navigation before midnight today Oct. 13, 2026. After submitting 2.3, move onto Milestone 3 to save coffee entries with local storage, connect my SampleAPI Coffee API to Search, and add the clickable star ratings.

<br>

Please discuss the following:  
#### Page #1   
- Overview
- Purpose: Introduces my Coffee Bean Journal app, explaining what the app is for and how it's organized.   

#### Page #2   
- Dashboard  
- Purpose: This is the home page. Shows a grid of logged coffees with quick glance ratings, and each card links to its Tasting Notes (page).   

#### Page #3   
- Search  
- Purpose: Lets users look up coffee drinks by name or ingredient. For Milestone 3, the results will come from the SampleAPIs Coffee API.  

#### Page #4   
- Tasting Notes  
- Purpose: The detail page for one coffee. Shows its description, ingredients, rating, and personal tasting notes, with an Edit and Delete option.
 

#### Page #5   
- Profile  
- Purpose: Shows the user's info and quick stats about their coffee journey, with a form to edit their profile. Dark/light mode was planned for Milestone 4. 

<br>

### Milestone 3
⚙️ Overview - For week 3 work, I turned Milestone 2 navigation into a functional app. Users are able to add coffee entries with a star rating, get "Try Something New" suggestions from the SampleAPIs Coffee API. Search drinks by name or ingredient (try searching "milk" =). Users can also rate, edit, and delete coffee entries on the Tasting Notes page, save their profile in the Profile page. Coffee entries and the profile are saved with localStorage. 
<br>
🌵 Challenges - In week 2 I ran into time constraints due to personal/work matters. In week 3, I did not allocate enough time to finish before the due date, my apologies. Most of my bugs came from props. As I wrote code into any file, I sometimes left out the props in the function line, or just forgot to pass them from the App.jsx file, which caused undefined message errors. So I learned to double check both, the prop has to be sent in App.jsx and received by the page's function. I continue to run commands from the wrong terminal directory/folder, so I've made some terminal commands a habit. 
<br>
🏆 Accomplishments - I'v improved on lifting state up to App.jsx and passing callback props like: addCoffee, editCoffee, deleteCoffee; And using useParams to build a detail page from the URL. Had more practice pulling in JSON data with fetch, .then, and .catch, plus saving data to localStorage. I used familiar array logic using forEach, filter, push, and indexOf.  
<br>
🔮 Next Steps - Move onto Milestone 4 with some styling changes I'd like to make, but make instructor recommended changes as well. I still have placeholder images, work on spacing in some pages, and begin working on my overview video. 

<br>

Please discuss the following:
#### API    
- Link to the API that is used in your code [SampleAPIs Coffee API](https://sampleapis.com/api-list/coffee)    
- Reason you chose the API: It's a free API so great for learning. Didn't require API key, and returns simple JSON data with titles, descriptions, ingredients, and images, which fit my application search and recommendation features.
- Where in your code did you use it?
    - Dashboard.jsx: line 7 (myApiUrl) and line 18 (fetch), for the "Try Something New" suggestions.
    - Search.jsx: line 5 (myApiUrl) and line 21 (fetch), for The Bean Finder search page.

#### 1st Library
- Link to the library: [React Simple Star Rating](https://www.npmjs.com/package/react-simple-star-rating)  
- Link to library tutorial that you made already: [My React Simple Star Rating Library tutorial](https://fullsailedu-my.sharepoint.com/:v:/g/personal/arrivera_student_fullsail_edu/IQCUTw1qexQOSLUQGjLfJubEAfQs9YrKRe0OSxuuPwaIFnE?e=eA6FJs&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)    
- Reason you chose this library: Rating each coffee is a core feature of my coffee journal. It gives clickable and read only stars with one component and a few props, and it has zero dependencies.
- Where in your code is it used?
    - AddCoffeeForm.jsx: line 3 (import) and line 54 (clickable stars when logging a new coffee)
    - CoffeeCard.jsx: line 3 (import) and line 21 (read only stars on each Dashboard card)
    - TastingNotes.jsx: line 4 (import) and line 90 (clickable stars to update a coffee's rating)

#### 2nd Library    
- Link to the library: [React Icons](https://react-icons.github.io/react-icons/)
- Reason you chose this library: For plug and play simplicity. Setting react icons is fast without much configuration.    
- Where in your code is it used?
    - CoffeeCard.jsx: line 4 (import) and line 15 (coffee bean icon on each Dashboard card)
    - TastingNotes.jsx: line 5 (import) and line 152 (coffee bean icon in the round image)
    - Profile.jsx: line 3 (import) and line 81 (profile picture icon)

#### Persistent Data    
- Discuss if you have used MongoDB or Local Storage: I used localStorage.   
- How was it used in your code?
    - My coffee list and my profile are saved in the browser. On load, "localStorage.getItem()" reads the saved data, and then "JSON.parse()" turns it back into an array or object. If nothing is saved yet (like on a new browser), the app uses sample data instead so it never assumes localStorage already exists. Every time the data changes, a "useEffect" saves it with "localStorage.setItem()" and "JSON.stringify()", since localStorage only stores text.
- Where in your code is it used?
    - App.jsx: line 20 (load the coffee list) and line 33 (save the coffee list). Sample coffees for a first visit are in "src/data/starterCoffees.js".
    - Profile.jsx: line 18 (load the profile) and line 28 (save the profile)    



<br>

### Milestone 4
⚙️ Overview - For the final week I focused on fixing issues and cleaning up my project. My instructor couldn't open my Milestone 3 project because react-icons wasn't listed in my package.json, so I fixed that, tested it with a fresh clone, and pushed the update. I also fixed a favicon warning and removed files I didn't need.
<br>
🌵 Challenges - I ran out of time to add dark/light mode as intended, so I plan to add this as a future update once I free up some time.
<br>
🏆 Accomplishments - I learned how to test my project the way anyone sees it, by cloning my branch into a new folder and running npm install. My project now runs with no errors or warnings from a fresh copy.
<br>
🔮 Next Steps - Add dark/light mode, replace my placeholder images with real coffee photos, and keep improving the spacing and layout to better match my Figma design.

<br>

Please discuss the following:  
#### Changes
- Discuss any changes or updates that you have made to your site since Milestone #3:
- Fixed the missing react-icons dependency in package.json, so the project installs and runs correctly on any computer.
- Fixed the favicon path in index.html ("/coffee_bean.svg" instead of "/public/coffee_bean.svg"), which removed a Vite warning.
- Removed extra package files that were accidentally created outside my project folder.
- Tried adding dark/light mode with Chakra UI's color mode snippet, but it caused console errors, so I removed it for now.
- Added spacing below my overview card. 


#### Styling
- Discuss the process you used to style your page:
- I started with my Figma prototype, which uses the Simple Design System layout, and built each page to match it.
- I used Chakra UI style props (like bg, p, and borderRadius) to style my components, which is a CSS-in-JS approach. I chose Chakra UI because styling with props right in my JSX felt easier than switching between separate CSS files.
- My colors come from my "Mocha Latte" palette on coolors.co. I saved them as custom color tokens in theme.js (brand.taupe, brand.jet, brand.smoke, brand.brown), so I can change a color in one place and it updates the whole app.
- I used React Icons for the coffee bean and profile icons, and React Simple Star Rating for the star ratings.

#### Link To Overview Video
- [Coffee Bean Journal – Final Presentation Video](https://fullsailedu-my.sharepoint.com/:v:/g/personal/arrivera_student_fullsail_edu/IQCyWFaXO6IxRpE4ur39hU-bAY0YHLwnECoXfciPqXsxvxY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=z4fgk2)

<br>
<br>
<hr/>

# Project Overview

### Your project will use the MERN Tech Stack and must include the following:

-   A Git Repo, with a master, dev, and milestone branches
-   Readme File that explains your project and tracks your milestones
-   A React Front End
-   React Routing with  _at least_  4 different views/pages
    -   Dashboard/Main
    -   User/Settings
    -   Search
    -   Detail Page
-   Node/Express Backend
-   A Mongo DB Element OR Local Storage for persistent data
-   Connect to at least 1 free API
-   The project must use at least 2 different libraries, not including React itself
    -   One of these libraries you will create a tutorial for in Exercise 01
-   It should look visually appealing and must be easy for the end-user to use and understand. You may use Tailwind or any other front-end library/framework.

**Milestone #1 (Due: Monday of Week 2)**

-   Decide on your topic and theme for your project.
    -   Check out the Free API sites for some ideas of an API that you can utilize
        -   [Apipheny](https://apipheny.io/free-api/)  
            
        -   [Mixed Analytics](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)  
            
        -   [I Am Sajan](https://iamsajan.com/free-api-without-an-api-key/)  
            
-   Functional Spec that explains the scope of the work and the deadlines that must be met.  
    
-   Create a Wireframe Prototype in Figma that will help non-tech people understand your idea.
    -   Keep in mind that a lot of your bosses will need only high-level concepts and will not be concerned with the actual code. The code is your job.

**Milestone #2 **(Due: Monday of Week 3)****

-   Create your Git Repo using the provided link, which will clone over a blank repo.
-   Start to code your project.
    -   I will not give you a step-by-step guide for this.
    -   At this point, you must use your skills and build it out yourself.
-   Along the way, if you get stuck, you may reach out to the lab assistants, but remember this is YOUR portfolio project, and troubleshooting your own code is a part of this process.
-   By Milestone #2, I am going to be checking that you have a React app that can compile without error and that you have your navigation up and running.

**Milestone #3 **(Due: Monday of Week 4)****

-   By this point, you should have a functional prototype of your project. It might not look pretty yet, but that is what the final week is for.
-   Your Git Repo should have a number of significant commits pushed to it.

**Milestone #4 **(Due: Sunday of Week 4)****

-   Your completed project will be due.
-   You must create a (3 to 10) minute long video that goes through your project, what you did this month, and the technologies that you used to get it working.
    -   Remember it is your job to sell your work and really show it off.
