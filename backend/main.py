from github import Github
from flask import Flask,request,jsonify
from flask_cors import CORS  # Import CORS
import firebase_admin as fb
from firebase_admin import credentials,firestore
from dotenv import load_dotenv
from pathlib import Path
import os

dotenv_path = Path('./.env')
load_dotenv(dotenv_path=dotenv_path)

access_token=os.getenv('TOKEN')
cred = credentials.Certificate('./intra-society-owasp-hackathon5-firebase-adminsdk-w32yr-3fdfad25cc.json')
default_app = fb.initialize_app(cred,{
    'authDomain': "intra-society-owasp-hackathon5.firebaseapp.com",
    'projectId': "intra-society-owasp-hackathon5",
    'storageBucket': "intra-society-owasp-hackathon5.appspot.com"})
db=firestore.client(default_app)

def get_github_data(n):
    # Initialize PyGitHub with your GitHub access token
    print('start')
    github = Github(access_token)

    try:
        # Access repositories of a user
        user = github.get_user(n)
        repositories = user.get_repos()
        for repo in repositories:
            date=repo.created_at
            contri=repo.get_contributors()
            contributordata=[]
            for i in contri:
                contributordata.append({'name':i.login,'commits':i.contributions,'avatar':i.avatar_url})
            
            try:
                comm=repo.get_commits().totalCount
            except:
                comm=0
            
            try:
                issu=repo.get_issues(state='all').totalCount
            except:
                issu=0
            db.collection(n).document(repo.name).set({
                'name':repo.name,
                'commits':comm,
                'issuesAndPr':issu,
                'date':date,
                'contributors':contributordata
            })
        print('done')
        return 'done'
    except:
        print('error')
        return 'error'

app=Flask(__name__)
CORS(app)  # Add CORS to app
@app.route('/',methods=['GET','POST'])
def home():
    if request.method=='GET':
        return 'working👍'
    if request.method=='POST':
        n=request.get_json()
        result=get_github_data(n["orgName"])
        return result

if __name__=='__main__':
    app.run(debug=True)
