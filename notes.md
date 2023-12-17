# Web Development Midterm Study Guide

## 1. Link Element
- The `<link>` element is used to include external resources, such as stylesheets, in an HTML document.

## 2. Div Tag
- The `<div>` tag is a container element used to group and style content.

## 3. Selectors
- `#title` and `.grid` are different CSS selectors.
- `#title` selects elements with the `id` of "title."
- `.grid` selects elements with the `class` of "grid."

## 4. Padding vs. Margin
- Padding is the space between an element's content and its border.
- Margin is the space between an element and its neighboring elements.

## 5. Displaying Images with Flex
- To display images using Flexbox, you can use the `display: flex;` property on the container element.

## 6. Padding CSS
- Padding CSS adds space inside an element. Example: `padding: 10px;` adds 10 pixels of padding on all sides.

## 7. Arrow Syntax Function
- Arrow syntax is used to declare functions in a concise way.

## 8. Using Map with an Array
- The `map` method is used to create a new array by applying a function to each element of an existing array.

## 9. getElementByID and addEventListener
- `getElementById` is used to select an element by its `id`.
- `addEventListener` is used to attach an event listener to an element.

## 10. # Selector in JavaScript
- In JavaScript, `#` is used to select elements by their `id`.

## 11. True Statements about the DOM
- The DOM is a representation of the document.
- It can be manipulated using JavaScript.
- It defines the structure of a document.

## 12. Default CSS for Span Element
- The default CSS `display` property for the `<span>` element is `inline`.

## 13. Changing Background Color in CSS
- To change the background color of all `<div>` elements to red, use: `div { background-color: red; }`

## 14. Displaying Image with Hyperlink
- To display an image with a hyperlink, use the `<a>` element wrapping an `<img>` element.

## 15. CSS Box Model
- The CSS box model layers, from inside to outside: content, padding, border, margin.

## 16. Setting Text Color in CSS
- To set the text "troubl" to green, use: `.class-name { color: green; }`

## 17. Output of a For Loop
- Use a `for` loop to iterate through an array and log elements using `console.log`.

## 18. Selecting Element by ID in JavaScript
- Use `getElementById` to select an element with the id "byu" and change its text color.

## 19. HTML Tags
- Paragraph: `<p>`
- Ordered List: `<ol>`
- Unordered List: `<ul>`
- Second Level Heading: `<h2>`
- First Level Heading: `<h1>`
- Third Level Heading: `<h3>`

## 20. Declaring Document Type
- Declare the HTML document type as: `<!DOCTYPE html>`

## 21. Valid JavaScript Syntax
- `if (condition) { }`
- `else { }`
- `for (initialization; condition; iteration) { }`
- `while (condition) { }`
- `switch (expression) { case: ... }`

## 22. Creating JavaScript Object
- JavaScript objects can be created as: `{ key: value }`

## 23. Adding Properties to JavaScript Objects
- JavaScript objects can have new properties added dynamically.

## 24. Including JavaScript in HTML
- Use the `<script>` tag to include JavaScript on an HTML page.

## 25. Changing Text in JavaScript
- Use JavaScript to select elements by their content and modify them.

## 26. JSON
- JSON (JavaScript Object Notation) is a lightweight data interchange format.

## 27. Console Commands
- `chmod`: Change file permissions.
- `pwd`: Print working directory.
- `cd`: Change directory.
- `ls`: List directory contents.
- `vim` and `nano`: Text editors.
- `mkdir`: Create a directory.
- `mv`: Move or rename files.
- `rm`: Remove files.
- `man`: Display manual pages.
- `ssh`: Secure Shell.
- `ps`: List processes.
- `wget`: Download files.
- `sudo`: Execute a command as a superuser.
## 28. Creating a Remote Shell Session
- To create a remote shell session, you can use the `ssh` command followed by the target server's address. For example:
  ```bash
  ssh username@hostname
  ```

## 29. Using `-la` with `ls` Command
- When you specify the `-la` parameter with the `ls` command, it lists files and directories in long format, including hidden files, and displays detailed information about each file, such as permissions, owner, size, and modification date.

## 30. Top-Level Domain, Subdomain, Root Domain
- In the domain "banana.fruit.bozo.click":
  - "click" is the top-level domain (TLD).
  - "bozo.click" is a subdomain.
  - "fruit" is also a subdomain.
  - "banana" is not a separate domain but part of the subdomain "fruit."

## 31. HTTPS and Web Certificate
- A web certificate (SSL/TLS certificate) is necessary to use HTTPS (HyperText Transfer Protocol Secure). It ensures secure and encrypted data transmission between the web server and the client.

## 32. DNS A Record
- A DNS A record can point to an IP address, allowing you to map a domain name to a specific IP address.

## 33. Ports 443, 80, 22
- Port 443 is reserved for HTTPS, used for secure web communication.
- Port 80 is reserved for HTTP, used for standard web communication.
- Port 22 is reserved for SSH, used for secure shell connections.

## 34. Output of Promises
- Promises in JavaScript are used for handling asynchronous operations. The output of a promise depends on whether it is resolved or rejected. The output is typically the result of the operation when resolved or an error when rejected.



## Networking

1. **Port Usage:**
   - HTTP: 80
   - HTTPS: 443
   - SSH: 22

2. **HTTP Status Codes:**
   - 300 Range: Redirection
   - 400 Range: Client errors
   - 500 Range: Server errors

3. **HTTP Header `Content-Type`:**
   - Specifies the media type of the resource.

4. **Cookie Attributes:**
   - `Domain`: Specifies the domain for which the cookie is valid.
   - `Path`: Specifies the URL path for which the cookie is valid.
   - `SameSite`: Controls when cookies are sent with cross-site requests.
   - `HTTPOnly`: Restricts the cookie from being accessed by client-side scripts.

## Express.js

5. **Middleware Output:**
   - For an HTTP GET request with a URL path of `/foo/bar`:
     ```javascript
     console.log('/foo/bar');
     ```

6. **MongoDB Query:**
   - `{ cost: { $gt: 10 }, name: /fran.*/ }`
   - Selects all documents where cost is greater than 10 and name matches the regex `/fran.*/`.

7. **Password Storage:**
   - Use hash functions (e.g., bcrypt) to securely store hashed passwords.

## Node.js and Websockets

8. **Websockets Console Output:**
   - Depends on the actual code; typically, it logs WebSocket-related information.

9. **WebSocket Protocol:**
   - Used for real-time communication between a client and a server.

## React

10. **JSX and Curly Braces:**
    - JSX allows embedding expressions in curly braces `{}`.

11. **React Component Output:**
    - Given the provided React component structure, it generates a list of welcome messages.

12. **Numbers React Component Output:**
    - Generates an unordered list (`ul`) containing list items (`li`) with numbers 1 to 5.

13. **React State and useState:**
    - Declares a state variable `count` and a function `setCount` to update it. Renders a paragraph and a button, updating the count on button click.

14. **React Hooks:**
    - Used for adding state and lifecycle features to functional components.

15. **`useEffect` Hook:**
    - Used for side effects in functional components, like data fetching, subscriptions, etc.

16. **React Routing with `react-router-dom`:**
    - Configures routes using `BrowserRouter` and `Routes`, rendering different components based on the path.

## npm and Package.json

17. **npm in Web Development:**
    - npm (Node Package Manager) is used to manage and install packages (dependencies) in a project.

18. **package.json:**
    - Configuration file that holds metadata and dependencies information for a npm project.

## Miscellaneous

19. **Fetch Function:**
    - Used to make network requests, similar to XMLHttpRequest.

20. **Node.js:**
    - JavaScript runtime for executing server-side code.

21. **Vite:**
    - A build tool for modern web development, focused on speed and simplicity.