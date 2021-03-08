import express , {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/conection';

class Server {
    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/usuarios'
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //metodos iniciales
        this.dbConection();
        this.middleweres();
        //definir mis rutas
        this.routes();
    }

    //todo conectar base de datos
    async dbConection () {
        try {
            await db.authenticate();
            console.log('la base de datos esta al 100 jajaja');
        } catch (error) {
            throw new Error(error);
        }
    } 

    //funciones que se ejecutan antes que otros procesos
    middleweres () {
        // CORS
        this.app.use(cors());
        // lectura del body
        this.app.use(express.json());
        // Carpeta publica
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use( this.apiPath.usuarios, userRoutes);
    }
    listen(){
        this.app.listen( this.port, () => {
            console.log('Servido corriendo por el puerto: C: ' + this.port);
        })
    }
}

export default Server;




