import {Injectable} from '@angular/core';


@Injectable()
export class CommentsService{

    constructor(){
    }

    getComments(){
        return [
            {
                name: "Task 1",
                description: "My First Task in this api",
                alias: "firstAlias",
                status: true,
                initDate: "2017-14-11T10:20:30Z",
                endDate: "2017-14-11T10:20:30Z",
                users: [
                    {
                        idUser: "1",
                        username: "user1",
                        password: "user1",
                        email: "user1@gmail.com"
                    },
                    {
                        idUser: "2",
                        username: "user2",
                        password: "user2",
                        email: "user2@gmail.com"
                    },
                    {
                        idUser: "3",
                        username: "user3",
                        password: "user3",
                        email: "user3@gmail.com"
                    },
                ],
                timeSpent: "1:10:10",
                progress: 15,
                comments:[]
            },
            {
                name: "Task 2",
                description: "My Second Task in this api",
                alias: "secondAlias",
                status: true,
                initDate: "2017-14-11T10:20:30Z",
                endDate: "2017-17-11T10:20:30Z",
                users: [
                    {
                        idUser: "1",
                        username: "user1",
                        password: "user1",
                        email: "user1@gmail.com"
                    },
                    {
                        idUser: "2",
                        username: "user2",
                        password: "user2",
                        email: "user2@gmail.com"
                    }
                ],
                timeSpent: "1:10:10",
                progress: 10,
                comments:[]
            },
            {
                name: "Task 3",
                description: "My Third Task in this api",
                alias: "thirdAlias",
                status: false,
                initDate: "2017-14-11T10:20:30Z",
                endDate: "2017-17-11T10:20:30Z",
                users: [
                    {
                        idUser: "1",
                        username: "user1",
                        password: "user1",
                        email: "user1@gmail.com"
                    }
                ],
                timeSpent: "1:10:10",
                progress: 30,
                comments:[]
            },
            {
                name: "Task 4",
                description: "My quarter Task in this api",
                alias: "quarterAlias",
                status: true,
                initDate: "2017-14-11T10:20:30Z",
                endDate: "2017-17-11T10:20:30Z",
                users: [
                    {
                        idUser: "1",
                        username: "user1",
                        password: "user1",
                        email: "user1@gmail.com"
                    },
                    {
                        idUser: "2",
                        username: "user2",
                        password: "user2",
                        email: "user2@gmail.com"
                    },
                    {
                        idUser: "3",
                        username: "user3",
                        password: "user3",
                        email: "user3@gmail.com"
                    }
                ],
                timeSpent: "1:10:10",
                progress: 40,
                comments:[]
            },
            {
                name: "Task 5",
                description: "My Fifth Task in this api",
                alias: "fifthAlias",
                status: false,
                initDate: "2017-14-11T10:20:30Z",
                endDate: "2017-17-11T10:20:30Z",
                users: [
                    {
                        idUser: "1",
                        username: "user1",
                        password: "user1",
                        email: "user1@gmail.com"
                    },
                    {
                        idUser: "2",
                        username: "user2",
                        password: "user2",
                        email: "user2@gmail.com"
                    }
                ],
                timeSpent: "1:10:10",
                progress: 80,
                comments:[]
            }
        ]
    }


}