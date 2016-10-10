# nodejs-process-argument-converter
Converts process arguments into a map using a specified schema to validate the arguments.

## Running the project

Open your command console and clone the repository to your machine

    git clone https://github.com/benmoran18/nodejs-process-argument-converter.git
    
With the console still open, cd into the project folder

    cd nodejs-process-argument-converter

Now run the project via NPM

    npm test

This will run a simple example script that uses the argument mapper module.

## Schema validation

The argument mapper uses an array of json objects to validate process arguments against. 
The following is a an example of a schema

    [
      {
        "name": "argument1",
        "type": "string",
        "optional": false
      },
      {
        "name": "--argument2",
        "type": "string",
        "optional": true
      }
    ]
