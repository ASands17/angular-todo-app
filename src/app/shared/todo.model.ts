export class Todo {


    public text: string;
    public completed: boolean;

    constructor(
        text: string,
        completed: boolean = false,
    ) {
        this.text = text;
        this.completed = completed;
    }

}

