pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo '📥 Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Deploy Application') {
            steps {
                echo '🚀 Running update.sh for deployment...'
                sh '''
                  /home/ubuntu/update.sh
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully using update.sh'
        }
        failure {
            echo '❌ Deployment failed. Check update.sh output.'
        }
    }
}

