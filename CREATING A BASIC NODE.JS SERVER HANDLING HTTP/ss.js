function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
}, 2000);
}

fetchData((data) => {
console.log(data); // Prints 'Data fetched' after 2 seconds
});