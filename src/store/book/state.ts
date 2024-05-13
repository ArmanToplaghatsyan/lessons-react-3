import { IBook } from "../../type/type";

export const data: {books: IBook[], book: IBook} = {
    books: [
        {id: 1, title: "Drama", price: 100, description: "It's very drammatic book", count: 5, userId: 1, comment: ['Sad', 'Interesting']},
        {id: 2, title: "Detective", price: 200, description: "It's very mystery book", count: 4, userId: 4, comment: ['Mystery', 'Interesting']},
        {id: 3, title: "Horror", price: 300, description: "It's very scary book", count: 3, userId: 5, comment: ['Darkness', 'Scream']},
        {id: 4, title: "Triller", price: 400, description: "It's very casual book", count: 2, userId: 3, comment: ['Original', 'Interesting']},
        {id: 5, title: "Romantic", price: 500, description: "It's very romantic book", count: 1, userId: 2, comment: ['Lovely', 'Tenderly']},
    ],
    book: {} as IBook
    

}