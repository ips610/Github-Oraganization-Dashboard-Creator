import owaspLogo from '../images/owasp-full-black.svg';
import githubLogo from '../images/github.svg';
import './style.css'
export default function Owasp() {
    return (
        <>
        <div className="container">
            <div className="heading">
                <p id="lineone" className="headinglines">OWASP</p>
                <p id="linetwo" className="headinglines">Projects Dashboard</p>
            </div>
            <div className="image">
                <img src={githubLogo} alt="Github Logo"/>
            </div>
        </div>


        <div className="aboutus">

            <div className="aboutusbox" id="aboutusleft"><img src={owaspLogo} alt="OWASP Logo" id="aboutus_owasp_logo"/></div>
            <div className="aboutusbox" id="aboutusright">Behold the masterpieces from our brilliant contributors, a spectacular
                collection of ongoing projects directly fetched from Github. Be amazed by the relentless commits, issues, and
                pull requests!</div>
        </div>


        <div className="gitstats">
            <div className="stats">
                <svg xmlns="http://www.w3.org/2000/svg" id="stats_one_logo" viewBox=" 0 0 448 512" style={{fill:'#efefd0'}} class="statssvg">
                    <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                </svg>
                <div className='content'>
                    <h2>27</h2>
                    <h4>Active Projects</h4>
                </div>
            </div>
            <div className="stats">
                <svg xmlns="http://www.w3.org/2000/svg" id="stats_two_logo" viewBox="0 0 480 512" style={{fill:'#efefd0'}}
                class="statssvg">
                <path
                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                </svg>

                <div className='content'>
                    <h2>1036</h2>
                    <h4>Contributors</h4>
                </div>
            </div>
            <div className="stats">
                <svg xmlns="http://www.w3.org/2000/svg" id="stats_three_logo" viewBox="0 0 640 512" class="statssvg" style={{fill:'#efefd0'}}>
                    <path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H163.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z" />
                </svg>
                <div className='content'>
                    <h2>15369</h2>
                    <h4>Commits</h4>
                </div>
            </div>
        </div>

        <div className="top_contributors">
                <h2>Top Contributors</h2>
                <div className="top_contributors_content">
                    <div className="top_contributors_content_inner">
                        <img src="https://avatars.githubusercontent.com/u/2770071?v=4" alt="" />
                        <h3>Arpit Bharti</h3>
                        <h4>Contributions: 1000</h4>
                    </div>
                    <div className="top_contributors_content_inner">
                        <img src="https://avatars.githubusercontent.com/u/2770071?v=4" alt="" />
                        <h3>Arpit Bharti</h3>
                        <h4>Contributions: 1000</h4>
                    </div>
                    <div className="top_contributors_content_inner">
                        <img src="https://avatars.githubusercontent.com/u/2770071?v=4" alt="" />
                        <h3>Arpit Bharti</h3>
                        <h4>Contributions: 1000</h4>
                    </div>
                    <div className="top_contributors_content_inner">
                        <img src="https://avatars.githubusercontent.com/u/2770071?v=4" alt="" />
                        <h3>Mankirat Singh</h3>
                        <h4>Contributions: 1000</h4>
                    </div>
                </div>
            </div>
        </>
    );
}