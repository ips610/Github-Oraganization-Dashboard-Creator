from github import Github
import firebase_admin as fb
from firebase_admin import credentials,firestore
import sys
n=sys.argv[1]
token=sys.argv[2]
access_token=token
cred = credentials.Certificate("./intra-society-owasp-hackathon5-firebase-adminsdk-w32yr-3fdfad25cc.json")
default_app = fb.initialize_app(cred,{
    'authDomain': "intra-society-owasp-hackathon5.firebaseapp.com",
    'projectId': "intra-society-owasp-hackathon5",
    'storageBucket': "intra-society-owasp-hackathon5.appspot.com"})
db=firestore.client(default_app)
def get_github_data():
    # Initialize PyGitHub with your GitHub access token
    print('start')
    github = Github(access_token)

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


get_github_data()