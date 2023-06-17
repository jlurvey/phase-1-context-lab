/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/* const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
} */

function createEmployeeRecord(array) {
    return  {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
};

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
};

function createTimeInEvent(dateStamp) {
    const timeInEventObject = {
        type: "TimeIn",
        hour: dateStamp.substr(-4) * 1,
        date: dateStamp.substr(0, 10),
    };
    this.timeInEvents.push(timeInEventObject);
    return this;
};

function createTimeOutEvent(dateStamp) {
    const timeOutEventObject = {
        type: "TimeOut",
        hour: dateStamp.substr(-4) * 1,
        date: dateStamp.substr(0, 10),
    };
    this.timeOutEvents.push(timeOutEventObject);
    return this;
};

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(e => e.date === date);
    const timeOutEvent = this.timeOutEvents.find(e => e.date === date);
    return (timeOutEvent.hour - timeInEvent.hour)/100;
};

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
};

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName === firstName)
};

function calculatePayroll(array) {
    return array.reduce((payroll, record) => {
        return payroll + allWagesFor.call(record)
    }, 0);
};


