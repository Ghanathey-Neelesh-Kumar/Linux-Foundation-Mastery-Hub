/**
 * ==========================================
 *  HOW TO ADD NEW QUESTIONS
 * ==========================================
 * 
 * 1. Find the category you want to add to (e.g., 'lfcs', 'cka').
 *    If adding a new category, add it to the `categories` array first.
 *    NOTE: To make a category active, remove the `comingSoon: true` property.
 * 
 * 2. Add a new object to the array in `questionBank`.
 *    Format:
 *    {
 *      id: <unique_number>,
 *      question: "Your Question Text",
 *      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
 *      correctAnswer: "Option 1",
 *      explanation: `
 *        ### Concept
 *        Explanation text here...
 *      `
 *    }
 */

export const categories = [
  {
    id: 'kcna',
    title: 'KCNA (Kubernetes and Cloud Native Associate)',
    description: 'Foundational knowledge of Kubernetes and cloud-native ecosystem.'
    // Active by default
  },
  {
    id: 'kcsa',
    title: 'KCSA (Kubernetes and Cloud Native Security Associate)',
    description: 'Security fundamentals for cloud-native architectures.'
  },
  {
    id: 'lfcs',
    title: 'LFCS (Linux Foundation Certified SysAdmin)',
    description: 'Essential commands, file systems, and user management.',
    comingSoon: true
  },
  {
    id: 'lfce',
    title: 'LFCE (Linux Foundation Certified Engineer)',
    description: 'Advanced networking, system design, and automation.',
    comingSoon: true
  },
  {
    id: 'cks',
    title: 'CKS (Certified Kubernetes Security Specialist)',
    description: 'Cluster hardening, system security, and policy.',
    comingSoon: true
  },
  {
    id: 'cka',
    title: 'CKA (Certified Kubernetes Administrator)',
    description: 'Cluster administration, installation, configuration, and troubleshooting.',
    comingSoon: true
  },
  {
    id: 'ckad',
    title: 'CKAD (Certified Kubernetes Application Developer)',
    description: 'Cloud-native application design, build, and deployment for Kubernetes.',
    comingSoon: true
  },
  {
    id: 'cnpe',
    title: 'CNPE (Certified Cloud Native Platform Engineer)',
    description: 'Platform engineering practices for cloud-native ecosystems.',
    comingSoon: true
  },
  {
    id: 'pca',
    title: 'PCA (Prometheus Certified Associate)',
    description: 'Observability using Prometheus.',
    comingSoon: true
  },
  {
    id: 'ica',
    title: 'ICA (Istio Certified Associate)',
    description: 'Service mesh fundamentals using Istio.',
    comingSoon: true
  },
  {
    id: 'cca',
    title: 'CCA (Cilium Certified Associate)',
    description: 'Networking, observability, and security with Cilium.',
    comingSoon: true
  },
  {
    id: 'capa',
    title: 'CAPA (Certified Argo Project Associate)',
    description: 'GitOps and continuous delivery with Argo.',
    comingSoon: true
  },
  {
    id: 'cgoa',
    title: 'CGOA (Certified GitOps Associate)',
    description: 'GitOps principles and practices.',
    comingSoon: true
  },
  {
    id: 'cba',
    title: 'CBA (Certified Backstage Associate)',
    description: 'Building developer portals with Backstage.',
    comingSoon: true
  },
  {
    id: 'otca',
    title: 'OTCA (OpenTelemetry Certified Associate)',
    description: 'Observability and telemetry standards.',
    comingSoon: true
  },
  {
    id: 'kca',
    title: 'KCA (Kyverno Certified Associate)',
    description: 'Policy management for Kubernetes using Kyverno.',
    comingSoon: true
  },
  {
    id: 'cnpa',
    title: 'CNPA (Certified Cloud Native Platform Engineering Associate)',
    description: 'Foundational platform engineering concepts.',
    comingSoon: true
  }
];

export const questionBank = {
  lfcs: [
    {
      id: 1,
      question: "Which command is used to display the current working directory in Linux?",
      options: ["pwd", "ls", "cd", "dir"],
      correctAnswer: "pwd",
      explanation: `
### Concept: Navigation
The \`pwd\` (Print Working Directory) command displays the full absolute path of the current directory you are in.

- **ls**: Lists files.
- **cd**: Changes directory.
`
    },
    {
      id: 2,
      question: "How do you create a new directory named 'projects'?",
      options: ["touch projects", "mkdir projects", "rm -r projects", "new projects"],
      correctAnswer: "mkdir projects",
      explanation: `
### Concept: File Management
The \`mkdir\` (Make Directory) command is used to create new directories. 
`
    },
    {
      id: 3,
      question: "Which command changes file permissions?",
      options: ["chown", "chmod", "chgrp", "umask"],
      correctAnswer: "chmod",
      explanation: `
### Concept: Permissions
**chmod** (change mode) is the command used to change the access permissions of file system objects.

- **chown**: Change file owner.
- **chgrp**: Change group ownership.
- **umask**: Set default permissions.
`
    },
    {
      id: 4,
      question: "Which symbol represents the user's home directory?",
      options: ["/", ".", "~", ".."],
      correctAnswer: "~",
      explanation: `
### Concept: Shell Expansions
The tilde \`~\` character is a standard shell expansion that resolves to the current user's home directory (e.g., \`/home/student\`).
`
    },
    {
      id: 5,
      question: "Which command is used to search for text patterns within a file?",
      options: ["find", "locate", "grep", "sed"],
      correctAnswer: "grep",
      explanation: `
### Concept: Text Processing
\`grep\` (Global Regular Expression Print) searches for patterns in files.

Example:
\`\`\`bash
grep "error" /var/log/syslog
\`\`\`
`
    },
    {
      id: 6,
      question: "What does the 'r' permissions flag stand for?",
      options: ["Run", "Read", "Remove", "Recursive"],
      correctAnswer: "Read",
      explanation: `
### Concept: Permissions
In Linux permissions:
- **r** = Read (4)
- **w** = Write (2)
- **x** = Execute (1)
`
    },
    {
      id: 7,
      question: "Which command lists running processes?",
      options: ["ps", "top", "jobs", "All of the above"],
      correctAnswer: "All of the above",
      explanation: `
### Concept: Process Management
- **ps**: Snapshot of current processes.
- **top**: Real-time view of processes.
- **jobs**: Lists jobs in the current shell.
`
    },
    {
      id: 8,
      question: "How do you view the content of a file named 'notes.txt'?",
      options: ["cat notes.txt", "ls notes.txt", "touch notes.txt", "cd notes.txt"],
      correctAnswer: "cat notes.txt",
      explanation: `
### Concept: File Operations
\`cat\` (concatenate) is commonly used to display file contents to the terminal output.
`
    },
    {
      id: 9,
      question: "Which directory conventionally contains configuration files?",
      options: ["/bin", "/etc", "/var", "/home"],
      correctAnswer: "/etc",
      explanation: `
### Concept: FHS (Filesystem Hierarchy Standard)
- **/etc**: System-wide configuration files.
- **/bin**: Essential user binaries.
- **/var**: Variable data (log, spool).
`
    },
    {
      id: 10,
      question: "Which command creates an empty file if it doesn't exist?",
      options: ["mkfile", "touch", "cat", "nano"],
      correctAnswer: "touch",
      explanation: `
### Concept: File Management
\`touch\` updates the access timestamp of a file, but if the file does not exist, it creates an empty one.
`
    },
    {
      id: 11,
      question: "Which command removes a directory and all it contents?",
      options: ["rmdir", "rm -r", "del", "erase"],
      correctAnswer: "rm -r",
      explanation: `
### Concept: Deletion
- **rm -r**: Recursively remove a directory and its contents.
- **rmdir**: Only removes *empty* directories.
`
    },
    {
      id: 12,
      question: "What is the PID of the init/systemd process usually?",
      options: ["0", "1", "100", "999"],
      correctAnswer: "1",
      explanation: `
### Concept: Boot Process
The first process started by the kernel is **init** (or modern **systemd**), which is assigned PID 1.
`
    },
    {
      id: 13,
      question: "Which command shows disk usage of files and directories?",
      options: ["df", "du", "fdisk", "free"],
      correctAnswer: "du",
      explanation: `
### Concept: Disk Management
- **du** (Disk Usage): Estimates file space usage.
- **df** (Disk Free): Shows file system availability.
`
    },
    {
      id: 14,
      question: "Which command is used to change the owner of a file?",
      options: ["chmod", "chown", "chgrp", "passwd"],
      correctAnswer: "chown",
      explanation: `
### Concept: Permissions
**chown** (Change Owner) is used to change the file owner and group.

Usage: \`chown user:group file\`
`
    },
    {
      id: 15,
      question: "What constitutes a 'hard link'?",
      options: ["A pointer to the file name", "A pointer to the inode", "A shortcut", "A copy of the file"],
      correctAnswer: "A pointer to the inode",
      explanation: `
### Concept: Filesystems
A **hard link** points directly to the inode of the original file. Deleting the original filename does not affect the data if a hard link exists.
`
    },
    {
      id: 16,
      question: "Which command brings a background job to the foreground?",
      options: ["bg", "fg", "jobs", "top"],
      correctAnswer: "fg",
      explanation: `
### Concept: Job Control
- **fg**: Moves a job to the foreground.
- **bg**: Resumes a stopped job in the background.
`
    }
  ],
  lfce: [
    {
      id: 101,
      question: "Which command is used to trace the route packets take to a network host?",
      options: ["ping", "traceroute", "netstat", "route"],
      correctAnswer: "traceroute",
      explanation: `
### Concept: Networking
\`traceroute\` prints the route packets take to a network host, showing each hop along the way.
      `
    },
    {
      id: 102,
      question: "Which tool is used to monitor network traffic in real-time?",
      options: ["tcpdump", "netstat", "ss", "ip addr"],
      correctAnswer: "tcpdump",
      explanation: `
### Concept: Network Analysis
**tcpdump** is a powerful command-line packet analyzer.
`
    },
    {
      id: 103,
      question: "Which file is used to configure static DNS resolution?",
      options: ["/etc/hosts", "/etc/resolv.conf", "/etc/dns", "/etc/network"],
      correctAnswer: "/etc/hosts",
      explanation: `
### Concept: Networking
- **/etc/hosts**: Local static mapping of IP addresses to hostnames.
- **/etc/resolv.conf**: Configuration for DNS nameservers.
`
    },
    {
      id: 104,
      question: "What is the command to create a Git repository?",
      options: ["git init", "git start", "git create", "git new"],
      correctAnswer: "git init",
      explanation: `
### Concept: Version Control
\`git init\` initializes a new Git repository in the current directory.
`
    },
    {
      id: 105,
      question: "Which protocol is used for secure remote login?",
      options: ["FTP", "Telnet", "SSH", "HTTP"],
      correctAnswer: "SSH",
      explanation: `
### Concept: Security
**SSH** (Secure Shell) provides encrypted communication for remote logins.
`
    }
  ],
  cks: [
    {
      id: 201,
      question: "Which admission controller should be enabled to enforce pod security policies?",
      options: ["NodeRestriction", "PodSecurityPolicy", "ServiceAccount", "LimitRanger"],
      correctAnswer: "PodSecurityPolicy",
      explanation: `
### Concept: Security
**PodSecurityPolicy** (deprecated in newer k8s but relevant for legacy certs, replaced by Pod Security Standards) is the admission controller that validates pods against policies.
      `
    },
    {
      id: 202,
      question: "Which component is responsible for maintaining the state of the cluster?",
      options: ["kubelet", "etcd", "scheduler", "controller-manager"],
      correctAnswer: "etcd",
      explanation: `
### Concept: Kubernetes Architecture
**etcd** is the consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.
`
    },
    {
      id: 203,
      question: "Which command checks for vulnerabilities in container images?",
      options: ["kubectl scan", "trivy", "docker inspect", "kube-bench"],
      correctAnswer: "trivy",
      explanation: `
### Concept: Container Security
**Trivy** is a popular open-source scanner for vulnerabilities in container images, file systems, and git repositories.
`
    },
    {
      id: 204,
      question: "How do you securely store sensitive information in Kubernetes?",
      options: ["ConfigMap", "Environment Variables", "Secrets", "Plain text"],
      correctAnswer: "Secrets",
      explanation: `
### Concept: Kubernetes Objects
**Secrets** are designed to store sensitive data like passwords, OAuth tokens, and ssh keys.
`
    },
    {
      id: 205,
      question: "Which profile is used to restrict system calls a container can make?",
      options: ["AppArmor", "Seccomp", "SELinux", "All of the above"],
      correctAnswer: "All of the above",
      explanation: `
### Concept: System Security
- **Seccomp**: Restricts syscalls.
- **AppArmor/SELinux**: Mandatory Access Control (MAC) systems to restrict capabilities.
`
    }
  ],
  cka: [],
  ckad: [],
  cnpe: [],
  kcsa: [
    {
      id: 501,
      question: "What does the '4C' security model in cloud-native computing stand for?",
      options: [
        "Cloud, Clusters, Containers, and Code",
        "Compute, Capacity, Cost, and Connectivity",
        "Control, Compliance, Configuration, and Consensus",
        "Core, Cell, Chip, and Circuit"
      ],
      correctAnswer: "Cloud, Clusters, Containers, and Code",
      explanation: `
### Concept: Layers of Cloud Native Security
The CNCF describes security in layers often referred to as the **4C's of Cloud Native Security**.

**The Layers:**
1.  **Cloud**: The underlying infrastructure (AWS, Azure, Home server). If the cloud is insecure, everything else is at risk.
2.  **Cluster**: The Kubernetes control plane and node environment.
3.  **Containers**: The image security and runtime isolation.
4.  **Code**: Application security, including dependencies and business logic.

Each layer builds upon the next, meaning security must be addressed at every level.
      `
    },
    {
      id: 502,
      question: "Which of the following describes 'STRIDE' in the context of threat modeling?",
      options: [
        "A tool for scanning container images",
        "A framework for identifying security threats",
        "A Kubernetes network plugin",
        "A protocol for encrypted storage"
      ],
      correctAnswer: "A framework for identifying security threats",
      explanation: `
### Concept: Threat Modeling (STRIDE)
**STRIDE** is a mnemonic developed by Microsoft for identifying computer security threats.

**S.T.R.I.D.E stands for:**
- **S**poofing: Impersonating someone or something.
- **T**ampering: Modifying data or code.
- **R**epudiation: Claiming you didn't do an action.
- **I**nformation Disclosure: Leaking private data.
- **D**enial of Service: Crashing the system.
- **E**levation of Privilege: Gaining unauthorized permissions.
      `
    },
    {
      id: 503,
      question: "What is the primary difference between Authentication and Authorization?",
      options: [
        "Authentication is about 'who you are', Authorization is about 'what you can do'",
        "Authentication is for users, Authorization is for machines",
        "Authentication happens in the cloud, Authorization happens on the node",
        "They are synonyms in cloud-native security"
      ],
      correctAnswer: "Authentication is about 'who you are', Authorization is about 'what you can do'",
      explanation: `
### Concept: Identity & Access Management (IAM)
- **Authentication (AuthN)**: The process of verifying the identity of a user or process (e.g., using a certificate, token, or password).
- **Authorization (AuthZ)**: The process of determining if a verified identity has permission to perform a specific action (e.g., RBAC rules).

**Analogy:**
- **AuthN**: Showing your ID to a security guard to enter a building.
- **AuthZ**: Using your keycard to see if you are allowed to enter the server room once inside.
      `
    },
    {
      id: 504,
      question: "Which Kubernetes component is the primary target for securing the cluster's API?",
      options: [
        "kube-proxy",
        "kube-apiserver",
        "kube-scheduler",
        "etcd"
      ],
      correctAnswer: "kube-apiserver",
      explanation: `
### Concept: Securing the Control Plane
The **kube-apiserver** is the central gateway for all cluster operations.

**Security Measures:**
- **TLS**: Use certificates for all communication.
- **Bypass prevention**: Ensure users can't talk to kubelets or etcd directly.
- **Authentication**: Enable OIDC, Service Accounts, or Client Certs.
- **Audit Logging**: Track who did what and when.
      `
    },
    {
      id: 505,
      question: "In Kubernetes RBAC, what is the difference between a Role and a ClusterRole?",
      options: [
        "Role is for pods, ClusterRole is for nodes",
        "Role is limited to a specific namespace, ClusterRole is cluster-wide",
        "Role is for users, ClusterRole is for services",
        "There is no difference"
      ],
      correctAnswer: "Role is limited to a specific namespace, ClusterRole is cluster-wide",
      explanation: `
### Concept: RBAC (Role-Based Access Control)
- **Role**: Defines permissions within a single namespace (e.g., 'can read pods in \"dev\" namespace').
- **ClusterRole**: Defines permissions cluster-wide or for non-namespaced resources (e.g., 'can read nodes' or 'can read pods in all namespaces').

**Matching Bindings:**
- **RoleBinding**: Grants Role permissions to a user/group within a specific namespace.
- **ClusterRoleBinding**: Grants ClusterRole permissions to a user/group cluster-wide.
      `
    },
    {
      id: 506,
      question: "What is 'Image Scanning' primarily used for in a CI/CD pipeline?",
      options: [
        "Making the image file size smaller",
        "Identifying known vulnerabilities (CVEs) in the container image",
        "Speeding up the build process",
        "Uploading the image to a registry"
      ],
      correctAnswer: "Identifying known vulnerabilities (CVEs) in the container image",
      explanation: `
### Concept: Supply Chain Security
**Image Scanning** tools (like Trivy, Grype, or Clair) look at the packages and libraries inside a container image and compare them against a database of **Known Vulnerabilities (CVEs)**.

**Why it matters:** It prevents you from deploying software with security holes that attackers could exploit. Best practice is to scan during build, in the registry, and continuously in production.
      `
    },
    {
      id: 507,
      question: "What is the security benefit of 'Distroless' images?",
      options: [
        "They are easier to debug",
        "They have a smaller attack surface as they contain only the app and its runtime dependencies",
        "They include all Linux utilities for convenience",
        "They automatically encrypt data"
      ],
      correctAnswer: "They have a smaller attack surface as they contain only the app and its runtime dependencies",
      explanation: `
### Concept: Hardening Container Images
**Distroless** images contain only your application and its runtime dependencies. They do **not** contain package managers, shells, or standard Linux utilities (like \`ls\`, \`curl\`, \`sh\`).

**Benefits:**
- **Reduced Attack Surface**: Attackers cannot use a shell to explore your pod if they compromise the app.
- **Smaller Size**: Faster downloads and less storage.
- **Less Noise**: Scanners find fewer vulnerabilities because there are fewer packages.
      `
    },
    {
      id: 508,
      question: "What does 'Network Policy' provide in Kubernetes?",
      options: [
        "A way to assign IP addresses to nodes",
        "Specification of how groups of pods are allowed to communicate with each other",
        "A method for encrypting traffic",
        "Hardware firewall configuration"
      ],
      correctAnswer: "Specification of how groups of pods are allowed to communicate with each other",
      explanation: `
### Concept: Network Security
By default, Kubernetes pods follow a **non-isolated** model (every pod can talk to every other pod).

**Network Policies** allow you to implement **Zero Trust** by:
- **Default Deny**: Blocking all traffic and only allowing what is necessary.
- **Isolation**: Restricting traffic based on labels, namespaces, or IP blocks.
- **Ingress/Egress control**: Managing both incoming and outgoing connections.

**Note**: You need a CNI plugin that supports Network Policies (like Calico or Cilium) for these rules to be enforced.
      `
    },
    {
      id: 509,
      question: "What is 'Secrets Management' in the context of cloud-native applications?",
      options: [
        "Hiding the existence of your application",
        "Safely storing and retrieving sensitive data (API keys, passwords, certificates)",
        "Storing large database backups",
        "Managing cluster administrator names"
      ],
      correctAnswer: "Safely storing and retrieving sensitive data (API keys, passwords, certificates)",
      explanation: `
### Concept: Managing Sensitive Data
**Secrets Management** ensures that sensitive data is not stored in plain text (like in your Git repo or Dockerfile).

**Approaches:**
1.  **K8s Secrets**: Better than plain text, but only base64 encoded by default. Should be combined with **Encryption at Rest**.
2.  **External Vaults**: Using tools like **HashiCorp Vault**, AWS Secrets Manager, or Azure Key Vault to store secrets externally and inject them at runtime.
      `
    },
    {
      id: 510,
      question: "Which CNCF project provides a policy engine for Kubernetes, allowing you to enforce security policies as code?",
      options: [
        "Kyverno",
        "Prometheus",
        "Envoy",
        "Helm"
      ],
      correctAnswer: "Kyverno",
      explanation: `
### Concept: Policy-as-Code
**Kyverno** is a policy engine designed for Kubernetes.

**What it does:**
- **Validate**: Check if a resource follows rules (e.g., \"Must have a 'team' label\").
- **Mutate**: Change a resource automatically (e.g., \"Inject a sidecar proxy\").
- **Generate**: Create secondary resources (e.g., \"Create a default NetworkPolicy for every new namespace\").

**Why it's cool:** It uses standard Kubernetes YAML for policies, so you don't need to learn a new language.
      `
    },
    {
      id: 511,
      question: "Which DREAD category measures how many users are affected by an exploit?",
      options: ["Discoverability", "Reproducibility", "Affected Users", "Explanability"],
      correctAnswer: "Affected Users",
      explanation: `
### Concept: Threat Modeling (DREAD)
**DREAD** is a framework for risk assessment.
- **Affected Users**: Measures the blast radius (how many people/systems impacted).
- **Discoverability**: How easy it is to find the vulnerability.
- **Reproducibility**: How easy it is to repeat the exploit.
      `
    },
    {
      id: 512,
      question: "What is the primary purpose of 'Security by Design' in cloud-native application development?",
      options: [
        "To scan for vulnerabilities after deployment",
        "To integrate security considerations into every phase of the development lifecycle",
        "To use only specific secure programming languages",
        "To hide the source code from public view"
      ],
      correctAnswer: "To integrate security considerations into every phase of the development lifecycle",
      explanation: `
### Concept: Security by Design
Security by Design means making security a core requirement from the start, rather than an afterthought or an "add-on" after the code is written.
      `
    },
    {
      id: 513,
      question: "Which Pod Security Standard profile provides the tightest restrictions, preventing potential privilege escalation?",
      options: ["Privileged", "Baseline", "Restricted", "Default"],
      correctAnswer: "Restricted",
      explanation: `
### Concept: Pod Security Standards
- **Privileged**: Unrestricted (allows for escalation).
- **Baseline**: Minimal restrictions (prevents known escalations).
- **Restricted**: Heavily restricted (best practice for security-sensitive workloads).
      `
    },
    {
      id: 514,
      question: "What does the 'Supply Chain Levels for Software Artifacts' (SLSA) framework aim to prevent?",
      options: [
        "Network-based DDoS attacks",
        "Unauthorized access to the Kubernetes API",
        "Tampering and compromise during the software build and distribution process",
        "Data leaks from production databases"
      ],
      correctAnswer: "Tampering and compromise during the software build and distribution process",
      explanation: `
### Concept: Supply Chain Security (SLSA)
**SLSA** (pronounced "salsa") provides a set of standards and controls to ensure the integrity of software artifacts throughout their lifecycle.
      `
    },
    {
      id: 515,
      question: "In Kubernetes, which component is responsible for authorizing requests after they have been authenticated?",
      options: ["kube-scheduler", "kube-apiserver", "kubelet", "container runtime"],
      correctAnswer: "kube-apiserver",
      explanation: `
### Concept: API Server Security
The **kube-apiserver** performs Authentication (Who are you?), Authorization (What can you do?), and Admission Control (Is this allowed?).
      `
    },
    {
      id: 516,
      question: "Which Linux kernel feature is used by Kubernetes to isolate the resource usage (CPU, Memory) of different containers?",
      options: ["Namespaces", "Control Groups (cgroups)", "SELinux", "AppArmor"],
      correctAnswer: "Control Groups (cgroups)",
      explanation: `
### Concept: Container Isolation
- **cgroups**: Manage and limit resource usage (CPU, RAM).
- **Namespaces**: Provide isolation for view of the system (Network, Process IDs, Mount points).
      `
    },
    {
      id: 517,
      question: "What is the role of a 'Mutating Admission Webhook'?",
      options: [
        "To validate if a resource follows specific security rules",
        "To modify the content of a resource request before it is saved to etcd",
        "To delete unauthorized pods automatically",
        "To rotate certificates for the cluster nodes"
      ],
      correctAnswer: "To modify the content of a resource request before it is saved to etcd",
      explanation: `
### Concept: Admission Control
**Mutating Webhooks** can change the resource (e.g., injecting a sidecar container or setting default resource limits).
      `
    },
    {
      id: 518,
      question: "Which standard provides a comprehensive set of security benchmarks specifically for Kubernetes clusters?",
      options: ["PCI-DSS", "HIPAA", "CIS Benchmarks", "GDPR"],
      correctAnswer: "CIS Benchmarks",
      explanation: `
### Concept: Compliance and Standards
The **CIS (Center for Internet Security) Benchmarks** are highly regarded industry standards for hardening Kubernetes clusters and their components.
      `
    },
    {
      id: 519,
      question: "What does 'Shift Left' mean in the context of Cloud Native Security?",
      options: [
        "Moving workloads from public cloud to private cloud",
        "Addressing security earlier in the development lifecycle (DevSecOps)",
        "Changing the orientation of network diagrams",
        "Prioritizing frontend security over backend security"
      ],
      correctAnswer: "Addressing security earlier in the development lifecycle (DevSecOps)",
      explanation: `
### Concept: Shift Left
By shifting left, teams identify and fix vulnerabilities during the coding and build phases, reducing the cost and risk of security issues in production.
      `
    },
    {
      id: 520,
      question: "Which Kubernetes resource is used to provide fine-grained control over what a pod is capable of doing on the host node?",
      options: ["NetworkPolicy", "RuntimeClass", "SecurityContext", "ResourceQuota"],
      correctAnswer: "SecurityContext",
      explanation: `
### Concept: Pod Security
A **SecurityContext** defines privilege and access control settings for a Pod or Container (e.g., runAsUser, privileged: false, allowPrivilegeEscalation: false).
      `
    },
    {
      id: 521,
      question: "What is the primary security risk of running containers with the 'privileged' flag set to true?",
      options: [
        "The container will consume too much memory",
        "The container can bypass most security isolations and access the host node's resources",
        "The container will have a slower network connection",
        "The container cannot be scanned by vulnerability tools"
      ],
      correctAnswer: "The container can bypass most security isolations and access the host node's resources",
      explanation: `
### Concept: Privileged Containers
Privileged containers have nearly all the capabilities of the host, making a "container escape" much easier for an attacker.
      `
    },
    {
      id: 522,
      question: "Which CNCF project acts as an open-source, cloud-native runtime security tool for detecting unusual behavior in containers?",
      options: ["Falco", "Trivy", "Prometheus", "Envoy"],
      correctAnswer: "Falco",
      explanation: `
### Concept: Runtime Security
**Falco** uses kernel instrumentation (eBPF) to monitor system calls and detect suspicious activity (e.g., a shell being spawned in a production container).
      `
    },
    {
      id: 523,
      question: "What is an 'SBOM' in the context of software supply chain security?",
      options: [
        "Secure Backup of Metadata",
        "Software Bill of Materials",
        "Standard Binary Object Mapping",
        "System Build Operation Management"
      ],
      correctAnswer: "Software Bill of Materials",
      explanation: `
### Concept: Supply Chain Security (SBOM)
An **SBOM** is a complete list of all components (libraries, dependencies) used to build a piece of software, allowing for better vulnerability tracking.
      `
    },
    {
      id: 524,
      question: "In the '4C' security model, which layer is responsible for the physical security of the data center?",
      options: ["Cloud", "Cluster", "Container", "Code"],
      correctAnswer: "Cloud",
      explanation: `
### Concept: 4C Model
The **Cloud** layer includes the physical infrastructure, whether provided by a public cloud vendor or managed in an on-premise data center.
      `
    },
    {
      id: 525,
      question: "What does 'Least Privilege' mean when defining RBAC roles in Kubernetes?",
      options: [
        "Giving users as few permissions as possible while still allowing them to do their job",
        "Only allowing senior developers to access the cluster",
        "Creating only one admin role for the entire cluster",
        "Hiding the existence of certain namespaces from users"
      ],
      correctAnswer: "Giving users as few permissions as possible while still allowing them to do their job",
      explanation: `
### Concept: RBAC Principles
The **Principle of Least Privilege** reduces the blast radius of a compromised account by ensuring it only has the specific permissions it needs.
      `
    },
    {
      id: 526,
      question: "Which format is typically used for Kubernetes Network Policies?",
      options: ["JSON", "YAML", "XML", "TOML"],
      correctAnswer: "YAML",
      explanation: `
### Concept: Network Policies
Like most Kubernetes resources, **NetworkPolicies** are defined using YAML manifests.
      `
    },
    {
      id: 527,
      question: "What is the primary benefit of using 'Namespaced' resources in Kubernetes for multi-tenancy?",
      options: [
        "Better performance for large clusters",
        "Logical isolation and resource quota management for different teams",
        "Automatic encryption of all data in the namespace",
        "Hiding pods from the cluster administrator"
      ],
      correctAnswer: "Logical isolation and resource quota management for different teams",
      explanation: `
### Concept: Namespaces
Namespaces allow multiple teams to share a single cluster without accidentally interfering with each others' resources.
      `
    },
    {
      id: 528,
      question: "Which tool is commonly used to sign container images to ensure their integrity?",
      options: ["Cosign", "Docker Hub", "Kubectl", "Minikube"],
      correctAnswer: "Cosign",
      explanation: `
### Concept: Supply Chain Security (Signing)
**Cosign** (part of the Sigstore project) allows developers to sign images, providing a way to verify that an image hasn't been tampered with since it was built.
      `
    },
    {
      id: 529,
      question: "What is a 'Deny All' Network Policy used for?",
      options: [
        "To block all internet access for the entire cluster",
        "To prevent any communication between pods in a namespace by default",
        "To delete all pods that are not compliant with security rules",
        "To disable the Kubernetes API server permanently"
      ],
      correctAnswer: "To prevent any communication between pods in a namespace by default",
      explanation: `
### Concept: Zero Trust Networking
Starting with a **Deny All** policy and explicitly allowing only necessary traffic is a core practice of the "Zero Trust" security model.
      `
    },
    {
      id: 530,
      question: "Which Kubernetes component manages the encryption of secrets at rest in etcd?",
      options: ["kube-apiserver", "kube-scheduler", "kube-controller-manager", "etcd"],
      correctAnswer: "kube-apiserver",
      explanation: `
### Concept: Secret Security
The **kube-apiserver** handles the encryption/decryption of secrets before they are written to or read from **etcd**.
      `
    },
    {
      id: 531,
      question: "What is 'Runtime Security' focused on?",
      options: [
        "Finding bugs in the source code",
        "Scanning images in a registry",
        "Detecting and preventing malicious activity while containers are running",
        "Setting up hardware firewalls in the data center"
      ],
      correctAnswer: "Detecting and preventing malicious activity while containers are running",
      explanation: `
### Concept: Runtime Security
Detection of unexpected process execution, suspicious network connections, or unauthorized file access occurs at the runtime layer.
      `
    },
    {
      id: 532,
      question: "Which of the following is a potential risk of using third-party container images from public registries?",
      options: [
        "They might contain malware or unpatched vulnerabilities",
        "They are always slower to download than private images",
        "They cannot be used in production environments",
        "They require a special license from the CNCF"
      ],
      correctAnswer: "They might contain malware or unpatched vulnerabilities",
      explanation: `
### Concept: Supply Chain Security
Always scan and verify third-party images before use, and ideally use a private registry to mirror only trusted versions.
      `
    },
    {
      id: 533,
      question: "What is the purpose of 'Audit Logs' in Kubernetes?",
      options: [
        "To improve the performance of the API server",
        "To provide a chronological record of calls to the Kubernetes API",
        "To store application level logs for debugging",
        "To replace standard Linux system logs"
      ],
      correctAnswer: "To provide a chronological record of calls to the Kubernetes API",
      explanation: `
### Concept: Auditing
Audit logs answer: "Who did what, when, and from where?", which is essential for security forensic and compliance.
      `
    },
    {
      id: 534,
      question: "Which admission controller is used to limit the amount of resources (CPU/Memory) a namespace can consume?",
      options: ["LimitRanger", "ResourceQuota", "PodSecurity", "NodeRestriction"],
      correctAnswer: "ResourceQuota",
      explanation: `
### Concept: Resource Management
**ResourceQuotas** prevent a single team or application from consuming all the resources in a cluster (Denial of Service).
      `
    },
    {
      id: 535,
      question: "What is 'Vulnerability Scanning'?",
      options: [
        "Checking if a computer is plugged in",
        "Identifying known security flaws in software components",
        "Writing code that is impossible to hack",
        "Monitoring network traffic for DDoS attacks"
      ],
      correctAnswer: "Identifying known security flaws in software components",
      explanation: `
### Concept: Vulnerability Management
Scanners like **Trivy** check package lists against databases of known CVEs (Common Vulnerabilities and Exposures).
      `
    },
    {
      id: 536,
      question: "Which CNCF project provides a container-native, policy-based firewall?",
      options: ["Cilium", "Linkerd", "Kube-router", "Calico"],
      correctAnswer: "Cilium",
      explanation: `
### Concept: Network Security
**Cilium** uses eBPF to provide high-performance networking and security, including identity-aware L7 policy enforcement.
      `
    },
    {
      id: 537,
      question: "What is the primary benefit of using 'In-Place' upgrades for Kubernetes cluster components compared to 'Blue/Green' upgrades?",
      options: [
        "In-Place upgrades are always faster",
        "In-Place upgrades require less additional infrastructure during the process",
        "In-Place upgrades are safer and easier to roll back",
        "In-Place upgrades automatically fix all security vulnerabilities"
      ],
      correctAnswer: "In-Place upgrades require less additional infrastructure during the process",
      explanation: `
### Concept: Cluster Lifecycle Security
While Blue/Green is safer for rollback, In-Place upgrades (like using kubeadm upgrade) are more resource-efficient as they don't require spawning a second cluster.
      `
    },
    {
      id: 538,
      question: "Which of the following is a common method for securing the 'Code' layer in the 4C model?",
      options: [
        "Setting up a VPN for developers",
        "Static Application Security Testing (SAST)",
        "Installing an antivirus on the production nodes",
        "Using a hardware security module (HSM)"
      ],
      correctAnswer: "Static Application Security Testing (SAST)",
      explanation: `
### Concept: 4C Model (Code)
**SAST** tools analyze source code for security vulnerabilities (like SQL injection or hardcoded secrets) before the code is even compiled.
      `
    },
    {
      id: 539,
      question: "What is the function of the 'kube-scheduler' in the context of security?",
      options: [
        "To encrypt pod communication",
        "To ensure pods are placed on nodes that meet their security requirements (e.g., taints/tolerations)",
        "To scan pods for root access",
        "To manage RBAC for the nodes"
      ],
      correctAnswer: "To ensure pods are placed on nodes that meet their security requirements (e.g., taints/tolerations)",
      explanation: `
### Concept: Scheduling Security
The scheduler enforces constraints like **NodeSelector**, **Affinity**, and **Taints/Tolerations**, which can be used to isolate sensitive workloads on specific hardened nodes.
      `
    },
    {
      id: 540,
      question: "Which Kubernetes resource allows you to define a set of 'trusted' container registries from which images can be pulled?",
      options: [
        "ImagePolicyWebhook",
        "NetworkPolicy",
        "PodSecurityPolicy",
        "ConfigMap"
      ],
      correctAnswer: "ImagePolicyWebhook",
      explanation: `
### Concept: Admission Control (Image Policy)
An **ImagePolicyWebhook** allows an external admission controller to decide whether an image should be allowed in the cluster based on its origin or tags.
      `
    },
    {
      id: 541,
      question: "What does 'Taint' do to a Kubernetes node?",
      options: [
        "It infects the node with a virus for testing",
        "It allows a node to repel a set of pods unless those pods have a matching toleration",
        "It encrypts all data stored locally on the node",
        "It prevents the node from connecting to the internet"
      ],
      correctAnswer: "It allows a node to repel a set of pods unless those pods have a matching toleration",
      explanation: `
### Concept: Node Isolation
Taints and Tolerations are used to ensure that pods are not scheduled onto inappropriate nodes (e.g., keeping non-GPU workloads off GPU nodes).
      `
    },
    {
      id: 542,
      question: "Which CNCF project provides a universal identity control plane for multi-cloud and hybrid environments?",
      options: ["SPIFFE", "SPIRE", "Istio", "Kuma"],
      correctAnswer: "SPIRE",
      explanation: `
### Concept: Identity (SPIRE)
**SPIRE** (the SPIFFE Runtime Environment) is a tool for issuing identities to software components across heterogeneous environments.
      `
    },
    {
      id: 543,
      question: "What is the primary goal of the 'Cloud Native Computing Foundation' (CNCF) Security Technical Advisory Group (TAG)?",
      options: [
        "To write the code for all CNCF projects",
        "To provide security guidance, best practices, and audits for cloud-native projects",
        "To sell security software to enterprises",
        "To replace the Linux Kernel with a more secure version"
      ],
      correctAnswer: "To provide security guidance, best practices, and audits for cloud-native projects",
      explanation: `
### Concept: Ecosystem and Community
The **Security TAG** facilitates the security audits of CNCF projects and helps define the cloud-native security landscape.
      `
    },
    {
      id: 544,
      question: "Which of the following describes 'Compliance' as code?",
      options: [
        "Writing laws using Python",
        "Automating the verification of security requirements using programmable tools (e.g., OPA, Kyverno)",
        "Storing legal documents in a Git repository",
        "Hiring a developer to be a lawyer"
      ],
      correctAnswer: "Automating the verification of security requirements using programmable tools (e.g., OPA, Kyverno)",
      explanation: `
### Concept: Compliance-as-Code
By automating compliance checks, organizations can ensure that every change to their infrastructure follows necessary regulations and internal policies.
      `
    },
    {
      id: 545,
      question: "What is an 'Identity Provider' (IdP) in the context of Kubernetes authentication?",
      options: [
        "A system that stores and manages user identities (e.g., Google, Okta, Active Directory)",
        "A tool that creates random passwords for pods",
        "A hardware device used to identify servers",
        "A Kubernetes service that lists all users in the cluster"
      ],
      correctAnswer: "A system that stores and manages user identities (e.g., Google, Okta, Active Directory)",
      explanation: `
### Concept: Authentication (IdP)
Kubernetes can integrate with external IdPs using protocols like **OIDC** (OpenID Connect) to manage user access centrally.
      `
    },
    {
      id: 546,
      question: "In Kubernetes, what happens if a request fails the 'Authorization' step?",
      options: [
        "The request is delayed for 10 minutes",
        "The user's account is deleted",
        "The API server returns a 403 Forbidden error",
        "The cluster is restarted automatically"
      ],
      correctAnswer: "The API server returns a 403 Forbidden error",
      explanation: `
### Concept: API Server Workflow
1. AuthN (401 if fails)
2. **AuthZ** (403 if fails)
3. Admission Control (403 if fails)
      `
    },
    {
      id: 547,
      question: "Which Service Mesh project is known for its 'sidecar-less' architecture option?",
      options: ["Istio", "Linkerd", "Cilium Service Mesh", "Consul"],
      correctAnswer: "Cilium Service Mesh",
      explanation: `
### Concept: Service Mesh Architecture
Cilium uses eBPF to provide service mesh features at the node level, potentially removing the need for a sidecar proxy in every pod.
      `
    },
    {
      id: 548,
      question: "What is the purpose of the 'Secrets Store CSI Driver'?",
      options: [
        "To encrypt ordinary files on a node",
        "To mount secrets from external stores (like Vault, AWS Secrets Manager) as volumes in pods",
        "To replace the etcd database with a secure alternative",
        "To back up the Kubernetes control plane"
      ],
      correctAnswer: "To mount secrets from external stores (like Vault, AWS Secrets Manager) as volumes in pods",
      explanation: `
### Concept: Secrets Management
The **Secrets Store CSI Driver** allows Kubernetes to integrate naturally with enterprise-grade secrets management systems.
      `
    },
    {
      id: 549,
      question: "Which Pod Security Standard profile should be used for highly privileged system components like CNI plugins?",
      options: ["Restricted", "Baseline", "Privileged", "None"],
      correctAnswer: "Privileged",
      explanation: `
### Concept: Pod Security Standards
Certain infrastructure components REQUIRE high privileges to function (e.g., modifying network interfaces). These should be the ONLY pods running under the 'Privileged' profile.
      `
    },
    {
      id: 550,
      question: "What is a 'Zero-Day Vulnerability'?",
      options: [
        "A vulnerability that takes 0 days to fix",
        "A software flaw that is known to the vendor but not yet patched",
        "A vulnerability that is discovered and exploited before the vendor is aware of it",
        "A vulnerability that only exists on the first day of a month"
      ],
      correctAnswer: "A vulnerability that is discovered and exploited before the vendor is aware of it",
      explanation: `
### Concept: Vulnerability Management
"Zero-day" refers to the fact that the vendor has had zero days to fix the issue before it starts being exploited.
      `
    },
    {
      id: 551,
      question: "Which Kubernetes resource provides a way to define permissions for resources across TWO or more namespaces simultaneously?",
      options: ["RoleBinding", "ClusterRoleBinding", "NamespaceBinding", "MultiRoleBinding"],
      correctAnswer: "ClusterRoleBinding",
      explanation: `
### Concept: RBAC (Cluster Scope)
A **ClusterRoleBinding** grants the permissions defined in a ClusterRole to a user across the ENTIRE cluster, including all current and future namespaces.
      `
    },
    {
      id: 552,
      question: "What is the primary risk of using 'hostPath' volumes in Kubernetes pods?",
      options: [
        "The pod will consume too much disk space",
        "The pod could potentially read or modify any file on the host node, leading to a container escape",
        "HostPath volumes are deleted when the pod is deleted",
        "HostPath volumes are only compatible with Windows nodes"
      ],
      correctAnswer: "The pod could potentially read or modify any file on the host node, leading to a container escape",
      explanation: `
### Concept: Volume Security
Using **hostPath** allows a container to reach out of its isolated filesystem and interact with the host OS, which is a major security risk.
      `
    },
    {
      id: 553,
      question: "What does 'Threat Intelligence' involve?",
      options: [
        "Making servers smarter using AI",
        "Collecting and analyzing information about current and potential attacks/attackers",
        "Hiring hackers to join your security team",
        "Running a script that deletes all suspicious files"
      ],
      correctAnswer: "Collecting and analyzing information about current and potential attacks/attackers",
      explanation: `
### Concept: Security Operations
Threat Intelligence helps organizations understand the "who, why, and how" of attacks, allowing them to better prepare their defenses.
      `
    },
    {
      id: 554,
      question: "Which CNCF project provides a way to centrally manage and enforce policies across a fleet of Kubernetes clusters?",
      options: ["OPA Gatekeeper", "ArgoCD", "Crossplane", "Kyverno"],
      correctAnswer: "OPA Gatekeeper",
      explanation: `
### Concept: Policy Management
**Gatekeeper** is a customizable admission webhook that enforces CRD-based policies executed by **Open Policy Agent (OPA)**.
      `
    },
    {
      id: 555,
      question: "What is 'Segmentation' in the context of cloud-native network security?",
      options: [
        "Dividing a large image into smaller layers",
        "Breaking a monolith into microservices",
        "Dividing a network into smaller, isolated sub-networks or zones to limit the lateral movement of an attacker",
        "Storing data across multiple physical disks"
      ],
      correctAnswer: "Dividing a network into smaller, isolated sub-networks or zones to limit the lateral movement of an attacker",
      explanation: `
### Concept: Network Security
In Kubernetes, segmentation is typically achieved using **Namespaces** and **NetworkPolicies**.
      `
    },
    {
      id: 556,
      question: "Which command is used to check the effective RBAC permissions for a specific user in a namespace?",
      options: ["kubectl get rbac", "kubectl describe user", "kubectl auth can-i", "kubectl check-permissions"],
      correctAnswer: "kubectl auth can-i",
      explanation: `
### Concept: RBAC Verification
\`kubectl auth can-i\` is a very useful command for debugging permissions and verifying that your RBAC roles are working as intended.
      `
    },
    {
      id: 557,
      question: "What is the purpose of 'Gvisor' in container security?",
      options: [
        "To provide a GUI for Docker",
        "To provide an extra layer of kernel isolation by intercepting system calls made by containers",
        "To speed up container startup times",
        "To monitor network traffic between pods"
      ],
      correctAnswer: "To provide an extra layer of kernel isolation by intercepting system calls made by containers",
      explanation: `
### Concept: Sandboxed Runtimes
**gVisor** (and Kata Containers) provide stronger isolation than standard runtimes by ensuring that the container never interacts directly with the host kernel.
      `
    },
    {
      id: 558,
      question: "Which of the following is a key requirement of the 'GDPR' regulation that impacts cloud-native applications?",
      options: [
        "All applications must be written in Go",
        "Data of EU citizens must be protected and handled according to strict privacy rules",
        "All clusters must be hosted in Europe",
        "Every pod must have a unique EU-certified ID"
      ],
      correctAnswer: "Data of EU citizens must be protected and handled according to strict privacy rules",
      explanation: `
### Concept: Compliance (GDPR)
GDPR compliance involves technical and organizational measures to ensure data privacy and security for European users.
      `
    },
    {
      id: 559,
      question: "What does 'Observability' contribute to security operations?",
      options: [
        "It makes the system impossible to hack",
        "It provides the necessary data (logs, traces) to detect and investigate security incidents",
        "It stores passwords in a secure way",
        "It prevents all unauthorized logins"
      ],
      correctAnswer: "It provides the necessary data (logs, traces) to detect and investigate security incidents",
      explanation: `
### Concept: Security Observability
Observability is critical for "Security Information and Event Management" (SIEM) and incident response.
      `
    },
    {
      id: 560,
      question: "Which CNCF project provides an open standards-based framework for cloud-native secret management and rotation?",
      options: ["Vault", "External Secrets Operator", "Bank-Vaults", "Secrets Store CSI"],
      correctAnswer: "Bank-Vaults",
      explanation: `
### Concept: Secrets Management
Projects like **Bank-Vaults** (or the widely used HashiCorp Vault) provide advanced features like automatic secret rotation and dynamic secret generation.
      `
    },
    {
      id: 561,
      question: "Which of the following is a key security feature provided by a Container Runtime Interface (CRI)?",
      options: [
        "Automatic code obfuscation",
        "Hardware-level encryption for all containers",
        "Isolation of container processes from the host and other containers",
        "Real-time malware scanning during execution"
      ],
      correctAnswer: "Isolation of container processes from the host and other containers",
      explanation: `
### Concept: CRI Security
The **Container Runtime Interface (CRI)** and the underlying runtime (like containerd or CRI-O) are responsible for utilizing Linux kernel features (Namespaces, cgroups) to provide process-level isolation.
`
    },
    {
      id: 562,
      question: "What is the primary security goal of 'Network Segmentation' in a Kubernetes cluster?",
      options: [
        "To increase network throughput between pods",
        "To prevent lateral movement by attackers if one service is compromised",
        "To assign static IP addresses to all production pods",
        "To disable the use of the Kubernetes API server"
      ],
      correctAnswer: "To prevent lateral movement by attackers if one service is compromised",
      explanation: `
### Concept: Network Segmentation
By dividing the network into segments (using Namespaces and **NetworkPolicies**), you ensure that a breach in one application doesn't automatically grant the attacker access to every other service in the cluster.
`
    },
    {
      id: 563,
      question: "Which component is often used in Kubernetes to manage identity and access for users outside the cluster?",
      options: [
        "kube-proxy",
        "OIDC (OpenID Connect) Provider",
        "CoreDNS",
        "etcd"
      ],
      correctAnswer: "OIDC (OpenID Connect) Provider",
      explanation: `
### Concept: External Authentication
Kubernetes can delegate authentication to external **OIDC providers** (like Okta, Google, or Keycloak), allowing for centralized identity management and Single Sign-On (SSO).
`
    },
    {
      id: 564,
      question: "In the context of the '4C' security model, what does the 'Code' layer focus on?",
      options: [
        "Securing the data center's physical perimeter",
        "Hardening the Linux kernel on the worker nodes",
        "Protecting application logic, dependencies, and handling secrets securely",
        "Configuring BIOS passwords on physical servers"
      ],
      correctAnswer: "Protecting application logic, dependencies, and handling secrets securely",
      explanation: `
### Concept: 4C Model (Code)
The **Code** layer is the top-most layer. It involves practices like SAST/DAST, dependency scanning (SCA), and ensuring that the application itself doesn't leak secrets or have logic flaws.
`
    },
    {
      id: 565,
      question: "Which of the following is a common threat targeted by 'Supply Chain Security' measures?",
      options: [
        "Phishing attacks against cluster administrators",
        "Physical theft of a worker node from a data center",
        "Injection of malicious code into a widely used open-source library",
        "Accidentally deleting a namespace using kubectl"
      ],
      correctAnswer: "Injection of malicious code into a widely used open-source library",
      explanation: `
### Concept: Supply Chain Security
Supply chain attacks (like the SolarWinds breach) focus on compromising the tools, libraries, or distribution channels used to build and deliver software.
`
    },
    {
      id: 566,
      question: "What is 'Encryption at Rest' specifically protecting in a Kubernetes environment?",
      options: [
        "Data while it is being transmitted over the network",
        "Data stored in the etcd database when it is written to disk",
        "User passwords while they are being typed in a browser",
        "The source code of the application in the Git repository"
      ],
      correctAnswer: "Data stored in the etcd database when it is written to disk",
      explanation: `
### Concept: Encryption at Rest
**Encryption at Rest** ensures that if the physical storage media (e.g., an SSD or EBS volume) where **etcd** data resides is stolen, the data (including secrets) remains unreadable without the decryption key.
`
    },
    {
      id: 567,
      question: "Which Kubernetes resource is used to limit the amount of CPU or memory a pod can request?",
      options: [
        "NetworkPolicy",
        "ResourceQuota",
        "SecurityContext",
        "HorizontalPodAutoscaler"
      ],
      correctAnswer: "ResourceQuota",
      explanation: `
### Concept: Resource Management
**ResourceQuotas** are used at the namespace level to prevent any single team or application from consuming all cluster resources, which is a form of Deny of Service (DoS) protection.
`
    },
    {
      id: 568,
      question: "What is 'Admission Control' in Kubernetes?",
      options: [
        "A process for logging users into the cluster",
        "A series of plugins that intercept and can modify or reject requests to the API server",
        "A method for physically controlling access to the server room",
        "A way to assign static IP addresses to pods"
      ],
      correctAnswer: "A series of plugins that intercept and can modify or reject requests to the API server",
      explanation: `
### Concept: Admission Control
**Admission Controllers** act as a gatekeeper. After authentication and authorization, they can validate or mutate resources (like pods or services) before they are persisted in etcd.
`
    },
    {
      id: 569,
      question: "Which tool would you use to perform 'Static Analysis' of a Kubernetes YAML file for security misconfigurations?",
      options: [
        "Kube-hunter",
        "Kube-bench",
        "Checkov or Kube-score",
        "Wireshark"
      ],
      correctAnswer: "Checkov or Kube-score",
      explanation: `
### Concept: Static Analysis (IaC)
Tools like **Checkov**, **Kube-score**, or **Terrascan** analyze "Infrastructure as Code" (YAML/Terraform) to find misconfigurations (like running as root) before they are even deployed.
`
    },
    {
      id: 570,
      question: "What is the primary function of a 'Service Mesh' in terms of security?",
      options: [
        "To speed up the download of container images",
        "To provide mutual TLS (mTLS) for all inter-service communication",
        "To manage the physical cooling of servers",
        "To replace the Kubernetes API server"
      ],
      correctAnswer: "To provide mutual TLS (mTLS) for all inter-service communication",
      explanation: `
### Concept: Service Mesh Security
A **Service Mesh** (like Istio or Linkerd) provides a transparent way to secure service-to-service communication with **mTLS**, providing both encryption and strong identity verification.
`
    },
    {
      id: 571,
      question: "Which concept involves addressed security during the planning and coding phases of development?",
      options: [
        "Reactive Security",
        "Shift Right",
        "Shift Left",
        "Post-mortem Analysis"
      ],
      correctAnswer: "Shift Left",
      explanation: `
### Concept: Shift Left
**Shift Left** security means integrating security checks, testing, and considerations earlier in the software development lifecycle (SDLC) rather than waiting for production.
`
    },
    {
      id: 572,
      question: "What is a 'Vulnerability Disclosure Policy' (VDP)?",
      options: [
        "A policy that forbids anyone from looking for bugs in your software",
        "A public-facing policy explaining how researchers can safely report security flaws",
        "A document that lists every password used by the company",
        "A contract signed by hackers to keep all bugs secret forever"
      ],
      correctAnswer: "A public-facing policy explaining how researchers can safely report security flaws",
      explanation: `
### Concept: Vulnerability Disclosure
A **VDP** encourages 'ethical hackers' to report bugs responsibly, ensuring they have a clear path to do so without fear of legal action.
`
    },
    {
      id: 573,
      question: "Which of the following describes 'Mutual TLS' (mTLS)?",
      options: [
        "Only the server proves its identity to the client",
        "Both the client and the server prove their identities to each other using certificates",
        "A protocol used to encrypt hard disks",
        "A way for two users to share the same password"
      ],
      correctAnswer: "Both the client and the server prove their identities to each other using certificates",
      explanation: `
### Concept: mTLS
In **mTLS**, both parties verify each other's certificates, ensuring that only trusted services can communicate with each other.
`
    },
    {
      id: 574,
      question: "What is the security risk of 'Credential Leakage' in a CI/CD pipeline?",
      options: [
        "The pipeline will run too slowly",
        "Attackers could gain access to production environments or sensitive data",
        "The source code will be deleted automatically",
        "The build process will consume too much memory"
      ],
      correctAnswer: "Attackers could gain access to production environments or sensitive data",
      explanation: `
### Concept: Secret Management
Leaks often occur when secrets (like API keys) are accidentally committed to Git or printed in build logs. Using a dedicated secrets manager is essential.
`
    },
    {
      id: 575,
      question: "In threat modeling, what does 'Likelihood' and 'Impact' help determine?",
      options: [
        "The speed of the network",
        "The overall Risk level of a threat",
        "The number of pods needed for an application",
        "The physical location of the data center"
      ],
      correctAnswer: "The overall Risk level of a threat",
      explanation: `
### Concept: Risk Assessment
**Risk = Likelihood x Impact**. This helps security teams prioritize which threats to address first.
`
    },
    {
      id: 576,
      question: "Which Kubernetes component manages and issues certificates for pods when using a Service Mesh?",
      options: [
        "Kubelet",
        "Control Plane (e.g., Istiod)",
        "Etcd",
        "Kube-proxy"
      ],
      correctAnswer: "Control Plane (e.g., Istiod)",
      explanation: `
### Concept: Certificate Authority (CA)
In a service mesh, the control plane component (like **Istiod**) acts as a CA, issuing and rotating short-lived certificates for the sidecar proxies.
`
    },
    {
      id: 577,
      question: "What is the primary purpose of 'Dynamic Application Security Testing' (DAST)?",
      options: [
        "To scan the source code for bugs",
        "To test a running application for vulnerabilities by simulating attacks",
        "To check the security of the physical server room",
        "To manage user permissions in the database"
      ],
      correctAnswer: "To test a running application for vulnerabilities by simulating attacks",
      explanation: `
### Concept: DAST
**DAST** tools interact with the application from the outside (like an attacker would) to find issues like SQL injection or cross-site scripting while the app is active.
`
    },
    {
      id: 578,
      question: "Which type of policy is typically used to restrict which users can run 'kubectl' commands?",
      options: [
        "NetworkPolicy",
        "RBAC (Role-Based Access Control)",
        "ResourceQuota",
        "CSI Policy"
      ],
      correctAnswer: "RBAC (Role-Based Access Control)",
      explanation: `
### Concept: Authorization
**RBAC** determines which subjects (users, groups, service accounts) have permission to perform specific verbs (get, list, delete) on Kubernetes resources.
`
    },
    {
      id: 579,
      question: "What does 'Secrets Encryption at Rest' in Kubernetes specifically encrypt?",
      options: [
        "Environment variables in the pod",
        "Secret data stored in etcd",
        "Source code in the repository",
        "Logs in the logging system"
      ],
      correctAnswer: "Secret data stored in etcd",
      explanation: `
### Concept: Secret Security
By default, K8s secrets are only base64 encoded. **Encryption at Rest** adds a layer of cryptographic protection when they are saved to disk in etcd.
`
    },
    {
      id: 580,
      question: "Which CNCF project is a common choice for 'Cloud Native Logging' and can be used for security auditing?",
      options: [
        "Fluentd",
        "Envoy",
        "Harbor",
        "Argo"
      ],
      correctAnswer: "Fluentd",
      explanation: `
### Concept: Observability
**Fluentd** (and Fluent Bit) collect, process, and forward logs from containers and nodes to a central location for analysis and long-term storage.
`
    },
    {
      id: 581,
      question: "What is 'Container Escape'?",
      options: [
        "When a container finishes its task and stops",
        "When an attacker breaks out of a container's isolation to gain access to the host OS",
        "When a container is deleted by the scheduler",
        "When a container uses too much CPU"
      ],
      correctAnswer: "When an attacker breaks out of a container's isolation to gain access to the host OS",
      explanation: `
### Concept: Runtime Security
**Container Escape** is a critical security failure where the isolation boundaries (provided by the kernel) are bypassed, giving the attacker control over the underlying node.
`
    },
    {
      id: 582,
      question: "Which of the following is a security best practice for managing Kubernetes Secrets?",
      options: [
        "Commit them to your public Git repository for transparency",
        "Avoid using secrets and use plain text ConfigMaps instead",
        "Use an external secrets manager like HashiCorp Vault or AWS Secrets Manager",
        "Print secret values in application logs to help with debugging"
      ],
      correctAnswer: "Use an external secrets manager like HashiCorp Vault or AWS Secrets Manager",
      explanation: `
### Concept: Secrets Management
External secret managers provide better security, audit trails, and features like automatic rotation compared to native Kubernetes secrets alone.
`
    },
    {
      id: 583,
      question: "What is 'Trust Root' in the context of TLS/SSL?",
      options: [
        "The highest-level certificate authority (CA) that is trusted by the system",
        "The main password for the cluster",
        "The physical location of the first server built",
        "A special kind of user account"
      ],
      correctAnswer: "The highest-level certificate authority (CA) that is trusted by the system",
      explanation: `
### Concept: Identity & Trust
The **Trust Root** is the foundation of the chain of trust. If the root CA is trusted, all certificates issued by it or its intermediates are also trusted.
`
    },
    {
      id: 584,
      question: "Which component of the '4C' security model includes securing your cloud provider's console and API access?",
      options: [
        "Code",
        "Container",
        "Cluster",
        "Cloud"
      ],
      correctAnswer: "Cloud",
      explanation: `
### Concept: 4C Model (Cloud)
The **Cloud** layer is the foundation. It involves securing the IAM, VPCs, and overall account access of your cloud environment (AWS, GCP, Azure, etc.).
`
    },
    {
      id: 585,
      question: "What is the purpose of 'Image Signing' in a containerized environment?",
      options: [
        "To make the images look more professional",
        "To ensure that an image hasn't been tampered with and comes from a trusted source",
        "To reduce the size of the image",
        "To speed up the container startup time"
      ],
      correctAnswer: "To ensure that an image hasn't been tampered with and comes from a trusted source",
      explanation: `
### Concept: Supply Chain Security
**Image Signing** (using tools like Cosign) creates a digital signature that can be verified by the Kubernetes cluster (e.g., using a policy engine) before the image is allowed to run.
`
    },
    {
      id: 586,
      question: "Which of the following describes 'Least Privilege' in the context of Kubernetes Service Accounts?",
      options: [
        "Every pod should use the default service account with full admin rights",
        "Pods should only be granted the specific permissions they need to perform their function",
        "Service accounts should only be used for monitoring tools",
        "All service accounts must have the same permissions to simplify management"
      ],
      correctAnswer: "Pods should only be granted the specific permissions they need to perform their function",
      explanation: `
### Concept: RBAC & Service Accounts
The **Principle of Least Privilege** ensures that if a pod is compromised, the attacker's ability to interact with the Kubernetes API is limited to only what that specific pod was authorized to do.
`
    },
    {
      id: 587,
      question: "What is 'Runtime Security Monitoring' primarily looking for?",
      options: [
        "Errors in the application's configuration files",
        "Unexpected or suspicious behavior while containers are running (e.g., shell access, file changes)",
        "The number of users visiting the website",
        "The total cost of running the cluster"
      ],
      correctAnswer: "Unexpected or suspicious behavior while containers are running (e.g., shell access, file changes)",
      explanation: `
### Concept: Runtime Security
Monitoring tools (like Falco) watch for events that deviate from the 'normal' behavior of a container, alerting on potential compromises in real-time.
`
    },
    {
      id: 588,
      question: "What does 'CVE' stand for in the context of cybersecurity?",
      options: [
        "Common Vulnerabilities and Exposures",
        "Container Vulnerability Encryption",
        "Cluster Verification Engine",
        "Critical Vulnerability Error"
      ],
      correctAnswer: "Common Vulnerabilities and Exposures",
      explanation: `
### Concept: Vulnerability Management
**CVE** is a list of publicly disclosed cybersecurity vulnerabilities. Each entry (e.g., CVE-2021-44228) provides a standardized identifier for a specific flaw in a specific software package.
`
    },
    {
      id: 589,
      question: "Which Kubernetes feature can be used to ensure that a pod only runs on a node that has specific security hardware (e.g., a TPM)?",
      options: [
        "NetworkPolicy",
        "NodeSelector or Affinity",
        "ResourceQuota",
        "LimitRange"
      ],
      correctAnswer: "NodeSelector or Affinity",
      explanation: `
### Concept: Node Isolation
**NodeSelectors** and **Affinity/Anti-affinity** rules allow you to control pod placement, ensuring sensitive workloads only run on appropriately hardened or equipped hardware.
`
    },
    {
      id: 590,
      question: "What is the primary benefit of using 'Namespaces' for security in a shared Kubernetes cluster?",
      options: [
        "They make the network 10x faster",
        "They provide a scope for RBAC policies and Resource Quotas, enabling multi-tenancy",
        "They automatically encrypt all traffic passing through them",
        "They prevent any communication between pods by default"
      ],
      correctAnswer: "They provide a scope for RBAC policies and Resource Quotas, enabling multi-tenancy",
      explanation: `
### Concept: Multi-tenancy
**Namespaces** allow you to logically divide cluster resources, ensuring that Team A's developers cannot accidentally (or maliciously) modify Team B's applications.
`
    },
    {
      id: 591,
      question: "What does 'SCA' (Software Composition Analysis) focus on?",
      options: [
        "Testing the speed of the application",
        "Identifying vulnerabilities in open-source libraries and dependencies used by your application",
        "Scanning the physical network for unauthorized devices",
        "Managing the deployment of virtual machines"
      ],
      correctAnswer: "Identifying vulnerabilities in open-source libraries and dependencies used by your application",
      explanation: `
### Concept: Supply Chain Security
**SCA** tools (like Snyk or OWASP Dependency-Check) analyze your project's manifest files (e.g., package.json, pom.xml) to find known vulnerabilities in the third-party code you rely on.
`
    },
    {
      id: 592,
      question: "Which of the following is a security risk of 'Excessive Permissions' given to a CI/CD service account?",
      options: [
        "The build process will be too slow",
        "A compromise of the CI/CD pipeline could allow an attacker to take over the entire Kubernetes cluster",
        "The application will use more memory than usual",
        "The logs will be harder to read"
      ],
      correctAnswer: "A compromise of the CI/CD pipeline could allow an attacker to take over the entire Kubernetes cluster",
      explanation: `
### Concept: Pipeline Security
Always follow the **Principle of Least Privilege** for CI/CD tools. They should only have the minimum permissions required to deploy specific resources in specific namespaces.
`
    },
    {
      id: 593,
      question: "What is 'Audit Sink' in Kubernetes?",
      options: [
        "A place where old and unused logs are deleted",
        "An API object that defines where audit events should be sent (e.g., an external log collector)",
        "A security vulnerability that allows logs to be leaked",
        "A tool for cleaning up disk space on worker nodes"
      ],
      correctAnswer: "An API object that defines where audit events should be sent (e.g., an external log collector)",
      explanation: `
### Concept: Auditing
**Audit Sinks** allow you to stream Kubernetes audit logs to external platforms for real-time monitoring, alerting, and long-term compliance storage.
`
    },
    {
      id: 594,
      question: "Which CNCF project provides a cloud-native service mesh with a focus on ease of use and 'Security by Default'?",
      options: [
        "Linkerd",
        "Kelsey",
        "Prometheus",
        "Helm"
      ],
      correctAnswer: "Linkerd",
      explanation: `
### Concept: Service Mesh
**Linkerd** is known for being extremely lightweight and providing automatic **mTLS** out-of-the-box without requiring complex configuration.
`
    },
    {
      id: 595,
      question: "What is 'Compliance Drift'?",
      options: [
        "When an application gets faster over time",
        "When a system's configuration changes over time, moving away from its initial secure and compliant state",
        "When a cluster is moved from one cloud provider to another",
        "When developers stop following the company's dress code"
      ],
      correctAnswer: "When a system's configuration changes over time, moving away from its initial secure and compliant state",
      explanation: `
### Concept: Governance & Compliance
Continuous monitoring and automated remediation are needed to detect and fix **Compliance Drift** before it becomes a security risk.
`
    },
    {
      id: 596,
      question: "What is the purpose of 'Pod Disruption Budgets' (PDBs) in the context of security maintenance?",
      options: [
        "To limit the cost of running pods",
        "To ensure that a minimum number of pods remain available during voluntary disruptions (like security patching/upgrades)",
        "To prevent pods from being deleted by the administrator",
        "To manage network traffic during a DDoS attack"
      ],
      correctAnswer: "To ensure that a minimum number of pods remain available during voluntary disruptions (like security patching/upgrades)",
      explanation: `
### Concept: Availability
**PDBs** ensure that as you roll out security updates to your cluster nodes, the availability of your critical applications is maintained.
`
    },
    {
      id: 597,
      question: "Which of the following describes 'Zero Trust Architecture'?",
      options: [
        "Trusting all internal traffic automatically",
        "Continuously verifying the identity and integrity of every request, regardless of where it originates",
        "A network where no one is allowed to log in",
        "A system that has zero security vulnerabilities"
      ],
      correctAnswer: "Continuously verifying the identity and integrity of every request, regardless of where it originates",
      explanation: `
### Concept: Zero Trust
In a **Zero Trust** model, "location" (being inside the network) is no longer a proxy for "trust". Every connection must be authenticated and authorized.
`
    },
    {
      id: 598,
      question: "What is 'Secrets Sprawl'?",
      options: [
        "When a secret is used in more than one application",
        "The unintentional and unmanaged distribution of secrets (keys, passwords) across various platforms and tools",
        "When a database grows too large to manage",
        "When a developer shares their password with a teammate"
      ],
      correctAnswer: "The unintentional and unmanaged distribution of secrets (keys, passwords) across various platforms and tools",
      explanation: `
### Concept: Secrets Management
**Secrets Sprawl** makes it difficult to rotate keys, audit access, or ensure that credentials aren't leaked in logs or shared drives.
`
    },
    {
      id: 599,
      question: "Which Kubernetes component should be restricted from direct public internet access to prevent attacks?",
      options: [
        "Kube-apiserver",
        "Etcd",
        "Kubelet",
        "All of the above"
      ],
      correctAnswer: "All of the above",
      explanation: `
### Concept: Control Plane Hardening
Exposing core Kubernetes components to the internet increases the risk of brute-force attacks or exploitation of unpatched vulnerabilities. They should be behind VPNs or firewalls.
`
    },
    {
      id: 600,
      question: "What is 'Container Sandboxing'?",
      options: [
        "Running containers in a visual simulator",
        "Using additional technologies (like gVisor or Kata) to provide stronger isolation than standard Linux containers",
        "Using a smaller base image for your container",
        "Encrypting the container's filesystem"
      ],
      correctAnswer: "Using additional technologies (like gVisor or Kata) to provide stronger isolation than standard Linux containers",
      explanation: `
### Concept: Deep Isolation
Standard containers share the host kernel. **Sandboxing** provides an extra layer (like a guest kernel) to further isolate the container and protect the host.
`
    },
    {
      id: 601,
      question: "What is 'Dynamic Secret Generation' in a tool like HashiCorp Vault?",
      options: [
        "Creating a random password for a user",
        "Creating short-lived, unique credentials on-demand for a specific task or session",
        "Generating secrets that change their value every 5 seconds",
        "Automating the backup of existing secrets"
      ],
      correctAnswer: "Creating short-lived, unique credentials on-demand for a specific task or session",
      explanation: `
### Concept: Secrets Management
**Dynamic secrets** (e.g., for a database) are created when requested and automatically deleted when they expire, making stolen credentials useless after a short period.
`
    },
    {
      id: 602,
      question: "Which of the following is a security risk of 'Default' configurations in Kubernetes?",
      options: [
        "The defaults are often optimized for ease of use rather than maximum security",
        "The defaults are always 10 versions behind the latest release",
        "The defaults require more CPU and Memory than custom configs",
        "The defaults cannot be changed by the administrator"
      ],
      correctAnswer: "The defaults are often optimized for ease of use rather than maximum security",
      explanation: `
### Concept: Cluster Hardening
Many Kubernetes defaults (like open pod-to-pod communication) should be tightened according to your specific security requirements before going to production.
`
    },
    {
      id: 603,
      question: "What is an 'Identity Provider' (IdP) responsible for?",
      options: [
        "Assigning IP addresses to containers",
        "Verifying and managing user identities and providing tokens for authentication",
        "Scanning images for vulnerabilities",
        "Monitoring the performance of the cluster"
      ],
      correctAnswer: "Verifying and managing user identities and providing tokens for authentication",
      explanation: `
### Concept: Identity Management
An **IdP** (like Google, Azure AD, or an on-prem LDAP) is the source of truth for "who" a user is.
`
    },
    {
      id: 604,
      question: "What is 'Data Sovereignty'?",
      options: [
        "The idea that data should be free for everyone to access",
        "The concept that data is subject to the laws and governance structures of the nation where it is physically located",
        "A protocol for encrypting data during international transit",
        "A system for assigning 'kingdoms' to different datasets"
      ],
      correctAnswer: "The concept that data is subject to the laws and governance structures of the nation where it is physically located",
      explanation: `
### Concept: Governance & Compliance
**Data Sovereignty** is a major factor in cloud-native design, often requiring that sensitive data be stored and processed within specific geographic boundaries.
`
    },
    {
      id: 605,
      question: "Which '4C' layer would focus on setting up a Web Application Firewall (WAF) to block malicious traffic?",
      options: [
        "Code",
        "Container",
        "Cluster",
        "Cloud"
      ],
      correctAnswer: "Cloud",
      explanation: `
### Concept: 4C Model (Cloud)
A **WAF** typically sits at the edge of your cloud environment, intercepting HTTP traffic before it even reaches your Kubernetes cluster.
`
    },
    {
      id: 606,
      question: "What does 'mTLS' solve that standard TLS does not?",
      options: [
        "It makes the encryption 100% unbreakable",
        "It allows the server to verify the identity of the client (and vice versa)",
        "It works without requiring any certificates",
        "It hide the IP address of the server"
      ],
      correctAnswer: "It allows the server to verify the identity of the client (and vice versa)",
      explanation: `
### Concept: Identity & Authentication
Standard TLS only verifies the server. **mTLS** ensures that ONLY authorized clients (other services in your mesh) can talk to your service.
`
    },
    {
      id: 607,
      question: "What is the primary goal of the 'CIS Benchmarks' for Kubernetes?",
      options: [
        "To provide a guide for passing the CKA exam",
        "To provide a set of best-practice settings and configurations for hardening a cluster",
        "To list all known security vulnerabilities in Kubernetes",
        "To provide a comparison of different cloud providers"
      ],
      correctAnswer: "To provide a set of best-practice settings and configurations for hardening a cluster",
      explanation: `
### Concept: Compliance & Hardening
The **CIS (Center for Internet Security) Benchmarks** are the industry standard for verifying that your Kubernetes components (API server, kubelet, etcd) are configured securely.
`
    },
    {
      id: 608,
      question: "What is 'Process Whitelisting' (or Allowlisting) in container security?",
      options: [
        "Allowing any process to run in a container as long as it's signed",
        "Defining the exact set of processes that are allowed to run in a container and blocking everything else",
        "Giving all processes 'root' access for better performance",
        "A list of developers who are allowed to create containers"
      ],
      correctAnswer: "Defining the exact set of processes that are allowed to run in a container and blocking everything else",
      explanation: `
### Concept: Runtime Security
If an attacker manages to get a shell in your container but it's not on the **allowlist**, the runtime security tool will block it immediately.
`
    },
    {
      id: 609,
      question: "Which type of volume is generally considered 'more secure' for sensitive data, as it only exists as long as the pod is running and is stored in memory?",
      options: [
        "hostPath",
        "persistentVolume",
        "emptyDir with medium: Memory",
        "NFS"
      ],
      correctAnswer: "emptyDir with medium: Memory",
      explanation: `
### Concept: Data Privacy
Using **Memory-backed emptyDir** ensures that sensitive temporary data is never written to a physical disk, reducing the risk of data leakage after the pod is deleted.
`
    },
    {
      id: 610,
      question: "What is the purpose of 'Network Isolation' between different stages of a CI/CD pipeline (e.g., Build vs Prod)?",
      options: [
        "To make the build process faster",
        "To prevent a compromise in the build stage from affecting the production environment",
        "To reduce the cost of network egress",
        "To ensure that all developers use the same version of Linux"
      ],
      correctAnswer: "To prevent a compromise in the build stage from preceding to the production environment",
      explanation: `
### Concept: Pipeline Security
Isolation ensures that even if an attacker compromises a 'Build' server, they cannot use it as a bridge to reach and attack your 'Production' clusters.
`
    }
  ],
  kcna: [
    {
      id: 301,
      question: "What is the main benefit of a microservices architecture?",
      options: [
        "Faster development and independent scaling",
        "Simplified data management",
        "Lower initial development costs",
        "Improved monolithic performance"
      ],
      correctAnswer: "Faster development and independent scaling",
      explanation: `
### Concept: Cloud Native Architecture
Microservices allow teams to develop, deploy, and scale services independently, which accelerates the development lifecycle and improves system resilience.
      `
    },
    {
      id: 302,
      question: "What is the smallest deployable unit in Kubernetes?",
      options: ["Container", "Pod", "Service", "Node"],
      correctAnswer: "Pod",
      explanation: `
### Concept: Kubernetes Fundamentals
A **Pod** is the smallest and simplest unit in the Kubernetes object model that you create or deploy. It represents a single instance of a running process in your cluster.
      `
    },
    {
      id: 303,
      question: "Which CNCF project is a graduated container runtime?",
      options: ["Docker", "containerd", "CRIO", "Rocket"],
      correctAnswer: "containerd",
      explanation: `
### Concept: Container Orchestration
**containerd** is an industry-standard container runtime with an emphasis on simplicity, robustness, and portability. It is a graduated project within the CNCF.
      `
    },
    {
      id: 304,
      question: "What are the \"Three Pillars of Observability\"?",
      options: [
        "Logs, Metrics, and Traces",
        "Speed, Scale, and Reliability",
        "CPU, RAM, and Disk",
        "Dev, Ops, and Sec"
      ],
      correctAnswer: "Logs, Metrics, and Traces",
      explanation: `
### Concept: Cloud Native Observability
Observability is traditionally built on three types of data:
- **Logs**: Discrete events.
- **Metrics**: Aggregate data over time.
- **Traces**: End-to-end request journeys.
      `
    },
    {
      id: 305,
      question: "What is the \"Zero Trust\" security model?",
      options: [
        "Trust everyone inside the network",
        "Never trust, always verify",
        "Trust no one except the admin",
        "Trust but verify later"
      ],
      correctAnswer: "Never trust, always verify",
      explanation: `
### Concept: Cloud Native Security
**Zero Trust** is a security framework requiring all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated for security configuration and risk posture.
      `
    },
    {
      id: 306,
      question: "What is the primary role of the Kubernetes Control Plane?",
      options: [
        "To run application containers",
        "To manage the cluster state and make decisions about the cluster",
        "To provide storage for containers",
        "To handle network traffic between pods"
      ],
      correctAnswer: "To manage the cluster state and make decisions about the cluster",
      explanation: `
### Concept: Kubernetes Architecture

The **Control Plane** is the brain of the Kubernetes cluster. It manages the cluster state, makes scheduling decisions, and responds to cluster events.

**Key Control Plane components:**
- **kube-apiserver**: Entry point for all REST commands
- **etcd**: Distributed key-value store for cluster data
- **kube-scheduler**: Assigns pods to nodes
- **kube-controller-manager**: Runs controller processes

**Why other options are incorrect:**
- Running containers happens on worker nodes, not the control plane
- Storage is handled by storage classes and persistent volumes
- Network traffic is managed by CNI plugins and kube-proxy
      `
    },
    {
      id: 307,
      question: "Which component runs on every node in a Kubernetes cluster and ensures containers are running in pods?",
      options: [
        "kube-proxy",
        "kubelet",
        "container runtime",
        "kube-scheduler"
      ],
      correctAnswer: "kubelet",
      explanation: `
### Concept: Node Components

The **kubelet** is an agent that runs on each node in the cluster. It ensures that containers described in Pod specifications are running and healthy.

**Kubelet responsibilities:**
- Registers the node with the API server
- Watches for pod assignments from the scheduler
- Ensures containers are running via the container runtime
- Reports node and pod status back to the control plane

**Why other options are incorrect:**
- **kube-proxy**: Maintains network rules for pod communication
- **container runtime**: Actually runs the containers (Docker, containerd, CRI-O)
- **kube-scheduler**: Lives in the control plane, assigns pods to nodes
      `
    },
    {
      id: 308,
      question: "What is a Pod in Kubernetes?",
      options: [
        "A single container running in Kubernetes",
        "The smallest deployable unit that can contain one or more containers",
        "A node in the Kubernetes cluster",
        "A storage volume for containers"
      ],
      correctAnswer: "The smallest deployable unit that can contain one or more containers",
      explanation: `
### Concept: Pods - Fundamental Unit

A **Pod** is the smallest and simplest unit in Kubernetes. It represents a running process in your cluster and can contain one or more tightly coupled containers.

**Pod characteristics:**
- Containers in a pod share network namespace (same IP address)
- Share storage volumes
- Scheduled together on the same node
- Represent a single instance of an application

**Common patterns:**
- **Single container pod**: Most common use case
- **Multi-container pod**: Sidecar, ambassador, or adapter patterns

**Why other options are incorrect:**
- While pods often contain a single container, they can contain multiple
- Nodes are machines in the cluster, not pods
- Volumes are separate resources attached to pods
      `
    },
    {
      id: 309,
      question: "Which Kubernetes object is responsible for managing a set of identical pods and ensuring the desired number of replicas are running?",
      options: [
        "DaemonSet",
        "StatefulSet",
        "Deployment",
        "Job"
      ],
      correctAnswer: "Deployment",
      explanation: `
### Concept: Workload Resources

A **Deployment** provides declarative updates for Pods and ReplicaSets. It manages the desired state of your application, including the number of replicas.

**Deployment features:**
- Rolling updates and rollbacks
- Scaling up or down
- Self-healing (recreates failed pods)
- Declarative configuration

**When to use each:**
- **Deployment**: Stateless applications (most common)
- **StatefulSet**: Stateful applications needing stable network identities
- **DaemonSet**: Run a pod on every node (monitoring, logging)
- **Job**: Run-to-completion tasks

**Example use case:** Web servers, API services, microservices
      `
    },
    {
      id: 310,
      question: "What is the purpose of a Kubernetes Service?",
      options: [
        "To provide persistent storage for pods",
        "To expose a set of pods as a network service with a stable endpoint",
        "To schedule pods on nodes",
        "To manage secrets and configuration"
      ],
      correctAnswer: "To expose a set of pods as a network service with a stable endpoint",
      explanation: `
### Concept: Service Discovery and Networking

A **Service** is an abstraction that defines a logical set of Pods and a policy to access them. It provides a stable IP address and DNS name for dynamic pods.

**Why Services are needed:**
- Pods are ephemeral (they can be created/destroyed)
- Pods get different IP addresses when recreated
- Services provide a stable endpoint for clients

**Service types:**
- **ClusterIP** (default): Internal cluster access only
- **NodePort**: Exposes service on each node's IP at a static port
- **LoadBalancer**: Creates external load balancer (cloud providers)
- **ExternalName**: Maps to external DNS name

**Why other options are incorrect:**
- Storage: Handled by PersistentVolumes and PersistentVolumeClaims
- Scheduling: Done by kube-scheduler
- Secrets: Managed by Secret and ConfigMap objects
      `
    },
    {
      id: 311,
      question: "What does a Namespace provide in Kubernetes?",
      options: [
        "Network isolation between pods",
        "A way to divide cluster resources between multiple users or teams",
        "Persistent storage for applications",
        "Load balancing across nodes"
      ],
      correctAnswer: "A way to divide cluster resources between multiple users or teams",
      explanation: `
### Concept: Resource Organization

**Namespaces** provide a mechanism for isolating groups of resources within a single cluster. They're ideal for multi-tenant environments.

**Use cases:**
- Separate environments (dev, staging, prod)
- Team isolation
- Resource quota enforcement
- Access control boundaries

**Default namespaces:**
- **default**: Default namespace for objects with no namespace
- **kube-system**: For Kubernetes system components
- **kube-public**: Readable by all users
- **kube-node-lease**: For node heartbeat data

**Important notes:**
- Not all objects are namespaced (nodes, PVs are cluster-wide)
- Namespaces don't provide network isolation by default (use Network Policies)

**Why other options are incorrect:**
- Network isolation requires Network Policies
- Storage is handled separately
- Load balancing is done by Services and Ingress
      `
    },
    {
      id: 312,
      question: "Which kubectl command is used to create resources from a YAML file?",
      options: [
        "kubectl create -f file.yaml",
        "kubectl run -f file.yaml",
        "kubectl deploy -f file.yaml",
        "kubectl start -f file.yaml"
      ],
      correctAnswer: "kubectl create -f file.yaml",
      explanation: `
### Concept: Declarative Configuration

**kubectl create** is used to create resources from a file, directory, or stdin. The \`-f\` flag specifies the file containing the resource definition.

**Common kubectl commands:**
- **kubectl create -f**: Create resources (fails if exists)
- **kubectl apply -f**: Create or update resources (idempotent)
- **kubectl delete -f**: Delete resources defined in file
- **kubectl get**: List resources
- **kubectl describe**: Show detailed information

**Create vs Apply:**
- **create**: Imperative - fails if resource exists
- **apply**: Declarative - creates or updates, tracks changes

**Best practice:** Use \`kubectl apply\` for declarative management in production.

**Example:**
\`\`\`bash
kubectl create -f deployment.yaml
kubectl apply -f deployment.yaml  # Preferred
\`\`\`
      `
    },
    {
      id: 313,
      question: "What is the primary benefit of using containers?",
      options: [
        "They provide better security than virtual machines",
        "They package application code with dependencies for consistent deployment across environments",
        "They are faster than running applications directly on the host OS",
        "They require less disk space than installing applications directly"
      ],
      correctAnswer: "They package application code with dependencies for consistent deployment across environments",
      explanation: `
### Concept: Container Fundamentals

**Containers** package application code together with all dependencies, libraries, and configuration files needed to run, ensuring consistency across different environments.

**Key benefits:**
- **Portability**: "It works on my machine" → "It works everywhere"
- **Consistency**: Same environment from dev to production
- **Isolation**: Applications don't interfere with each other
- **Efficiency**: Share OS kernel, lighter than VMs

**The "dependency problem" containers solve:**
- Different OS versions
- Different library versions
- Configuration drift
- Environment-specific bugs

**Why other options are incorrect:**
- Security depends on configuration (not inherently better than VMs)
- Speed benefits exist but aren't the primary advantage
- Disk space savings are a benefit, not the main purpose
      `
    },
    {
      id: 314,
      question: "What is the difference between a container image and a container?",
      options: [
        "They are the same thing",
        "An image is a running instance, a container is the template",
        "An image is a read-only template, a container is a running instance of an image",
        "An image is stored locally, a container is stored in a registry"
      ],
      correctAnswer: "An image is a read-only template, a container is a running instance of an image",
      explanation: `
### Concept: Images vs Containers

**Container Image**: A read-only template containing the application code, runtime, libraries, and dependencies. Think of it as a blueprint or class in OOP.

**Container**: A running instance of an image with a writable layer. Think of it as an object instantiated from a class.

**Analogy:**
- **Image** = Recipe (instructions)
- **Container** = Cake made from recipe (actual running instance)

**Key differences:**
- One image can create many containers
- Images are immutable (don't change)
- Containers have a writable layer (can change at runtime)
- Images are stored in registries (Docker Hub, ECR, GCR)
- Containers exist on the host where they run

**Example:**
\`\`\`bash
docker run nginx:latest  # Creates container from nginx image
# Can create multiple containers from same image
\`\`\`
      `
    },
    {
      id: 315,
      question: "Which tool is NOT a container runtime compatible with Kubernetes?",
      options: [
        "containerd",
        "CRI-O",
        "Docker Engine (via dockershim)",
        "Podman"
      ],
      correctAnswer: "Podman",
      explanation: `
### Concept: Container Runtimes & CRI

Kubernetes uses the **Container Runtime Interface (CRI)** to communicate with container runtimes. The runtime must implement CRI to work with Kubernetes.

**CRI-compatible runtimes:**
- **containerd**: Industry-standard, graduated CNCF project
- **CRI-O**: Lightweight, built specifically for Kubernetes
- **Docker Engine**: Previously used via dockershim (deprecated in 1.24, removed in 1.25)

**Podman** is a daemonless container engine for developing, managing, and running OCI containers. While Podman is excellent for local development and can manage containers, it does not implement the Kubernetes CRI by default; additional integration layers or shims are required for Podman to act as a CRI runtime in Kubernetes environments.

**Current best practices:**
- Use containerd or CRI-O as your runtime
- Podman is great for local development and rootless containers
      `
    },
    {
      id: 316,
      question: "What does the Open Container Initiative (OCI) standardize?",
      options: [
        "How to orchestrate containers in production",
        "Container image format and runtime specifications",
        "Kubernetes API specifications",
        "Container networking protocols"
      ],
      correctAnswer: "Container image format and runtime specifications",
      explanation: `
### Concept: Container Standards

The **Open Container Initiative (OCI)** is an industry standards organization that defines open specifications for container technology.

**OCI Specifications:**
1. **Image Specification**: How to package container images
2. **Runtime Specification**: How to run containers
3. **Distribution Specification**: How to distribute container images

**Why OCI matters:**
- **Interoperability**: Images work across different runtimes
- **Avoid vendor lock-in**: Use any OCI-compliant tool
- **Innovation**: Multiple implementations can compete

**Examples:**
- Docker, containerd, CRI-O all follow OCI specs
- Images built with Docker can run with containerd
- Registries support OCI image format

**Why other options are incorrect:**
- Orchestration is handled by Kubernetes, not OCI
- Kubernetes API is managed by CNCF/Kubernetes project
- Networking is covered by CNI (Container Network Interface)
      `
    },
    {
      id: 317,
      question: "In the context of Cloud Native applications, what does 'immutable infrastructure' mean?",
      options: [
        "Infrastructure that cannot be deleted once created",
        "Infrastructure components are replaced rather than modified",
        "Infrastructure that runs the same code forever",
        "Infrastructure that doesn't require updates"
      ],
      correctAnswer: "Infrastructure components are replaced rather than modified",
      explanation: `
### Concept: Cloud Native Principles

**Immutable Infrastructure** means that once deployed, infrastructure components are never modified. Instead, you replace them with new instances.

**Traditional vs Immutable:**
- **Traditional (mutable)**: SSH into server, update packages, change config
- **Immutable**: Build new image with updates, deploy new instances, remove old

**Benefits:**
- **Consistency**: No configuration drift
- **Reliability**: Same image in dev/staging/prod
- **Easy rollback**: Keep previous images
- **Debugging**: Exact replica of what failed

**How it works with containers:**
1. Build new container image with changes
2. Push to registry
3. Deploy new containers
4. Remove old containers

**Real-world example:**
Instead of updating packages on a running server, you:
- Build new container image with updated packages
- Deploy new pods with new image
- Old pods are terminated

**Why other options are incorrect:**
- You can delete infrastructure (that's how you replace it)
- Code changes regularly (via new images)
- Infrastructure does require updates (via replacement)
      `
    },
    {
      id: 318,
      question: "What is a key characteristic of microservices architecture?",
      options: [
        "All services share the same database",
        "Applications are built as a collection of small, independent services",
        "Services must be written in the same programming language",
        "All services run on a single server"
      ],
      correctAnswer: "Applications are built as a collection of small, independent services",
      explanation: `
### Concept: Microservices Architecture

**Microservices** is an architectural style where an application is composed of small, independent services that communicate over well-defined APIs.

**Key characteristics:**
- **Single responsibility**: Each service does one thing well
- **Independence**: Developed, deployed, and scaled independently
- **Decentralized**: Own data, tech stack, and lifecycle
- **Communication**: Typically via HTTP/REST or message queues

**Benefits:**
- Scale individual services based on demand
- Different teams can work independently
- Technology diversity (polyglot)
- Easier to understand and modify small services
- Fault isolation

**Challenges:**
- Distributed system complexity
- Service discovery and communication
- Data consistency
- Testing and monitoring

**Contrast with Monolith:**
- **Monolith**: All code in one application
- **Microservices**: Split into independent services

**Why other options are incorrect:**
- Each service typically has its own database (data independence)
- Services can use different languages (polyglot)
- Services run distributed across multiple servers/containers
      `
    },
    {
      id: 319,
      question: "What is the role of etcd in a Kubernetes cluster?",
      options: [
        "It runs application containers",
        "It stores all cluster configuration and state data",
        "It manages network policies between pods",
        "It schedules pods to nodes"
      ],
      correctAnswer: "It stores all cluster configuration and state data",
      explanation: `
### Concept: etcd - Cluster Data Store

**etcd** is a distributed, consistent key-value store used as Kubernetes' backing store for all cluster data. It's the source of truth for the cluster.

**What etcd stores:**
- Cluster configuration
- Current state of all resources (pods, services, etc.)
- Secrets and ConfigMaps
- Node information
- Resource quotas and policies

**Key characteristics:**
- **Distributed**: Runs across multiple nodes for HA
- **Consistent**: Uses Raft consensus algorithm
- **Reliable**: Critical for cluster operation
- **Fast**: Optimized for reads

**Why it matters:**
- If etcd is down, cluster can't make changes
- Regular backups are critical for disaster recovery
- All kubectl commands query/update etcd via API server

**Architecture:**
\`\`\`
kubectl → API Server → etcd
                ↓
         Controllers/Scheduler
\`\`\`

**Why other options are incorrect:**
- Containers run on worker nodes (via kubelet)
- Network policies enforced by CNI plugins/kube-proxy
- Scheduling done by kube-scheduler
      `
    },
    {
      id: 320,
      question: "What is the purpose of a ReplicaSet in Kubernetes?",
      options: [
        "To backup pod data to multiple locations",
        "To maintain a stable set of replica pods running at any given time",
        "To replicate data across multiple nodes",
        "To create copies of container images"
      ],
      correctAnswer: "To maintain a stable set of replica pods running at any given time",
      explanation: `
### Concept: ReplicaSets

A **ReplicaSet** ensures that a specified number of pod replicas are running at any given time. It's the mechanism that provides self-healing and scaling.

**How ReplicaSets work:**
1. You specify desired number of replicas.
2. ReplicaSet monitors actual number of pods.
3. Creates pods if too few exist.
4. Deletes pods if too many exist.

**Key fields in a ReplicaSet spec:**
- \`replicas\`: desired number of pod replicas
- \`selector\`: label selector used to identify which pods belong to the ReplicaSet
- \`template\`: pod template used to create new pods

**Example:**
\`\`\`yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:stable
\`\`\`

ReplicaSets are often managed by Deployments (which provide declarative updates, rolling updates, and rollback capabilities). If you need advanced ordering or stable network IDs, consider StatefulSet instead.
      `
    },
    {
      id: 321,
      question: "Which CNCF project is used for multi-cluster networking and security using eBPF?",
      options: [
        "Cilium",
        "Calico",
        "Istio",
        "Linkerd"
      ],
      correctAnswer: "Cilium",
      explanation: `
### Concept: Cloud Native Networking
**Cilium** is an open-source project that provides networking, security, and observability for cloud-native environments such as Kubernetes.

- **eBPF-based**: It uses eBPF technology to provide high-performance networking and security.
- **Service Mesh**: It can also act as a sidecarless service mesh.
- **Observability**: Through the **Hubble** project, it provides deep visibility into network flows.
      `
    },
    {
      id: 322,
      question: "Which component in Kubernetes is responsible for scheduling pods to nodes?",
      options: [
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager",
        "kubelet"
      ],
      correctAnswer: "kube-scheduler",
      explanation: `
### Concept: Kubernetes Control Plane Components
**kube-scheduler** is the control plane component responsible for assigning pods to nodes.
- **Watch for Pods**: It watches for newly created pods that have no node assigned.
- **Selection Criteria**: It selects an optimal node based on resource requirements, constraints, affinity/anti-affinity specifications, and other factors.
- **Scheduling Decision**: The scheduler makes the decision but doesn't run the pod - that's the kubelet's job.
- **Pluggable**: Custom schedulers can be implemented for specific scheduling requirements.
      `
    },
    {
      id: 323,
      question: "What is the primary purpose of a Container Runtime Interface (CRI)?",
      options: [
        "To provide a standard API for container orchestration",
        "To enable Kubernetes to work with different container runtimes",
        "To manage container images and registries",
        "To handle container networking"
      ],
      correctAnswer: "To enable Kubernetes to work with different container runtimes",
      explanation: `
### Concept: Container Runtime Interface (CRI)
**CRI** is a plugin interface that enables kubelet to use a variety of container runtimes without needing to recompile.
- **Abstraction Layer**: It provides a standardized interface between Kubernetes and container runtimes.
- **Runtime Examples**: containerd, CRI-O, and Docker Engine (via dockershim, now deprecated) are CRI-compatible runtimes.
- **Flexibility**: Allows users to choose the container runtime that best fits their needs.
- **gRPC Protocol**: CRI uses gRPC for communication between kubelet and the runtime.
      `
    },
    {
      id: 324,
      question: "Which CNCF project provides distributed tracing for microservices?",
      options: [
        "Prometheus",
        "Jaeger",
        "Fluentd",
        "Grafana"
      ],
      correctAnswer: "Jaeger",
      explanation: `
### Concept: Observability - Distributed Tracing
**Jaeger** is an open-source, end-to-end distributed tracing system for monitoring and troubleshooting microservices-based architectures.
- **Trace Propagation**: Tracks requests as they flow through multiple services.
- **Performance Optimization**: Helps identify bottlenecks and latency issues.
- **Root Cause Analysis**: Assists in debugging distributed transactions.
- **OpenTelemetry Compatible**: Works with OpenTelemetry for standardized instrumentation.
      `
    },
    {
      id: 325,
      question: "What is the default DNS service used in Kubernetes clusters?",
      options: [
        "BIND",
        "CoreDNS",
        "dnsmasq",
        "Consul"
      ],
      correctAnswer: "CoreDNS",
      explanation: `
### Concept: Kubernetes Service Discovery
**CoreDNS** is the default DNS server for Kubernetes clusters (since version 1.13).
- **Service Discovery**: Automatically creates DNS records for Kubernetes services.
- **Plugin Architecture**: Highly extensible through plugins for various DNS functions.
- **DNS-Based**: Enables pods to discover services using DNS names.
- **Replaced kube-dns**: CoreDNS replaced kube-dns as the default due to better performance and flexibility.
      `
    },
    {
      id: 326,
      question: "Which of the following is NOT one of the 'Three Pillars of Observability'?",
      options: [
        "Metrics",
        "Logs",
        "Traces",
        "Alerts"
      ],
      correctAnswer: "Alerts",
      explanation: `
### Concept: Observability in Cloud Native Systems
The **Three Pillars of Observability** are fundamental data types for understanding system behavior:
- **Metrics**: Numerical measurements over time (e.g., CPU usage, request rate).
- **Logs**: Discrete event records with timestamps and context.
- **Traces**: Request flows across distributed systems showing latency and dependencies.
- **Alerts**: While important, alerts are actions taken based on observability data, not a pillar themselves.
      `
    },
    {
      id: 327,
      question: "What does the 'declarative' nature of Kubernetes mean?",
      options: [
        "You write code to manually create each resource",
        "You describe the desired state and Kubernetes works to maintain it",
        "You must declare all variables before using them",
        "You need to declare dependencies between resources"
      ],
      correctAnswer: "You describe the desired state and Kubernetes works to maintain it",
      explanation: `
### Concept: Declarative Configuration
**Declarative configuration** is a core principle of Kubernetes where you specify what you want, not how to achieve it.
- **Desired State**: You define the desired state in manifest files (YAML/JSON).
- **Reconciliation Loop**: Kubernetes controllers continuously work to match the current state with the desired state.
- **Self-Healing**: If the actual state drifts from desired state, Kubernetes automatically corrects it.
- **vs Imperative**: Contrasts with imperative commands where you specify exact steps to execute.
      `
    },
    {
      id: 328,
      question: "Which storage abstraction in Kubernetes allows pods to request storage without knowing the underlying storage provider?",
      options: [
        "Volume",
        "PersistentVolume",
        "PersistentVolumeClaim",
        "StorageClass"
      ],
      correctAnswer: "PersistentVolumeClaim",
      explanation: `
### Concept: Kubernetes Storage Abstractions
**PersistentVolumeClaim (PVC)** is a request for storage by a user, abstracting storage details from the pod.
- **Storage Request**: Pods use PVCs to request storage without knowing implementation details.
- **Binding**: PVCs are bound to PersistentVolumes (PVs) that satisfy the request.
- **Dynamic Provisioning**: Can trigger automatic PV creation via StorageClass.
- **Portability**: Makes applications portable across different storage backends.
      `
    },
    {
      id: 329,
      question: "What is the purpose of a Service Mesh in cloud native architectures?",
      options: [
        "To provide load balancing for incoming traffic",
        "To manage communication between microservices with features like traffic management and security",
        "To store configuration data for services",
        "To schedule containers across cluster nodes"
      ],
      correctAnswer: "To manage communication between microservices with features like traffic management and security",
      explanation: `
### Concept: Service Mesh
A **Service Mesh** is a dedicated infrastructure layer for handling service-to-service communication in microservices architectures.
- **Traffic Management**: Provides advanced routing, load balancing, and circuit breaking.
- **Security**: Implements mTLS, authentication, and authorization between services.
- **Observability**: Generates metrics, logs, and traces for all service interactions.
- **Examples**: Istio, Linkerd, and Consul are popular service mesh implementations.
      `
    },
    {
      id: 330,
      question: "Which Open Container Initiative (OCI) specification defines the structure and format of container images?",
      options: [
        "Runtime Specification",
        "Image Specification",
        "Distribution Specification",
        "Container Specification"
      ],
      correctAnswer: "Image Specification",
      explanation: `
### Concept: OCI Standards
The **OCI Image Specification** defines the format of container images to ensure portability across different platforms.
- **Image Format**: Specifies how container images should be structured and packaged.
- **Layers**: Defines the layer-based filesystem structure.
- **Manifest**: Describes image configuration and layer references.
- **Portability**: Ensures images work across different OCI-compliant runtimes and registries.
      `
    },
    {
      id: 331,
      question: "In Kubernetes, what is the smallest deployable unit?",
      options: [
        "Container",
        "Pod",
        "Deployment",
        "Node"
      ],
      correctAnswer: "Pod",
      explanation: `
### Concept: Kubernetes Workload Fundamentals
A **Pod** is the smallest and simplest unit in the Kubernetes object model that you create or deploy.
- **Container Group**: A pod can contain one or more containers that share resources.
- **Shared Context**: Containers in a pod share network namespace, IP address, and storage volumes.
- **Atomic Unit**: Pods are created, scheduled, and managed as a single unit.
- **Ephemeral**: Pods are designed to be ephemeral and replaceable.
      `
    },
    {
      id: 332,
      question: "A developer wants to ensure that their application pods are distributed across different nodes for high availability. Which Kubernetes feature should they use?",
      options: [
        "NodeSelector",
        "Pod Anti-Affinity",
        "Taints and Tolerations",
        "Resource Requests"
      ],
      correctAnswer: "Pod Anti-Affinity",
      explanation: `
### Concept: Pod Scheduling and High Availability
**Pod Anti-Affinity** is used to spread pods across different nodes, zones, or other topology domains to ensure high availability.
- **Distribution Strategy**: Prevents multiple replicas of the same application from running on the same node.
- **Failure Isolation**: If a node fails, you won't lose all replicas at once.
- **Topology Keys**: Can use labels like kubernetes.io/hostname, topology.kubernetes.io/zone for distribution.
- **Required vs Preferred**: Can be hard (requiredDuringSchedulingIgnoredDuringExecution) or soft (preferredDuringSchedulingIgnoredDuringExecution).

**Why other options are incorrect**:
- NodeSelector: Only selects specific nodes, doesn't ensure distribution
- Taints and Tolerations: Controls which pods can/cannot be scheduled on nodes
- Resource Requests: For resource allocation, not distribution
  `
    },
    {
      id: 333,
      question: "Your organization wants to implement a GitOps workflow for Kubernetes deployments. Which CNCF project is specifically designed for this purpose?",
      options: [
        "Jenkins",
        "Helm",
        "Argo CD",
        "Prometheus"
      ],
      correctAnswer: "Argo CD",
      explanation: `
### Concept: GitOps and Continuous Deployment
**Argo CD** is a declarative, GitOps continuous delivery tool for Kubernetes, and is a CNCF graduated project.
- **Git as Source of Truth**: Keeps cluster state synchronized with Git repository declarations.
- **Automated Sync**: Automatically deploys applications when Git repository changes are detected.
- **Drift Detection**: Detects and corrects configuration drift from desired state.
- **Multi-cluster Support**: Can manage deployments across multiple Kubernetes clusters.
- **Visual UI**: Provides a web interface to visualize application state and sync status.

**GitOps Principles**:
1. Declarative configuration stored in Git
2. Automated deployment from Git
3. Continuous reconciliation of desired vs actual state
4. Immutable infrastructure through version control
  `
    },
    {
      id: 334,
      question: "Which statement is TRUE about container images and layers?",
      options: [
        "Each RUN instruction in a Dockerfile creates a new container",
        "Image layers are mutable and can be modified after creation",
        "Multiple containers can share the same read-only image layers",
        "Deleting files in a later layer reduces the total image size"
      ],
      correctAnswer: "Multiple containers can share the same read-only image layers",
      explanation: `
### Concept: Container Image Architecture and Layering
**Container images use a layered filesystem** where multiple containers can share common base layers, optimizing storage and transfer.
- **Layer Sharing**: Read-only layers are shared between containers using the same base image.
- **Copy-on-Write**: Each container gets its own writable layer on top of shared read-only layers.
- **Storage Efficiency**: Dramatically reduces disk space usage when running multiple containers.
- **Fast Deployment**: Layers already present don't need to be downloaded again.

**Why other options are incorrect**:
- RUN creates a layer, not a container
- Image layers are immutable (read-only) once created
- Deleting files in later layers doesn't reduce size - the deleted files still exist in previous layers (layer accumulation)

**Best Practice**: Combine commands in Dockerfile to reduce layers and clean up in the same RUN instruction.
  `
    },
    {
      id: 335,
      question: "In a microservices architecture, Service A needs to call Service B, but Service B is temporarily unavailable. Which service mesh feature prevents Service A from being overwhelmed with failed requests?",
      options: [
        "Load Balancing",
        "Circuit Breaker",
        "Mutual TLS",
        "Traffic Splitting"
      ],
      correctAnswer: "Circuit Breaker",
      explanation: `
### Concept: Service Mesh Resilience Patterns
**Circuit Breaker** is a pattern that prevents cascading failures by stopping requests to failing services after a threshold is reached.
- **Failure Detection**: Monitors request failures and latency to detect service issues.
- **Three States**: Closed (normal), Open (blocking requests), Half-Open (testing recovery).
- **Fast Fail**: Returns errors immediately instead of waiting for timeouts when circuit is open.
- **Auto Recovery**: Periodically tests if the failing service has recovered.
- **Protection**: Prevents resource exhaustion from retrying failed operations.

**Circuit Breaker States**:
1. **Closed**: Requests flow normally, failures are counted
2. **Open**: Threshold exceeded, requests fail immediately
3. **Half-Open**: Limited requests allowed to test recovery

**Implementation**: Available in service meshes like Istio, Linkerd, and libraries like Hystrix.
  `
    },
    {
      id: 336,
      question: "A company wants to run different versions of their application simultaneously and gradually shift traffic from v1 to v2. What deployment strategy should they use?",
      options: [
        "Blue-Green Deployment",
        "Recreate Deployment",
        "Canary Deployment",
        "Rolling Update"
      ],
      correctAnswer: "Canary Deployment",
      explanation: `
### Concept: Cloud Native Deployment Strategies
**Canary Deployment** gradually shifts traffic from an old version to a new version, allowing for monitoring and quick rollback if issues arise.
- **Gradual Rollout**: Start with small percentage (e.g., 5%) of traffic to new version.
- **Monitor Metrics**: Observe error rates, latency, and other KPIs during rollout.
- **Progressive Increase**: Gradually increase traffic to new version if metrics are healthy.
- **Quick Rollback**: Easy to revert by shifting traffic back to old version.
- **Risk Mitigation**: Limits blast radius of bugs or performance issues.

**Comparison with other strategies**:
- **Blue-Green**: Instant 100% switch between versions (all-or-nothing)
- **Rolling Update**: Replaces pods gradually without traffic control
- **Recreate**: Downtime approach, terminates all old pods before starting new ones

**Tools**: Implemented via service mesh (Istio, Linkerd), Flagger, or Argo Rollouts.
  `
    },
    {
      id: 337,
      question: "What is the primary benefit of using an Ingress Controller over a LoadBalancer Service in Kubernetes?",
      options: [
        "Ingress Controllers provide faster networking",
        "A single Ingress can route to multiple services using path-based routing, reducing external load balancers needed",
        "Ingress Controllers encrypt all traffic automatically",
        "LoadBalancer Services only work with cloud providers"
      ],
      correctAnswer: "A single Ingress can route to multiple services using path-based routing, reducing external load balancers needed",
      explanation: `
### Concept: Kubernetes Ingress and Traffic Management
**Ingress** provides HTTP/HTTPS routing to multiple services through a single entry point, offering cost and management benefits.
- **Cost Efficiency**: One load balancer can route to multiple services instead of one per service.
- **Path-Based Routing**: Routes like /api → api-service, /web → web-service from single endpoint.
- **Host-Based Routing**: Different domains/subdomains can route to different services.
- **TLS Termination**: Centralized SSL/TLS certificate management.
- **Layer 7 Features**: URL rewriting, redirects, authentication at application layer.

**Ingress Components**:
- **Ingress Resource**: Kubernetes object defining routing rules
- **Ingress Controller**: Implementation (NGINX, Traefik, HAProxy, etc.) that enforces rules

**Example Use Case**: Instead of 10 LoadBalancer services (10 cloud load balancers = $$$), use 1 Ingress with routing rules.

**Popular Ingress Controllers**: NGINX Ingress, Traefik, HAProxy, Kong, Contour, Ambassador
  `
    },
    {
      id: 338,
      question: "In observability, what does 'cardinality' refer to, and why is it important?",
      options: [
        "The number of data points collected per second",
        "The number of unique combinations of label values in metrics",
        "The accuracy of measurements",
        "The time it takes to query metrics"
      ],
      correctAnswer: "The number of unique combinations of label values in metrics",
      explanation: `
### Concept: Observability Metrics and Cardinality
**Cardinality** refers to the number of unique time series created by different combinations of metric labels, which significantly impacts system performance.
- **Time Series Explosion**: Each unique label combination creates a new time series.
- **Resource Impact**: High cardinality can overwhelm metric storage and query systems.
- **Example**: A metric with labels for user_id, request_id, and timestamp creates millions of series.
- **Best Practice**: Use labels for aggregatable dimensions (service, endpoint, status) not unique IDs.

**High Cardinality Problems**:
- Increased storage costs
- Slower queries
- Higher memory usage in Prometheus/similar systems
- Potential system crashes

**Good Label Examples**: environment, service_name, http_status, region
**Bad Label Examples**: user_id, transaction_id, email, timestamp

**Rule of Thumb**: Keep total unique label combinations under 10,000 per metric in Prometheus.
  `
    },
    {
      id: 339,
      question: "Your team needs to ensure that a Kubernetes cluster can automatically scale nodes based on pod resource requirements. Which component should be deployed?",
      options: [
        "Horizontal Pod Autoscaler (HPA)",
        "Vertical Pod Autoscaler (VPA)",
        "Cluster Autoscaler",
        "Metrics Server"
      ],
      correctAnswer: "Cluster Autoscaler",
      explanation: `
### Concept: Kubernetes Autoscaling - Infrastructure Level
**Cluster Autoscaler** automatically adjusts the number of nodes in a cluster based on pending pods and resource utilization.
- **Scale Up**: Adds nodes when pods can't be scheduled due to insufficient resources.
- **Scale Down**: Removes underutilized nodes when pods can be rescheduled elsewhere.
- **Cloud Integration**: Works with cloud providers (AWS, GCP, Azure) to provision/terminate nodes.
- **Pod Awareness**: Respects PodDisruptionBudgets and pod priorities during scale down.
- **Cost Optimization**: Reduces costs by removing idle nodes while ensuring capacity.

**Autoscaling Hierarchy**:
1. **HPA**: Scales number of pod replicas based on metrics (CPU, memory, custom)
2. **VPA**: Adjusts CPU/memory requests for individual pods
3. **Cluster Autoscaler**: Scales number of nodes in the cluster

**Trigger**: When scheduler cannot place pods due to insufficient node resources.

**Considerations**: Requires cloud provider support, has cool-down periods, works with node groups/pools.
  `
    },
    {
      id: 340,
      question: "Which Open Policy Agent (OPA) integration point in Kubernetes allows you to enforce policies BEFORE resources are persisted to etcd?",
      options: [
        "Custom Resource Definitions",
        "Admission Controllers",
        "Network Policies",
        "RBAC Rules"
      ],
      correctAnswer: "Admission Controllers",
      explanation: `
### Concept: Kubernetes Policy Enforcement and Admission Control
**Admission Controllers** are plugins that intercept requests to the Kubernetes API before object persistence, enabling policy enforcement.
- **Validation Stage**: Checks if requests comply with policies before storing in etcd.
- **Mutation Stage**: Can modify requests (e.g., inject sidecars, set defaults).
- **OPA Integration**: OPA Gatekeeper uses ValidatingWebhookConfiguration and MutatingWebhookConfiguration.
- **Early Enforcement**: Prevents non-compliant resources from being created.
- **Policy Examples**: Require labels, enforce naming conventions, block privileged containers, require resource limits.

**Admission Control Flow**:
1. Request sent to API server
2. Authentication (who are you?)
3. Authorization (what can you do?)
4. **Admission Controllers** (should this be allowed based on policy?)
5. Validation
6. Persistence to etcd

**OPA Gatekeeper**: Kubernetes-native policy enforcement using OPA and ConstraintTemplates.

**Built-in Admission Controllers**: PodSecurityPolicy, ResourceQuota, LimitRanger, NamespaceLifecycle
  `
    },
    {
      id: 341,
      question: "A company wants to implement zero-trust security between microservices. Which capability is MOST important?",
      options: [
        "Network segmentation using Network Policies",
        "Mutual TLS (mTLS) for service-to-service communication",
        "Container image scanning",
        "Secrets encryption at rest"
      ],
      correctAnswer: "Mutual TLS (mTLS) for service-to-service communication",
      explanation: `
### Concept: Zero Trust Security in Cloud Native Environments
**Mutual TLS (mTLS)** provides bidirectional authentication and encryption between services, forming the foundation of zero-trust architecture.
- **Bidirectional Auth**: Both client and server verify each other's identity using certificates.
- **Encryption**: All communication is encrypted in transit.
- **Identity-Based**: Services authenticate based on cryptographic identity, not network location.
- **Zero Trust Principle**: "Never trust, always verify" - even internal communication is authenticated.
- **Service Mesh Implementation**: Automatically handled by service meshes like Istio, Linkerd.

**mTLS Benefits**:
- Prevents man-in-the-middle attacks
- Ensures only authorized services can communicate
- Provides audit trail of service interactions
- Encryption without application code changes

**Zero Trust Components**:
1. **mTLS**: Authentication and encryption (most critical)
2. Network Policies: Traffic control
3. RBAC: Authorization
4. Policy Enforcement: OPA, service mesh policies

**Comparison**: Network Policies control traffic flow, but don't verify identity or encrypt. mTLS does both.
  `
    },
    {
      id: 342,
      question: "When designing a cloud native application, which principle suggests that configuration should be externalized from the application code?",
      options: [
        "Immutable Infrastructure",
        "The Twelve-Factor App Methodology",
        "Domain-Driven Design",
        "Event-Driven Architecture"
      ],
      correctAnswer: "The Twelve-Factor App Methodology",
      explanation: `
### Concept: Cloud Native Application Design Principles
**The Twelve-Factor App** is a methodology for building SaaS applications that emphasizes portability and cloud-native best practices.
- **Factor III - Config**: Store configuration in environment variables, separate from code.
- **Environment Parity**: Same codebase runs in dev, staging, and production with different configs.
- **Portability**: Applications can move between environments without code changes.
- **Security**: Credentials and secrets never committed to version control.
- **Kubernetes Implementation**: ConfigMaps and Secrets for configuration management.

**Key Twelve-Factor Principles**:
1. One codebase, many deploys
2. Explicit dependencies
3. **Config in environment**
4. Backing services as attached resources
5. Build, release, run separation
6. Stateless processes
7. Port binding
8. Concurrency through process model
9. Fast startup and graceful shutdown
10. Dev/prod parity
11. Logs as event streams
12. Admin processes

**Configuration Anti-Pattern**: Hardcoding database URLs, API keys, or environment-specific settings in code.
  `
    },
    {
      id: 343,
      question: "Your application needs to access cloud provider APIs (like AWS S3). What is the cloud-native way to provide credentials without storing them in the container?",
      options: [
        "Embed credentials in the container image",
        "Use Kubernetes Secrets mounted as environment variables",
        "Use Workload Identity / IAM Roles for Service Accounts (IRSA)",
        "Store credentials in a ConfigMap"
      ],
      correctAnswer: "Use Workload Identity / IAM Roles for Service Accounts (IRSA)",
      explanation: `
### Concept: Cloud Native Security - Credential Management
**Workload Identity** (GCP) and **IAM Roles for Service Accounts (IRSA)** (AWS) allow pods to assume cloud IAM roles without static credentials.
- **No Static Credentials**: Eliminates need to store long-lived credentials.
- **Automatic Rotation**: Credentials are temporary and auto-rotated.
- **Least Privilege**: Each workload gets only the permissions it needs.
- **Service Account Binding**: Kubernetes ServiceAccount is mapped to cloud IAM role.
- **Transparent**: Application uses standard cloud SDK, credentials injected automatically.

**How It Works** (AWS IRSA):
1. Create IAM role with specific permissions
2. Associate IAM role with Kubernetes ServiceAccount
3. Pod uses the ServiceAccount
4. AWS STS provides temporary credentials to pod
5. Application uses credentials transparently

**Why other options are worse**:
- Embedding in image: Credentials leak, hard to rotate, security nightmare
- K8s Secrets: Better, but still static credentials to manage
- ConfigMap: NEVER for credentials - ConfigMaps are not encrypted

**Azure Equivalent**: Azure AD Workload Identity
  `
    },
    {
      id: 344,
      question: "In a Kubernetes cluster, which component is responsible for maintaining the desired state of pods on a specific node?",
      options: [
        "kube-scheduler",
        "kube-controller-manager",
        "kubelet",
        "kube-proxy"
      ],
      correctAnswer: "kubelet",
      explanation: `
### Concept: Kubernetes Node Components
**kubelet** is the primary node agent that ensures containers described in PodSpecs are running and healthy on its node.
- **Pod Lifecycle**: Creates, starts, stops, and monitors containers in pods.
- **Health Checks**: Executes liveness, readiness, and startup probes.
- **Reports Status**: Sends node and pod status to control plane.
- **Pulls Images**: Works with container runtime to pull images from registries.
- **Resource Management**: Enforces resource limits and requests.
- **Volume Management**: Mounts volumes for pods.

**kubelet Responsibilities**:
1. Watch API server for pods assigned to its node
2. Ensure pod containers are running
3. Report pod and node status back to control plane
4. Execute container lifecycle hooks
5. Collect and report resource metrics

**Communication**:
- **Receives**: Pod specs from API server
- **Interacts**: With container runtime via CRI
- **Reports**: Node status, pod status, events

**Key Point**: kubelet maintains ACTUAL state to match DESIRED state defined in PodSpecs.
  `
    },
    {
      id: 345,
      question: "Which CNCF project provides a standardized vendor-neutral way to collect telemetry data (metrics, logs, traces) from applications?",
      options: [
        "Prometheus",
        "Jaeger",
        "OpenTelemetry",
        "Fluentd"
      ],
      correctAnswer: "OpenTelemetry",
      explanation: `
### Concept: Observability Standards and Instrumentation
**OpenTelemetry (OTel)** is a CNCF project that provides a unified set of APIs, SDKs, and tools for collecting observability data.
- **Vendor Neutral**: Avoids lock-in to specific observability backends.
- **Three Signals**: Collects metrics, traces, and logs through single framework.
- **Auto-Instrumentation**: Provides automatic instrumentation for many languages/frameworks.
- **Exporters**: Can send data to multiple backends (Prometheus, Jaeger, Datadog, etc.).
- **Standardization**: Merges OpenTracing and OpenCensus projects.

**OpenTelemetry Components**:
- **API**: Language-specific instrumentation interface
- **SDK**: Implementation of API with configuration
- **Collector**: Vendor-agnostic receiver, processor, and exporter for telemetry
- **Instrumentation Libraries**: Pre-built instrumentation for frameworks

**Data Flow**:
Application → OTel SDK → OTel Collector → Backend (Prometheus/Jaeger/etc.)

**Why It's Important**: Write instrumentation once, switch backends without code changes.

**Adoption**: Supported by all major observability vendors and cloud providers.
  `
    },
    {
      id: 346,
      question: "A StatefulSet manages pods with identities pod-0, pod-1, pod-2. If pod-1 is deleted, what happens?",
      options: [
        "A new pod is created with a random name",
        "The pod is recreated with the same name 'pod-1' and reattaches to the same PersistentVolume",
        "The StatefulSet creates pod-3 instead",
        "The pod is not recreated until the entire StatefulSet is restarted"
      ],
      correctAnswer: "The pod is recreated with the same name 'pod-1' and reattaches to the same PersistentVolume",
      explanation: `
### Concept: StatefulSets and Stateful Applications
**StatefulSets** provide stable, unique network identifiers and stable persistent storage for pods, essential for stateful workloads.
- **Stable Identity**: Each pod gets a persistent identifier (pod-0, pod-1, etc.) that survives rescheduling.
- **Ordered Deployment**: Pods are created sequentially (0→1→2) and terminated in reverse.
- **Stable Storage**: Each pod's PersistentVolumeClaim is retained and remounted on pod recreation.
- **Stable Network**: DNS entries remain consistent (pod-1.service-name.namespace.svc.cluster.local).
- **Use Cases**: Databases, message queues, distributed systems requiring stable identity.

**StatefulSet Guarantees**:
1. Pods have ordinal index (0, 1, 2...)
2. Pod names are deterministic: <statefulset-name>-<ordinal>
3. Each pod gets dedicated PVC that persists across restarts
4. Pods maintain identity even when rescheduled to different nodes

**vs Deployment**: Deployments create pods with random names and treat all replicas as interchangeable.

**Example Use Cases**: MySQL clusters, Kafka brokers, ZooKeeper ensembles, Cassandra nodes.
  `
    },
    {
      id: 347,
      question: "What is the main purpose of a DaemonSet in Kubernetes?",
      options: [
        "To run a copy of a pod on every node (or selected nodes) in the cluster",
        "To run pods that should never be terminated",
        "To run pods with administrative privileges",
        "To run background jobs on a schedule"
      ],
      correctAnswer: "To run a copy of a pod on every node (or selected nodes) in the cluster",
      explanation: `
### Concept: Kubernetes Workload Controllers - DaemonSet
**DaemonSet** ensures that all (or specific) nodes run a copy of a pod, automatically adding/removing pods as nodes are added/removed.
- **Node-Level Services**: Perfect for node-level functionality needed on every node.
- **Automatic Scaling**: As cluster grows/shrinks, DaemonSet pods are added/removed automatically.
- **Node Selection**: Can use nodeSelector or affinity to run on specific node subsets.
- **No Replica Count**: Unlike Deployments, you don't specify replicas - it's one per node.

**Common Use Cases**:
- **Log Collection**: Fluentd, Filebeat running on each node
- **Monitoring Agents**: Node exporters, monitoring daemons
- **Network Plugins**: CNI network plugins, kube-proxy
- **Storage Daemons**: Ceph, GlusterFS daemons
- **Security Agents**: Intrusion detection, vulnerability scanners

**DaemonSet Behavior**:
- New node joins cluster → DaemonSet pod automatically scheduled
- Node removed → DaemonSet pod automatically cleaned up
- Node matches selector → Pod created
- Node stops matching selector → Pod removed

**Update Strategy**: Rolling update or OnDelete for controlled rollouts.
  `
    },
    {
      id: 348,
      question: "In container security, what does 'rootless containers' refer to?",
      options: [
        "Containers that don't require root permissions to run the container runtime daemon",
        "Containers without a root filesystem",
        "Containers that cannot access the root directory",
        "Containers without a base image"
      ],
      correctAnswer: "Containers that don't require root permissions to run the container runtime daemon",
      explanation: `
### Concept: Container Security - Rootless Containers
**Rootless containers** allow running the container runtime daemon without root privileges, significantly reducing security risks.
- **Daemon Privilege**: The container runtime itself runs as a non-root user.
- **Security Improvement**: Container escapes don't grant root access to host.
- **User Namespaces**: Leverages Linux user namespaces for isolation.
- **Reduced Attack Surface**: Compromising container doesn't compromise entire system.
- **Multi-Tenancy**: Safer for shared systems where users run their own containers.

**Traditional vs Rootless**:
- **Traditional**: Docker daemon runs as root, containers can be rootless but daemon isn't
- **Rootless**: Both daemon and containers run without root

**Limitations**:
- Some features may not work (certain volume types, port binding <1024)
- Performance overhead from user namespace mapping
- Not all CNI plugins supported

**Supported Runtimes**: 
- Docker (rootless mode)
- Podman (rootless by default)
- containerd with rootless support

**Security Principle**: Principle of least privilege - run with minimum necessary permissions.
  `
    },
    {
      id: 349,
      question: "Your company uses Helm to package Kubernetes applications. What is the purpose of the values.yaml file?",
      options: [
        "It defines the Helm chart version and dependencies",
        "It contains default configuration values that can be overridden during installation",
        "It lists all Kubernetes resources to be created",
        "It stores the release history"
      ],
      correctAnswer: "It contains default configuration values that can be overridden during installation",
      explanation: `
### Concept: Helm - Kubernetes Package Management
**values.yaml** provides default configuration values for a Helm chart, enabling customization without modifying templates.
- **Default Values**: Provides sensible defaults for chart installation.
- **Parameterization**: Makes charts reusable across environments (dev/staging/prod).
- **Override Mechanism**: Values can be overridden with -f custom-values.yaml or --set flags.
- **Template Variables**: Values referenced in templates using {{ .Values.key }}.
- **Type Safety**: Can include schema validation via values.schema.json.

**Helm Chart Structure**:
\`\`\`
mychart/
  Chart.yaml          # Chart metadata
  values.yaml         # Default configuration values
  templates/          # Kubernetes manifest templates
  charts/             # Dependent charts
  README.md
\`\`\`

**Usage Examples**:
\`\`\`bash
# Use defaults
helm install myapp ./mychart

# Override with file
helm install myapp ./mychart -f prod-values.yaml

# Override specific values
helm install myapp ./mychart --set replicas=5
\`\`\`

**values.yaml Example**:
\`\`\`yaml
replicaCount: 3
image:
repository: nginx
tag: "1.21"
service:
type: LoadBalancer
port: 80
\`\`\`

**Best Practice**: Keep values.yaml minimal with well-documented defaults.
  `
    },
    {
      id: 350,
      question: "Which statement about Kubernetes etcd is CORRECT?",
      options: [
        "etcd runs on worker nodes to store pod data",
        "etcd is a distributed key-value store that serves as Kubernetes' backing store for all cluster data",
        "etcd is only used for storing container logs",
        "Each pod has its own etcd instance"
      ],
      correctAnswer: "etcd is a distributed key-value store that serves as Kubernetes' backing store for all cluster data",
      explanation: `
### Concept: Kubernetes Data Store - etcd
**etcd** is a consistent, distributed key-value store that provides a reliable way to store Kubernetes cluster state and configuration.
- **Single Source of Truth**: All cluster state (pods, services, configs, secrets) stored in etcd.
- **Distributed Consensus**: Uses Raft algorithm for consistency across multiple instances.
- **Watch Mechanism**: Kubernetes components watch etcd for changes to react to state updates.
- **Control Plane Only**: Runs on control plane nodes, not worker nodes.
- **High Availability**: Typically run in clusters of 3 or 5 instances for fault tolerance.

**What's Stored in etcd**:
- All Kubernetes objects (Pods, Services, ConfigMaps, Secrets, etc.)
- Cluster configuration
- State information
- Resource version data

**Critical Importance**:
- **No etcd = No cluster**: If etcd is down, cluster state cannot be modified
- **Backup Critical**: etcd backups are essential for disaster recovery
- **Performance Impact**: etcd performance directly affects cluster responsiveness

**Security Considerations**:
- Encrypt etcd data at rest
- Use TLS for etcd communication
- Restrict network access to etcd
- Regular backups with encryption

**Note**: Only API server communicates directly with etcd, not individual components.
  `
    },
    {
      id: 351,
      question: "A developer wants to ensure their pod continues running even if a health check temporarily fails. Which type of probe should they configure?",
      options: [
        "livenessProbe only",
        "readinessProbe only",
        "startupProbe only",
        "Both readinessProbe and appropriate failureThreshold settings"
      ],
      correctAnswer: "Both readinessProbe and appropriate failureThreshold settings",
      explanation: `
### Concept: Kubernetes Health Checks and Probes
Understanding the different probe types and their configurations is crucial for application reliability.

**Probe Types**:
- **livenessProbe**: Determines if container should be restarted (kills and restarts on failure)
- **readinessProbe**: Determines if pod should receive traffic (removes from service endpoints on failure)
- **startupProbe**: Gives slow-starting containers time to start before other probes begin

**For Temporary Failures**:
- **readinessProbe is safer**: Removes pod from load balancer but doesn't restart it
- **failureThreshold**: Number of consecutive failures before action (default: 3)
- **periodSeconds**: How often to probe (default: 10)
- **timeoutSeconds**: Probe timeout (default: 1)

**Configuration Example**:
\`\`\`yaml
readinessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3    # Allows 3 failures before marking unready
  successThreshold: 1    # 1 success to mark ready again
\`\`\`

**Why readinessProbe is better for temporary issues**:
- Pod stays alive, just stops receiving traffic
- Can recover automatically without restart
- Maintains state and connections
- No pod churn or restart overhead

**Best Practice**: Use readinessProbe for temporary issues, livenessProbe only for deadlocks/unrecoverable states.
  `
    },
    {
      id: 352,
      question: "Which Cloud Native Computing Foundation (CNCF) maturity level indicates a project has the highest level of adoption and stability?",
      options: [
        "Sandbox",
        "Incubating",
        "Graduated",
        "Archived"
      ],
      correctAnswer: "Graduated",
      explanation: `
### Concept: CNCF Project Maturity Levels
The **CNCF uses three maturity levels** to classify projects based on their adoption, governance, and community health.

**CNCF Maturity Levels**:

1. **Sandbox**: 
   - Early-stage projects
   - Experimental and innovative
   - CNCF provides neutral home
   - Example: Early-stage projects exploring new ideas

2. **Incubating**:
   - Growing adoption
   - Healthy governance
   - Production use by multiple organizations
   - Example: Argo, Flux, Linkerd (at various points)

3. **Graduated**: 
   - Widespread production adoption
   - Strong governance and committer diversity
   - Documented security and stability
   - Examples: Kubernetes, Prometheus, Envoy, containerd, CoreDNS, Helm, Jaeger

**Graduation Criteria**:
- Multiple production deployments
- Healthy number of committers from multiple organizations
- Clear governance process
- Security audit completed
- Adopted by multiple end users
- Demonstrated growth in contributors and adoption
      `
    },
    {
      id: 353,
      question: "What is the primary purpose of the Container Network Interface (CNI) in Kubernetes?",
      options: [
        "To manage container storage",
        "To provide a standardized interface for networking plugins",
        "To schedule containers to nodes",
        "To manage container images"
      ],
      correctAnswer: "To provide a standardized interface for networking plugins",
      explanation: `
### Concept: Container Network Interface (CNI)
**CNI** is a cloud-native standard for configuring network interfaces in Linux containers.
- **Interoperability**: Allows different networking solutions (Flannel, Calico, Cilium, etc.) to work with multiple orchestrators.
- **Responsibility**: CNI plugins are responsible for inserting a network interface into the container network namespace and making any necessary changes on the host.
- **Standardized**: Kubernetes uses CNI to enable networking between pods across different nodes.
      `
    },
    {
      id: 354,
      question: "Which Kubernetes component automatically adjusts the CPU and memory reservations (requests) for your pods based on historical resource usage?",
      options: [
        "Horizontal Pod Autoscaler (HPA)",
        "Vertical Pod Autoscaler (VPA)",
        "Cluster Autoscaler",
        "Node Problem Detector"
      ],
      correctAnswer: "Vertical Pod Autoscaler (VPA)",
      explanation: `
### Concept: Vertical Pod Autoscaling
**Vertical Pod Autoscaler (VPA)** frees users from having to set exact resource requests and limits for their pods.
- **Resource Optimization**: It analyzes historical resource usage and automatically sets the appropriate CPU and memory requests.
- **Rightsizing**: Prevents both over-provisioning (wasted costs) and under-provisioning (performance issues).
- **Restarting**: Note that most VPA implementations currently require restarting the pod to apply changes (unlike HPA).
      `
    },
    {
      id: 355,
      question: "In Kubernetes admission control, which type of webhook is allowed to modify the resource request before it is validated?",
      options: [
        "Validating Admission Webhook",
        "Mutating Admission Webhook",
        "Resource Admission Webhook",
        "Configuration Admission Webhook"
      ],
      correctAnswer: "Mutating Admission Webhook",
      explanation: `
### Concept: Admission Controllers
**Admission Webhooks** come in two flavors: Mutating and Validating.
- **Mutating Webhooks**: These are called first. They can modify (mutate) the object sent to the API server (e.g., injecting a sidecar container or setting default labels).
- **Validating Webhooks**: These are called second. They can only accept or reject the request based on policy, but cannot modify it.
      `
    },
    {
      id: 356,
      question: "What is the primary data collection model used by Prometheus for gathering metrics from targets?",
      options: [
        "Push-based model",
        "Pull-based model",
        "Event-driven model",
        "Stream-based model"
      ],
      correctAnswer: "Pull-based model",
      explanation: `
### Concept: Prometheus Data Collection
**Prometheus** primarily uses a **pull-based model** for metrics collection.
- **Scraping**: The Prometheus server periodically "scrapes" (HTTP GET) metrics from configured targets.
- **Discovery**: It uses service discovery to find which targets to scrape.
- **Push Gateway**: While a "Pushgateway" exists for short-lived jobs, the core philosophy is pull-based, which allows the server to control the scrape rate and detect if a target is down.
      `
    },
    {
      id: 357,
      question: "Which Kubernetes object is used to limit the total resource consumption (like total CPU or number of Pods) within a specific Namespace?",
      options: [
        "LimitRange",
        "ResourceQuota",
        "HorizontalPodAutoscaler",
        "PodDisruptionBudget"
      ],
      correctAnswer: "ResourceQuota",
      explanation: `
### Concept: Resource Quotas
A **ResourceQuota** provides constraints that limit aggregate resource consumption per Namespace.
- **Multi-tenancy**: Essential for clusters shared by multiple teams or projects.
- **Resource Types**: Can limit CPU, Memory, number of Pods, Services, PersistentVolumeClaims, etc.
- **Enforcement**: If a request exceeds the quota, the API server rejects the request.
      `
    },
    {
      id: 358,
      question: "Which Kubernetes resource allows you to set default CPU and memory requests/limits for all containers in a namespace if they are not explicitly specified?",
      options: [
        "ResourceQuota",
        "LimitRange",
        "ConfigMap",
        "PodSecurityContext"
      ],
      correctAnswer: "LimitRange",
      explanation: `
### Concept: Limit Ranges
A **LimitRange** is used to enumerate min/max resource constraints and default values for resources (like Pods and Containers) in a Namespace.
- **Defaulting**: If a user creates a pod without specifying resources, LimitRange can automatically apply default values.
- **Constraints**: It can also enforce that a container's request/limit must be within a certain range.
- **Quota vs LimitRange**: ResourceQuota limits *aggregate* usage, while LimitRange controls *individual* resource specifications.
      `
    },
    {
      id: 359,
      question: "What does the Container Storage Interface (CSI) provide to the Kubernetes ecosystem?",
      options: [
        "A way to run containers without Docker",
        "A standardized interface for storage vendors to integrate with container orchestrators",
        "A distributed filesystem for pods",
        "A tool for backing up etcd"
      ],
      correctAnswer: "A standardized interface for storage vendors to integrate with container orchestrators",
      explanation: `
### Concept: Container Storage Interface (CSI)
**CSI** is a standard for exposing arbitrary block and file storage systems to containerized workloads.
- **Decoupling**: It allows storage vendors to develop their plugins "out-of-tree" (independently of the Kubernetes core code).
- **Standardization**: Plugins developed for CSI can work across different orchestrators (Kubernetes, Mesos, etc.).
- **Operations**: Handles volume lifecycle operations like provision, attach, and mount.
      `
    },
    {
      id: 360,
      question: "In Kubernetes scheduling, what occurs when a high-priority pod cannot be scheduled, and the scheduler evicts lower-priority pods to make room?",
      options: [
        "Scaling",
        "Preemption",
        "Rebalancing",
        "Draining"
      ],
      correctAnswer: "Preemption",
      explanation: `
### Concept: Pod Priority and Preemption
**Pod Priority** indicates the importance of a Pod relative to other Pods.
- **Scheduling Order**: Higher priority pods are scheduled before lower priority ones.
- **Preemption**: If a high-priority pod can't be scheduled due to lack of resources, the scheduler can kill (preempt) lower-priority pods to free up space.
- **PriorityClass**: You define priority levels using PriorityClass objects.
      `
    },
    {
      id: 361,
      question: "Which CNCF project extends Horizontal Pod Autoscaler (HPA) to scale applications based on external event sources like Kafka, RabbitMQ, or Prometheus metrics?",
      options: [
        "KNative",
        "KEDA",
        "Dapr",
        "Crossplane"
      ],
      correctAnswer: "KEDA",
      explanation: `
### Concept: KEDA (Kubernetes Event-Driven Autoscaling)
**KEDA** is a CNCF graduated project that provides event-driven autoscaling for Kubernetes.
- **Event-Driven**: It can scale containers to zero or out to thousands based on the number of events waiting in a queue (e.g., Azure Service Bus, Kafka, RabbitMQ).
- **HPA Integration**: It works by acting as an external metrics provider for the standard Horizontal Pod Autoscaler.
- **Scalers**: It includes dozens of built-in "scalers" for different event sources.
      `
    },
    {
      id: 362,
      question: "Which CNCF graduated project is commonly used as a unified logging layer to collect, process, and forward logs in cloud-native environments?",
      options: [
        "Prometheus",
        "Jaeger",
        "Fluentd",
        "Envoy"
      ],
      correctAnswer: "Fluentd",
      explanation: `
### Concept: Fluentd
**Fluentd** is an open-source data collector for unified logging.
- **Unified Layer**: It decouples data sources from backend storage.
- **JSON-based**: It treats logs as JSON, allowing for structured logging.
- **Plugins**: Has over 1,000 plugins to connect various inputs (logs, metrics) to various outputs (Elasticsearch, S3, Kafka).
- **Cloud Native**: Often deployed as a DaemonSet in Kubernetes to collect logs from every node.
      `
    },
    {
      id: 27,
      question: "What is an Ingress in Kubernetes?",
      options: [
        "A way to manage inbound traffic and provide routing rules to services",
        "A security policy that controls which pods can communicate",
        "A storage volume type for external data",
        "A component that monitors cluster health"
      ],
      correctAnswer: "A way to manage inbound traffic and provide routing rules to services",
      explanation: `
### Concept: Ingress and Load Balancing

**Ingress** is a Kubernetes resource that manages external access to services, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting.

**What Ingress provides:**
- **Path-based routing**: /api → API Service, /web → Web Service
- **Host-based routing**: api.example.com → API Service, web.example.com → Web Service
- **SSL/TLS termination**: Handle HTTPS at the edge
- **Load balancing**: Distribute traffic across pods

**Ingress vs Service:**
- **Service (LoadBalancer)**: One external IP per service (expensive)
- **Ingress**: One entry point, routes to multiple services

**Requires Ingress Controller:**
- **NGINX Ingress Controller** (most popular)
- **Traefik**
- **HAProxy**
- **Cloud provider ingress** (GKE, EKS, AKS)

**Example use case:**
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
\`\`\`

**Why other options are incorrect:**
- Security/communication control is Network Policies
- Storage volumes are PV/PVC
- Cluster health monitoring is done by Prometheus/metrics-server
      `
    },
    {
      id: 28,
      question: "What is the purpose of a Liveness Probe in Kubernetes?",
      options: [
        "To check if a container is ready to accept traffic",
        "To determine if a container is running and restart it if it's not responding",
        "To monitor the overall health of the cluster",
        "To check if a pod has sufficient resources"
      ],
      correctAnswer: "To determine if a container is running and restart it if it's not responding",
      explanation: `
### Concept: Health Checks and Probes

**Liveness Probe** checks if a container is still running properly. If the probe fails, Kubernetes kills and restarts the container.

**When to use Liveness Probe:**
- Application is running but stuck in deadlock
- Process exists but can't handle requests
- Application has become unresponsive

**Probe types:**
1. **HTTP GET**: Send HTTP request, expect 200-399 status
2. **TCP Socket**: Try to open TCP connection
3. **Exec**: Run command inside container, expect exit code 0

**Example:**
\`\`\`yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3
\`\`\`

**Liveness vs Readiness vs Startup:**
- **Liveness**: "Is the app alive?" → Restart if fails
- **Readiness**: "Is the app ready for traffic?" → Remove from service if fails
- **Startup**: "Has the app started?" → For slow-starting containers

**Real-world scenario:**
A web app has a memory leak. After 2 hours, it stops responding. Liveness probe fails, Kubernetes restarts the container, app works again.

**Best practices:**
- Set appropriate initialDelaySeconds for startup
- Don't check external dependencies in liveness (only the app itself)
- Keep probe lightweight

**Why other options are incorrect:**
- Ready to accept traffic → That's Readiness Probe
- Cluster health → That's monitoring tools
- Resource checking → That's resource limits/metrics
      `
    },
    {
      id: 29,
      question: "What is the difference between Liveness and Readiness probes?",
      options: [
        "They are the same thing with different names",
        "Liveness restarts failed containers; Readiness removes pods from service endpoints",
        "Liveness checks CPU, Readiness checks memory",
        "Liveness is for containers, Readiness is for pods"
      ],
      correctAnswer: "Liveness restarts failed containers; Readiness removes pods from service endpoints",
      explanation: `
### Concept: Probe Types and Actions

**Liveness Probe** and **Readiness Probe** serve different purposes and trigger different actions when they fail.

**Liveness Probe:**
- **Purpose**: Detect if container is alive/healthy
- **Action on failure**: **Restart the container**
- **Use case**: Deadlocks, hung processes, corrupted state
- **Question it answers**: "Should this container be restarted?"

**Readiness Probe:**
- **Purpose**: Detect if container is ready to serve traffic
- **Action on failure**: **Remove from Service endpoints** (no restart)
- **Use case**: Warming up, loading data, waiting for dependencies
- **Question it answers**: "Should this pod receive traffic?"

**Key difference in action:**
\`\`\`
Liveness fails → kubelet RESTARTS container
Readiness fails → kube-proxy STOPS sending traffic (pod stays running)
\`\`\`

**Example scenario:**
\`\`\`yaml
readinessProbe:
  httpGet:
    path: /ready  # Returns 200 when cache is loaded
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5

livenessProbe:
  httpGet:
    path: /healthz  # Returns 200 if app is functioning
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
\`\`\`

**Real-world example:**
App needs 30 seconds to load cache:
- **Readiness**: Fails for 30s (no traffic sent), then passes (traffic flows)
- **Liveness**: Always passes (app is healthy, just initializing)

**Why other options are incorrect:**
- They have different purposes and actions
- Both can check any endpoint (not CPU/memory specific)
- Both check containers (pods contain containers)
      `
    },
    {
      id: 30,
      question: "What is a StatefulSet used for in Kubernetes?",
      options: [
        "To manage stateless applications with replicas",
        "To manage stateful applications that require stable network identities and persistent storage",
        "To store application state in memory",
        "To create static IP addresses for pods"
      ],
      correctAnswer: "To manage stateful applications that require stable network identities and persistent storage",
      explanation: `
### Concept: Stateful Applications

**StatefulSet** is a workload resource for managing stateful applications that require stable, unique network identities and persistent storage.

**Key characteristics:**
1. **Stable network identity**: Predictable pod names (app-0, app-1, app-2)
2. **Stable storage**: Each pod gets its own PersistentVolume
3. **Ordered deployment**: Pods created sequentially (0 → 1 → 2)
4. **Ordered termination**: Pods deleted in reverse (2 → 1 → 0)
5. **Ordered updates**: Rolling updates in order

**When to use StatefulSet:**
- **Databases**: MySQL, PostgreSQL, MongoDB
- **Distributed systems**: Kafka, ZooKeeper, etcd
- **Applications needing**: Stable hostnames, ordered startup/shutdown

**StatefulSet vs Deployment:**
\`\`\`
Deployment:
- Random pod names: web-7d8f9-abc12
- Any pod is interchangeable
- Stateless apps (web servers, APIs)

StatefulSet:
- Predictable names: mysql-0, mysql-1, mysql-2
- Each pod has unique identity
- Stateful apps (databases, queues)
\`\`\`

**Example:**
\`\`\`yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    # Pod template
  volumeClaimTemplates:
    # Each pod gets its own PVC
\`\`\`

**Pod naming:**
- mysql-0 (always first to start, last to stop)
- mysql-1 (starts after mysql-0)
- mysql-2 (starts after mysql-1)

**Why other options are incorrect:**
- Stateless apps use Deployments, not StatefulSets
- Doesn't store state in memory (uses persistent volumes)
- Provides stable DNS names, not static IPs
      `
    },
    {
      id: 31,
      question: "What is a Service Mesh?",
      options: [
        "A network of physical servers hosting services",
        "Infrastructure layer that handles service-to-service communication with features like traffic management and security",
        "A type of Kubernetes Service",
        "A mesh network topology for containers"
      ],
      correctAnswer: "Infrastructure layer that handles service-to-service communication with features like traffic management and security",
      explanation: `
### Concept: Service Mesh Architecture

**Service Mesh** is a dedicated infrastructure layer for managing service-to-service communication in microservices architectures. It provides observability, security, and traffic management without changing application code.

**Key features:**
- **Traffic management**: Load balancing, routing, retries, timeouts
- **Security**: mTLS encryption, authentication, authorization
- **Observability**: Distributed tracing, metrics, logging
- **Resilience**: Circuit breaking, fault injection, retries

**How it works:**
\`\`\`
Service A → Sidecar Proxy → Network → Sidecar Proxy → Service B
                ↓                              ↓
          Control Plane ← Telemetry/Policies → Control Plane
\`\`\`

**Architecture components:**
1. **Data Plane**: Sidecar proxies (Envoy) next to each service
2. **Control Plane**: Configuration and policy management

**Popular service meshes:**
- **Istio**: Feature-rich, complex (uses Envoy)
- **Linkerd**: Lightweight, simpler (CNCF graduated)
- **Consul Connect**: From HashiCorp
- **AWS App Mesh**: AWS managed service mesh

**What service mesh provides:**
- **mTLS**: Automatic encryption between services
- **Traffic splitting**: 90% to v1, 10% to v2 (canary deployments)
- **Circuit breaking**: Stop calling failing services
- **Observability**: Built-in metrics and tracing

**When to use:**
- Many microservices (10+ services)
- Need for advanced traffic control
- Security requirements (encryption, auth)
- Complex deployment strategies

**Trade-offs:**
- Adds complexity and latency
- Resource overhead (sidecar proxies)
- Learning curve

**Why other options are incorrect:**
- Not about physical infrastructure
- Different from Kubernetes Service objects
- Not a network topology, but a communication layer
      `
    },
    {
      id: 32,
      question: "What is the primary purpose of Helm in Kubernetes?",
      options: [
        "To monitor Kubernetes clusters",
        "To package, share, and manage Kubernetes applications using charts",
        "To provide security scanning for containers",
        "To manage Kubernetes node resources"
      ],
      correctAnswer: "To package, share, and manage Kubernetes applications using charts",
      explanation: `
### Concept: Package Management

**Helm** is a package manager for Kubernetes that helps you define, install, and upgrade complex Kubernetes applications using reusable packages called Charts.

**Key concepts:**
- **Chart**: Package of pre-configured Kubernetes resources
- **Release**: Instance of a chart running in cluster
- **Repository**: Collection of charts (like npm registry)
- **Values**: Configuration parameters for charts

**What Helm solves:**
\`\`\`
Without Helm:
- 15 separate YAML files
- Manual configuration for each environment
- Difficult to version and share
- Hard to update/rollback

With Helm:
- One chart
- Values files for different environments
- Easy versioning
- Simple install/upgrade/rollback
\`\`\`

**Common Helm commands:**
\`\`\`bash
helm install myapp ./mychart          # Install chart
helm upgrade myapp ./mychart          # Upgrade release
helm rollback myapp 1                 # Rollback to version 1
helm uninstall myapp                  # Remove release
helm list                             # List releases
\`\`\`

**Chart structure:**
\`\`\`
mychart/
  Chart.yaml           # Chart metadata
  values.yaml          # Default configuration
  templates/           # Kubernetes manifests
    deployment.yaml
    service.yaml
    ingress.yaml
\`\`\`

**Benefits:**
- **Reusability**: Share charts via repositories
- **Templating**: Parameterize configurations
- **Version control**: Track application versions
- **Dependency management**: Charts can depend on other charts
- **Easy rollbacks**: Go back to previous versions

**Popular chart repositories:**
- **Artifact Hub**: Public charts (prometheus, nginx, mysql)
- **Bitnami**: Well-maintained application charts
- **Private repos**: For internal applications

**Why other options are incorrect:**
- Monitoring: That's Prometheus/Grafana
- Security scanning: That's Trivy/Snyk
- Node management: That's Kubernetes itself
      `
    },
    {
      id: 33,
      question: "What is the Container Network Interface (CNI)?",
      options: [
        "A user interface for managing containers",
        "A specification for configuring network interfaces in Linux containers",
        "A network monitoring tool for containers",
        "A container registry interface"
      ],
      correctAnswer: "A specification for configuring network interfaces in Linux containers",
      explanation: `
### Concept: Container Networking

**CNI (Container Network Interface)** is a specification and set of libraries for configuring network interfaces in Linux containers. It provides a plugin-based architecture for container networking.

**What CNI does:**
- Creates network interfaces for containers
- Assigns IP addresses to pods
- Sets up routing rules
- Enables pod-to-pod communication
- Provides network isolation

**How CNI works:**
\`\`\`
1. kubelet calls CNI plugin
2. CNI plugin creates network interface
3. Assigns IP from configured range
4. Sets up routes and firewall rules
5. Returns network configuration to kubelet
\`\`\`

**Popular CNI plugins:**
- **Calico**: Network policies, BGP routing (popular choice)
- **Flannel**: Simple overlay network (easy to set up)
- **Weave Net**: Mesh network with encryption
- **Cilium**: eBPF-based, advanced features
- **AWS VPC CNI**: Native AWS networking for EKS
- **Azure CNI**: Native Azure networking for AKS

**CNI responsibilities:**
- **IP Address Management (IPAM)**: Assign IPs to pods
- **Network connectivity**: Enable pod communication
- **Network policies**: Security rules (some plugins)

**Example network requirements:**
\`\`\`
Kubernetes networking model requires:
1. All pods can communicate without NAT
2. All nodes can communicate with all pods
3. Pod sees same IP as others see it

CNI plugins implement these requirements
\`\`\`

**Choosing a CNI:**
- **Calico**: Network policies, performance
- **Flannel**: Simplicity, getting started
- **Cilium**: Advanced features, observability
- **Cloud CNI**: Best integration with cloud provider

**Why other options are incorrect:**
- Not a user interface (it's a specification)
- Not a monitoring tool (it's for networking setup)
- Not related to container registries
      `
    },
    {
      id: 34,
      question: "What is autoscaling in Kubernetes, and what types are available?",
      options: [
        "Only manual scaling by changing replica counts",
        "Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), and Cluster Autoscaler",
        "Only CPU-based scaling",
        "Automatic container image updates"
      ],
      correctAnswer: "Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), and Cluster Autoscaler",
      explanation: `
### Concept: Dynamic Resource Scaling

**Autoscaling** in Kubernetes automatically adjusts resources based on demand. There are three main types, each serving different purposes.

**1. Horizontal Pod Autoscaler (HPA):**
- **Scales**: Number of pod replicas (scale out/in)
- **Based on**: CPU, memory, custom metrics
- **Use case**: Handle variable traffic load
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

**2. Vertical Pod Autoscaler (VPA):**
- **Scales**: CPU and memory requests/limits (scale up/down)
- **Based on**: Historical usage patterns
- **Use case**: Right-size pod resources
- **Note**: Requires pod restart to apply changes

**3. Cluster Autoscaler:**
- **Scales**: Number of nodes in the cluster
- **Based on**: Pending pods that can't be scheduled
- **Use case**: Add nodes when needed, remove when idle
- **Cloud integration**: Works with AWS, GCP, Azure

**How they work together:**
\`\`\`
1. Traffic increases
2. HPA adds more pods
3. Pods can't be scheduled (no node capacity)
4. Cluster Autoscaler adds nodes
5. Pods scheduled on new nodes

6. Traffic decreases
7. HPA removes pods
8. Nodes become underutilized
9. Cluster Autoscaler removes nodes
\`\`\`

**Metrics sources:**
- **Resource metrics**: CPU, memory (metrics-server)
- **Custom metrics**: Application metrics via Prometheus
- **External metrics**: Cloud provider metrics

**Best practices:**
- Set appropriate min/max replicas
- Configure resource requests (required for HPA)
- Use VPA for workloads with variable resource needs
- Monitor autoscaling behavior

**Why other options are incorrect:**
- Manual scaling exists but isn't autoscaling
- Can scale based on many metrics, not just CPU
- Not related to image updates (that's different)
      `
    },
    {
      id: 35,
      question: "What is the purpose of Resource Quotas in Kubernetes?",
      options: [
        "To limit the number of users in a cluster",
        "To limit aggregate resource consumption per namespace",
        "To set CPU and memory limits for individual containers",
        "To control the number of Kubernetes API requests"
      ],
      correctAnswer: "To limit aggregate resource consumption per namespace",
      explanation: `
### Concept: Resource Management and Governance

**Resource Quotas** provide constraints that limit the aggregate resource consumption per namespace, enabling fair resource sharing in multi-tenant clusters.

**What Resource Quotas limit:**
- **Compute resources**: CPU, memory (total across all pods)
- **Storage resources**: PersistentVolumeClaims, storage capacity
- **Object counts**: Pods, Services, ConfigMaps, Secrets, etc.

**Example ResourceQuota:**
\`\`\`yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: development
spec:
  hard:
    requests.cpu: "10"           # Max 10 CPU cores requested
    requests.memory: 20Gi         # Max 20GB memory requested
    limits.cpu: "20"              # Max 20 CPU cores limit
    limits.memory: 40Gi           # Max 40GB memory limit
    persistentvolumeclaims: "5"   # Max 5 PVCs
    pods: "20"                    # Max 20 pods
    services: "10"                # Max 10 services
\`\`\`

**How it works:**
\`\`\`
1. Admin creates ResourceQuota in namespace
2. User tries to create pod
3. Kubernetes checks if quota allows it
4. If within quota → pod created
5. If exceeds quota → request rejected
\`\`\`

**Use cases:**
- **Multi-tenancy**: Prevent one team from using all cluster resources
- **Cost control**: Limit spending in cloud environments
- **Capacity planning**: Ensure fair distribution
- **Environment separation**: Dev gets less than prod

**ResourceQuota vs LimitRange:**
- **ResourceQuota**: Limits **total** resources in namespace
- **LimitRange**: Sets **default/min/max** for individual pods/containers

**Best practices:**
\`\`\`yaml
# Combine with LimitRange for complete control
ResourceQuota: "Namespace can use max 20 cores total"
LimitRange: "Each pod can use 0.5-2 cores"
\`\`\`

**Monitoring quotas:**
\`\`\`bash
kubectl describe resourcequota -n development
# Shows used vs hard limits
\`\`\`

**Why other options are incorrect:**
- User limits are handled by RBAC, not quotas
- Individual container limits are set in pod specs (resources.limits)
- API rate limiting is separate (API priority and fairness)
      `
    },
    {
      id: 36,
      question: "What is a Custom Resource Definition (CRD) in Kubernetes?",
      options: [
        "A custom Docker image for specific use cases",
        "A way to extend Kubernetes API with custom resource types",
        "A custom configuration for existing Kubernetes resources",
        "A security definition for custom roles"
      ],
      correctAnswer: "A way to extend Kubernetes API with custom resource types",
      explanation: `
### Concept: Kubernetes Extensibility

**Custom Resource Definition (CRD)** allows you to extend the Kubernetes API by defining your own custom resource types, treating them as first-class Kubernetes objects.

**What CRDs enable:**
- Define new resource types beyond built-in ones
- Use kubectl to manage custom resources
- Store custom objects in etcd
- Watch and react to custom resources
- Integrate with Kubernetes ecosystem

**How CRDs work:**
\`\`\`yaml
# 1. Define the CRD
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.example.com
spec:
  group: example.com
  versions:
    - name: v1
      served: true
      storage: true
  scope: Namespaced
  names:
    plural: databases
    singular: database
    kind: Database

# 2. Create instances of your custom resource
apiVersion: example.com/v1
kind: Database
metadata:
  name: my-postgres
spec:
  type: postgresql
  version: "14"
  storage: 100Gi
\`\`\`

**Real-world examples:**
- **Prometheus Operator**: ServiceMonitor, PrometheusRule CRDs
- **Cert-Manager**: Certificate, Issuer CRDs
- **Istio**: VirtualService, DestinationRule CRDs
- **ArgoCD**: Application, AppProject CRDs

**CRDs + Operators pattern:**
\`\`\`
CRD defines: "What a Database resource looks like"
Operator (controller) implements: "How to create/manage actual databases"

User creates Database CR → Operator watches → Creates actual DB pods/services
\`\`\`

**Benefits:**
- **Declarative management**: Use YAML like any Kubernetes resource
- **Kubectl integration**: \`kubectl get databases\`
- **RBAC**: Apply standard Kubernetes permissions
- **Ecosystem integration**: Works with GitOps, Helm, etc.

**Use cases:**
- Application-specific resources (databases, message queues)
- Infrastructure resources (load balancers, DNS records)
- Configuration abstractions
- Custom workflows

**CRD vs ConfigMap:**
- **ConfigMap**: Store configuration data
- **CRD**: Define new API resource types with validation and versioning

**Why other options are incorrect:**
- Not related to Docker images
- Not for configuring existing resources (that's annotations/labels)
- Not related to RBAC roles (though RBAC can control access to CRDs)
      `
    },
    {
      id: 400,
      question: "What is the Open Container Initiative (OCI) primarily responsible for?",
      options: [
        "Developing Kubernetes features",
        "Defining industry standards for container formats and runtimes",
        "Managing cloud provider infrastructure",
        "Creating service mesh specifications"
      ],
      correctAnswer: "Defining industry standards for container formats and runtimes",
      explanation: `
### Concept: Container Standards (OCI)
The **Open Container Initiative (OCI)** is an open governance structure for the express purpose of creating open industry standards around container formats and runtimes.

**Two Main Specifications:**
1.  **Image Spec**: Defines how a container image should be built.
2.  **Runtime Spec**: Defines how a container should be executed.

**Why it matters:** It ensures that an image built with one tool (like Docker) can run on any compliant runtime (like containerd or CRI-O).
      `
    },
    {
      id: 401,
      question: "According to the CNCF, what is a key characteristic of cloud-native technologies?",
      options: [
        "They only run on public clouds",
        "They empower organizations to build and run scalable applications in dynamic environments",
        "They require manual scaling and management",
        "They are strictly monolithic in nature"
      ],
      correctAnswer: "They empower organizations to build and run scalable applications in dynamic environments",
      explanation: `
### Concept: Cloud Native Definition
The **CNCF definition** states that cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds.

**Core Pillars:**
- **Containers**: Isolated environments.
- **Service Meshes**: Managing communication.
- **Microservices**: Independent components.
- **Immutable Infrastructure**: Predictable changes.
- **Declarative APIs**: Defining the "what" rather than the "how."
      `
    },
    {
      id: 402,
      question: "Which Kubernetes component acts as the cluster's 'brain' by storing the entire cluster state?",
      options: [
        "kube-apiserver",
        "etcd",
        "kube-scheduler",
        "kube-controller-manager"
      ],
      correctAnswer: "etcd",
      explanation: `
### Concept: Control Plane Architecture
**etcd** is a consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.

**Key Roles:**
- **Source of Truth**: If it's not in etcd, it's not in the cluster.
- **Consistency**: Uses the Raft consensus algorithm.
- **Watch Mechanism**: Allows other components to react to changes in state.
      `
    },
    {
      id: 403,
      question: "Which component is responsible for selecting the best node for a newly created pod?",
      options: [
        "kube-controller-manager",
        "kube-scheduler",
        "kube-proxy",
        "kubelet"
      ],
      correctAnswer: "kube-scheduler",
      explanation: `
### Concept: Scheduling
The **kube-scheduler** is a control plane process which assigns Pods to Nodes.

**Selection Process:**
1.  **Filtering**: Finds nodes that meet pod requirements (CPU, RAM, Taints/Tolerations).
2.  **Scoring**: Ranks the filtered nodes to pick the best fit.
3.  **Binding**: Notifies the API server of the decision.
      `
    },
    {
      id: 404,
      question: "Which component runs on every node and ensures that the containers described in PodSpecs are running and healthy?",
      options: [
        "kube-proxy",
        "containerd",
        "kubelet",
        "kube-apiserver"
      ],
      correctAnswer: "kubelet",
      explanation: `
### Concept: Node Components
The **kubelet** is an agent that runs on each node in the cluster. It does not manage containers which were not created by Kubernetes.

**Main Tasks:**
- **Pod Lifecycle**: Starts, stops, and monitors containers.
- **Reporting**: Tells the control plane about node and pod status.
- **Health Checks**: Executes Liveness and Readiness probes.
      `
    },
    {
      id: 405,
      question: "What is the primary role of kube-proxy in a Kubernetes cluster?",
      options: [
        "To manage storage volumes",
        "To maintain network rules on nodes and allow communication to pods",
        "To schedule pods to nodes",
        "To authenticate users"
      ],
      correctAnswer: "To maintain network rules on nodes and allow communication to pods",
      explanation: `
### Concept: Kubernetes Networking
**kube-proxy** is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

**Functions:**
- **Load Balancing**: Distributes traffic to pods behind a Service.
- **Rule Management**: Uses iptables, IPVS, or nftables to handle routing.
- **Connection Handling**: Manages network connections from inside or outside the cluster.
      `
    },
    {
      id: 406,
      question: "Which Kubernetes resource is used to run a background task on every single node of the cluster?",
      options: [
        "Deployment",
        "StatefulSet",
        "DaemonSet",
        "ReplicaSet"
      ],
      correctAnswer: "DaemonSet",
      explanation: `
### Concept: Workload Controllers
A **DaemonSet** ensures that all (or some) Nodes run a copy of a Pod.

**Common Use Cases:**
- **Logging**: Running fluentd or logstash on every node.
- **Monitoring**: Running prometheus node-exporter on every node.
- **Networking**: Running a CNI plugin or kube-proxy on every node.
      `
    },
    {
      id: 407,
      question: "What is the difference between a Job and a CronJob?",
      options: [
        "Jobs are for web servers, CronJobs are for databases",
        "Jobs run once to completion, while CronJobs run on a schedule",
        "Jobs run on nodes, CronJobs run in the control plane",
        "There is no difference"
      ],
      correctAnswer: "Jobs run once to completion, while CronJobs run on a schedule",
      explanation: `
### Concept: Batch Workloads
- **Job**: Creates one or more Pods and ensures that a specified number of them successfully terminate (e.g., a data migration or backup).
- **CronJob**: Manages Jobs based on a time-based schedule (CRON format). Think of it as a wrapper around the Job object.
      `
    },
    {
      id: 408,
      question: "Which tool is commonly used to automate the deployment of Kubernetes applications using a Git-based workflow?",
      options: [
        "ArgoCD",
        "Jenkins",
        "Docker Desktop",
        "Postman"
      ],
      correctAnswer: "ArgoCD",
      explanation: `
### Concept: GitOps
**ArgoCD** is a declarative, GitOps continuous delivery tool for Kubernetes.

**How it works:**
1.  **Git as Source of Truth**: Application state is stored in Git.
2.  **Pull-based**: ArgoCD watches the Git repo and automatically syncs changes to the cluster.
3.  **Drift Detection**: It can detect and fix differences between Git and the live cluster state.
      `
    },
    {
      id: 409,
      question: "What does the 'Serverless' model primarily focus on for developers?",
      options: [
        "Managing the underline physical hardware",
        "Writing code/functions without worrying about server provisioning or scaling",
        "Running applications without any servers anywhere",
        "Using only local storage"
      ],
      correctAnswer: "Writing code/functions without worrying about server provisioning or scaling",
      explanation: `
### Concept: Serverless Computing
The **Serverless** model (also known as FaaS - Function as a Service) abstracts away the server management layer.

**Key Traits:**
- **No Provisioning**: Developers focus on code, not infrastructure.
- **Auto-scaling**: Scales automatically based on events (often to zero).
- **Pay-per-use**: Costs are based on actual execution time and resources used.
      `
    },
    {
      id: 410,
      question: "In the context of Observability, what are 'Distributed Traces' used for?",
      options: [
        "Measuring CPU usage",
        "Tracking a single request as it moves through multiple microservices",
        "Counting the number of errors in logs",
        "Mapping physical hardware addresses"
      ],
      correctAnswer: "Tracking a single request as it moves through multiple microservices",
      explanation: `
### Concept: Observability (Tracing)
**Distributed Tracing** allows you to see the path a request takes through a complex microservices architecture.

**Benefits:**
- **Pinpointing Latency**: Finding which service is slow.
- **Dependency Mapping**: Understanding how services interact.
- **Error Analysis**: Seeing where in the chain a request failed.
- **Project Examples**: Jaeger, Zipkin, Honeycomb.
      `
    },
    {
      id: 411,
      question: "What is the primary function of a Service Mesh Control Plane?",
      options: [
        "To forward network packets between containers",
        "To manage and configure the sidecar proxies (Data Plane)",
        "To store application data in a database",
        "To schedule pods onto nodes"
      ],
      correctAnswer: "To manage and configure the sidecar proxies (Data Plane)",
      explanation: `
### Concept: Service Mesh Architecture
A Service Mesh is split into two parts:
1.  **Data Plane**: Sidecar proxies (like Envoy) that handle actual traffic.
2.  **Control Plane**: The central brain that distributes policies, certificates, and configurations to those proxies.

**Examples**: Istio's 'istiod' or Linkerd's control plane components.
      `
    },
    {
      id: 412,
      question: "Which security concept ensures that a pod only has the minimum permissions necessary to perform its job?",
      options: [
        "Role-Based Access Control (RBAC)",
        "Least Privilege",
        "Network Segmentation",
        "Encryption at rest"
      ],
      correctAnswer: "Least Privilege",
      explanation: `
### Concept: Security Best Practices
The **Principle of Least Privilege** is the practice of limiting access rights for users, accounts, and computing processes to only those resources which are absolutely necessary.

**In Kubernetes:**
- Use **RBAC** to restrict API access.
- Use **Network Policies** to restrict network traffic.
- Use **SecurityContext** to run containers as non-root.
      `
    },
    {
      id: 413,
      question: "What is a 'StorageClass' in Kubernetes primarily used for?",
      options: [
        "Defining the type of storage to be dynamically provisioned",
        "Manually mounting a local disk to a pod",
        "Backing up etcd data",
        "Managing cluster secrets"
      ],
      correctAnswer: "Defining the type of storage to be dynamically provisioned",
      explanation: `
### Concept: Dynamic Storage Provisioning
A **StorageClass** provides a way for administrators to describe the \"classes\" of storage they offer.

**How it works:**
1.  **Admin** creates a StorageClass (e.g., \"fast-ssd\").
2.  **Developer** creates a PersistentVolumeClaim (PVC) referencing that class.
3.  **Kubernetes** automatically creates the actual disk (PV) based on the class definition.
      `
    },
    {
      id: 414,
      question: "Which tool is a vendor-neutral, open-standard framework for collecting observability telemetry (logs, metrics, and traces)?",
      options: [
        "Prometheus",
        "OpenTelemetry",
        "Grafana",
        "Fluentd"
      ],
      correctAnswer: "OpenTelemetry",
      explanation: `
### Concept: Observability Standardization
**OpenTelemetry (OTel)** is a CNCF project that provides a standardized set of APIs, SDKs, and tools to ingest, transform, and send telemetry data to an observability backend.

**Why it's important:** It prevents vendor lock-in, as you can switch backends (like switching from Jaeger to Datadog) without changing your application code.
      `
    },
    {
      id: 415,
      question: "What is the purpose of the 'helm install' command?",
      options: [
        "To create a new Kubernetes cluster",
        "To deploy a Helm Chart into the cluster as a 'Release'",
        "To update a container image",
        "To delete a namespace"
      ],
      correctAnswer: "To deploy a Helm Chart into the cluster as a 'Release'",
      explanation: `
### Concept: Helm (Package Management)
**Helm** uses a packaging format called charts.
- **Chart**: A bundle of information necessary to create an instance of a Kubernetes application.
- **Release**: A running instance of a chart in a cluster.

The \`helm install\` command takes a chart and creates a new release.
      `
    },
    {
      id: 416,
      question: "In Kubernetes, what is a 'Static Pod'?",
      options: [
        "A pod that never changes its IP address",
        "A pod managed directly by the kubelet on a specific node, bypassing the API server",
        "A pod that doesn't run any containers",
        "A pod used for permanent storage"
      ],
      correctAnswer: "A pod managed directly by the kubelet on a specific node, bypassing the API server",
      explanation: `
### Concept: Specialized Pods
**Static Pods** are managed directly by the kubelet daemon on a specific node, without the API server observing them.

**Characteristics:**
- **No Controller**: Not managed by Deployments or DaemonSets.
- **File-based**: Kubelet watches a directory on the host (e.g., \`/etc/kubernetes/manifests\`).
- **Use Case**: Often used to run control plane components (API server, Scheduler) on the master nodes before the cluster is fully up.
      `
    },
    {
      id: 417,
      question: "Which of the following is an example of an L7 (Application Layer) Service Mesh feature?",
      options: [
        "Port-based routing",
        "IP address filtering",
        "HTTP Header-based traffic splitting",
        "TCP connection limiting"
      ],
      correctAnswer: "HTTP Header-based traffic splitting",
      explanation: `
### Concept: Service Mesh Capabilities
Service Meshes operate at the **Application Layer (L7)**, allowing them to understand protocol-specific data (HTTP, gRPC).

**L7 Features:**
- **Canary Deployments**: Route 10% of users with header \`version: beta\` to a new service.
- **Retries/Timeouts**: Automatically retry failed HTTP calls.
- **Traces**: Inject headers for distributed tracing.
- **mTLS**: Encrypt communication based on service identity.
      `
    },
    {
      id: 418,
      question: "What is the role of an 'Ingress Controller'?",
      options: [
        "To define routing rules only",
        "To act as a load balancer and implement the rules defined in Ingress resources",
        "To manage pod-to-pod communication",
        "To schedule containers"
      ],
      correctAnswer: "To act as a load balancer and implement the rules defined in Ingress resources",
      explanation: `
### Concept: External Access
The **Ingress resource** is just a configuration object (a piece of metadata). To make it work, you need an **Ingress Controller**.

**How it works:**
1.  The controller watches the API server for Ingress objects.
2.  It reconfigures a load balancer (like NGINX, HAProxy, or a Cloud LB) to match those rules.
3.  Traffic hits the LB and gets routed to the correct Services.
      `
    },
    {
      id: 419,
      question: "Which CNCF project is a graduated tool for cloud-native storage, providing a unified interface for multiple storage backends?",
      options: [
        "Rook",
        "Longhorn",
        "Etcd",
        "Velero"
      ],
      correctAnswer: "Rook",
      explanation: `
### Concept: Cloud Native Storage
**Rook** is an open-source cloud-native storage orchestrator for Kubernetes.

**What it does:**
- Turns storage software (like **Ceph**) into self-managing, self-scaling, self-healing storage services.
- Automates the tasks of a storage administrator: deployment, bootstrapping, configuration, provisioning, scaling, and monitoring.
      `
    },
    {
      id: 420,
      question: "What does 'Immutable Infrastructure' mean in a cloud-native context?",
      options: [
        "Updating servers by logging in and changing config files",
        "Infrastructure that cannot be changed once deployed; updates involve replacing the entire component",
        "Infrastructure that never needs updates",
        "Hardware that is water-proof and fire-proof"
      ],
      correctAnswer: "Infrastructure that cannot be changed once deployed; updates involve replacing the entire component",
      explanation: `
### Concept: Infrastructure Patterns
**Immutable Infrastructure** is the practice of replacing components rather than modifying them in place.

**Benefits:**
- **Consistency**: No configuration drift (all instances are identical).
- **Predictability**: You know exactly what is running.
- **Rollbacks**: Reverting to a previous version is as simple as re-deploying the old image.
- **Tools**: Containers and Terraform are core to this pattern.
      `
    },
    {
      id: 421,
      question: "What is the purpose of 'Pod Disruption Budgets' (PDBs)?",
      options: [
        "To limit the amount of money spent on pods",
        "To ensure a minimum number of pods remain available during voluntary disruptions (like node maintenance)",
        "To stop pods from consuming too much CPU",
        "To automate the deletion of old pods"
      ],
      correctAnswer: "To ensure a minimum number of pods remain available during voluntary disruptions (like node maintenance)",
      explanation: `
### Concept: High Availability
A **Pod Disruption Budget (PDB)** limits the number of Pods of a replicated application that are down simultaneously from voluntary disruptions.

**Voluntary Disruptions:**
- Draining a node for maintenance.
- Cluster autoscaling.
- Deleting a deployment.

**Involuntary Disruptions** (PDBs cannot prevent these):
- Hardware failure.
- Kernel panic.
- Network split.
      `
    },
    {
      id: 422,
      question: "In Kubernetes, what is the role of a 'Custom Controller'?",
      options: [
        "To provide a custom UI for the cluster",
        "To watch Custom Resources (CRDs) and implement the logic to move the current state to the desired state",
        "To manage user authentication",
        "To replace the default scheduler"
      ],
      correctAnswer: "To watch Custom Resources (CRDs) and implement the logic to move the current state to the desired state",
      explanation: `
### Concept: The Operator Pattern
The **Operator Pattern** combines Custom Resources (CRDs) and Custom Controllers.

**The Loop:**
1.  **Observe**: Check the state of the Custom Resource.
2.  **Analyze**: Determine the difference between desired state (YAML) and actual state.
3.  **Act**: Perform actions (create pods, configure DBs, etc.) to match the desired state.
      `
    },
    {
      id: 423,
      question: "Which of the following describes 'Loose Coupling' as a microservices best practice?",
      options: [
        "Services should share the same database for performance",
        "Services should be independent and communicate through well-defined APIs",
        "Services should be written in the same programming language",
        "Services should all run on a single large server"
      ],
      correctAnswer: "Services should be independent and communicate through well-defined APIs",
      explanation: `
### Concept: Microservices Design
**Loose Coupling** is a design goal where each service is independent of others.

**Key results:**
- **Independent Scaling**: Scale only the checkout service, not the whole site.
- **Fault Tolerance**: If the search service fails, the checkout can still work.
- **Agility**: Teams can use different languages or frameworks (Polyglot).
- **Technology Choice**: One service can use MongoDB while another uses MySQL.
      `
    },
    {
      id: 424,
      question: "What is 'Polyglot Persistence'?",
      options: [
        "Using multiple languages for documentation",
        "Using different database technologies based on the specific needs of each microservice",
        "Storing data in multiple geographical regions",
        "Backing up data to multiple types of media"
      ],
      correctAnswer: "Using different database technologies based on the specific needs of each microservice",
      explanation: `
### Concept: Modern Data Architecture
**Polyglot Persistence** is the idea that different data storage technologies are best suited for different data tasks.

**Examples in one application:**
- **Product Catalog**: Document store (MongoDB).
- **Inventory/Transactions**: Relational database (PostgreSQL).
- **Search**: Search engine (Elasticsearch).
- **Session Cache**: Key-value store (Redis).
      `
    },
    {
      id: 425,
      question: "What is the function of the CNCF 'Sandbox' stage?",
      options: [
        "For projects that are ready for mass production",
        "For early-stage projects that need a neutral home and are being experimented with",
        "For projects that are being retired",
        "For projects that are fully proprietary"
      ],
      correctAnswer: "For early-stage projects that need a neutral home and are being experimented with",
      explanation: `
### Concept: CNCF Project Stages
1.  **Sandbox**: Early-stage, experimental, minimal requirements.
2.  **Incubating**: Used in production by several companies, healthy contributor base.
3.  **Graduated**: Widely adopted, clear governance, security audit complete (e.g., Kubernetes, Prometheus, Envoy).
      `
    },
    {
      id: 426,
      question: "Which tool is commonly used for distributed tracing in cloud-native environments?",
      options: [
        "Prometheus",
        "Jaeger",
        "Logstash",
        "Kibana"
      ],
      correctAnswer: "Jaeger",
      explanation: `
### Concept: Tracing Tools
**Jaeger** is an open-source, end-to-end distributed tracing tool.

**Features:**
- Distributed context propagation.
- Distributed transaction monitoring.
- Root cause analysis.
- Service dependency analysis.
      `
    },
    {
      id: 427,
      question: "What is the primary benefit of 'Declarative Configuration' in Kubernetes?",
      options: [
        "It's faster to type than imperative commands",
        "You define the desired state, and Kubernetes works to maintain it automatically",
        "It doesn't require any YAML files",
        "It makes pods run faster"
      ],
      correctAnswer: "You define the desired state, and Kubernetes works to maintain it automatically",
      explanation: `
### Concept: Declarative vs Imperative
- **Imperative**: \"Run these three containers now.\" ( kubectl run ... )
- **Declarative**: \"I want three containers to be running at all times.\" ( apply -f deployment.yaml )

**The Power of Declarative:**
If a node crashes and a pod dies, Kubernetes notices the actual state (2 pods) doesn't match the desired state (3 pods) and automatically starts a new one to self-heal.
      `
    },
    {
      id: 428,
      question: "Which component of a Kubernetes node is responsible for managing the container lifecycle?",
      options: [
        "kube-proxy",
        "the container runtime (e.g., containerd)",
        "kubelet",
        "the cloud provider"
      ],
      correctAnswer: "the container runtime (e.g., containerd)",
      explanation: `
### Concept: Container Runtimes
While the **kubelet** is the architect, the **container runtime** is the actual construction worker.

**Responsibilities:**
- Pulling images from a registry.
- Unpacking images.
- Creating the isolated environment (namespaces/cgroups).
- Starting and stopping the container processes.
      `
    },
    {
      id: 429,
      question: "What does 'Observability' provide that 'Monitoring' traditionally does not?",
      options: [
        "More graphs and dashboards",
        "Deep insights into 'unknown unknowns' and complex system behaviors",
        "Alerts when a server goes down",
        "A way to count the number of users"
      ],
      correctAnswer: "Deep insights into 'unknown unknowns' and complex system behaviors",
      explanation: `
### Concept: Monitoring vs Observability
- Monitoring: Tells you *what* is happening (CPU is 90%, Server is down). It handles \"known unknowns.\"
- Observability: Tells you *why* it's happening by exploring the internal state of a system based on its outputs. It handles \"unknown unknowns.\"

**Observability requires**: Logs, Metrics, and Traces (The Three Pillars) to be correlated.
      `
    },
    {
      id: 430,
      question: "Which component of the Kubernetes Control Plane is responsible for maintaining the state of resources like Deployments and Services through various reconciliation loops?",
      options: [
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager",
        "etcd"
      ],
      correctAnswer: "kube-controller-manager",
      explanation: `
### Concept: Control Plane Components
The **kube-controller-manager** runs various controllers that handle the background synchronization of the cluster.

**Key Controllers:**
- **Deployment Controller**: Manages the lifecycle of ReplicaSets and Pods.
- **Node Controller**: Monitors node health and status.
- **Service Account Controller**: Creates default accounts for new namespaces.
- **EndpointSlice Controller**: Populates network endpoints for services.

**Why other options are incorrect:**
- **kube-apiserver**: Front-end for the control plane; handles validation and persistence.
- **kube-scheduler**: Only responsible for placing pods on nodes.
- **etcd**: The database that stores the state, but doesn't perform the logic to maintain it.
      `
    },
    {
      id: 431,
      question: "In the context of Distributed Tracing, what is the primary purpose of 'Context Propagation'?",
      options: [
        "To reduce the storage size of trace data",
        "To pass trace IDs and metadata across service boundaries and protocols",
        "To encrypt sensitive data within a trace span",
        "To automatically generate logs when a trace fails"
      ],
      correctAnswer: "To pass trace IDs and metadata across service boundaries and protocols",
      explanation: `
### Concept: Observability (Tracing)
**Context Propagation** is the mechanism that allows a single request's identity to be maintained as it travels through a distributed system.

- **Trace ID**: A unique identifier for the entire request path.
- **Span ID**: Identifies individual operations within a service.
- **Baggage**: User-defined key-value pairs passed across services.
- **Implementation**: Usually handled by injecting headers (like W3C Trace Context) into HTTP/gRPC requests.

**High Difficulty Note**: Without context propagation, you would have disconnected "spans" from different services and no way to correlate them into a single journey.
      `
    },
    {
      id: 432,
      question: "Which Service Mesh feature allows the platform to intercept and manage traffic without requiring any changes to the application's source code?",
      options: [
        "In-cluster load balancing",
        "Sidecar Proxy Injection",
        "Mutual TLS (mTLS)",
        "Service Discovery"
      ],
      correctAnswer: "Sidecar Proxy Injection",
      explanation: `
### Concept: Service Mesh Data Plane
**Sidecar Proxy Injection** (using proxies like Envoy) is the fundamental pattern that enables service mesh features transparently.

- **Traffic Interception**: The sidecar uses IP tables to redirect all incoming and outgoing traffic through the proxy.
- **Language Independence**: Since the proxy is a separate process, the mesh works with any programming language.
- **Decoupling**: Security (mTLS) and Traffic Management (retries) are offloaded from the app developer to the platform.
      `
    },
    {
      id: 433,
      question: "What is the specific role of the Container Runtime Interface (CRI) in a Kubernetes cluster?",
      options: [
        "To provide a GUI for managing containers",
        "To create a standardized API for the kubelet to communicate with different container runtimes",
        "To speed up the pulling of large container images",
        "To replace Docker with a more secure alternative"
      ],
      correctAnswer: "To create a standardized API for the kubelet to communicate with different container runtimes",
      explanation: `
### Concept: Kubernetes Architecture (Interfaces)
The **CRI** is the plugin interface which enables the kubelet to use a wide variety of container runtimes, without the need to recompile the cluster.

- **Standardization**: Allows runtimes like **containerd**, **CRI-O**, and **Mirantis Container Runtime** to be swapped easily.
- **Components**: Consists of a RuntimeService (to manage pods/containers) and an ImageService (to manage images).
- **History**: Introduced to move away from the "hardcoded" Docker dependency in early Kubernetes versions.
      `
    },
    {
      id: 434,
      question: "In a GitOps workflow using a tool like ArgoCD, how is 'Configuration Drift' typically managed?",
      options: [
        "The developer manually logs into the cluster to fix the drift",
        "A webhook triggers a Slack alert for the admin to take action",
        "The controller continuously reconciles the live state to match the desired state in Git",
        "The cluster automatically shuts down if drift is detected"
      ],
      correctAnswer: "The controller continuously reconciles the live state to match the desired state in Git",
      explanation: `
### Concept: GitOps and Drift
**Configuration Drift** occurs when someone manually changes a resource in the cluster (e.g., using 'kubectl edit'), making it different from the version in Git.

- **Reconciliation Loop**: GitOps tools use a "pull" model where they watch Git for changes AND watch the cluster for drift.
- **Self-Healing**: If drift is detected, the tool can automatically overwrite the manual change with the "truth" from Git.
- **Source of Truth**: Git is always the single source of truth for the entire infrastructure state.
      `
    },
    {
      id: 435,
      question: "During the Kubernetes scheduling process, what is the difference between 'Filtering' and 'Scoring'?",
      options: [
        "Filtering checks for disk space; Scoring checks for CPU",
        "Filtering removes nodes that don't meet requirements; Scoring ranks the remaining nodes",
        "Filtering is for Pods; Scoring is for Nodes",
        "Filtering happens after a pod is scheduled; Scoring happens before"
      ],
      correctAnswer: "Filtering removes nodes that don't meet requirements; Scoring ranks the remaining nodes",
      explanation: `
### Concept: Scheduling Process
The **kube-scheduler** selects the best node for a pod in two main phases:

1.  **Filtering (Predicates)**: Finds the set of Nodes where it's even *possible* to schedule the Pod (checking taints, resource limits, node selectors).
2.  **Scoring (Priorities)**: Ranks the nodes that survived filtering to find the *best* fit (e.g., picking nodes balanced across zones, or nodes with the most free resources).

**Note**: If no nodes survive the filtering phase, the pod remains in 'Pending' state.
      `
    },
    {
      id: 436,
      question: "What is the primary motivation for introducing the Container Storage Interface (CSI) in cloud-native ecosystems?",
      options: [
        "To make cloud storage cheaper",
        "To provide a standard interface for storage vendors to write plugins that work across different orchestrators (K8s, Mesos, etc.)",
        "To allow containers to share the same local disk",
        "To encrypt data automatically at the storage layer"
      ],
      correctAnswer: "To provide a standard interface for storage vendors to write plugins that work across different orchestrators (K8s, Mesos, etc.)",
      explanation: `
### Concept: Storage (Interfaces)
The **CSI** allows storage providers (like AWS, NetApp, or Portworx) to write a single driver that works across all OCI-compliant orchestrators.

- **Out-of-Tree**: It allowed Kubernetes to remove "in-tree" storage code, meaning the K8s core doesn't need to be updated every time a storage vendor releases a feature.
- **Flexibility**: Enables dynamic provisioning, snapshots, and resizing across various hardware and cloud backends.
      `
    },
    {
      id: 437,
      question: "According to the CNCF definition, why is 'Immutable Infrastructure' considered a core pillar of cloud-native computing?",
      options: [
        "Because hardware doesn't change once it's installed in a data center",
        "To ensure that changes are predictable, repeatable, and easily reversible",
        "To prevent hackers from changing the system configuration",
        "Because it makes the system run faster than mutable infrastructure"
      ],
      correctAnswer: "To ensure that changes are predictable, repeatable, and easily reversible",
      explanation: `
### Concept: Cloud Native Definition
**Immutable Infrastructure** means that instead of patching or configuring existing servers, you replace them with a new version built from a common image.

- **Predictability**: You know exactly what version of the OS and app is running because the image was tested in CI/CD.
- **Consistency**: Eliminates "Configuration Drift" across multiple servers.
- **Recovery**: If a deployment fails, you simply roll back to the previously known-good "immutable" image.
      `
    },
    {
      id: 438,
      question: "Which security mechanism in Linux (used by Kubernetes) restricts the available system calls (syscalls) a process can make to the host kernel?",
      options: [
        "AppArmor",
        "Seccomp",
        "RBAC",
        "Network Policies"
      ],
      correctAnswer: "Seccomp",
      explanation: `
### Concept: Runtime Security
**Seccomp (Secure Computing Mode)** is a Linux kernel feature that acts as a sandbox for processes, restricting their ability to use syscalls.

- **Attack Surface**: Most vulnerabilities require specific syscalls. Blocking unnecessary ones (like 'mount' or 'reboot') dramatically reduces the risk.
- **Kubernetes Usage**: You can apply a seccomp profile to a pod or container via the 'securityContext'.
- **Runtime Default**: Many clusters now use the 'RuntimeDefault' profile for better baseline security.
      `
    },
    {
      id: 439,
      question: "What is the fundamental difference between Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA) in Kubernetes?",
      options: [
        "HPA scales nodes; VPA scales pods",
        "HPA increases the number of pod replicas; VPA increases the CPU/RAM allocated to existing pods",
        "HPA is for cloud; VPA is for on-premise",
        "HPA is for web servers; VPA is for databases"
      ],
      correctAnswer: "HPA increases the number of pod replicas; VPA increases the CPU/RAM allocated to existing pods",
      explanation: `
### Concept: Autoscaling
The **CNCF definition** emphasizes scalability, resilience, and manageability in dynamic cloud environments.

**Core Techniques:**
- **Containers**: Isolated environments for applications.
- **Service Meshes**: Managing communication between services.
- **Microservices**: Breaking apps into small, independent parts.
- **Immutable Infrastructure**: Replacing servers instead of patching them.
- **Declarative APIs**: Defining the 'what' instead of the 'how'.
      `
    },
    {
      id: 441,
      question: "What is the primary role of the 'kube-scheduler' in a Kubernetes cluster?",
      options: [
        "To manage the lifecycle of containers on a node",
        "To decide which node a newly created or unscheduled pod should run on",
        "To provide an API for users to interact with the cluster",
        "To store the cluster state and configuration"
      ],
      correctAnswer: "To decide which node a newly created or unscheduled pod should run on",
      explanation: `
### Concept: Control Plane Components
The **kube-scheduler** watches for newly created Pods that have no Node assigned and selects a Node for them to run on.

**Selection Factors:**
- **Individual and collective resource requirements**: CPU, Memory, Disk.
- **Hardware/Software/Policy constraints**: Taints, Tolerations, NodeSelectors.
- **Affinity and anti-affinity specifications**.
- **Data locality**: Running pods near the data they need.
      `
    },
    {
      id: 442,
      question: "Which Kubernetes resource is used to provide an IP address and a single DNS name for a set of Pods, enabling basic load balancing?",
      options: [
        "Deployment",
        "ConfigMap",
        "Service",
        "Ingress"
      ],
      correctAnswer: "Service",
      explanation: `
### Concept: Kubernetes Networking
A **Service** is an abstraction which defines a logical set of Pods and a policy by which to access them.

**Common Types:**
- **ClusterIP**: Exposes the Service on a cluster-internal IP (Default).
- **NodePort**: Exposes the Service on each Node's IP at a static port.
- **LoadBalancer**: Exposes the Service externally using a cloud provider's load balancer.
- **ExternalName**: Maps a Service to a DNS name.
      `
    },
    {
      id: 443,
      question: "What is the purpose of a 'Readiness Probe' in Kubernetes?",
      options: [
        "To check if the container is running and if it should be restarted",
        "To check if the application in the container is ready to accept traffic",
        "To check if the node has enough resources for the container",
        "To check if the container image has security vulnerabilities"
      ],
      correctAnswer: "To check if the application in the container is ready to accept traffic",
      explanation: `
### Concept: Health Checks
Kubernetes uses three types of probes:
1.  **Liveness Probe**: Determines if a container needs to be restarted (e.g., app is stuck in a loop).
2.  **Readiness Probe**: Determines if a container should receive traffic. If it fails, the pod is removed from Service endpoints.
3.  **Startup Probe**: Disables liveness and readiness checks until the app has finished starting up.
      `
    },
    {
      id: 444,
      question: "In the context of 'Serverless' computing, what does 'Scale to Zero' mean?",
      options: [
        "Deleting the application when it has too many errors",
        "Reducing the infrastructure cost to zero when there is no incoming traffic",
        "A bug that causes all pods to crash",
        "Limiting the application to only run on one CPU core"
      ],
      correctAnswer: "Reducing the infrastructure cost to zero when there is no incoming traffic",
      explanation: `
### Concept: Serverless Computing
**Scale to Zero** is a key benefit of serverless platforms (like Knative). 

- When no requests are being processed, no active containers/instances are running.
- This results in zero resource billing during idle times.
- The platform automatically spins up an instance as soon as a new request arrives (potentially causing a "cold start").
      `
    },
    {
      id: 445,
      question: "Which component is responsible for implementing the 'Service' networking logic on each node (e.g., managing iptables or IPVS)?",
      options: [
        "kube-apiserver",
        "kube-controller-manager",
        "kube-proxy",
        "containerd"
      ],
      correctAnswer: "kube-proxy",
      explanation: `
### Concept: Node Components
**kube-proxy** is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

**Modes:**
- **iptables**: Legacy mode, uses Linux iptables rules.
- **IPVS**: Higher performance, better load-balancing algorithms.
- **userspace**: Very old, slowest mode.
      `
    },
    {
      id: 446,
      question: "What is 'Prometheus' primarily used for in the cloud-native ecosystem?",
      options: [
        "Distributed tracing",
        "Log aggregation and analysis",
        "Metric collection and alerting",
        "Container runtime management"
      ],
      correctAnswer: "Metric collection and alerting",
      explanation: `
### Concept: Cloud Native Observability
**Prometheus** is a leading monitoring tool that collects data from targets as time-series metrics.

- **Pull Model**: Prometheus scrapes metrics from applications/exporters via HTTP.
- **PromQL**: A powerful query language for slicing and dicing metric data.
- **AlertManager**: Handles alerts based on defined metric thresholds.
      `
    },
    {
      id: 447,
      question: "What is the role of a 'Sidecar' container in a Pod?",
      options: [
        "To replace the primary application container",
        "To run a helper process that supports the main application (e.g., logging, proxying, caching)",
        "To increase the storage capacity of the pod",
        "To provide a backup image in case the main one fails"
      ],
      correctAnswer: "To run a helper process that supports the main application (e.g., logging, proxying, caching)",
      explanation: `
### Concept: Pod Patterns
The **Sidecar pattern** involves running a second container alongside the main one to extend or enhance its functionality without modifying its code.

**Common use cases:**
- **Proxying**: Envoy as a sidecar in a Service Mesh.
- **Logging**: A log collector like Fluent Bit.
- **Syncing**: A process that pulls files from Git.
      `
    },
    {
      id: 448,
      question: "Which of the following describes 'Horizontal Scaling'?",
      options: [
        "Adding more CPU and RAM to an existing server",
        "Adding more instances (replicas) of an application or server",
        "Reducing the number of users on a system",
        "Moving data from a hard drive to an SSD"
      ],
      correctAnswer: "Adding more instances (replicas) of an application or server",
      explanation: `
### Concept: Scalability
- **Horizontal Scaling (Scaling Out)**: Adding more nodes/pods. This is the preferred method for cloud-native applications as it provides better fault tolerance.
- **Vertical Scaling (Scaling Up)**: Increasing the resources of a single machine. It has a physical limit and creates a single point of failure.
      `
    },
    {
      id: 449,
      question: "What is 'Helm' in the Kubernetes ecosystem?",
      options: [
        "A container runtime that replaces Docker",
        "A package manager for Kubernetes applications that uses 'Charts'",
        "A tool for debugging network latency",
        "The security engine for the control plane"
      ],
      correctAnswer: "A package manager for Kubernetes applications that uses 'Charts'",
      explanation: `
### Concept: Application Delivery
**Helm** simplifies the deployment of complex applications by grouping multiple YAML manifests into a single reusable package called a **Chart**.

- **Templates**: Allows parameterized YAML files.
- **Release Management**: Easy rollback to previous versions of a deployment.
- **Repository**: Shareable collections of charts.
      `
    },
    {
      id: 450,
      question: "What is 'GITOPS'?",
      options: [
        "A branding term for working with Git",
        "Using Git as the single source of truth for declarative infrastructure and applications",
        "A way to write code that only works on GitHub",
        "A manual process for managing server configuration"
      ],
      correctAnswer: "Using Git as the single source of truth for declarative infrastructure and applications",
      explanation: `
### Concept: Modern CD
**GitOps** is an operational framework that takes DevOps best practices used for application development (version control, collaboration, compliance, CI/CD) and applies them to infrastructure automation.

**Key principles:**
1.  **Declarative**: The state is described in Git.
2.  **Versioned & Immutable**: Every change is a commit.
3.  **Pulled Automatically**: Tools like ArgoCD pull changes to the cluster.
4.  **Continuously Reconciled**: Discrepancies are automatically corrected.
      `
    },
    {
      id: 451,
      question: "What is 'Container Orchestration'?",
      options: [
        "Writing a script to start a single container",
        "The automation of lifecycle management for containers, including deployment, scaling, and networking",
        "Designing the UI for a Docker management tool",
        "Purchasing servers from a cloud provider"
      ],
      correctAnswer: "The automation of lifecycle management for containers, including deployment, scaling, and networking",
      explanation: `
### Concept: Orchestration
While tools like Docker manage individual containers, **Orchestrators** (like Kubernetes) manage the entire system of containers across a cluster of machines.

**Tasks include:**
- Load balancing.
- Self-healing (restarting failed containers).
- Dynamic scheduling.
- Resource allocation.
      `
    },
    {
      id: 452,
      question: "In cloud-native observability, what are the 'Three Pillars'?",
      options: [
        "CPU, Memory, and Disk",
        "Logs, Metrics, and Traces",
        "Nodes, Pods, and Services",
        "Docker, Kubernetes, and Helm"
      ],
      correctAnswer: "Logs, Metrics, and Traces",
      explanation: `
### Concept: Observability Pillars
1.  **Metrics**: Numeric data measured over time (e.g., CPU usage, Request count).
2.  **Logs**: Discrete events emitted by applications (e.g., "User logged in").
3.  **Traces**: The journey of a single request through a distributed system.
      `
    },
    {
      id: 453,
      question: "What is an 'Ingress' in Kubernetes?",
      options: [
        "An internal load balancer for pods",
        "An API object that manages external access to the services in a cluster, typically HTTP",
        "A specialized node for database storage",
        "A security policy that blocks all incoming traffic"
      ],
      correctAnswer: "An API object that manages external access to the services in a cluster, typically HTTP",
      explanation: `
### Concept: Ingress
**Ingress** provides a way to expose multiple services under a single IP/hostname, handling things like SSL termination and path-based routing.

**Comparison:**
- **Service (NodePort/LoadBalancer)**: One service per entry point.
- **Ingress**: A single entry point for many services (e.g., example.com/app1 and example.com/app2).
      `
    },
    {
      id: 454,
      question: "What is 'Service Mesh'?",
      options: [
        "A physical network of cables connecting servers",
        "A dedicated infrastructure layer for managing service-to-service communication, including security, traffic management, and observability",
        "A way to combine multiple databases into one",
        "A Kubernetes plugin for managing pod storage"
      ],
      correctAnswer: "A dedicated infrastructure layer for managing service-to-service communication, including security, traffic management, and observability",
      explanation: `
### Concept: Service Mesh
As microservices grow, managing the network between them becomes complex. A **Service Mesh** (like Istio or Linkerd) offloads network logic from the application to the infrastructure.

**Features:**
- **mTLS**: Automatic encryption of data-in-transit.
- **Traffic Spitting**: Canary deployments (90% traffic to V1, 10% to V2).
- **Retries and Circuit Breaking**.
- **Observability**: Automatic tracing and metrics for all network calls.
      `
    },
    {
      id: 455,
      question: "What is the primary purpose of 'Namespaces' in Kubernetes?",
      options: [
        "To speed up the pod startup time",
        "To provide a mechanism for isolating groups of resources within a single cluster",
        "To hide resources from the cluster administrator",
        "To group pods by their physical location in the data center"
      ],
      correctAnswer: "To provide a mechanism for isolating groups of resources within a single cluster",
      explanation: `
### Concept: Multi-tenancy
**Namespaces** allow you to partition a single cluster into multiple virtual clusters.

**Use cases:**
- **Environment Separation**: 'dev', 'staging', 'prod' in one cluster.
- **Team Isolation**: Each team gets its own namespace.
- **Resource Quotas**: Limiting the total CPU/Memory that a specific group can use.
      `
    },
    {
      id: 456,
      question: "What is 'Microservices' architecture?",
      options: [
        "A single large application that is easy to deploy",
        "An architectural style that structures an application as a collection of small, autonomous services modeled around a business domain",
        "Using very small servers to run your code",
        "Minifying Javascript files to improve performance"
      ],
      correctAnswer: "An architectural style that structures an application as a collection of small, autonomous services modeled around a business domain",
      explanation: `
### Concept: Microservices
Microservices allow for independent development, deployment, and scaling of different parts of an application.

**Contrast with Monolith:**
- **Monolith**: One code base, one deployment, one scale unit. Hard to change.
- **Microservices**: Many services, many deployments, independent scale units. Complex to manage but provides high agility.
      `
    },
    {
      id: 457,
      question: "What is 'Immutable Infrastructure'?",
      options: [
        "Infrastructure that is impossible to hack",
        "Infrastructure where servers are never modified after deployment; instead, they are replaced with new versions",
        "A data center that cannot be moved",
        "Using read-only hard drives for all servers"
      ],
      correctAnswer: "Infrastructure where servers are never modified after deployment; instead, they are replaced with new versions",
      explanation: `
### Concept: Immutability
In **Immutable Infrastructure**, you don't use tools like Ansible to "patch" a running server. Instead, you build a new image (e.g., an AMI or a Container Image), test it, and deploy it as a replacement.

- **Benefit**: Eliminates "Configuration Drift" where servers that started the same become different over time due to manual tweaks.
- **Benefit**: Easier rollbacks (just switch back to the old image).
      `
    },
    {
      id: 458,
      question: "Which CNCF project graduated first?",
      options: [
        "Prometheus",
        "Kubernetes",
        "Envoy",
        "Helm"
      ],
      correctAnswer: "Kubernetes",
      explanation: `
### Concept: CNCF History
**Kubernetes** was the first project to graduate from the CNCF (in 2018), marking its maturity as a production-grade orchestration platform.
      `
    },
    {
      id: 459,
      question: "In Kubernetes, what is a 'ReplicaSet' responsible for?",
      options: [
        "Defining the network policy for a pod",
        "Ensuring that a specified number of pod replicas are running at any given time",
        "Storing the persisted data for a pod",
        "Managing the deployment of helm charts"
      ],
      correctAnswer: "Ensuring that a specified number of pod replicas are running at any given time",
      explanation: `
### Concept: Self-Healing
A **ReplicaSet**'s purpose is to maintain a stable set of replica Pods. It is often used to guarantee the availability of a specified number of identical Pods.

**Note**: You should generally use a **Deployment** instead of directly using a ReplicaSet, as Deployments provide declarative updates and rolling versions.
      `
    },
    {
      id: 460,
      question: "What is an 'Admission Controller' in Kubernetes?",
      options: [
        "A person who decides who can join the cluster",
        "A piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object",
        "A plugin that allows pods to join the network",
        "A specialized node for handling user logins"
      ],
      correctAnswer: "A piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object",
      explanation: `
### Concept: API Server Security
**Admission Controllers** can "Validate" (decide whether to allow a request) or "Mutate" (change the request).

**Examples:**
- **ResourceQuota**: Checks if the namespace has room for the new pod.
- **LimitRanger**: Sets default resource limits if none were specified.
- **AlwaysPullImages**: Forces containers to always pull the latest image.
      `
    },
    {
      id: 461,
      question: "What is 'Cloud Native Storage'?",
      options: [
        "Any hard drive used in a cloud data center",
        "Storage solutions designed specifically for containerized environments, providing features like dynamic provisioning and high availability",
        "A way to store files on a personal laptop",
        "A specialized type of RAM"
      ],
      correctAnswer: "Storage solutions designed specifically for containerized environments, providing features like dynamic provisioning and high availability",
      explanation: `
### Concept: Storage
**Cloud Native Storage** (like Rook or Longhorn) understands orchestrators like Kubernetes.

- **Dynamic Provisioning**: Storage is created automatically when a pod requests it via a PersistentVolumeClaim (PVC).
- **High Availability**: Data is replicated across multiple nodes/zones.
- **Agility**: Storage follows the pod even if it moves to a different node.
      `
    },
    {
      id: 462,
      question: "What is 'OpenTelemetry'?",
      options: [
        "A free version of a popular monitoring tool",
        "A standardized framework and set of tools for generating, collecting, and exporting telemetry data (Metrics, Logs, Traces)",
        "A method for opening network ports in a firewall",
        "A replacement for the Kubernetes API"
      ],
      correctAnswer: "A standardized framework and set of tools for generating, collecting, and exporting telemetry data (Metrics, Logs, Traces)",
      explanation: `
### Concept: Standardized Observability
**OpenTelemetry (OTel)** provides a single set of APIs and SDKs to capture telemetry data from your applications in a vendor-neutral way.

- **Unified**: Handles all three pillars of observability.
- **Vendor-Neutral**: You can change your backend (e.g., from Jaeger to Honeycomb) without changing your application code.
      `
    },
    {
      id: 463,
      question: "Which component in Kubernetes is the 'Source of Truth' for the cluster's state?",
      options: [
        "kube-apiserver",
        "etcd",
        "kubelet",
        "kube-proxy"
      ],
      correctAnswer: "etcd",
      explanation: `
### Concept: Control Plane Components
**etcd** is a consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.

**Importance:**
- If etcd is lost, the entire cluster configuration is lost.
- It is critical to have a reliable backup plan for etcd.
- It uses the Raft consensus algorithm for consistency.
      `
    },
    {
      id: 464,
      question: "What does 'Eventual Consistency' mean in a cloud-native system?",
      options: [
        "The system is always perfectly accurate at every millisecond",
        "If no new updates are made to a specific data item, eventually all accesses to that item will return the last updated value",
        "The system will eventually crash",
        "The application will only work during business hours"
      ],
      correctAnswer: "If no new updates are made to a specific data item, eventually all accesses to that item will return the last updated value",
      explanation: `
### Concept: Distributed Systems
In highly distributed systems, achieving perfect consistency (CAP theorem) is difficult. Many cloud-native services choose **Eventual Consistency** to ensure high availability and performance.

- **Trade-off**: For a short period, different users might see slightly different versions of the data.
      `
    },
    {
      id: 465,
      question: "Which of the following is a core characteristic of a 'Cloud Native' application?",
      options: [
        "It consists of a single large binary",
        "It is designed to be resilient and thrive in dynamic environments",
        "It must be hosted in a public cloud data center",
        "It requires manual scaling by a system administrator"
      ],
      correctAnswer: "It is designed to be resilient and thrive in dynamic environments",
      explanation: `
### Concept: Cloud Native Characteristics
Cloud - native apps are built and run using technologies that empower them to be scalable, resilient, and manageable.

** Key traits:**
- ** Resilience **: The app can recover from failures(nodes, disks, network) automatically.
- ** Dynamic **: The environment changes constantly(scaling, deployments), and the app adapts.
- ** Automation **: Minimal manual intervention for operations.
      `
    },
    {
      id: 466,
      question: "What is the primary benefit of 'Serverless' architectures for developers?",
      options: [
        "It allows them to manage the underlying OS more effectively",
        "It abstracts away infrastructure management, allowing them to focus solely on writing code",
        "It makes applications run faster on any hardware",
        "It eliminates the need for any cloud provider"
      ],
      correctAnswer: "It abstracts away infrastructure management, allowing them to focus solely on writing code",
      explanation: `
### Concept: Serverless Computing
In ** Serverless **, the cloud provider manages the allocation and provisioning of servers.Developers only provide the code(functions) and triggers.

- ** Developer focus **: Logic and value, not maintenance.
- ** Scale **: Automatic scaling based on demand.
- ** Cost **: Pay - per - execution model.
      `
    },
    {
      id: 467,
      question: "In the 'OCI' (Open Container Initiative) standards, what does the 'Runtime Specification' define?",
      options: [
        "How a container image should be stored in a registry",
        "How a container should be launched and run by a container runtime",
        "The syntax for a Dockerfile",
        "The networking protocol for service-to-service communication"
      ],
      correctAnswer: "How a container should be launched and run by a container runtime",
      explanation: `
### Concept: OCI Standards
The ** OCI Runtime Spec ** ensures that different runtimes(like runc, Kata, or gVisor) can all run the same container bundles in a consistent way.

- ** Bundle **: A directory containing a 'config.json' and a root filesystem.
- ** Lifecycle **: Standard operations like 'create', 'start', 'state', 'delete'.
      `
    },
    {
      id: 468,
      question: "Which component in a Service Mesh is responsible for the actual traffic routing, encryption, and telemetry collection?",
      options: [
        "Control Plane",
        "Data Plane (Sidecar Proxies)",
        "API Gateway",
        "Kubernetes API Server"
      ],
      correctAnswer: "Data Plane (Sidecar Proxies)",
      explanation: `
### Concept: Service Mesh Data Plane
The ** Data Plane ** consists of lightweight proxies(like Envoy) deployed as sidecars alongside every service instance.

- ** Mediation **: Intercepts all network traffic between services.
- ** Enforcement **: Applies policies defined by the control plane(e.g., mTLS, retries).
- ** Observation **: Collects metrics and traces for every request.
      `
    },
    {
      id: 469,
      question: "What does 'Observability' help developers understand about 'Unknown Unknowns'?",
      options: [
        "It helps them count how many users were on the site yesterday",
        "It allows them to ask new questions of their system to debug complex, unforeseen failures",
        "It provides a list of all potential bugs in the code",
        "It tells them exactly when a server will fail in the future"
      ],
      correctAnswer: "It allows them to ask new questions of their system to debug complex, unforeseen failures",
      explanation: `
### Concept: Observability vs Monitoring
  ** Monitoring ** handles "Known Unknowns"(e.g., I know memory can run out, so I monitor memory usage).

** Observability ** handles "Unknown Unknowns"(e.g., the system is slow only for users in Japan using Safari on a Tuesday).You use the rich telemetry data to explore and pinpoint the cause of issues you didn't even know were possible.
  `
    },
    {
      id: 470,
      question: "Which CNCF project provides an open-source system for automating deployment, scaling, and management of containerized applications?",
      options: [
        "Docker",
        "Kubernetes",
        "Ansible",
        "Jenkins"
      ],
      correctAnswer: "Kubernetes",
      explanation: `
### Concept: Orchestration
  ** Kubernetes ** is the most widely adopted container orchestrator in the world, originally developed by Google and now maintained by the CNCF.
      `
    },
    {
      id: 471,
      question: "What is 'Distributed Tracing' specifically designed to solve?",
      options: [
        "High CPU usage on a single node",
        "Tracking a single request as it passes through many different services and networks",
        "Aggregating logs from multiple physical machines",
        "Ensuring that all containers use the same base image"
      ],
      correctAnswer: "Tracking a single request as it passes through many different services and networks",
      explanation: `
### Concept: Observability(Tracing)
In microservices, a single user click might touch dozens of services. ** Distributed Tracing ** (like Jaeger) correlates the work done by each service using a unique Trace ID.

- ** Visualize **: See the timing and dependencies of each step.
- ** Bottlenecks **: Quickly find which service is causing a delay.
      `
    },
    {
      id: 472,
      question: "In Kubernetes, what is the 'Controller Pattern'?",
      options: [
        "A way to write code using only 'if' statements",
        "A control loop that watches the shared state of the cluster through the API server and makes changes attempting to move the current state towards the desired state",
        "A specialized hardware device for controlling a cluster",
        "A UI element in the Kubernetes dashboard"
      ],
      correctAnswer: "A control loop that watches the shared state of the cluster through the API server and makes changes attempting to move the current state towards the desired state",
      explanation: `
### Concept: Control Loops
Kubernetes is a system of ** Controllers **.Each controller is responsible for a specific part of the cluster state.

** The Loop:**
  1. ** Observe **: Check the current state.
2. ** Diff **: Compare current state with desired state(YAML).
3. ** Act **: Perform actions to fix the difference.
      `
    },
    {
      id: 473,
      question: "What is a 'Persistent Volume' (PV) in Kubernetes?",
      options: [
        "A temporary folder for log files",
        "A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes",
        "A backup of the etcd database",
        "A container that never stops running"
      ],
      correctAnswer: "A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes",
      explanation: `
### Concept: Storage
A ** PV ** is a cluster resource(like a Node) that has a lifecycle independent of any individual Pod that uses it.

- ** PV **: The actual storage(NFS, AWS EBS, Local Disk).
- ** PVC **: A request for storage by a user / pod.
- ** StorageClass **: Allows for "Just-in-Time" dynamic provisioning of PVs.
      `
    },
    {
      id: 474,
      question: "What is the primary function of the 'kubelet'?",
      options: [
        "To manage the cluster's network policies",
        "To ensure that containers are running in a Pod according to the PodSpec",
        "To decide which node a pod should run on",
        "To provide a web interface for the cluster"
      ],
      correctAnswer: "To ensure that containers are running in a Pod according to the PodSpec",
      explanation: `
### Concept: Node Components
The ** kubelet ** is the primary "node agent" that runs on each node.It takes a set of PodSpecs provided via the API server and ensures that the containers described in those PodSpecs are running and healthy.
      `
    },
    {
      id: 475,
      question: "Which CNCF project provides a cloud-native, open-source logging solution?",
      options: [
        "Fluentd / Fluent Bit",
        "Prometheus",
        "Jaeger",
        "Envoy"
      ],
      correctAnswer: "Fluentd / Fluent Bit",
      explanation: `
### Concept: Observability(Logging)
  ** Fluentd ** and ** Fluent Bit ** are unified logging layers that collect, process, and forward logs from various sources to various destinations(like Elasticsearch, S3, or Splunk).
      `
    },
    {
      id: 476,
      question: "What is 'Cloud Native Application Delivery' focusing on?",
      options: [
        "Buying more physical servers for the data center",
        "The complete lifecycle of software development, from code to production using automation and cloud-native tools",
        "The shipping speed of hardware components",
        "Manual deployment of zip files to a server"
      ],
      correctAnswer: "The complete lifecycle of software development, from code to production using automation and cloud-native tools",
      explanation: `
### Concept: App Delivery
Modern application delivery emphasizes speed and reliability through ** CI / CD **, ** GitOps **, and ** Progressive Delivery ** (e.g., Canary, Blue / Green).
      `
    },
    {
      id: 477,
      question: "What is 'Autoscaling' in a Kubernetes sense?",
      options: [
        "Automatically buying more cloud credits",
        "Dynamically adjusting the resources (Nodes or Pods) dedicated to a workload based on demand",
        "A script that restarts the cluster every night",
        "Upgrading the Kubernetes version automatically"
      ],
      correctAnswer: "Dynamically adjusting the resources (Nodes or Pods) dedicated to a workload based on demand",
      explanation: `
### Concept: Autoscaling
  - ** HPA(Horizontal Pod Autoscaler) **: Scaled number of pods.
- ** VPA(Vertical Pod Autoscaler) **: Scales CPU / Memory of existing pods.
- ** Cluster Autoscaler **: Adds or removes physical Nodes to the cluster.
      `
    },
    {
      id: 478,
      question: "What are 'Taints and Tolerations' used for in Kubernetes?",
      options: [
        "To encrypt data in etcd",
        "To ensure that pods are not scheduled onto inappropriate nodes",
        "To manage user roles and permissions",
        "To speed up container networking"
      ],
      correctAnswer: "To ensure that pods are not scheduled onto inappropriate nodes",
      explanation: `
### Concept: Scheduling
  - ** Taint **: A marker applied to a ** Node ** to "repel" pods unless they have a matching toleration. (e.g., "This node is for GPUs only").
- ** Toleration **: Applied to a ** Pod ** to allow it to be scheduled on a tainted node.
      `
    },
    {
      id: 479,
      question: "Which of the following describes 'Policy-as-Code'?",
      options: [
        "Writing comments in the code explaining company rules",
        "The practice of managing and enforcing policies (security, compliance, governance) using programmable and automated files (e.g. Kyverno, OPA)",
        "A document in Git that lists out developer rules",
        "Using AI to write code for you"
      ],
      correctAnswer: "The practice of managing and enforcing policies (security, compliance, governance) using programmable and automated files (e.g. Kyverno, OPA)",
      explanation: `
### Concept: Modern Governance
  ** Policy - as - Code ** moves policy enforcement into the CI / CD pipeline and the orchestrator.

- ** Example **: A policy that says "No container can run as root".
- ** Enforcement **: Admission controllers(like Kyverno) block any YAML that violates the policy.
      `
    },
    {
      id: 480,
      question: "What is an 'Operator' in the Kubernetes world?",
      options: [
        "A system administrator who manages the cluster",
        "A method of packaging, deploying, and managing a Kubernetes application using both CRDs and custom controller logic",
        "A specialized tool for managing network cables",
        "A built-in Kubernetes component for manual scaling"
      ],
      correctAnswer: "A method of packaging, deploying, and managing a Kubernetes application using both CRDs and custom controller logic",
      explanation: `
### Concept: The Operator Pattern
An ** Operator ** encodes the domain - specific knowledge of a human operator into software.

- ** Goal **: Automate complex stateful apps(like Databases).
- ** CRD **: Defines the state(e.g., "I want a 3-node Postgres cluster").
- ** Controller **: Performs the complex work(e.g., setting up replication, handling failover).
      `
    },
    {
      id: 481,
      question: "What is 'Cilium' primarily known for in a cluster?",
      options: [
        "Replacing the Kubernetes API server",
        "A high-performance CNI that uses eBPF for networking, security, and observability",
        "A tool for managing Helm charts",
        "A dashboard for visualizing pod status"
      ],
      correctAnswer: "A high-performance CNI that uses eBPF for networking, security, and observability",
      explanation: `
### Concept: Cloud Native Networking
  ** Cilium ** is an open - source project that uses ** eBPF ** (Extended Berkeley Packet Filter) technology to provide powerful networking and security features directly in the Linux kernel.
      `
    },
    {
      id: 482,
      question: "What is the role of a 'Registry' in containerization?",
      options: [
        "To store the cluster's user passwords",
        "To store and share container images",
        "To track the resource usage of each pod",
        "To manage the DNS names for services"
      ],
      correctAnswer: "To store and share container images",
      explanation: `
### Concept: Container Images
A ** Registry ** (like Docker Hub, Quay, or Google Artifact Registry) is a centralized place where images are uploaded(pushed) and downloaded(pulled) by nodes.
      `
    },
    {
      id: 483,
      question: "What is the primary difference between a 'Deployment' and a 'StatefulSet'?",
      options: [
        "StatefulSet is faster than Deployment",
        "Deployment is for stateless apps; StatefulSet is for apps that require persistent identity and stable storage (e.g., databases)",
        "StatefulSet is only for on-premise clusters",
        "Deployment can only run one pod at a time"
      ],
      correctAnswer: "Deployment is for stateless apps; StatefulSet is for apps that require persistent identity and stable storage (e.g., databases)",
      explanation: `
### Concept: Workload API
  - ** Deployment **: Pods are interchangeable(cattle).If one dies, a new one with a random name replaces it.
- ** StatefulSet **: Pods have unique, sticky identities(pets).E.g., 'mysql-0' always gets the same network ID and same persistent disk even after a restart.
      `
    },
    {
      id: 484,
      question: "What does 'eBPF' stand for and what is its significance in cloud-native?",
      options: [
        "Extended Berkeley Packet Filter; allows running sandboxed programs in the Linux kernel without changing kernel source code",
        "Electronic Build Power Framework; speeds up container builds",
        "Embedded Binary Process Flow; a method for tracing microservices",
        "Encryption Block Packet Format; a new security standard for storage"
      ],
      correctAnswer: "Extended Berkeley Packet Filter; allows running sandboxed programs in the Linux kernel without changing kernel source code",
      explanation: `
### Concept: eBPF
  ** eBPF ** has revolutionized cloud - native infrastructure by enabling high - performance networking(Cilium), deep observability(Hubble), and advanced security(Falco) with minimal overhead.
      `
    },
    {
      id: 485,
      question: "What is the 'Twelve-Factor App' methodology?",
      options: [
        "A list of twelve steps for installing Kubernetes",
        "A set of best practices for building modern, cloud-native applications that are portable and resilient",
        "A security standard for twelve different types of cloud providers",
        "A mathematical formula for calculating cloud costs"
      ],
      correctAnswer: "A set of best practices for building modern, cloud-native applications that are portable and resilient",
      explanation: `
### Concept: App Design
The ** Twelve - Factor App ** methodology(e.g., Codebase, Dependencies, Config in env vars, Statelessness) provides a roadmap for building apps that fit perfectly into containerized environments.
      `
    },
    {
      id: 486,
      question: "What is the purpose of 'Network Policies' in Kubernetes?",
      options: [
        "To assign static IP addresses to nodes",
        "To provide a declarative way to specify which pods are allowed to communicate with each other",
        "To increase the bandwidth of the cluster network",
        "To manage the firewall of the physical data center"
      ],
      correctAnswer: "To provide a declarative way to specify which pods are allowed to communicate with each other",
      explanation: `
### Concept: Zero Trust
By default, all pods in Kubernetes can talk to each other. ** Network Policies ** allow you to implement a "Default Deny" posture and only allow necessary traffic, improving security.
      `
    },
    {
      id: 487,
      question: "What is 'Grafana' commonly used for?",
      options: [
        "A database for storing logs",
        "A visualization and dashboarding platform for observing metric data (often from Prometheus)",
        "A tool for managing container images",
        "A security scanner for Kubernetes clusters"
      ],
      correctAnswer: "A visualization and dashboarding platform for observing metric data (often from Prometheus)",
      explanation: `
### Concept: Visualization
  ** Grafana ** allows you to create beautiful, interactive dashboards to monitor the health and performance of your applications and infrastructure.
      `
    },
    {
      id: 488,
      question: "What is 'Istio'?",
      options: [
        "A container runtime like containerd",
        "A popular open-source Service Mesh that provides advanced traffic management, security, and observability",
        "A package manager for Kubernetes",
        "A tool for backing up etcd"
      ],
      correctAnswer: "A popular open-source Service Mesh that provides advanced traffic management, security, and observability",
      explanation: `
### Concept: Service Mesh
  ** Istio ** is one of the most mature service meshes, offering features like request routing, mTLS, and rich telemetry out - of - the - box.
      `
    },
    {
      id: 489,
      question: "Which of the following is an example of an 'Admission Controller' task?",
      options: [
        "Deciding which node a pod should run on",
        "Checking if a specific image registry is allowed before allowing a pod to be created",
        "Encrypting a database on disk",
        "Managing the CSS of the application dashboard"
      ],
      correctAnswer: "Checking if a specific image registry is allowed before allowing a pod to be created",
      explanation: `
### Concept: Admission Control
Admission controllers can enforce rules like "Only allow images from 'mycompany.registry.io'".This happens during the API request phase, before any pod is actually scheduled or run.
      `
    }
  ]
};
