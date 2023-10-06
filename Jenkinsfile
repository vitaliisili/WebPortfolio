pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage('Clean Workspace') {
            steps {
                echo 'clean workspace'
                sh 'ls /var/www'
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy application') {
            steps {
                sh 'node --version'
            }
        }

    }
}