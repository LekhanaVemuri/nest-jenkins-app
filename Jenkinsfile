pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/LekhanaVemuri/nest-jenkins-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Restart Application') {
            steps {
                sh '''
                  pm2 delete nest-jenkins-app || true
                  pm2 start dist/main.js --name nest-jenkins-app
                '''
            }
        }
    }
}

