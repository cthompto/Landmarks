# Landmarks
### By Chelsea Thompto

*Landmarks* is an exploration of the ways artificial intelligence, and specifically facial recognition, fails to comprehend trans bodies (misgendering) and the threat this failure possesses to trans livelihood as these technologies become increasingly integrated into our daily lives. The work consists of an interactive website featuring compositions that explore these issues. 

This site is under constant construction and revision and will be open for viewing and engagement as it grows and takes on new forms, content, and ideas. The intention in doing so is to invite the viewers into the act of coding and to resist a static form. This constant revision/evolution can also be understood as performance art through the medium of code. 

*Landmarks* asks us to consider how technology sees us and what happens when it fails to see us for who we are?

The live site can be viewed at: https://landmarks.cloud/

Find out more [about my work](https://www.chelsea.technology).

To view the live site next to the code, click the "Show" dropdown on the top left of this page and select "Next to The Code".

(Note: while the work currently exists in this semi-ephemeral online state, I am actively looking for opportunities to bring a version(s) of this work into physical spaces as well.)


## Site Guide
Below is a breakdown of the project files and their purpose.

### ← README.md

This file, which contains an explanation of the project at large and the files within.

### ← package.json

This file handles the server information and its dependencies.

### ← server.js

Script running server side, handling interactions with the client and serving pages.

### ← index.html + landmarks.js

Cover compostion, questions/explorations with live facial recognition using [face-api.js](https://github.com/justadudewhohacks/face-api.js/).

### ← stages.html + stages.js

Second composition of the project, featuring text and a 4 panel interactive visual. Thinking about the steps and trajectories of the technology.

### ← empire.html + empire.js

Third composition of the project, featuring text by Jorge Luis Borges and Sandy Stone. Getting to the landmark metaphor: thinking of facial recognition as mapping and the body as a landscape.

### ← machine.html + machine.js

Forth composition of the project, featuring still image facial recognition, studio shot photos, and AI generated faces. Considering how gender can be expressed to a machine and what machines say to one another.

### ← rote.html + rote.js

(Currently in Development) The fifth composition. This page will invite viewers to explore landmark detection by inviting them to manually execute the process on an image of their choosing using [Paper.js](http://paperjs.org/).

### ← draft.html + draft.js

(Unlinked) Work space for testing layout and code. Viewable but not listed/linked on the live site.

### ← style.css

Styling for all pages.

### ← nav-links.js

Main script handling link randomizer on each page.


## Development Notes/Goals/Ideas/Issues

- Update - 7/26 Developing new pages to be used for a video art piece relating.

- On deck Landmarks of the landscape and of the body - exploring this metaphor through procedural video art piece and an exploration of cartographic and medical instruments


## Theory and Inspiration
This work is part of a larger body of research considering the role “modeling” has played in medical, scientific, computational, and military projects aimed at categorizing and developing subjects inherently resistant to fixity (trans people, rivers, and etc.). 

*Landmarks* is a continuation of the work started in my projects [*Productive Bodies*](https://www.chelseathompto.com/productive-bodies) and [*Transcode Manifesto*](https://www.chelseathompto.com/transcode-manifesto) and is also inspired by Sandy Stone's [THE *EMPIRE* STRIKES BACK: A POSTTRANSSEXUAL MANIFESTO](https://sandystone.com/empire-strikes-back.pdf), Dark Inquiry’s [Rhetorical Software](https://thenewinquiry.com/dark-inquiry/), Legacy Russell’s [*Glitch Feminism*](https://www.versobooks.com/books/3668-glitch-feminism), and others. 


## Credits
This project is made possible with the following

[Laboratory Residency](https://residency.laboratoryspokane.com/) for providing space/time and finanical support in the form of a digital artist residency.

[Glitch](https://glitch.com/) for initial hosting and editing the code.

[DigitalOCean](https://www.digitalocean.com/) for current hosting.

[face-api.js](https://github.com/justadudewhohacks/face-api.js/) for live webcam facial recognition.

[Paper.js](http://paperjs.org/) for drawing application.
