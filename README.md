# Quick demo project to understand querying basics with GraphQL
I really wanted to understand the basics for the later implementation of queries for my personal project [web3 marketplace](https://github.com/bricedenice59/marketplace-eth) with [the graph](https://thegraph.com/en/)

For simplicity, I have generated some mock data in json format using following website [mockaroo](https://www.mockaroo.com/)

The following server code may be amended for querying a database instead of static json files.

# Quickstart

1. Install all required dependencies for both client/server projects

```
cd client
npm install
cd server
npm install
```

2. In a new terminal, cd into the server directory

```
npm start
```

It should start a new instance of GraphQL client, running at http://localhost:4000/, it may use a different port, so change accordingly in later url client source code

3. In another terminal, cd into the client directory

```
npm start
```

It should start a new webclient development session, running at http://localhost:3000

4. Play and add/modify queries/mutations
