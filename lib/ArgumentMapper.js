let schema = [];

function ArgumentMapper(newSchema) {

  // Small check that the schema is in the correct format.
  // specify an empty array if no validation is needed.
  if(!Array.isArray(newSchema))
    throw new Error('Argument schema must be an array of objects!');

  schema = newSchema;

  /**
   * Converts process arguments into a map and validates them against a schema.
   */
  this.retrieve = () => {

    // Get the arguments from the process apart from the first two which are NodeJS defaults.
    const processArgs = process.argv.slice(2);

    // Loop through the process arguments and create a map of them.
    let output = {};
    for(let i = 0; i < processArgs.length - 1; i++) {
      let argumentName = processArgs[i];

      let argumentValue = processArgs[i+1];
      
      output[argumentName] = argumentValue;
    }

    // Check that the arguments given match the criteria specified in the schema.
    validate(output);

    // Return the new map.
    return output;
  }

  /**
   * Validates an argument map
   * @param mapToVerify The argument map to verify.
   */
  function validate (mapToVerify) {
    schema.forEach((schemaProperty) => {

      if(!schemaProperty.optional && !mapToVerify.hasOwnProperty(schemaProperty.name)) {
        throw new Error(`Property ${schemaProperty.name} is missing!`);
      }

      if(mapToVerify.hasOwnProperty(schemaProperty.name) && typeof mapToVerify[schemaProperty.name] !== schemaProperty.type) {
        throw new Error(`Property ${schemaProperty.name} must be a ${schemaProperty.type}!`);
      }
    });
  }
}

module.exports = ArgumentMapper;