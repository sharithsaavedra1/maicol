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

        stage('Error intencional') {
            steps {
                sh 'echo "Simulando error controlado para la iteracion 2"'
                sh 'exit 1'
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