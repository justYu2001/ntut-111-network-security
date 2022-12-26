const jsonServer = require("json-server");
const uuid = require("uuid");

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((request, response, next) => {
    if (request.method === "POST") {
        const id = uuid.v4();

        request.body.id = id;

        request.body.login = {
            uuid: id,
        };

        request.body.picture = {
            medium: `https://ui-avatars.com/api/?name=${request.body.name}`,
        };
    }

    next();
});

server.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Headers', '*');
    next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});