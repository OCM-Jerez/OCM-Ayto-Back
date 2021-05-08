1.- No actualiza Migration con npm run db:migration:create updatePrograma
2.- Las tablas las crea en singular en MySQL a pesar de generar el CRUD en plural: programas -> programa
3.- Problams con la singularización de alguno nombres como delegaciones.
    @Entity('delegacione')
    export class Delegacione extends BaseEntity {}

4.- No autogenera id.
5.- ¿Se pueden borrar app.controller y app.service?
