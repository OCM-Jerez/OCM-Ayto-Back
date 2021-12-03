# Instalación de WSL
https://platzi.com/tutoriales/2042-prework-windows/7874-guia-de-instalacion-de-wsl-v2-y-windows-terminal/


# Abrir WSL - Windows Subsystem for Linux
WSL 
user: mam
Password: mam0121

# Instalar Docker como recomienda curso:
        https://www.udemy.com/course/docker-de-principiante-a-experto/learn/lecture/19366066#overview
        # Ubuntu
        # Actualiza los repos
        sudo apt-get update
        # Instala utilidades
        sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y
        # Agregar el gpg 
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        # Agregar el repo
         sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        # Actualizar de nuevo
         sudo apt-get update
        # Instalar docker
         sudo apt-get install docker-ce
        # Iniciarlo con el sistema
        sudo systemctl enable docker
        # Agregar usuario al grupo docker 
        whoami # Saber el nombre de tu usuario
        sudo usermod -aG docker nombre_de_salida_en_whoami
        # Salir de la sesión
        exit
        # Iniciar de nuevo con el usuario y probar 
        docker run hello-world
        

# Para update
        sudo apt-get update
        sudo apt-get dist-upgrade

# Conocer version
         lsb_release -a
         cat /etc/lsb-release  

         No LSB modules are available.
         Distributor ID: Ubuntu
         Description:    Ubuntu 20.04.3 LTS
         Release:        20.04
         Codename:       focal     
 
 
 # Para poder conectar desde WinSCP
        https://jeetblogs.org/post/sshing-into-a-windows-wsl-linux-subsystem/
        


sudo service docker status

https://phoenixnap.com/kb/cannot-connect-to-the-docker-daemon-error
https://www.cloudsavvyit.com/13955/how-to-check-if-the-docker-daemon-or-a-container-is-running/
