// step n.01
let numbers = [1, 2, 3, 4];
removeEvenNumbers = numbers.filter(number => number % 2 !== 0)
    .map(number => number * 2)
//console.log(removeEvenNumbers)

//step n.02


//step n.03
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
//console.log(tasks)

//n.01 Collect two days' worth of tasks.
let totals = tasks.reduce((total, value) => {
    return total + value.duration
}, 0)

totals

//n.02 Convert the task durations to hours, instead of minutes.
let convertToHours = tasks.map(toHour => {
    return {
        name: toHour.name, duration: toHour.duration / 60
    }
}
)
convertToHours

//n.03 Filter out everything that took two hours or more

let filterMoreThan2Hours = convertToHours.filter(MoreThan2Hours =>
    MoreThan2Hours.duration > 2
)
filterMoreThan2Hours

//n.04 Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.

/*let salary = convertToHours.reduce((total, value) => {
    total + value.duration

}, 0)
salary*/
/*let salary = convertToHours.map(value => value.duration * 100).reduce((total, value) => {
    return total + value
}, 0) 
salary*/ 
let salary = convertToHours.reduce((total, value) => {
    return total + (value.duration * 100)
}, 0)
salary



