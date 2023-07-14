from github import Github
import firebase_admin as fb
from firebase_admin import credentials,firestore
access_token='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'
cred = credentials.Certificate("./intra-society-owasp-hackathon5-firebase-adminsdk-w32yr-3fdfad25cc.json")

default_app = fb.initialize_app(cred,{
    'authDomain': "intra-society-owasp-hackathon5.firebaseapp.com",
    'projectId': "intra-society-owasp-hackathon5",
    'storageBucket': "intra-society-owasp-hackathon5.appspot.com"})
db=firestore.client(default_app)
def get_github_data():
    # Initialize PyGitHub with your GitHub access token
    
    github = Github(access_token)

    # Access repositories of a user
    user = github.get_user('OWASP-STUDENT-CHAPTER')
    repositories = user.get_repos()
    for repo in repositories:
        date=repo.created_at
        contri=repo.get_contributors()
        contributordata=[]
        for i in contri:
            contributordata.append({'name':i.login,'commits':i.contributions})
        comm=repo.get_commits().totalCount
        issu=repo.get_issues(state='all').totalCount
        db.collection('github').document(repo.name).set({
            'name':repo.name,
            'commits':comm,
            'issuesAndPr':issu,
            'date':date,
            'contributors':contributordata
        })


get_github_data()