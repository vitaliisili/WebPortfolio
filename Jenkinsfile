pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage("Clear App Folder") {
            steps {
                sh 'rm -R /var/www/vitaliisili.com'
            }
        }

        stage('Deploy application') {
            steps {
                sh 'mkdir /var/www/vitaliisili.com'
                sh 'cp -r build/. /var/www/vitaliisili.com'
            }
        }

    }
}