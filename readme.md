# Boiler Plate project
Full stack micro-service boilerplate. Provides a template for backend service and front end component development.

##Overview
This template provides a context for the development of an individual full-stack micro-service. AS illustrated below:

![image](https://github.com/nearform/fullstack-boilerplate/blob/master/doc/logical.png)

A full stack micro-service is comprised of a backend service, a front end react componenet and a wiring configuration.

##Contents
The boiler-plate is comprised of the following elements:

```
├── API
├── frontend
├── integration
│   ├── index.js
│   ├── run.js
├── package.json
├── main.js
├── readme.md
├── service
│   ├── lib
│   └── wiring-mu.js
└── test
```

* frontend - react component that provides a UI for the service
* service/lib - the backend service logic
* service/wiring-mu.js - mu wiring for the service, defines the patterns that the service responds to
* main.js - main entry point to the service
* integration - standalone integration tests for the service
* test - backend and front end unit tests


##Usage

Install dependencies:
```
npm install
```

###Running unit tests, coverage

To run tests use npm:

```
npm run test
```

To get a coverage report:
```
npm run coverage
```

To lint:
```
npm run lint
```

###Integration tests

To run the integration tests:

```
cd integration
npm run test
```
