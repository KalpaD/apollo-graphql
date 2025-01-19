# (Odyssey Course) Intro to GraphQL with TypeScript

Welcome to the starter code for **Intro to GraphQL with TypeScript**.

https://www.apollographql.com/tutorials/intro-typescript/01-course-overview-and-setup

The course will walk you step by step on what to do. This codebase is the starting point of your journey!

Navigate to the root of the project directory, and run the following commands.

```
npm install && npm run dev
```

The `final` branch of this repo contains the final stage of the course, with all of the steps and code completed! If you get stuck, you can refer to it and compare your code.

## Using queries
1. Point your browser to http://localhost:4000/ where the Apollo sandbox runs.
2. Execute the following query.

```
query FeaturedListings {
  featuredListings {
    id,
    title,
    numOfBeds,
    costPerNight,
    closedForBookings
  }
}
```
3. If you update the codegen.ts file which instruct the apollo codegen plugins to generate types from the schema you need to run the following command to regenerate the code.
```
npm run generate
```



