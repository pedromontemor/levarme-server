import NextCors from 'nextjs-cors';

export default async (req, res) => {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    res.statusCode = 200
    res.json(require('./responses/books.json'))
}