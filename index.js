const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
    const resume = 
    {
        Personal_Information: 
        [
            {
                name: "Cindy Lou B. Pusod",
                Birthdate: "April 14, 2002",
                Gender: "Female",
                ContactNo: +639238790711,
                Address: "Nivel Hills Lahug Cebu City",
                Email: "rairaicindylou@gmail.com"
            }
        ],

        About_Me: 
        [
            { 
                Description: "A Highly gifted and forward-thinking individual with a strong commitment to collaboration and leadership. Dedicated, team-oriented, and disciplined, with a remarkable drive for performance, particularly in academics, the arts, and Information Technology. Eager to contribute distinguished skills to new teams, aiming for continuous advancement through challenging competitions and tech projects."
            }
        ],
        
        Skills: 
        [
            {
                SkillName: ["Microsoft Word", "Microsoft Powerpoint", "HTML and CSS", "Poster", "Infographics", "Web Design", "Basic Japanese Language", "Leadership", "Team Building"]
            }
        ],
        
        Achievements:
        [
            {
                Date: "2022-2023",
                Description: "First Year College Dean's Lister for the First and Second Semesters",
            },
            {
                Date: "March 2024",
                Description: "Placed 7th at the CESAFI 2024 Computer Quiz Bowl-College Division"
            },
            {
                Date: "December 2023",
                Description: "Successfully made a Smart Bin using Arduino"
            },
            {
                Date: "February 2024",
                Description: "Second Year College Dean's Lister for the First Semester"
            }
        ],

        Interests:
        [
            {
                Description: "I like playing different sports, listening to music, and discovering new things."
            }
        ],

        Education:
        [
            {
                Level: "Nursery and Kindergarten",
                School: "Formation School and kiddies Learning Center",
                Year: "2005-2009"
            },
            {
                Level: "Elementary",
                School: "Saint Theresa's College of Cebu",
                Year: "2009-2015"
            },
            {
                Level: "Junior High School",
                School: "Saint Theresa's College of Cebu",
                Year: "2015-2019"
            },
            {
                Level: "Senior High School",
                School: "Saint Theresa's College of Cebu",
                Year: "2019-2021"
            },
            {
                Level: ["College", "Bachelor of Science in Information Technology"],
                School: "University of Southern Philippines Foundation",
                Year: "2022-Present"
            }
        ],

        Personal_Attributes: 
        [
            {
                Attribute: "Collaborative Team Member",
                Attribute_Description: "Exhibited excellent teamwork and strong work ethic by promoting camaraderie."
            },
            {
                Attribute: "Reliable",
                Attribute_Description: "Having been an officer for five consecutive years from 2010-2014 and for another two years, 2022 to the present, students are kept on-task with proactive behavior modification and positive reinforcement strategies"
            }
        ]
    }

    res.json(resume);
});
//start
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});