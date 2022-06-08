pipeline {
    agent any
    stages {
        stage('Setup parameters') {
            steps {
                script { 
                    properties([
                        parameters([
                            choice(
                                choices: ['DEV', 'QA', 'UAT', 'PROD'], 
                                name: 'Environment'
                            ),
                            string(
                                defaultValue: '1.0', 
                                name: 'Version', 
                                trim: true
                            )
                        ])
                    ])
                }
            }
        }
        
        stage('NPM Install') {
            steps {
                bat "cd D:\\Zix_DevOpsStuff\\DEV\\FrontendApp\\zix-app"
                bat "npm install"
            }
        }
    }   
}