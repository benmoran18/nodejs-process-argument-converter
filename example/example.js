const Mapper = require('../');

const argumentSchema = require('./argument_schema.json');

const mapper = new Mapper(argumentSchema);

mapper.retrieve();