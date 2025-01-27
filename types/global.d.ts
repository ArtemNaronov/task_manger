export {};

declare global {
    interface subTasks {
        name: string,
        completed: Boolean,
    }
    interface taskItem {
        id: Number,
        title: string,
        text: string,
        description: string,
        order: Number,
        status: string,
        dateCreated: string,
        deadline: string,
        completed: true,
        priority: string,
        link: string,
        subTasks: subTasks[]
    }
}