
![Node.JS](https://avatars.githubusercontent.com/u/9950313?s=200&v=4)

# Node.js Chat Application 

![Apache 2.0 License](https://img.shields.io/badge/License-Apache2.0-orange)
![NodeJS](https://img.shields.io/badge/Built_with-NodeJS-green)
![Javascript](https://img.shields.io/badge/Built_with-Javascript-yellow)
![NPM](https://img.shields.io/badge/Powered_by-npm-blue)


A simple real-time chat application built with Node.js, Express, Socket.io, and UUID. Also other tests added for
packages like: moment, iodash, underscore, email validator.


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

This project showcases the capability of Socket.io in handling real-time communications in a web application.
It's built using Express for the backend server and UUID for unique identification of chat messages.


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
```


## Features

- **Real-time Chat**: Users can join and send messages in real time.
- **Unique Identification**: Each message is tagged with a unique UUID.
- **User Recognition**: The application recognizes users and announces when someone joins the chat.
- **Other tests**: tests with uuid, moment, iodash, underscore, email validator


## Installation

1. Clone the repository:

```bash
git clone https://github.com/YourUsername/nodejs-express-socket-uuid.git
```

Navigate to the project directory:

```bash
cd nodejs-express-socket-uuid
```

Install the dependencies:

```bash
npm install
```

2. Installing a Node.js package

For our example, let''s say you want to install the express framework. Here's how you'd do it:

2.1. First, initialize a new Node.js project (if you haven’t already) by using:

```bash
mkdir my_project
cd my_project
npm init -y
```

2.2. Now, to install express:

```bash
npm install express
```

3. Run your server:

```bash
node server.js
```

Visit http://localhost:3000 in your browser, and you should see a "Hello World!".


4. A tip for your .gitignore:

```bash
node_modules/
*.log
```

This ensures your node_modules directory (which can be recreated with npm install from the package.json) and any .log files aren't committed to version control.


## Usage

Start the server:

```bash
npm start
```

Then, navigate to http://localhost:3000 in your web browser.


## Testing

To run the tests:

```bash
npm test
```


## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.


## Author

- Wallace Espindola, Sr. Software Engineer / Java & Python Dev
- E-mail: wallace.espindola@gmail.com
- LinkedIn: https://www.linkedin.com/in/wallaceespindola/
- Gravatar: https://gravatar.com/wallacese
- Website: https://wtechitsolutions.com/

## License

- This project is released under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
- Copyright © 2023 [Wallace Espindola](https://github.com/wallaceespindola/).
