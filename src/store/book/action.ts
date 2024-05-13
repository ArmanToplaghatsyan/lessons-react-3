import { IBook } from "../../type/type";

export const addBook = ( payload: IBook) => {
    return {type: 'addUser', payload}
}

export const deleteBookById = ( payload: number) => {
    return {type: 'deleteBookById', payload}
}

export const deleteBookByUserId = ( payload: number) => {
    return {type: 'deleteBookByUserId', payload}
}

export const findBookById = (payload: number) => {
    return {type: 'findBookById', payload}
}

export const addComment = (payload: {id: number, text: string}) => {
    return {type:"addComment", payload}
}