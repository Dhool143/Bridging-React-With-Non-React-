React + Vite
Dynamic Poll Dashboard

Overview

The Dynamic Poll Dashboard is a React application that demonstrates how to integrate a non-React JavaScript library (Chart.js) with React using the useEffect hook. Users can vote for their favorite JavaScript framework, and the chart updates in real time as the vote counts change.

Features

React state management with useState
Integration of Chart.js with React
Real-time chart updates
useRef for canvas and chart instance references
useEffect lifecycle management
Cleanup using destroy() to prevent memory leaks and rendering conflicts
Technologies Used

React
Vite
JavaScript
Chart.js
Installation

Clone the repository:
git clone

Navigate to the project folder:
cd dynamic-poll-dashboard

Install dependencies:
npm install

Install Chart.js:
npm install chart.js

Start the development server:
npm run dev

How It Works

React stores vote counts in state.
Users vote by clicking one of the framework buttons.
The useEffect hook detects state changes.
Chart.js updates the existing chart using the new vote data.
The cleanup function destroys the chart instance when needed to prevent memory leaks.
Test Cases

Normal Cases

Click React once.
Expected Result: React vote count becomes 1.
Click Vue three times.
Expected Result: Vue vote count becomes 3.
Click Angular five times.
Expected Result: Angular vote count becomes 5.
Edge Cases

No votes cast.
Expected Result: All vote counts remain 0.
Cast more than 20 votes for one framework.
Expected Result: Chart scales correctly without errors.
Rapidly click multiple buttons.
Expected Result: Chart updates correctly and application remains stable.
Learning Outcomes

This project demonstrates:

React state management
React hooks (useState, useEffect, useRef)
Integration of third-party JavaScript libraries
Imperative updates with Chart.js
Proper cleanup of external resources
