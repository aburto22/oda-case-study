# Oda Test Case - Search List
By Alejandro Aburto S.

## Introduction
This projects provides a simple UI to search products from Oda public API.

In order to run the the project, client and server should be running.

Then, visit http://localhost:5173/ to test the project.

## Commands
Install dependencies: `yarn`

Run server: `yarn server:dev`

Run client: `yarn dev`

Run tests: `yarn test`

## Design decisions

### Architecture
This projects consists of a client and a server. The client is a Single Page React Application built with Vite. The server exists to "proxy" requests to fetch Oda's api, to avoid having CORS issues when fetching front the client.

### State
I ended up using query params to hold the site state, which is basically a search term and page number.

This allowed me to avoid lifting up and passing down state, as the url is accessible by all components at all times.

## Challenges

### CORS issues
It has been a while since I created an express app. I thought about using Remix or Next to have a "server" inside React, but ended up creating a little server to proxy the request.

### Debouncing
I will admit that debouncing gave me a headache at the start. My issue is that, for a reason that I struggle to explain myself, I decided to debounce directly in the fetcher function. This created issues when the "search" term had to be debounced, but not the "page" number.

I ended up creating a search component that is debounced by default, and then kept the fetcher doing only what it is really good at doing: fetching.

## Next steps
I guess this project could be improve in a lot of different ways:

### CI / CD pipeline
I would be good to have a GitHub action (or something else) to run our linting and tests when creating a pull request or merging into main.

### More tests
At the moment there is a single test that test a bunch of functionality together. It should be split in independent tests where each test only test one thing. Also, the debounced search components should also be tested to ensure it is actually debouncing.

### Filters and sorting
The search list could have some filters and sorting so users can better search for options.

### Display more information
At the moment, the information displayed on each product is minimal. Maybe there could be a modal that opens when a product is clicked to display more information?
