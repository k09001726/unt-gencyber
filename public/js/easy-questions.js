const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is a VPN?',
    options: ['A type of virus', 'A type of firewall', 'A virtual private network that provides a secure and encrypted connection over a public network', 'A type of phishing attack'],
    correctAnswer: 'A virtual private network that provides a secure and encrypted connection over a public network',
    cashPrize: 10
  },
  {
    prompt: 'What is a SQL injection attack?',
    options: ['A type of physical attack', 'A type of social engineering attack', 'A type of attack that targets the security of a website by injecting SQL code into a database query', 'A type of phishing attack'],
    correctAnswer: 'A type of attack that targets the security of a website by injecting SQL code into a database query',
    cashPrize: 50
  },
  {
    prompt: 'What is two-factor authentication?',
    options: ['A type of encryption method', 'A type of virus', 'A type of authentication that requires two different methods of authentication for access', 'A type of social engineering attack'],
    correctAnswer: 'A type of authentication that requires two different methods of authentication for access',
    cashPrize: 100
  },
  {
    prompt: 'What is a malware?',
    options: ['A type of firewall', 'A type of antivirus software', 'A type of virus or software that is designed to harm a computer system or steal data', 'A type of physical attack'],
    correctAnswer: 'A type of virus or software that is designed to harm a computer system or steal data',
    cashPrize: 500
  },
  {
    prompt: 'What is a DDoS attack?',
    options: ['A type of physical attack', 'A type of social engineering attack', 'A type of attack that floods a server or network with a huge amount of traffic to make it unavailable', 'A type of virus'],
    correctAnswer: 'A type of attack that floods a server or network with a huge amount of traffic to make it unavailable',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is penetration testing?',
    options: ['A type of social engineering attack', 'A type of physical attack', 'A type of attack that attempts to find vulnerabilities in a system or network before an attacker can exploit them', 'A type of encryption method'],
    correctAnswer: 'A type of attack that attempts to find vulnerabilities in a system or network before an attacker can exploit them',
    cashPrize: 10
  },
  {
    prompt: 'What is a honeypot?',
    options: ['A type of virus', 'A type of firewall', 'A type of security mechanism that is used to lure attackers into a trap to collect information about their tactics and techniques', 'A type of physical attack'],
    correctAnswer: 'A type of security mechanism that is used to lure attackers into a trap to collect information about their tactics and techniques',
    cashPrize: 50
  },
  {
    prompt: 'What is encryption?',
    options: ['A type of antivirus software', 'A type of firewall', 'A process of encoding messages or data in such a way that only authorized parties can read it', 'A type of phishing attack'],
    correctAnswer: 'A process of encoding messages or data in such a way that only authorized parties can read it',
    cashPrize: 100
  },
  {
    prompt: 'What is access control?',
    options: ['A type of virus', 'A type of firewall', 'A process of managing and controlling access to a system or network by granting or denying permissions to users or devices', 'A type of social engineering attack'],
    correctAnswer: 'A process of managing and controlling access to a system or network by granting or denying permissions to users or devices',
    cashPrize: 500
  },
  {
    prompt: 'What is social engineering?',
    options: ['A type of attack that targets the security of a website by injecting SQL code into a database query', 'A type of attack that uses a virus to take control of a computer', 'A type of attack that targets human psychology to trick people into divulging sensitive information or performing actions that are harmful to themselves or their organization', 'A type of authentication that requires two different methods of authentication for access'],
    correctAnswer: 'A type of attack that targets human psychology to trick people into divulging sensitive information or performing actions that are harmful to themselves or their organization',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is a buffer overflow?',
    options: ['A type of social engineering attack', 'A type of physical attack', 'A type of attack that occurs when a program or process attempts to store more data in a buffer than it was designed to hold, leading to the overwriting of adjacent memory locations', 'A type of firewall'],
    correctAnswer: 'A type of attack that occurs when a program or process attempts to store more data in a buffer than it was designed to hold, leading to the overwriting of adjacent memory locations',
    cashPrize: 10
  },
  {
    prompt: 'What is a stack overflow?',
    options: ['A type of firewall', 'A type of attack that occurs when a program or process attempts to allocate more memory on the stack than it is allowed to, leading to the overwriting of adjacent memory locations', 'A type of virus', 'A type of social engineering attack'],
    correctAnswer: 'A type of attack that occurs when a program or process attempts to allocate more memory on the stack than it is allowed to, leading to the overwriting of adjacent memory locations',
    cashPrize: 50
  },
  {
    prompt: 'What is a shellcode?',
    options: ['A type of encryption method', 'A type of virus', 'A small piece of code that is used as the payload in an exploit to gain control over a vulnerable system', 'A type of phishing attack'],
    correctAnswer: 'A small piece of code that is used as the payload in an exploit to gain control over a vulnerable system',
    cashPrize: 100
  },
  {
    prompt: 'What is a format string vulnerability?',
    options: ['A type of virus', 'A type of firewall', 'A type of attack that occurs when a program or process does not properly validate user input that contains format specifiers, which can lead to memory leaks or arbitrary code execution', 'A type of physical attack'],
    correctAnswer: 'A type of attack that occurs when a program or process does not properly validate user input that contains format specifiers, which can lead to memory leaks or arbitrary code execution',
    cashPrize: 500
  },
  {
    prompt: 'What is a heap overflow?',
    options: ['A type of social engineering attack', 'A type of attack that occurs when a program or process attempts to allocate more memory on the heap than it is allowed to, leading to the overwriting of adjacent memory locations', 'A type of firewall', 'A type of virus'],
    correctAnswer: 'A type of attack that occurs when a program or process attempts to allocate more memory on the heap than it is allowed to, leading to the overwriting of adjacent memory locations',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is reverse engineering?',
    options: ['The process of analyzing a program or system to identify its functional and design characteristics', 'The process of obfuscating code to prevent reverse engineering', 'The process of encrypting data to protect it from unauthorized access', 'The process of breaking into a computer system by exploiting vulnerabilities'],
    correctAnswer: 'The process of analyzing a program or system to identify its functional and design characteristics',
    cashPrize: 10
  },
  {
    prompt: 'What is a debugger?',
    options: ['A tool used to identify vulnerabilities in software', 'A tool used to encrypt data', 'A tool used to obfuscate code', 'A tool used to monitor and control the execution of a program for the purposes of debugging and analysis'],
    correctAnswer: 'A tool used to monitor and control the execution of a program for the purposes of debugging and analysis',
    cashPrize: 50
  },
  {
    prompt: 'What is static analysis?',
    options: ['The process of analyzing the behavior of a program at runtime', 'The process of analyzing a program by examining its source code or compiled binary without executing it', 'The process of analyzing the behavior of a program by observing its interactions with other programs and systems', 'The process of analyzing network traffic for signs of malicious activity'],
    correctAnswer: 'The process of analyzing a program by examining its source code or compiled binary without executing it',
    cashPrize: 100
  },
  {
    prompt: 'What is a disassembler?',
    options: ['A tool used to analyze the behavior of a program at runtime', 'A tool used to analyze network traffic for signs of malicious activity', 'A tool used to examine the assembly code generated by a compiler', 'A tool used to obfuscate code'],
    correctAnswer: 'A tool used to examine the assembly code generated by a compiler',
    cashPrize: 500
  },
  {
    prompt: 'What is code obfuscation?',
    options: ['The process of analyzing a program by examining its source code or compiled binary without executing it', 'The process of encrypting data to protect it from unauthorized access', 'The process of hiding the true meaning or purpose of code in order to make it more difficult to reverse engineer', 'The process of breaking into a computer system by exploiting vulnerabilities'],
    correctAnswer: 'The process of hiding the true meaning or purpose of code in order to make it more difficult to reverse engineer',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What is SQL injection?',
    options: ['A technique used to bypass authentication mechanisms', 'A technique used to steal sensitive data by exploiting vulnerabilities in SQL queries', 'A technique used to inject malicious code into a website', 'A technique used to overload a web server by sending large amounts of traffic'],
    correctAnswer: 'A technique used to steal sensitive data by exploiting vulnerabilities in SQL queries',
    cashPrize: 10
  },
  {
    prompt: 'What is a buffer overflow?',
    options: ['A technique used to overload a web server by sending large amounts of traffic', 'A technique used to bypass authentication mechanisms', 'A technique used to inject malicious code into a website', 'A technique used to exploit a vulnerability in a program by overflowing a buffer and overwriting adjacent memory'],
    correctAnswer: 'A technique used to exploit a vulnerability in a program by overflowing a buffer and overwriting adjacent memory',
    cashPrize: 50
  },
  {
    prompt: 'What is cross-site scripting (XSS)?',
    options: ['A technique used to inject malicious code into a website', 'A technique used to overload a web server by sending large amounts of traffic', 'A technique used to bypass authentication mechanisms', 'A technique used to steal sensitive data by exploiting vulnerabilities in web applications'],
    correctAnswer: 'A technique used to inject malicious code into a website',
    cashPrize: 100
  },
  {
    prompt: 'What is a session hijacking attack?',
    options: ['A technique used to bypass authentication mechanisms', 'A technique used to inject malicious code into a website', 'A technique used to steal sensitive data by intercepting and manipulating network traffic', 'A technique used to overload a web server by sending large amounts of traffic'],
    correctAnswer: 'A technique used to steal sensitive data by intercepting and manipulating network traffic',
    cashPrize: 500
  },
  {
    prompt: 'What is a race condition?',
    options: ['A condition that occurs when two or more processes access a shared resource in an unexpected order', 'A condition that occurs when a program performs an operation on a data structure after it has been freed from memory', 'A condition that occurs when a program accepts input from an untrusted source without proper validation', 'A condition that occurs when a program executes an instruction in an unexpected order'],
    correctAnswer: 'A condition that occurs when two or more processes access a shared resource in an unexpected order',
    cashPrize: 1000
  },
];

export default questions;