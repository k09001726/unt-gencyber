const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is a technique used to prevent unauthorized access to data by allowing only authorized entities to access it?',
    options: ['Encryption', 'Decryption', 'Firewall', 'Intrusion Detection System'],
    correctAnswer: 'Encryption',
    cashPrize: 10
  },
  {
    prompt: 'What is a security model that is based on the principle of least privilege, where entities are granted only the access they need to perform their tasks?',
    options: ['Bell-LaPadula model', 'Biba model', 'Clark-Wilson model', 'Graham-Denning model'],
    correctAnswer: 'Clark-Wilson model',
    cashPrize: 50
  },
  {
    prompt: 'What is the process of disguising sensitive data so that it appears meaningless to unauthorized users?',
    options: ['Hashing', 'Salting', 'Masking', 'Obfuscation'],
    correctAnswer: 'Obfuscation',
    cashPrize: 100
  },
  {
    prompt: 'What is a type of cyber attack where an attacker attempts to prevent legitimate users from accessing a service by overwhelming it with traffic?',
    options: ['Phishing', 'Spoofing', 'SQL injection', 'DDoS'],
    correctAnswer: 'DDoS',
    cashPrize: 500
  },
  {
    prompt: 'What is a type of malware that encrypts a victim\'s data and demands payment in exchange for the decryption key?',
    options: ['Ransomware', 'Adware', 'Spyware', 'Botnet'],
    correctAnswer: 'Ransomware',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the process of identifying and addressing vulnerabilities in a system before attackers can exploit them?',
    options: ['Penetration testing', 'Vulnerability scanning', 'Social engineering', 'Phishing'],
    correctAnswer: 'Vulnerability scanning',
    cashPrize: 10
  },
  {
    prompt: 'What is a security mechanism that controls access to resources based on the identities of users and their roles?',
    options: ['Firewall', 'Intrusion Detection System', 'Identity and Access Management', 'Antivirus software'],
    correctAnswer: 'Identity and Access Management',
    cashPrize: 50
  },
  {
    prompt: 'What is a technique that uses mathematical algorithms to convert plain text into an unreadable format, which can only be deciphered with a key?',
    options: ['Encryption', 'Decryption', 'Obfuscation', 'Masking'],
    correctAnswer: 'Encryption',
    cashPrize: 100
  },
  {
    prompt: 'What is a type of attack that exploits a vulnerability in a web application by injecting malicious code into a web form input field?',
    options: ['SQL injection', 'Cross-site scripting', 'Buffer overflow', 'Man-in-the-middle'],
    correctAnswer: 'SQL injection',
    cashPrize: 500
  },
  {
    prompt: 'What is a technique that involves creating a decoy system to distract attackers and gather information about their tactics and tools?',
    options: ['Honeypot', 'Firewall', 'Intrusion Prevention System', 'Antivirus software'],
    correctAnswer: 'Honeypot',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is a technique used to determine the execution path of a program by providing inputs that cause it to follow different branches?',
    options: ['Fuzzing', 'Debugging', 'Reverse engineering', 'Exploit development'],
    correctAnswer: 'Fuzzing',
    cashPrize: 10
  },
  {
    prompt: 'What is a type of buffer overflow attack where an attacker overwrites the return address of a function call to redirect execution to a malicious payload?',
    options: ['Stack-based buffer overflow', 'Heap-based buffer overflow', 'Format string vulnerability', 'Integer overflow'],
    correctAnswer: 'Stack-based buffer overflow',
    cashPrize: 50
  },
  {
    prompt: 'What is a technique used to identify the memory layout of a program by analyzing its binary code and identifying data structures and function calls?',
    options: ['Static analysis', 'Dynamic analysis', 'Symbolic execution', 'Program slicing'],
    correctAnswer: 'Static analysis',
    cashPrize: 100
  },
  {
    prompt: 'What is a technique used to bypass security measures by injecting shellcode into a vulnerable program and causing it to execute arbitrary commands?',
    options: ['Exploit development', 'Reverse engineering', 'Debugging', 'Fuzzing'],
    correctAnswer: 'Exploit development',
    cashPrize: 500
  },
  {
    prompt: 'What is a type of attack that targets web applications by injecting malicious code into user input fields, which is then executed by the web server?',
    options: ['SQL injection', 'Cross-site scripting', 'Remote code execution', 'Directory traversal'],
    correctAnswer: 'Cross-site scripting',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is a technique used to analyze and understand the behavior of software by running it in a controlled environment and monitoring its interactions with the system?',
    options: ['Dynamic analysis', 'Static analysis', 'Program slicing', 'Symbolic execution'],
    correctAnswer: 'Dynamic analysis',
    cashPrize: 10,
  },
  {
    prompt: 'What is a process of converting executable code into a high-level language representation to facilitate understanding and modification?',
    options: ['Decompilation', 'Obfuscation', 'Disassembly', 'Debugging'],
    correctAnswer: 'Decompilation',
    cashPrize: 50,
  },
  {
    prompt: 'What is a technique used to identify the input/output behavior of a program by analyzing its assembly code?',
    options: ['Taint analysis', 'Program slicing', 'Data flow analysis', 'Dynamic analysis'],
    correctAnswer: 'Data flow analysis',
    cashPrize: 100,
  },
  {
    prompt: 'What is a technique used to modify the behavior of a program by patching its binary code at runtime?',
    options: ['Binary instrumentation', 'Fuzzing', 'Reverse engineering', 'Obfuscation'],
    correctAnswer: 'Binary instrumentation',
    cashPrize: 500,
  },
  {
    prompt: 'What is a process of identifying and exploiting vulnerabilities in firmware and embedded systems?',
    options: ['Hardware hacking', 'Firmware analysis', 'Device rooting', 'Software-defined radio'],
    correctAnswer: 'Firmware analysis',
    cashPrize: 1000,
  },
  /* Category 5 Questions */
  {
    prompt: 'What is a technique used to prevent SQL injection attacks by using prepared statements with parameterized queries?',
    options: ['Input validation', 'Output encoding', 'Escaping', 'Prepared statements'],
    correctAnswer: 'Prepared statements',
    cashPrize: 10,
  },
  {
    prompt: 'What is a technique used to bypass same-origin policy restrictions in web browsers by exploiting a vulnerability in the implementation of JSONP?',
    options: ['Cross-site scripting', 'Cross-site request forgery', 'Cross-domain messaging', 'JSON hijacking'],
    correctAnswer: 'JSON hijacking',
    cashPrize: 50,
  },
  {
    prompt: 'What is a technique used to identify and exploit vulnerabilities in web applications by manipulating HTTP requests and responses?',
    options: ['Fuzzing', 'Session hijacking', 'HTTP smuggling', 'Web scraping'],
    correctAnswer: 'HTTP smuggling',
    cashPrize: 100,
  },
  {
    prompt: 'What is a technique used to automate the process of identifying and exploiting SQL injection vulnerabilities in web applications?',
    options: ['SQLmap', 'Metasploit', 'Nmap', 'OpenVAS'],
    correctAnswer: 'SQLmap',
    cashPrize: 500,
  },
  {
    prompt: 'What is a technique used to analyze and modify the behavior of web applications by intercepting and modifying HTTP requests and responses?',
    options: ['Burp Suite', 'Wireshark', 'Nikto', 'ZAP'],
    correctAnswer: 'Burp Suite',
    cashPrize: 1000,
  },
];

export default questions;