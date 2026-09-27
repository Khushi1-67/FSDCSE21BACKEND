//understand the concept of fetch in console
async function test() {
    console.log ("this is asynchronous function");
    const response =fetch ("./student.json");
    const students= await response.json();
    console.log("finally data fetch");''
}

class button extends eventemitter {
    click() {
        console.log("button clicked");
        this.emit("click");
    }
    mouseover() {
        console.log("button mouseover");
        this.emit("mouseover");
    }
}
