pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies with legacy peer deps...'
                sh 'npm install --legacy-peer-deps'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building NestJS application...'
                sh 'npm run build'
            }
        }

        stage('Restart Application') {
            steps {
                echo 'Restarting application using PM2...'
                sh '''
                  pm2 delete nest-jenkins-app || true
                  pm2 start dist/main.js --name nest-jenkins-app
                  pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful! Application is running.'
        }
        failure {
            echo '❌ Deployment failed. Check logs above.'
        }
    }
}

