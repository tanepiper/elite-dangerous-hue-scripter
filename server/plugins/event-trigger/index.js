module.exports = {
    name: 'event-trigger',
    version: '1.0.0',
    register: async (server, options) => {
        server.method('triggerEvent', async ({ eventName, params }) => {
            const event = server.app.events[eventName];

            if (!event) {
                if (server.app.debug) console.log(`No event for ${result.event}`);
                return `No event for ${result.event}`;
            }
            if (server.app.debug) console.log(`Triggering ${result.event}`);
            return await event(params);
        });

        server.route({
            method: 'POST',
            path: '/api/event',
            handler: async (request, h) => {
                try {
                    return await server.methods.triggerEvent(request.payload);
                } catch (e) {
                    throw e;
                }
            }
        });
    }
};