pipeline {
    agent any

    stages {

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
                  pm2 save
                '''
            }
        }
    }
}

