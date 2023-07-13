from github import Github
import firebase_admin as fb
from firebase_admin import credentials
import datetime
import time
access_token='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'
date = '2023-07-03T00:00:00Z'
def get_github_data():
    # Initialize PyGitHub with your GitHub access token
    
    github = Github(access_token)

    # Access repositories of a user
    user = github.get_user('OWASP-STUDENT-CHAPTER')
    repositories = user.get_repos()
    print(repositories.type())

    # Process the repositories and generate the desired output
    output = ''
    for repo in repositories:
        output += repo.name +'\n' 

    return output
def day_counter():
    start_date = datetime.datetime.fromisoformat(date)
    current_time = datetime.datetime.now()

    time_diff = current_time - start_date
    initial_day_count = int(time_diff.total_seconds() / (24 * 60 * 60)) + 1

    day_count = initial_day_count
    interval = datetime.timedelta(days=1)
    while True:
        day_count += 1
        time.sleep(interval.total_seconds())

    return day_count
def fetch_commits( repo):
    try:
        g = Github(access_token)
        repo = g.get_repo(f"{'OWASP-STUDENT-CHAPTER'}/{repo}")
        contributors = repo.get_contributors()
        for contributor in contributors:
            if contributor.login == 'OWASP-STUDENT-CHAPTER':
                return int(contributor.contributions)
        return 0
    except Exception as e:
        print(f"Failed to fetch commits: {e}")
        return 0
def fetch_issues(repo):
    try:
        g = Github(access_token)
        repo = g.get_repo(f"{'OWASP-STUDENT-CHAPTER'}/{repo}")
        issues = repo.get_issues(state='all')
        count = 0
        for issue in issues:
            count += 1
        return count
    except Exception as e:
        print(f"Failed to fetch issues: {e}")
        raise

def calculate_average_commits(commits, days):
    try:
        average_commits = commits / days
        return average_commits
    except Exception as e:
        print(e)
        return 0

cred = credentials.Certificate("./intra-society-owasp-hackathon5-firebase-adminsdk-w32yr-3fdfad25cc.json")

firebaseConfig = {
  'apiKey': "AIzaSyCpDCvJCcfv-v6zgSQHJAJW2s2QncXcOrk",
  'authDomain': "intra-society-owasp-hackathon5.firebaseapp.com",
  'projectId': "intra-society-owasp-hackathon5",
  'storageBucket': "intra-society-owasp-hackathon5.appspot.com",
  'messagingSenderId': "297356289241",
  'appId': "1:297356289241:web:8b1cadf97f8ab790710ac8",
  'measurementId': "G-QBJZ2NH9E7"
}
default_app = fb.initialize_app(cred,{
    'authDomain': "intra-society-owasp-hackathon5.firebaseapp.com",
  'projectId': "intra-society-owasp-hackathon5",
  'storageBucket': "intra-society-owasp-hackathon5.appspot.com"})






