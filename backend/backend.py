from github import Github
import firebase_admin as fb
from firebase_admin import credentials,firestore
import sys
access_token='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'
cred = credentials.Certificate("./intra-society-owasp-hackathon5-firebase-adminsdk-w32yr-3fdfad25cc.json")
n=sys.argv[1]
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
        comm=repo.get_commits().totalCount
        issu=repo.get_issues(state='all').totalCount
        db.collection(n).document(repo.name).set({
            'name':repo.name,
            'commits':comm,
            'issuesAndPr':issu,
            'date':date,
            'contributors':contributordata
        })
    print('done')


get_github_data()