# Node.js Chat Application (Tests on node.js with packages like socket.io, express, uuid, moment, iodash, underscore, email validator)

A simple real-time chat application built with Node.js, Express, Socket.io, and UUID. Also other tests added for packages like: moment, iodash, underscore, email validator.


## Table of Contents

- [About](#about)
- [Project Structure](#structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## About

This project showcases the capability of Socket.io in handling real-time communications in a web application. It's built using Express for the backend server and UUID for unique identification of chat messages.


## Structure:
   ```bash
    /project: nodejs-express-socket-uuid
    |-- /chat                  # node chat tests with socket.io
    |-- /node_modules          # Modules and packages installed by npm
    |-- /public                # Public static assets (e.g., styles, images)
    |-- /routes                # Express route handlers
    |-- /views                 # Template views (if using a templating engine)
    |-- /models                # Database models (if using a database)
    |-- /middlewares           # Middlewares for express (authentication, logging, etc.)
    |-- /config                # Configuration files (database, environment variables)
    |-- /test                  # Unit and integration tests
    |-- package.json           # Project manifest
    |-- server.js              # Main application entry point
    |-- .gitignore             # List of files and folders to ignore in version


## Features

- **Real-time Chat**: Users can join and send messages in real time.
- **Unique Identification**: Each message is tagged with a unique UUID.
- **User Recognition**: The application recognizes users and announces when someone joins the chat.
- **Other tests**: tests with uuid, moment, iodash, underscore, email validator

  
## Installation

1. Clone the repository:
   ```bash
      git clone https://github.com/YourUsername/nodejs-express-socket-uuid.git

Navigate to the project directory:
    ```bash
    cd nodejs-express-socket-uuid

Install the dependencies:
    ```bash
    npm install

2. Installing a Node.js package

For our example, let's say you want to install the express framework. Here's how you'd do it:

2.1. First, initialize a new Node.js project (if you haven’t already) by using:
    ```bash
    mkdir my_project
    cd my_project
    npm init -y

2.2. Now, to install express:
    ```bash
    npm install express

3. Using the express package


##Run your server:
    ```bash
    node server.js
    
Visit http://localhost:3000 in your browser, and you should see a "Hello World!".

##A tip for your .gitignore:

node_modules/
*.log

This ensures your node_modules directory (which can be recreated with npm install from the package.json) and any .log files aren't committed to version control.


## Usage
Start the server:
    ```bash
    npm start

Then, navigate to http://localhost:3000 in your web browser.


## Testing
To run the tests:

npm test


## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page.


## License
Distributed under the Apache 2.0 License. See LICENSE for more information.


## Contact

Wallace Espindola

Email: wallace.espindola@gmail.com

GitHub: https://github.com/wallaceespindola
