# node-realms-proxy
This is an instruction repository on how to use the PrismarineJS bedrock-protocol npm package to setup a proxy to a target realm allowing them to use and older minecraft version with an upddated realm. This is **VERY** beginner friendly.

# Step 1
## Install NodeJS. 
Go to [NodeJS.org](https://nodejs.org/en/)\
Choose a version \
Install the downloaded file

# Step 2
## Clone the repository
If you have Git, run \
`git clone https://github.com/TheNewsYorkTime/node-realms-proxy.git` while in the folder you want it in. \
If you don't have git, download the zip file and extract it where you want it.

# Step 4
## Get the project set up in node.
Navigate to where you installed the repository and open a command prompt.
Run `npm install` to install the dependancies. You should see a folder called node_modules appear.

# Step 5
## Find the ID of the realm you want to connect to.
Make sure you are logged into minecraft with the account that has been invited to or is the owner of the realm you want to connect to. \
In your command prompt window run `node getRealm`. \
In the lines it outputs, find the name of the realm you want to connect to. Then copy the ID of that realm.

# Step 6
## Put that ID in the code
Open up proxy.js and find the bit at the top where it says `const realmID = "your realm id here"`, and replace the contents of the quotes with the ID you copied in the previous step.