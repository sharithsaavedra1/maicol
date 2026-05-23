pipeline {
    agent any

    environment {
        DISCORD_WEBHOOK = credentials('discord-webhook')
    }

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
                 body: 'La validacion final del proyecto finalizo correctamente.'
            discordSend webhookURL: "${DISCORD_WEBHOOK}",
                        title: env.JOB_NAME,
                        description: 'Pipeline exitoso',
                        result: 'SUCCESS',
                        link: env.BUILD_URL
        }
        failure {
            mail to: 'hola34893@gmail.com',
                 subject: 'Pipeline FALLO',
                 body: 'La validacion del proyecto presento errores.'
            discordSend webhookURL: "${DISCORD_WEBHOOK}",
                        title: env.JOB_NAME,
                        description: 'Pipeline fallido',
                        result: 'FAILURE',
                        link: env.BUILD_URL
        }
        unstable {
            discordSend webhookURL: "${DISCORD_WEBHOOK}",
                        title: env.JOB_NAME,
                        description: 'Pipeline inestable',
                        result: 'UNSTABLE',
                        link: env.BUILD_URL
        }
    }
}
