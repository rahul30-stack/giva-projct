export interface UserModel{
    isdisabled: boolean;
    isDisabled: boolean;
    email:string;
    displayName:string;
}
export interface User{
    id: string,
    userModel: UserModel;
}