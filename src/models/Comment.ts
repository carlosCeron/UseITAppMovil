export class Comment{
    idParent: number;
    parentComment: {id: number, comment: string};
    user: {idUSer: number, email: string, username: string};
    title: string;
    Cooment: string;
    Tags: Array<string>;
}