import { v4 as uuidv4 } from 'uuid';
const booksMock = [
    {_id: uuidv4(), "name": "Batman", "author": "Max", "date": "18/10/1997", "genre": "Comic"},
    {_id: uuidv4(), "name": "Starwars", "author": "George Lucas", "date": "18/12/1989", "genre": "Science fiction"},
    {_id: uuidv4(), "name": "Lord of the rings", "author": "Tolkien", "date": "18/12/1912", "genre": "Fantastic"},
    {_id: uuidv4(), "name": "War of the world", "author": "Tolkien", "date": "18/12/1912", "genre": "Fantastic"}
]

export default booksMock