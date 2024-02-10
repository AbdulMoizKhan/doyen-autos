import express from 'express';
import cors from 'cors';
import dataRoutes from './routes/dataRoutes';
import contactRoutes from './routes/contactRoutes';
import quoteRoutes from './routes/quoteRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: ['https://doyen-autos-71yu.vercel.app', 'https://doyen-autos-hmq4.vercel.app']
}));

app.use('/api/data', dataRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/quote', quoteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
