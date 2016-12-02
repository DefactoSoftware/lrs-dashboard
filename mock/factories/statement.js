import faker from 'faker';
import { createModel } from '../helpers/model';

export default createModel({
  id: 0,
  object: ()=> faker.hacker.noun(),
  actor: ()=> faker.name.firstName(),
  verb: ()=> faker.hacker.verb(),
  payload: ({ object, actor, verb })=> ({
    "version": "1.0.1",
    "verb": {
      "id": "http://adlnet.gov/expapi/verbs/passed",
      "display": {
        "en-US": verb
      }
    },
    "timestamp": new Date(),
    "stored": new Date(),
    "object": {
      "objectType": object,
      "id": "http://defacto.learningspaces.dev/Chapter/47",
      "definition": {
        "type": "http://learningspaces.io/xapi/v1/activities/Chapter",
        "name": {
          "en-US": object
        },
        "description": {
          "en-US": object
        }
      }
    },
    "id": "d6643ff5-4733-4964-b043-a849934cba73",
    "authority": {
      "objectType": "Agent",
      "name": "first try",
      "account": {
        "name": "3WWf-DvP2KrZVkXYjyY",
        "homePage": "http://cloud.scorm.com/"
      }
    },
    "actor": {
      "objectType": "Agent",
      "mbox": actor
    }
  }),
});
