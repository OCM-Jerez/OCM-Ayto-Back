Una vez completados los 4 videos de Ruslan, intento aplicar login-register-profile al front.
Creo rama login-register-profile y la hago default.





1.- Crear index.js para cada dto.

@Module({
  imports: [
    // TypeOrmModule.forFeature([BarriosModule]),
    BarriosModule,

@InjectRepository en programas.service

1.- No actualiza Migration con npm run db:migration:create updatePrograma
2.- Las tablas las crea en singular en MySQL a pesar de generar el CRUD en plural: programas -> programa
3.- Problemas con la singularización de alguno nombres como delegaciones.
    @Entity('delegacione')
    export class Delegacione extends BaseEntity {}

5.- ¿Se pueden borrar app.controller y app.service?
