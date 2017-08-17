export class Task{
    name: string;
    status: boolean;
    initDate: string;
    endDate: string;
    progress: number;
    comments: Array<{title: string, description: string, author: string}>;
}