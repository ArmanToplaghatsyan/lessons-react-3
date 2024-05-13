import { IUser } from "../../type/type";

export const addUser = (payload: IUser) => {
    return {type: 'addUser', payload}
}

export const deleteUserById = (payload: number) => {
    return {type: 'deleteUserById', payload}
}

export const findUserById = (payload: number) => {
    return {type: 'findUserById', payload}
}