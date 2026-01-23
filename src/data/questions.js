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
    id: 'kcsa',
    title: 'KCSA (Kubernetes and Cloud Native Security Associate)',
    description: 'Security fundamentals for cloud-native architectures.',
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
```
mychart/
  Chart.yaml          # Chart metadata
  values.yaml         # Default configuration values
  templates/          # Kubernetes manifest templates
  charts/             # Dependent charts
  README.md
```

**Usage Examples**:
```bash
# Use defaults
helm install myapp ./mychart

# Override with file
helm install myapp ./mychart -f prod-values.yaml

# Override specific values
helm install myapp ./mychart --set replicas=5
```

**values.yaml Example**:
```yaml
replicaCount: 3
image:
repository: nginx
tag: "1.21"
service:
type: LoadBalancer
port: 80
  ```

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
```yaml
readinessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3    # Allows 3 failures before marking unready
  successThreshold: 1    # 1 success to mark ready again
```

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
    }
  ]
};
