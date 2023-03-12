# Support Desk task

## Structure

The code contains 3 components - App.jsx(main page) , Header.jsx(Header) and CardPerson.jsx (userData in card)

###  App.jsx

#### Functionality
 - Importing, if needed fetching the data from the API
 - Using state for a search query that we set from the Header component using props.
 - Filtering data and rendering the users (all if the search state is empty) and selecting depending on the input we type. We count only the API object values that are string (typing "true" or "phone" won't activate the filter)
#### Rendering
 - Header component and passing the props to set the state
 - Container for the card component
 - Calling filteredData function and using map to make a copy of the card for each user + giving props. 
 - Using the phone as a key value, because it should be unique and we don't have an ID.

###  Header.jsx


#### Rendering
 - H tag for the Given text
 - Div "Serch container", with input that value & onChange are passed as props into the App component
 - The Search button for the icon only 

###  CardPerson.jsx

#### Functionality

 - setStatus function that returns the icon to show if the user is available or not. 

#### Rendering
 - imgContainer with 2 images - 1 is the user image(if missing put default) and the other the availability image that calls "setStatus" function
 - Container for details that returns the user details 
 - Some extra padding for the Location paragraph to cover other <p> tags until a user hovers the card

###  Styles

#### index.css

 - styling no class components like "body, header, code"
 - Adding Media screen (making it responsive for small screens to 300width in CSS) "with class styles"

#### App.css

 - Class styles, with comments for each section of the components
 - Hover or other effects at the end of each selection

_________________________________________________________________________________________________________
## Task

Create a simple Support Desk app that should look similar to the following mockup. Use the [assets/api.json](assets/api.json) file to simulate Web API calls.

![Design](public/design.png)

## Requirements

- Must be a Single Page App (SPA). Use React, Angular, Vue or a SPA framework of your choice.
- Must be responsive - working on mobile, tablet and desktop.
- Make sure more details come up when you hover person (see the second item).
- Change icon depending on the person's status. Use [assets/icon-available.svg](assets/icon-available.svg) if the person is available, [assets/icon-busy.svg](assets/icon-busy.svg) otherwise. Use [assets/icon-search.svg](assets/icon-search.svg) for the search bar.
- Implement basic search functionality.

Feel free to use a UI library of your choice - Material Design, Bootstrap, Tailwind, etc.

## Criteria

The following are taken into consideration

- Clean and well-organized code
- Architecture
- Code comments (quality, not quantity)
- Tests
- Linters, docs, etc. are a bonus

We are looking for organized scalable frontend code, with attention to details and corner case handling. Show us your eye for detail and consideration for colleagues that will maintain and modify the code.

Please let us know if you have any questions.
