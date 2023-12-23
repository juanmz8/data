# Estancias del codigo

Editor de Texto----- (Archivos locales)
STAGE----- (Guardar los archivos con cambios)
COMMIT----- (Crear una version con los cambios realizados)
SERVER----- (Subir el repositorio a GitHub)

# Git Flow Branches

    Main
        HotFix
        Release
        Develop
            Feature
                Example Feature1
                Example Feature2

# Usos de Git

    Historial de versiones en el archivo
    Trabajar un proyecto en equipo
    Encontrar la version (comit) donde se produjo un error
    Almacenar codigo en gitHub

- Crear un archivo .env para Variables de Desarrollo

- Crear un archivo .gitignore, donde vamos a especificar los archivos que no queremos añadir al repositorio

- Se puede colocar **/.archivo.html para tomar el archivo independientemente de donde se encuentre

# INSTALACION

    git --version (revisa la version)
    git config --global user.name "nombre apellido" (asignar nombre y apellido)
    git config --global user.email correo@gmail.com (asignar correo)
    git config --global core.editor "code --wait"
    git config --global -e (ver el archivo de configuracion global)
    git config -h (Ver listado de todas las cofiguraciones)

    Configuracion de saltos de linea (al Subir archivos)

    git config --global core.autocrlf true (para windows)
    git config --global core.autocrlf input (para mac/linux)

# COMANDOS

## BASICO

    Inicializar repositorio en git
        git init

    Abrir el editor de texto en la carpeta actual
        code .

    Limpiar la Terminal
        clear

    Crear archivos
        touch example.html

    Crear carpetas
        mkdir folderExample

    Moverse a una carpeta
        cd folderExample

    Moverse una carpeta atras
        cd ..

## MODIFICACION

    Eliminar Archivo o Carpeta
        rm "Folder Example"/index.html

    Restaurar archivo o carpeta Eliminado
        git restore "Folder Example"/index.html

    Restaurar un cambio ADD
        git restore --staged "Folder Example"/index.html

    Renombrar y/o Mover Archivos
        mv "Folder Example"/index.html "Folder Example"/indice.html

    Renombrar y/o Mover Archivos + añadirlos a STAGE
        git mv Folder1/index.html Folder2/indice.html

## VISUALIZACION

    Ver archivos y carpetas del directorio Actual (Simple, Completo)
        ls
        ls -a

    Ver Ruta del directorio actual
        pwd

    Ver estado del Repositorio (Completo, Resumido)
        git status
        git status -s

    Ver cambios realizados en archivos (y archivos en STAGE)
        git diff
        git diff --staged

    Ver historial de CAMBIOS COMPLETO y RESUMIDO
        git log
        git log --oneline

    Ver historial de CAMBIOS (incluyendo commits eliminados)
        git reflog

## ADD y COMMIT

    Añadir cambios a STAGE
        git add "Carpeta de Ejemplo"/index.html

    Añadir cambios a COMMIT
        git commit -m "Descripcion del cambio"

## Push, Fetch y Pull (+ Git clone)

Push

    git remote add origin https://github.com/usuario/repositorio.git (especificar la ruta del repositorio que creamos en github)

    git push origin master (actualizar por primera vez el repositorio)

    git push -u origin master (Aplicar los cambios)

    git push

Fetch

    git fetch (Descarga en local el historial de cambios, pero no descarga los cambios)

Pull

    git pull origin rama (Traer los cambios del repositorio)

clone

    git clone urlDeGitHub (Copiar la url SSH del repositorio en Git Hub e iniciar git bash en donde queremos descargar el repositorio)

## Fork Git Hub

    Permite copiar un repositorio hacia mi cuenta Git Hub, desde el cual puedo hacer un git clone para tenerlo en Local

    Se puede sincronizar el fork si el repositorio original fue actualizado o tambien comparar cuales fueron los cambios

## Pull Request Git Hub

    Sirve para Enviar una solicitud para aprobar los cambios que se realizaron en la copia Fork a el Repositorio Original y asi hacer Merge con el original

## BRANCH MERGE y NAVEGACION

    Ver branch Principal
        git branch

    Crear una nueva rama
        git branch branchExample

    Eliminar una rama
        git branch -d branchExample

    Moverse a otra rama (usar switch)
        git switch branchExample
        git checkout branchExample

    Crear una nueva rama y moverse (Usar switch)
        git checkout -b branchExample
        git switch -c branchExample

    Comparar RAMAS
        git diff branchExample

    Traer los cambios de una rama a otra (Situarse en la rama a la que queremos traer los cambios)
        git merge branchExample

    Restaurar una version y eliminar las posteriores
        git reset --hard idCorrespondienteDeLaVersionCommit

CONFLICTOS EN MERGE

    Ocurre cuando ambas ramas han hecho un cambio en la misma linea de codigo

    Solucion:

        1.Arreglar el codigo donde surgio el conflicto
        2.Hacer un add y un commit con el problema solucionado
        3.Esto finaliza el MERGE

ELIMINAR COMMITS

    - Mostrar los ultimos 9 commits o menos
        git rebase -i HEAD~9

    - Borrar los commits en la hoja y aplicar los cambios de los archivos

    - Hacer un push de la siguiente manera para guardar
        git push origin +main

## TAG

    Ver Tags asignados
        git tag

    Asignar un tag a una version de commit
        gi tag v1_0

    Moverse usando tags
        git checkout tags/v1_0

## STASH

Stash es guardar un cambio pero sin necesidad de hacer commit, se guarda localmente sin afectar a la rama

    Hacer un stash
        git stash

    Ver todos los stash
        git stash list


    Volver al punto del stash
        git stash pop

    Borrar el stash
        git stash drop

# KEY SSH

1-    Abrir Git Bash desde la carpeta .shh en /User

2-    Comprobar si hay claves SSH existentes

        ls -al ~/.ssh

    Los nombres de archivo de las claves públicas admitidas para GitHub son uno de los siguientes.

        id_rsa.pub
        id_ecdsa.pub
        id_ed25519.pub

3-    Generar una clave ssh

        ssh-keygen -t ed25519 -C "your_email@example.com"

        Cuando nos pida ingresar el nombre de la clave escribir:
             id_rsa

4-    Asegúrate de que ssh-agent se está ejecutando

        eval `ssh-agent -s` (WINDOWS)
        eval "$(ssh-agent -s)" (Mac y Linux)

5-    Agrega la clave privada a ssh-agent

        ssh-add ~/.ssh/id_rsa

6-    Copia la clave publica y pegala en Git Hub > Settings > New SSH KEY

7-    Finalmente, prueba la autenticación con:
        ssh -T git@github.com

# Archivo config SSH

    Crear el archivo

        touch ~/.ssh/config

    Editar el archivo

        Host *.github.com
            AddKeysToAgent yes
            PreferredAuthentications publickey
            IdentityFile ~/.ssh/id_rsa

    Añadir SSH al servidor de llaves

        ssh-add ~/.ssh/id_rsa