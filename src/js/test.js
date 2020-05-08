const eventSource = new EventSource('http://localhost:7070/sse');

eventSource.addEventListener('start', (evt) => {
    console.log(evt.data);
});

eventSource.addEventListener('end', (evt) => {
    console.log(evt.data);
    eventSource.close();
});

eventSource.addEventListener('freekick', (evt) => {
    console.log(evt.data);
});

eventSource.addEventListener('goal', (evt) => {
    console.log(evt.data);
});

eventSource.addEventListener('action', (evt) => {
    console.log(evt.data);
});

eventSource.addEventListener('open', (evt) => {
    console.log(evt);
    console.log('connected');
});

eventSource.addEventListener('error', (evt) => {
    console.log(evt);
    console.log('error');
});
