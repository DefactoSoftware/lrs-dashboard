#!/usr/bin/env babel-node
import request from 'request-promise';

const randomFromArray = (array)=> {
  return array[Math.floor(Math.random() * array.length)];
}

const seedActors = ['Jesse', 'Marcel', 'Frits', 'Maarten', 'Hugo', 'Matthijs'];

const actorFactory = ()=> {
  return {
    mbox: randomFromArray(seedActors),
    objectType: 'Agent',
  };
}

const seedObjectTypes = ['Activity', 'Chapter', 'Space', 'Quiz', 'Answer'];

const objectFactory = ()=> {
  const objectType = randomFromArray(seedObjectTypes);
  return {
    objectType,
    id: 'http://defacto.learningspaces.dev/Chapter/47',
    definition: {
      type: 'http://learningspaces.io/xapi/v1/activities/Chapter',
      name: {
        'en-US': objectType
      },
      description: {
        'en-US': objectType
      }
    }
  }
}

const seedVerbs = ['passed', 'created', 'updated', 'edited', 'liked'];

const verbFactory = ()=> {
  return {
    id: 'http://adlnet.gov/expapi/verbs/passed',
    display: {
      'en-US': randomFromArray(seedVerbs)
    }
  };
}

const authorityFactory = ()=> {
  return {
    objectType: 'Agent',
    name: 'first try',
    account: {
      name: '3WWf-DvP2KrZVkXYjyY',
      homePage: 'http://cloud.scorm.com/'
    }
  }
}

let currentId = 10;

const idFactory = ()=> {
  return `d6643ff5-4733-4964-b043-a849934cba${currentId++}`;
}

const statementFactory = ()=> {
  const verb = verbFactory();
  const timestamp = new Date();
  const stored = new Date();
  const object = objectFactory();
  const id = idFactory();
  const authority = authorityFactory();
  const actor = actorFactory();

  return {
    version: '1.0.1', id, verb, timestamp, stored, object, authority, actor
  }
}

const range = Array.apply(null, {length: 100 }).map(Number.call, Number);

range.forEach((i)=> {
  const statement = statementFactory();
  const options = {
    method: 'POST',
    uri: 'https://lrsapi.herokuapp.com/api/statements',
    body: { statement },
    json: true
  };

  request(options)
    .then(()=> {
      console.log(`Request ${i} succedded`);
    })
    .catch(({ response })=> {
      console.log(`Request ${i} errord`);
      console.error(response.body);
    });
});
