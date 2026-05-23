pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Verificar archivos') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Validar JS') {
            steps {
                sh 'test -f script_v1.js'
            }
        }
    }

    post {
        success {
            mail to: 'hola34893@gmail.com',
                 subject: 'Pipeline EXITOSO',
                 body: 'La validacion del proyecto finalizo correctamente.'
        }
        failure {
            mail to: 'hola34893@gmail.com',
                 subject: 'Pipeline FALLO',
                 body: 'La validacion del proyecto presento errores.'
        }
    }
}
