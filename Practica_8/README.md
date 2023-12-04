# Practica 8
# Diagrama Entidad Relacion:
![Evidencia 1](<./evidencias/1.jpg>)
# Deploy en Dockers aplicando Github Actions.
# 1) Crear repositorio público o privado (En el ejemplo se crea público para que todos tengan acceso al mismo). 
https://github.com/benjiegonzalez/practica_8
![Evidencia 2](<./evidencias/2.png>)
# 2)Seguir los siguientes pasos para preparar su Código y así subirlo al repositorio:
En este realizamos el commit desde la app GitHub Desktop
![Evidencia 3](<./evidencias/3.png>)
![Evidencia 6](<./evidencias/6.png>)

# 3) Realizamos el commit en la aplicación subimos los archivos del proyecto al nuevo repositorio que hemos creado:

![Evidencia 4](<./evidencias/4.png>)

# 4)  Crear los Secrets Docker_User y Docker_Password en la Plataforma GITHUB
![Evidencia 5](<./evidencias/5.png>)
# 5/6) Utilizar su usuario y clave (token) de Docker Hub para llenar estos secrets. Crear Token en Docker (con el nombre Github-Actions) para que pueda ser utilizada en GitHub.
![Evidencia 8](<./evidencias/8.png>)
# 7/8) Copiar este Token generado en el Secret Docker_Password. Crear Action tipo Docker Image para que se genere el Workflow

![Evidencia 9](<./evidencias/9.png>)
# 9/10) Dockerizar nuestra aplicación (De preferencia Servicio REST o GraphQL sin dependencias). Adicionalmente debemos constatar que la imagen puede ser compilada con “docker build -t nestjstest .

# 11)   Aplicar los siguientes pasos en el archivo docker-image.yml para que genere los contenedores y sistematice las versiones.
```bash
 docker container run benjiegonzalez94/nestjs-repository:nestjsserver
```
![Evidencia 11](<./evidencias/11.png>)

# 12) Ahora ya estamos listos para probar nuestro flujo realizando cambios en alguna parte de nuestro Proyecto y realizar un commit (recuerde utilizar palabras reservadas).
![Evidencia 14](<./evidencias/14.png>)
# Ahora podemos evidenciar que se ha subido la imagen exitosamente tanto en GitHub como en DockerHub:
![Evidencia 16](<./evidencias/16.png>)
![Evidencia 17](<./evidencias/17.png>)
