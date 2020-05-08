/* eslint-disable no-underscore-dangle */
const InfoView = {
    setup(data, container) {
        this._bindToDOM(data, container);
    },

    _bindToDOM(data, container) {
        const html = this._createHTML(data);
        container.insertAdjacentHTML('beforeend', html);
    },

    _createHTML(data) {
        return `
            <div class="event-item">
                <div class="ico ${data.type}"></div>
                <div class="event-item_info">
                    <p class="time">${new Date(data.time).toLocaleString()}</p>
                    <p class="text">${data.text}</p>
                </div>
            </div>`;
    },
};

export default InfoView;
