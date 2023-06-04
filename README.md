# [Test TEA](https://aspergertest.vercel.app/)

Este proyecto es una página web donde se realizan tests para saber si una persona es o no es una persona con TEA y ofrecerle contactos con distintas asociaciones especializadas en TEA que se encuentre en España

## USO

Para usar esta web, primero tendrá que introducir unos datos iniciales y responder un test general para hacer una orientación inicial. 
Una vez completado el test y tenga sus resultasdo se le ofrecerá la opción de consultar la lista de asociaciones o hacer un segundo test acorde a los datos introducidos. 
Si escoge la opción del segundo test, repetiria los mismos pasos que del primer test hasta obtener un resultado y que le ofrezca la posibilidad si lo desea de consultar la lista de asociaciones.
En la lista de asociaciones, se le indicarán recomendaciones que debe tomar si planea o quiere tener un diagnóstico, como debe de hacerlo y a continuación podrá seleccionar las distintas asociaciones y filtrarlas por provincia.

## Componentes

Este proyecto está formado por 8 componentes distintos:
-main-page: Página inicial del proyecto
-preguntas-ea: Test de la Escala Autónoma para la Detección del Síndrome de Asperger y el Autismo de Alto Nivel de Funcionamiento (EA)
-preguntas-asdi: Test de Entrevista Diagnóstica para el Síndrome de Asperger (ASDI)
-preguntas-aqa: Cociente de Espectro Autista (versión para Adolescentes) (AQA)
-preguntas-aaa: Evaluador de Asperger en Adultos (AAA)
-resultado-ea: Página donde se almacenará el resultado del test EA
-resultado: Página donde se almacenará los resultados de cada uno de los tests excepto el del EA.
-lista-asociacion: Pagina donde contiene las recomendaciones a seguir para obtener un diagnostico y la lista de distintas asociaciones en España.

## Lenguaje

Este proyecto está realizado con Angular, Bootstrap y Firestore database.


## Referencias
Los tests son usados como referencia de la página: https://espectroautista.info/
