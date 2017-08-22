import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todos = [
      {
        "title": "clean up",
        "color": "brown"
    },

    {
        "title": "fix radio",
        "color": "green"
    },
    {
        "title": "read",
        "color": "blue"
    },
    {
        "title": "wash clothes",
        "color": "white"
    }
    ];
    return {todos};
  }
}
