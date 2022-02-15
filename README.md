Link to the Project Report: https://docs.google.com/document/d/1HDNpGKUTVpfSyLamEInAwF8HQ7we_7A0w-pMqsbxXGg/edit?usp=sharing
  
# Instructions to Run the Program:
  1) npm start
  2) node server.js
  3) node server1.js 
  4) node server2.js
  
# Short Description of Project:
The official ComplaintBox of every school and company in India, so that the complaints of people can be heard and administration can look into it and improve it.

# Tech Stack Used:
HTML, CSS, JavaScript, React Js, Node js, Express js, Mongo DB

# Why We Made This Website and What problems it solves?
We made this website because people feel hesitation in telling their complaints/problems to the administration of college or company directly. So, our website allows people to post their problems or complaints to the administration in an anonymous way, which means people can come to our website, log in(anonymous username, using only college mail)  and post their complaints but their name or id won’t be seen by anybody.
 Also, because of the pandemic all work and education was done in an online mode,many students were not able to ask their complaints/doubts to the administration due to lack of a medium to interact. Hence this product could come handy during that time.
Now, comes the problem that if it’s anonymous then anyone can come and write anything abusive to the administration too. So, we also tried to solve this problem by dividing users into two types: normal and admins, where admins are people like SAC in colleges who can filter out the abusive comments and then can redirect the complaints to the administration.
So, our website basically provides people a way to interact with the administration without hesitation.

# Functionalities Of This Website
Functionalities of our website are as follows :-
1) People here can come and post their complaints / problems anonymously.
2) Filtering of abusive complaints / problems can also be done by giving the powers to remove complaints to admins (SAC for example in college) after that only that complaint is passed to the administration.
3) Our website can filter out comments on the basis of tags used for complaints for example complaints of food , complaints of sports equipment in colleges are filtered out by selecting the respective tag. 
4) If we login through Admin account, then we will be able to mark or unmark a complaint as solved and unsolved. All solved problem will be marked as “Solved” in its tags. (Tried to implement but were unable to do due to Time Constraints).

# Future Scope Of This Project?
Now, we made this project by keeping in mind the students of college who can’t tell their complaints to administration directly without hesitation, but this website can be used by companies too where employees can share their complaints/problems to their company’s administration . So, basically we want to be the official ComplaintBox of every school and company in India, so that complaints of people can be heard and administration can look into it and improve too.

# What Improvements can be done?
1) After the problem/complaint is solved, An Email (contents-default or custom) can go to the person whose complaint was by fetching his mail id from the database saying “Your complaint / problem is resolved. Please check it once.” 
2) Can implement a more generalized complaint box so that different organizations can use their separate version of complaint box.
3) Can add more features such as replies (when we click on that complaint an additional window can be displayed for this) so that the authority can discuss the solutions to that complaint. We can add poll features so that opinions of other students can also be considered. Only the admins will be able to reply to a complaint. Hence it can be made more interactive.
4) While filing a complaint, upload an image option can be provided to make the doubt more clear. Eg during filing a complaint for broken doors,taps , during filing a complaint regarding unmaintained grounds/classroom/rooms/hostel area etc.
5) Can implement a tag feature so that the complaints can be sent/forwarded ( as a notification on website/email) to the specific authority to address it.

# Problems faced during Making
1) As reactjs was used, one problem we faced was how to change the url of website and change the display accordingly when the login request has authenticated. We were not able to reflect a change in URL and display after being successfully login( As sometimes when the login fails we dont have to change the URL). Hence currently we are changing the login page to the Home Page manually. Navigation in Home Page is working correctly.
2) Faced a lot of problem in the backend part. How to retrieve the information form the backend server and how to display them in the site was a big problem we faced and failed to resolve in the given time.

# Modules Required
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.1",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "ejs": "^3.1.6",
    "express": "^4.17.2",
    "express-session": "^1.17.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.2.1",
    "passport": "^0.5.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^6.1.0"
 
 # Link to Youtube demo Video
https://youtu.be/Lmc4rT59Qqg    
*****************************************************************************************************************************************************************

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
