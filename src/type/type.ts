export interface IUser{
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
}

export interface IBook{
    id: number;
    title: string;
    price: number;
    description: string;
    count: number;
    userId: number;
    comment: string[];
}

