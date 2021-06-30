import NextCors from 'nextjs-cors';

export default async (req, res) => {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    res.statusCode = 200;
    let books = require('./responses/books.json');
    if(req.query.title) {
        books = books.filter(b=> b.title.toLowerCase().includes(req.query.title));
    }
    res.json(books);
}