# hospital-appointment-booking-backend

## Getting started with the project

- Fork the repository on GitHub.
- Navigate to the folder of the repository.
- To run this project, you should have node.js and npm installed on your system.
  If you don't have node.js and npm, you can visit [The official site of node.js](https://nodejs.org/en/)
  to install them on your system.
- Install NPM dependencies.
  ```
  npm install
  ```
- Create the .env file and copy the contents of .env.example into it by typing the following command:  
  For Linux or Mac (or Windows PowerShell):
  ```
  cp .env.example .env
  ```
  For Windows(cmd):
  ```
  copy .env.example .env
  ```
- Open the newly created .env file and set the values of MAIL_USERNAME and MAIL_PASSWORD environment variables. These are the login credentials of the account through which you can send the email to the person booking the appointment.
  ```
  MAIL_USERNAME=your.email@gmail.com
  MAIL_PASSWORD=yourpassword
  ```
- Run the development server to view the changes you are making by typing the following
  command:
  ```
  npm start
  ```

