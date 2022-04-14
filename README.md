# Landmarks
### By Chelsea Thompto

*Landmarks* is an exploration of the ways machine learning, and specifically facial recognition, fails to comprehend trans bodies (misgendering) and the threat this failure possesses to trans livelihood as these technologies become increasingly integrated into our daily lives. The work consists of an interactive website featuring compositions that explore these issues.

This site is under constant construction and revision and will be open for viewing and engagement as it grows and takes on new forms, content, and ideas. The intention in doing so is to invite the viewers into the act of coding and to resist a static form. This constant revision/evolution can also be understood as performance art through the medium of code.

*Landmarks* asks us to consider how technology sees us and what happens when it fails to see us for who we are?

The live site can be viewed at: https://landmarks.cloud/

Find out more [about my work](https://www.chelsea.technology).

To view the live site next to the code, click the "Show" dropdown on the top left of this page and select "Next to The Code".

(Note: while the work currently exists in this semi-ephemeral online state, I am actively looking for opportunities to bring a version(s) of this work into physical spaces as well.)


## Site Guide
Below is a breakdown of the project structure.

### Site Versions
There are 3 versions of this site currently in development. The main version of the site is fully functional but there are still some issues being ironed out with the "No Live" and "Low Res" versions.

#### Main Site
This version uses live webcam facial recognition and is not recommended for mobile devices or very old computers.
Viewable at: https://landmarks.cloud/

#### "No Live" Site
This version uses a prerecorded video in place of the live webcam but preforms the facial recognition on the prerecorded video in real-time. It is still not recommended for mobile devices or very old computers, but does allow people to explore the site without being subjected to live facial recognition. This version of the site is still in beta.
Viewable at: https://landmarks.cloud/nolive

#### "Low Res" Site
This version uses prerendered lower resolution video in place of live facial recognition. As such, this version is recommended for mobile devices or very old computers and also allows people the opportunity to explore the site without being subjected to live facial recognition. This version of the site is still in beta.
Viewable at: https://landmarks.cloud/lowres

### File Structure
The composition files are housed in the "views" folder and the subfolders therein. Below is a brief listing of the HTML and JS couplings that comprise the main compositions:

#### index.html + landmarks.js
Cover composition, questions/explorations with live facial recognition using [face-api.js](https://github.com/justadudewhohacks/face-api.js/).

#### stages.html + stages.js
Second composition of the project, featuring text and a 4 panel interactive visual. Thinking about the steps and trajectories of the technology.

#### empire.html + empire.js
Third composition of the project, featuring text by Jorge Luis Borges and Sandy Stone. Getting to the landmark metaphor: thinking of facial recognition as mapping and the body as a landscape.

#### machine.html + machine.js
Forth composition of the project, featuring still image facial recognition, studio shot photos, and AI generated faces. Considering how gender can be expressed to a machine and what machines say to one another.

#### rote.html + rote.js
The fifth composition. This page invites viewers to explore landmark detection by inviting them to manually execute the process on an image of their choosing using [Paper.js](http://paperjs.org/).


## Development News/Notes/Goals/Ideas/Issues
- Update 4/13: Finalizing the two new versions of the site before creating a new home page for the project as a whole.


## Theory and Inspiration
This work is part of a larger body of research considering the role “modeling” has played in medical, scientific, computational, and military projects aimed at categorizing and developing subjects inherently resistant to fixity (trans people, rivers, and etc.).

*Landmarks* is a continuation of the work started in my projects [*Productive Bodies*](https://www.chelseathompto.com/productive-bodies) and [*Transcode Manifesto*](https://www.chelseathompto.com/transcode-manifesto) and is also inspired by Sandy Stone's [THE *EMPIRE* STRIKES BACK: A POSTTRANSSEXUAL MANIFESTO](https://sandystone.com/empire-strikes-back.pdf), Dark Inquiry’s [Rhetorical Software](https://thenewinquiry.com/dark-inquiry/), Legacy Russell’s [*Glitch Feminism*](https://www.versobooks.com/books/3668-glitch-feminism), and others.


## Credits
This project is made possible with the following

[Laboratory Residency](https://residency.laboratoryspokane.com/) for providing space/time and financial support in the form of a digital artist residency.

[Glitch](https://glitch.com/) for initial hosting and editing the project.

[DigitalOCean](https://www.digitalocean.com/) for current hosting.

[face-api.js](https://github.com/justadudewhohacks/face-api.js/) for live webcam facial recognition.

[Paper.js](http://paperjs.org/) for drawing application.
