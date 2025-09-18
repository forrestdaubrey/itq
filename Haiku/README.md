# Git & Shell

## COMPUTERS: WHAT ARE THEY PHYSICALLY
- CPU (Central Processing Unit): performs actions
- RAM (Random Access Memory): storage for 0s and 1s (bits) you're using *right now*
- Hard Drive: persistent storage of bits
- Motherboard: where everything above comes together

### RAM Stack vs. Heap
- Stack: part of the RAM that remembers definitions for the environment
- Heap: part of the RAM that remembers data types like lists at an address
- stack overflow: not enough short-term memory! 

## Tower of Babel (Review of Reading) Discussion

## Processing efficiency of different languages
- in C, lists are stored consecutively in RAM
  - band members all live in consecutive 160 dorm rooms
- in Python, lists are stored at an address in RAM
  - rhythm section live together in Allston, horn section live together in the Fenway
- the less a language forces the CPU to dig around in RAM, the more 'machine-readable' it is
- the more a language forces the CPU to dig around in RAM, the more 'human-readable' it is

**Why and when does efficiency matter?**

# CODE ALONG
- **What is the RAM of your machine?**
- **Is your Hard Drive easily accessible?**
	- Finder>Settings>Hard Disks
- **Make sure Desktop and Documents is in username folder (not iCloud!**

## Command Line

**Command Line Interfaces (CLI)**
- Most commonly used for machine-readable languages like 'C'
- "under the hood"
- in this class, we'll use the application `Terminal` as our CLI
- BASH vs ZSH? these are types of CLIs called "Shells"

***MOST IMPORTANT COMMANDS***

	- `pwd` Print Working Directory (prints the path to the directory [folder] that you are currently in). Map+Compass.

	- `ls` Lists the files stored in the Working Directory

	- `cd` Change Directory (changes working directory to different directory)
		>You can type `cd` and then drag and drop the folder you'd like to work in, into the Terminal Window. This is much faster than typing out the full path.

	- `clear` clears the Terminal Window

	- `cd ~` change directory to your root directory (how to "go back"), `~` means home directory
	
	- `-o` tag to create an object file

	- `say` 
	
# CODE ALONG
- `say -v "Samantha" "hello, world" -o hello.aiff`

## Cloud-based Storage and Version Control systems you've used before

## [Version Control Systems](https://www.geeksforgeeks.org/version-control-systems/)
- Your HD is your local repository
- GitHub.com is the remote repository we're going to use
- [Git](https://en.wikipedia.org/wiki/Git) is the version control software we're going to use to communicate between local and remote
- GitHub Desktop is a software application that we'll use to manage Git
- Fetch: check in with other repository
- Pull: bring the changes from the other repository to this repository 
- Commit: collect changes you've made on this repository together with a message explaining what the changes are
- Push: push the changes you've made on this repository and the commit message that explains it to the other repository

# CODE ALONG SETUP!
- Set up a GitHub.com account with a simple username you can use professionally and your personal email account
- Download and install [GitHub Desktop](https://desktop.github.com/)
- Sign in to GitHub Desktop using your GitHub.com username
- In GitHub Desktop, go to File > Clone Repository and clone the class repository via URL 
- Setup GitHub/save the local file path (where the files are on your computer) to your {username}/Documents folder
- Download and install [TextMate](https://macromates.com/)
- Go to {username}/Documents/GitHub and find the README.md for the class repository
- Open that file with TextMate!
- Open GitHub Desktop
- Go to File > New repository
- Create a new repository called "itp"
- Check the box that says "Initialize this repository with a README" and check again that your local file path goes somewhere you can easily find
- Your new repository will appear in the far left bar of the GitHub Desktop window.
- Click on the repository, select that the repository will stay public (for now), and then select "Publish this repository to GitHub"
- When that has gone through go to Repository > Open with TextMate
- The README.md file of the repository you created for this class will open with TextMate!
# Git & Shell

## COMPUTERS: WHAT ARE THEY PHYSICALLY
- CPU (Central Processing Unit): performs actions
- RAM (Random Access Memory): storage for 0s and 1s (bits) you're using *right now*
- Hard Drive: persistent storage of bits
- Motherboard: where everything above comes together

### RAM Stack vs. Heap
- Stack: part of the RAM that remembers definitions for the environment
- Heap: part of the RAM that remembers data types like lists at an address
- stack overflow: not enough short-term memory! 

## Tower of Babel (Review of Reading) Discussion

## Processing efficiency of different languages
- in C, lists are stored consecutively in RAM
  - band members all live in consecutive 160 dorm rooms
- in Python, lists are stored at an address in RAM
  - rhythm section live together in Allston, horn section live together in the Fenway
- the less a language forces the CPU to dig around in RAM, the more 'machine-readable' it is
- the more a language forces the CPU to dig around in RAM, the more 'human-readable' it is

**Why and when does efficiency matter?**

# CODE ALONG
- **What is the RAM of your machine?**
- **Is your Hard Drive easily accessible?**
	- Finder>Settings>Hard Disks
- **Make sure Desktop and Documents is in username folder (not iCloud!**

## Command Line

**Command Line Interfaces (CLI)**
- Most commonly used for machine-readable languages like 'C'
- "under the hood"
- in this class, we'll use the application `Terminal` as our CLI
- BASH vs ZSH? these are types of CLIs called "Shells"

***MOST IMPORTANT COMMANDS***

	- `pwd` Print Working Directory (prints the path to the directory [folder] that you are currently in). Map+Compass.

	- `ls` Lists the files stored in the Working Directory

	- `cd` Change Directory (changes working directory to different directory)
		>You can type `cd` and then drag and drop the folder you'd like to work in, into the Terminal Window. This is much faster than typing out the full path.

	- `clear` clears the Terminal Window

	- `cd ~` change directory to your root directory (how to "go back"), `~` means home directory
	
	- `-o` tag to create an object file

	- `say` 
	
# CODE ALONG
- `say -v "Samantha" "hello, world" -o hello.aiff`

## Cloud-based Storage and Version Control systems you've used before

## [Version Control Systems](https://www.geeksforgeeks.org/version-control-systems/)
- Your HD is your local repository
- GitHub.com is the remote repository we're going to use
- [Git](https://en.wikipedia.org/wiki/Git) is the version control software we're going to use to communicate between local and remote
- GitHub Desktop is a software application that we'll use to manage Git
- Fetch: check in with other repository
- Pull: bring the changes from the other repository to this repository 
- Commit: collect changes you've made on this repository together with a message explaining what the changes are
- Push: push the changes you've made on this repository and the commit message that explains it to the other repository

# CODE ALONG SETUP!
- Set up a GitHub.com account with a simple username you can use professionally and your personal email account
- Download and install [GitHub Desktop](https://desktop.github.com/)
- Sign in to GitHub Desktop using your GitHub.com username
- In GitHub Desktop, go to File > Clone Repository and clone the class repository via URL 
- Setup GitHub/save the local file path (where the files are on your computer) to your {username}/Documents folder
- Download and install [TextMate](https://macromates.com/)
- Go to {username}/Documents/GitHub and find the README.md for the class repository
- Open that file with TextMate!
- Open GitHub Desktop
- Go to File > New repository
- Create a new repository called "itp"
- Check the box that says "Initialize this repository with a README" and check again that your local file path goes somewhere you can easily find
- Your new repository will appear in the far left bar of the GitHub Desktop window.
- Click on the repository, select that the repository will stay public (for now), and then select "Publish this repository to GitHub"
- When that has gone through go to Repository > Open with TextMate
- The README.md file of the repository you created for this class will open with TextMate!

## [Markdown 101](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- required of all Markdown documentation files in this class:
	- [Headers](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#headers)
	- [Links](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#links)
	- [Code highlighting](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#code)
	- [Images ALWAYS WITH ALT TEXT](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#images)

## CODE ALONG TO MAKE AN SUBFOLDER FOR HOMEWORK
- Open TextMate
- Go to File>New
- Go to File>Save As
- Navigate to your itp folder
- Click on 'New Folder' (if you can't see 'New Folder' click on the down arrow next to where you selected your itp folder)
- Write the name of the homework assignment
- Save the name of the file as 'README.md'
- Click 'save'
- Open GitHub Desktop
- Add a summary (commit message)
- Click 'commit to main'
- Click 'push to origin'
- Go to Repository>View on GitHub
- click on the new folder you just made
- Copy the link in your browser
- Paste that link in canvas!



## [Markdown 101](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- required of all Markdown documentation files in this class:
	- [Headers](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#headers)
	- [Links](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#links)
	- [Code highlighting](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#code)
	- [Images ALWAYS WITH ALT TEXT](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#images)
	- ![Cat Cat Meme](cat-cat-meme.gif)

## CODE ALONG TO MAKE AN SUBFOLDER FOR HOMEWORK
- Open TextMate
- Go to File>New
- Go to File>Save As
- Navigate to your itp folder
- Click on 'New Folder' (if you can't see 'New Folder' click on the down arrow next to where you selected your itp folder)
- Write the name of the homework assignment
- Save the name of the file as 'README.md'
- Click 'save'
- Open GitHub Desktop
- Add a summary (commit message)
- Click 'commit to main'
- Click 'push to origin'
- Go to Repository>View on GitHub
- click on the new folder you just made
- Copy the link in your browser
- Paste that link in canvas!


