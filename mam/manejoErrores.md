/*
Manejo de errores.
     La documentacion de Nest aconseja usar:
     https://docs.nestjs.com/exception-filters

     Ejemplos de uso:
     https://blog.openreplay.com/fetch-vs-axios-which-is-the-best-library-for-making-http-requests
     https://www.youtube.com/watch?v=XP_gONOksuM
     https://www.youtube.com/watch?v=PdYCxDl4j0c
     https://medium.com/swlh/filters-how-nest-js-handle-exceptions-c2e54cbc961a
     https://jenijoe.medium.com/angular-crud-service-create-it-extend-it-d972d61fc400

     Preferencia al declarar filter:
     https://stackoverflow.com/questions/54727103/nestjs-how-to-pass-the-error-from-one-error-filter-to-another?fbclid=IwAR0OC_4XqxpNncs9vSVpaGKqKFHTbyNIoLvXMQ6wJSQmt6F3OkpF_x50DxE
*/


Este es el objeto que genera Swagger:
{
  "proCreatedDate": "2021-06-02T09:02:14.143Z",
  "proDeletedDate": "2021-06-02T09:02:14.143Z",
  "uso": "string",
  "codPro": "string",
  "descripcionAyto": "string",
  "descripcionOCM": "string",
  "WebOCM": "string",
  "observaciones": "string",
  "codOrg": "string",
  "id": "string",
  "createdBy": "string",
  "createdDate": "2021-06-02T09:02:14.143Z",
  "lastUpdatedBy": "string",
  "lastUpdatedDate": "2021-06-02T09:02:14.143Z"
}

Y si lanzo post desde swagger ( en Postman retorna exactamente lo mismo) dice:
{
  "statusCode": 400,
  "message": [
    "property id should not exist",
    "property createdBy should not exist",
    "property createdDate should not exist",
    "property lastUpdatedBy should not exist",
    "property lastUpdatedDate should not exist",
    "WebOCM must be an URL address"
  ],
  "error": "Bad Request"
}

******************************************************************************

 Si en main.ts descomento linea 32
  app.useGlobalInterceptors(new NotFoundInterceptor());
  POST localhost:3000/api/v1/programas/
  {
  "proCreatedDate": "2021-06-02T09:02:14.143Z",
  "proDeletedDate": "2021-06-02T09:02:14.143Z",
  "uso": "string",
  "codPro": "string",
  "descripcionAyto": "hhh",
  "descripcionOCM": "stgggring",
  "WebOCM": "ocm.org",
  "observaciones": "string",
  "codOrg": "string"  
}

 Devuelve status: 500 Internal Server Error.
{
    "statusCode": 500,
    "code": "HttpException",
    "path": "/api/v1/programas/",
    "method": "POST"
}1.- Estructura del proyecto.
2.- Capturar errores en programas.controller o en programas.service.
3.- Como pasar los posible errores al front.

TypeError: Cannot read property 'raw' of undefined
    at TapSubscriber._tapNext (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\dist\common\interceptors\NotFound.Interceptor.js:15:43)
    at TapSubscriber._next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\operators\tap.js:59:27)
    at TapSubscriber.Subscriber.next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\Subscriber.js:66:18)
    at MergeMapSubscriber.notifyNext (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\operators\mergeMap.js:93:26)
    at SimpleInnerSubscriber._next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\innerSubscribe.js:27:21)
    at SimpleInnerSubscriber.Subscriber.next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\Subscriber.js:66:18)
    at SwitchMapSubscriber.notifyNext (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\operators\switchMap.js:85:26)
    at SimpleInnerSubscriber._next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\innerSubscribe.js:27:21)
    at SimpleInnerSubscriber.Subscriber.next (C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\Subscriber.js:66:18)
    at C:\Users\pc\Google Drive\Angular\OCM-Ayto-Back\node_modules\rxjs\internal\util\subscribeToPromise.js:7:24



******************************************************************************

 Si en main.ts descomento linea 32
  app.useGlobalInterceptors(new NotFoundInterceptor());
    GET localhost:3000/api/v1/programas/
 Devuelve status: 500 Internal Server Error.
{
    "statusCode": 500,
    "code": "HttpException",
    "path": "/api/v1/programas/",
    "method": "GET"
}

GET localhost:3000/api/v1/programas/
Devuelve. Status 200 OK
[
  {

  },
  {
    
  },
  ............
]




************************************************************************************

Comentando la linea anterior y lanzando POST localhost:3000/api/v1/programas/
{
  "proCreatedDate": "2021-06-02T09:02:14.143Z",
  "proDeletedDate": "2021-06-02T09:02:14.143Z",
  "uso": "string",
  "codPro": "string",
  "descripcionAyto": "string",
  "descripcionOCM": "string",
  "WebOCM": "ocm.org",
  "observaciones": "string",
  "codOrg": "string"  
}

Lo crea perfectamente y devuelve status 201 created:
{
    "proCreatedDate": "2021-06-02T09:02:14.143Z",
    "proDeletedDate": "2021-06-02T09:02:14.143Z",
    "uso": "string",
    "codPro": "string",
    "descripcionAyto": "string",
    "descripcionOCM": "string",
    "WebOCM": "ocm.org",
    "observaciones": "string",
    "codOrg": "string",
    "createdBy": "mam",
    "lastUpdatedBy": "mam",
    "id": "a17fa71e-6a3c-4a08-8455-d91c9b0d6d09",
    "createdDate": "2021-06-02T09:41:25.800Z",
    "lastUpdatedDate": "2021-06-02T09:41:25.800Z"
}
****************************************************************************************

Lanzando PUT localhost:3000/api/v1/programas/a17fa71e-6a3c-4a08-8455-d91c9b0d6d09
{
  "proCreatedDate": "2021-06-02T09:02:14.143Z",
  "proDeletedDate": "2021-06-02T09:02:14.143Z",
  "uso": "string",
  "codPro": "string",
  "descripcionAyto": "editado",
  "descripcionOCM": "string",
  "WebOCM": "ocm.org",
  "observaciones": "string",
  "codOrg": "string"  
}

Devuelve. Status 200 OK
{
    "generatedMaps": [],
    "raw": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "info": "Rows matched: 1  Changed: 1  Warnings: 0",
        "serverStatus": 2,
        "warningStatus": 0,
        "changedRows": 1
    },
    "affected": 1
}

****************************************************************************************

Lanzando GET localhost:3000/api/v1/programas/a17fa71e-6a3c-4a08-8455-d91c9b0d6d09

Devuelve. Status 200 OK
{
    "id": "a17fa71e-6a3c-4a08-8455-d91c9b0d6d09",
    "createdBy": "mam",
    "createdDate": "2021-06-02T09:52:35.064Z",
    "lastUpdatedBy": "mam",
    "lastUpdatedDate": "2021-06-02T09:52:58.000Z",
    "codPro": "string",
    "descripcionAyto": "editado",
    "descripcionOCM": "string",
    "WebOCM": "ocm.org",
    "proCreatedDate": "2021-06-02T09:02:14.000Z",
    "proDeletedDate": "2021-06-02T09:02:14.000Z",
    "uso": "string",
    "observaciones": "string",
    "codOrg": "string"
}

****************************************************************************************

Lanzando GET localhost:3000/api/v1/programas/

Devuelve. Status 200 OK
[
  {

  },
  {
    
  },
  ............
]

****************************************************************************************

Lanzando DELETE localhost:3000/api/v1/programas/a17fa71e-6a3c-4a08-8455-d91c9b0d6d09
Devuelve. Status 200 OK
{
    "raw": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
    },
    "affected": 1
}

****************************************************************************************

Despues de DELETE ¿Como devuelve Status 200 Ok si no existe?
Lanzando GET localhost:3000/api/v1/programas/a17fa71e-6a3c-4a08-8455-d91c9b0d6d09

Devuelve. Status 200 OK

1


****************************************************************************************
Despues de DELETE anterior ¿Como devuelve Status 200 Ok si no existe?
Lanzando DELETE localhost:3000/api/v1/programas/a17fa71e-6a3c-4a08-8455-d91c9b0d6d09
Devuelve. Status 200 OK
{
    "raw": {
        "fieldCount": 0,
        "affectedRows": 0,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
    },
    "affected": 0
}
