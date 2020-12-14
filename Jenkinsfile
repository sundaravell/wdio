pipeline {
    agent any

     tools {nodejs "nodejs"}
     
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