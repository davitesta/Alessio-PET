import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const productsList = [
            { id: 0, name: 'A', description: 'none' },
            { id: 1, name: 'B', description: 'none' },
            { id: 2, name: 'C', description: 'none' },
            { id: 3, name: 'D', description: 'none' },
            { id: 4, name: 'E', description: 'none' },
        ];
        return { productsList };
    }
}