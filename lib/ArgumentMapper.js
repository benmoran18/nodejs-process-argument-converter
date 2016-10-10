let schema = {};

function ArgumentMapper(newSchema) {

  if(!Array.isArray(newSchema))
    throw new Error('Argument schema must be an array of objects!');

  schema = newSchema;

  this.retrieve = () => {
    const processArgs = process.argv.slice(2);
    let output = {};
    for(let i = 0; i < processArgs.length - 1; i++) {
      let argumentName = processArgs[i];

      let argumentValue = processArgs[i+1];
      
      output[argumentName] = argumentValue;
    }
    console.log('HELLO!');

    validate(output);

    return output;
  }

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