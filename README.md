# Nombre

**DogCeo App**

# Descripción

DogCeo App es un desafío de la empresa Mobdev el cual debe consumir una API (https://dog.ceo/dog-api/), la cual entrega **Razas** y **SubRazas**,
además de imágenes de cada una de estas. Tiene como requisito el poder seleccionar múltiples filtros al momento de llamar a la API y mostrar por pantalla imágenes de las razas filtradas.

### Características

* La app consta de dos *Input*, en este caso son *Select* que a la vez permite buscar por teclado. El primer *Select* contiene una lista de opciones determinada por las **Razas** que fueron traidas de la API, al seleccionar una **Raza** que posea **SubRazas**, estas serán desplegadas en el segundo *Select* donde se muestran **SubRazas**.

* Los *Select* tienen la capacidad de permitir múltiples filtros activos, ya sean filtros por **Raza** o por **SubRaza**, además de poder observar y quitar los filtros ya seleccionados.

* Finalmente bajo los *Select* se muestran las imágenes de las **Razas/SubRazas** seleccionadas. 

  * (Los *Select* poseen un breakdown cuando el ancho de las pantallas es inferior a 600px.)

  * (Las imágenes se ordenan según el espacio que posean, por lo que al cambiar el tamaño de la pantalla estas serán ordenadas de maneras distintas.)

# Instalación 

1. Para utilizar el código primero debe ser clonado con el comando ``git clone https://github.com/Ignaciosgj/dog_ceo_challenge.git`` o bien descargado como ZIP: [Descargar](https://github.com/Ignaciosgj/dog_ceo_challenge/archive/refs/heads/master.zip) .

2. Una vez el repositorio sea clonado o descargado, se debe ejecutar el comando ``npm install``.

3. Cuando se complete la instalación de dependencias, se debe ejecutar el comando ``npm start`` y esto levantará la aplicación en http://localhost:3000/ .

# Autor

Ignacio González Jaimen

