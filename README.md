# Expense Tracker App

The Expense Tracker App is a React Native application built using Expo that allows users to efficiently manage their expenses. With the ability to add, update, and delete expenses, along with insightful features like recent expenses and comprehensive expense records, this app offers a seamless experience for tracking personal financial transactions. The app integrates React Navigation for smooth navigation and utilizes Firebase as its backend for real-time data management. Moreover, the app ensures a user-friendly interface by validating inputs and providing clear messages to guide users in entering accurate expense details.

## Features

- **Expense Management:** Users can easily add, update, and delete expenses, making it convenient to keep track of their financial transactions.

- **Tab Navigation:** The app features two bottom tabs: "Recent Expenses" and "All Expenses." The "Recent Expenses" tab displays expenses from the last 7 days, while the "All Expenses" tab provides a comprehensive overview of all recorded expenses.

- **Navigation Hierarchy:** The navigation structure employs React Navigation. Stack Navigation manages the overall app navigation, while Bottom Tabs Navigation is nested within the stack for a seamless user experience.

- **Firebase Backend:** The app utilizes Firebase as its backend, ensuring real-time synchronization of data between devices and providing a reliable storage solution for expense records.

- **Input Validation:** The app offers input validation to ensure accurate expense details. User-friendly messages guide users in entering the correct format and information for expenses.

- **Offline and Online Support:** The Expense Tracker App is designed to function both offline and online. React Context facilitates offline capabilities, allowing users to continue managing expenses even without an active internet connection. When online, the app seamlessly synchronizes data with the Firebase backend.