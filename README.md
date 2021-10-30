# React Hoarder

> You are a hoarder. But not just any hoarder. You are an arrogant hoarder who wants to show off all of the stuff you hoard. You want an application that gives you a list of anything possible to hoard, and add them to your own personal collection as you acquire them.
> 
[![Netlify Status](https://api.netlify.com/api/v1/badges/a203a7d2-c3dd-4ef3-b199-76dbc2fb382b/deploy-status)](https://app.netlify.com/sites/squadjs-react-hoarder/deploys)
https://squadjs-react-hoarder.netlify.app/
## Data
![image](https://user-images.githubusercontent.com/86808221/139348379-3794f7f6-dd00-40f1-ae44-4f654bcd059f.png)
Data Flowchart
![image](https://user-images.githubusercontent.com/86808221/139351620-6609248b-61bf-4bb7-98ee-34c7535ef03d.png)
[Use this JSON file to seed your "items" collection in Firebase.](./items.json)
## Assignment Parts

# React Hoarder Part 1: Authentication and Routing

## User Stories - Authentication

* As a user, if I go to the application and I am not logged in, I should see a google authentication button.
* As a user, I should be able to authenticate via google.
* As a user, I should always see a navbar.
* As a user, when I am logged out, the navbar should only display the brand name.
* As a user, when I am logged in, the navbar should display links to home, My Stuff, New, and logout.
* As a user, when I click the logout button in the navbar I should be logged out and should see the google authentication button.

## User Stories - Routing
* As a user if I click the home link in the navbar, I should navigate to '/home'  and see an h1 tag that says 'Home'.
* As a user if I click the New link in the navbar, I should navigate to '/new'  and see an h1 tag that says 'New Stuff'.
* As a user if I click the My Stuff link in the navbar, I should navigate to '/stuff'  and see an h1 tag that says 'My Stuff' and two buttons - on that says Edit and one that says Single.
* As a user when I click the Edit button on the My Stuff page I should be redirect to '/edit/12345' and I should see an h1 tag that says 'Edit';
* As a user when I click the Single button on the My Stuff page I should be redirect to '/stuff/12345' and I should see an h1 tag that says 'Single Stuff';

# React Hoarder Part 2: CRUD on Items

## User Stories

### CREATE
* As a user, when I click New in the navbar I should be taken to the '/stuff/new' page where I should see a form for adding new items.
* As a user, when I add in details and hit save on the '/stuff/new' page my item should save to firebase and I should be redirected to '/stuff'.
![image](https://user-images.githubusercontent.com/86808221/139516451-cc940555-85ed-4637-8ada-f897d5b51411.png)
### READ
* As a user, when I navigate to the /stuff route, I should see a "My Stuff" page. This page should have a list of all of the items I have hoarded.
* As a user, when I click on an item on the My Item page, I should be taken to the Single Item page and see details for that item
![image](https://user-images.githubusercontent.com/86808221/139516353-8d96e5bc-3757-4069-9759-792abce1e286.png)
### UPDATE
* As a user, when I click a update button on the My Stuff page, I should be redirected to the edit page and should see a form pre-populated with all the information for the item I am editing.  Once I make edits and push the save button, Firebase should edit and I should be redirected to the '/stuff' page.
* As a user, when I click a update button on the Single Item page, I should be redirected to the edit page and should see a form pre-populated with all the information for the item I am editing.  Once I make edits and push the save button, Firebase should edit and I should be redirected to the '/stuff' page.
*![image](https://user-images.githubusercontent.com/86808221/139516399-5348995a-ed46-43da-8152-85b16a9c9a2f.png)
### DELETE
* As a user, when I click a delete button on the My Stuff page, the item should be removed from firebase and I should no longer see it.
* As a user, when I click a delete button on the Single Item page, the item should be removed from firebase and I should no longer see it, and I should be redirected to the My Stuff page.
