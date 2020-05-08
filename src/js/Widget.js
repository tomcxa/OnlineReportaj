import InfoView from './InfoView';

const Widget = {
    container: document.querySelector('.event-container'),
    init(url) {
        const eventSource = new EventSource(url);

        eventSource.addEventListener('getcache', (evt) => {
            // const item = Object.create(InfoView);
            const cache = JSON.parse(evt.data);
            cache.forEach((data) => {
                InfoView.setup(data, this.container);
            });
        });

        eventSource.addEventListener('start', (evt) => {
            const data = JSON.parse(evt.data);
            InfoView.setup(data, this.container);
        });

        eventSource.addEventListener('end', (evt) => {
            const data = JSON.parse(evt.data);
            InfoView.setup(data, this.container);
            eventSource.close();
        });

        eventSource.addEventListener('freekick', (evt) => {
            const data = JSON.parse(evt.data);
            InfoView.setup(data, this.container);
        });

        eventSource.addEventListener('goal', (evt) => {
            const data = JSON.parse(evt.data);
            InfoView.setup(data, this.container);
        });

        eventSource.addEventListener('action', (evt) => {
            const data = JSON.parse(evt.data);
            InfoView.setup(data, this.container);
        });
    },
};

export default Widget;
