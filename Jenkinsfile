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
                sh 'npm install'
                sh 'npm run build'
                sh 'ls -a'
                sh 'ls build'
            }
        }

        stage('Deploy application') {
            steps {
                sh 'node --version'
                sh 'pwd'
                sh 'ls -a'
            }
        }

    }
}