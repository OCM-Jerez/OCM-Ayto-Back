1.- Si borro alguna entity manualmente:
     HAY QUE ELIMINARLA DE entities.module.ts
     DROP EN LA BBDD.

2.- Generar CRUD
TODO EN SINGULAR. COMPUESTO = seccion-censal
     * https://docs.nestjs.com/recipes/crud-generator
     * Open new terminal en src/entities
     * nest g resource <new> --no-spec  (si no reconoce comando nest => npm install -g @nestjs/cli  )

     * Añadir new.repository.ts (en singular)
          Copiar fichero modelo.
          Pegar fichero modelo en carpeta <new>.
          Renombar fichero copiado.
          Buscar y sustituir an miniscula y MAYUSCULA. Nombres compuestos <organo-contratacion>

     * create-<new>.dto-ts
          Copiar todo el codigo del modelo.
          Buscar y sustituir en MAYUSCULA. 
          Comprobar los nombres de los campos dque tendrá la BBDD.

     * update-<new>.dto-ts   
          No hacen falta cambios.

     * Añadir index.ts en <new>/dto
          Copiar fichero modelo.
          Pegar fichero modelo en carpeta <new>.
          Buscar y sustituir an miniscula. Nombres compuestos <organo-contratacion>

     * <new>.entity.ts 
          Copiar todo el codigo del modelo.
          Buscar y sustituir en miniscula y MAYUSCULA. 
          Compuesto = @Entity('seccionCensal')
          Comprobar los nombres de los campos de la BBDD.   

    * <new>.controller.ts 
          Copiar todo el codigo del modelo.
          Buscar y sustituir en miniscula y MAYUSCULA. Nombres compuestos <organo-contratacion>

     * <new>.module.ts 
          Copiar todo el codigo del modelo.
          Buscar y sustituir en miniscula y MAYUSCULA. Nombres compuestos <organo-contratacion>

     * <new>.service.ts 
          Copiar todo el codigo del modelo.
          Buscar y sustituir en miniscula y MAYUSCULA. Nombres compuestos <organo-contratacion>
   
     * Swagger si refleja el nuevo CRUD.
          http://localhost:3000/docs/
     
     * npm run db:migration:generate <addNew>
     * Comprobar que se recojen los cambios en SQL creado
        No se porque genera estas tablas además de ente.
           await queryRunner.query("DROP TABLE `ecoIngreso`");
           await queryRunner.query("DROP TABLE `capituloIngreso`");
           await queryRunner.query("DROP TABLE `capituloGasto`");
     * npm run db:migration:run  
     *Comprobar que se ha creado la nueva tabla.

     * Se pueden generar datos con DSchema para probar. Cambiar a 6 en lugar de qoo que tiene por defecto.

     * Hacer commit.

****************************** FINALIZADO ***************************************************************************


1.- Ante problemas en Migration:
     * borrar y crear de nuevo squema usamdo MySQL Workbench.
     * DROP DATABASE `ayuntamiento`;
   * CREATE SCHEMA `ayuntamiento`
   * 
     * Borrar todas las migration existentes.
     * Borrar /dist
     * En src/config/database.config.ts
       // Activar SOLO MANUALMENTE en DESARROLLO SI ES NECESARIO (DESACTIVAR EN PRODUCCION).
          synchronize: false,

       A partir del 09/05/2021 tengo que  cambiar tambien, de lo contrario daba error.
        migrationsRun: false,   

     * npm run build
     * npm run start:dev
     * Swagger si refleja los cambios en los DTO.
     * La bbdd no se actualiza hasta que se se haga lo siguiente:
     * En otra terminal:
     * npm run db:migration:generate inicio
     * npm run db:migration:create modificacion
     * npm run db:migration:run  

PARA QUE LOS dto FUNCIONEN TIENEN QUE TENER VALIDACIONES.



Tablas para añadir.
     Consorcio.


Ultimo creado: 
     ente
