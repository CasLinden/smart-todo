function instantiateTodo(name, desc) {
    return {
        name,
        desc,
        giveDesc() {
        return desc
        }
    }
}

const todos = [];

let laundry = todos.push(instantiateTodo("fold laundry", "fold the laundry that's out from 2 days ago"));
let dishes = todos.push(instantiateTodo("do dishes", "do yesterday's dishes and scrub the sink"));


export {todos, instantiateTodo}
