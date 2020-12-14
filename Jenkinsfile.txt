pipeline {
    agent any

    stages{

        stage('Install node packages'){
            steps{
                sh'npm install' 
            }
        }
        stage('Execute test files'){
            steps{
                sh'npx wdio wdio.conf.js' 
            }
        }
    }
}