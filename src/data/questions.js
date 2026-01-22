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
**Zero Trust** is a security framework requiring all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated for security configuration and posture.
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
- **Portability**: \"It works on my machine\" → \"It works everywhere\"
- **Consistency**: Same environment from dev to production
- **Isolation**: Applications don't interfere with each other
- **Efficiency**: Share OS kernel, lighter than VMs

**The \"dependency problem\" containers solve:**
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

**Podman** is a daemonless container engine for developing, managing, and running OCI containers. While excellent for local development and can run containers, it doesn't implement CRI for Kubernetes integration.

**Note:** Dockershim was deprecated and removed, but containerd (which Docker uses internally) remains fully supported.

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
1. You specify desired number of replicas
2. ReplicaSet monitors actual number of pods
3. Creates pods if too few exist
4. Deletes pods if too many exist

**ReplicaSet configuration:**
- **Replicas**: Desired number of pods
- **Selector**: How to identify which pods to manage
- **Pod template**: Specification for creating new pods

**Important note:**
You typically don't create ReplicaSets directly. Instead, create a **Deployment**, which manages ReplicaSets for you and provides additional features like rolling updates.

**Hierarchy:**
\`\`\`
Deployment
    ↓
ReplicaSet
    ↓
Pods (3 replicas)
\`\`\`

**Why other options are incorrect:**
- Data backup is handled by volumes and backup tools
- Data replication is a replacement for storage
- Image copies are managed by container registries
      `
    },
    {
      id: 321,
      question: "Which Kubernetes object would you use to run a pod on every node in the cluster?",
      options: [
        "Deployment",
        "StatefulSet",
        "DaemonSet",
        "Job"
      ],
      correctAnswer: "DaemonSet",
      explanation: `
### Concept: DaemonSets

A **DaemonSet** ensures that all (or some) nodes run a copy of a specific pod. As nodes are added to the cluster, pods are automatically added to them.

**Common use cases:**
- **Log collection**: Fluentd, Logstash on every node
- **Monitoring**: Node exporters, monitoring agents
- **Storage**: Ceph, GlusterFS daemons
- **Networking**: CNI plugins like Calico, Weave
- **Security**: Security monitoring agents

**How DaemonSets work:**
- Automatically schedules one pod per node
- When new nodes join, pods are added
- When nodes are removed, pods are garbage collected
- Can use node selectors to run only on specific nodes

**Example:**
\`\`\`yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: monitoring-agent
spec:
  selector:
    matchLabels:
      app: monitoring
  template:
    # Pod template
\`\`\`

**Why other options are incorrect:**
- **Deployment**: Runs specified number of replicas (not one per node)
- **StatefulSet**: For stateful applications needing stable identities
- **Job**: For run-to-completion tasks
      `
    },
    {
      id: 322,
      question: "What is a ConfigMap used for in Kubernetes?",
      options: [
        "To store encrypted sensitive data like passwords",
        "To store non-confidential configuration data in key-value pairs",
        "To configure the Kubernetes control plane",
        "To map network routes between services"
      ],
      correctAnswer: "To store non-confidential configuration data in key-value pairs",
      explanation: `
### Concept: Configuration Management

**ConfigMaps** allow you to decouple configuration from container images, making applications more portable and easier to manage.

**What to store in ConfigMaps:**
- Application configuration files
- Environment variables
- Command-line arguments
- Configuration parameters (non-sensitive)

**How to use ConfigMaps:**
1. **Environment variables**: Inject into pod
2. **Volume mounts**: Mount as files in container
3. **Command-line arguments**: Pass to container

**Example:**
\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: \"postgres://db:5432\"
  log_level: \"info\"
\`\`\`

**ConfigMap vs Secret:**
- **ConfigMap**: Non-sensitive data (plaintext)
- **Secret**: Sensitive data (base64 encoded, can be encrypted)

**Best practices:**
- Don't store passwords/tokens in ConfigMaps
- Use Secrets for sensitive data
- Can update ConfigMaps, pods need restart to see changes

**Why other options are incorrect:**
- Secrets (not ConfigMaps) are for sensitive data
- Control plane configured via manifests and flags
- Network routing handled by Services/Ingress
      `
    },
    {
      id: 323,
      question: "What is the purpose of a Kubernetes Secret?",
      options: [
        "To hide pods from being discovered by services",
        "To store sensitive information like passwords and API keys",
        "To encrypt network traffic between pods",
        "To create private namespaces"
      ],
      correctAnswer: "To store sensitive information like passwords and API keys",
      explanation: `
### Concept: Secrets Management

**Secrets** are used to store and manage sensitive information such as passwords, OAuth tokens, SSH keys, and API keys.

**Why use Secrets:**
- Keep sensitive data separate from pod specs
- Base64 encoded (not encrypted by default)
- Can be encrypted at rest (requires configuration)
- More secure than hardcoding in images

**Types of Secrets:**
- **Opaque**: Generic secret (default)
- **kubernetes.io/tls**: TLS certificates and keys
- **kubernetes.io/dockerconfigjson**: Docker registry credentials
- **kubernetes.io/basic-auth**: Basic authentication
- **kubernetes.io/ssh-auth**: SSH credentials

**How to use Secrets:**
\`\`\`yaml
# As environment variable
env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: db-secret
        key: password

# As volume mount
volumes:
  - name: secret-volume
    secret:
      secretName: my-secret
\`\`\`

**Security considerations:**
- Enable encryption at rest in etcd
- Use RBAC to control access
- Consider external secret management (Vault, AWS Secrets Manager)

**Why other options are incorrect:**
- Pod discovery is handled by Services
- Network encryption requires service mesh or network policies
- Namespace privacy uses RBAC and network policies
      `
    },
    {
      id: 324,
      question: "What does a PersistentVolume (PV) represent in Kubernetes?",
      options: [
        "A volume that exists only during the pod's lifetime",
        "A piece of storage in the cluster that has been provisioned and exists independently of pods",
        "A backup of pod data",
        "A network storage controller"
      ],
      correctAnswer: "A piece of storage in the cluster that has been provisioned and exists independently of pods",
      explanation: `
### Concept: Persistent Storage

**PersistentVolume (PV)** is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It has a lifecycle independent of any pod.

**Storage hierarchy:**
1. **PersistentVolume (PV)**: Actual storage resource
2. **PersistentVolumeClaim (PVC)**: Request for storage by user
3. **Pod**: Uses PVC to mount storage

**PV characteristics:**
- Exists independently of pods
- Can be statically provisioned (admin creates) or dynamic (auto-created)
- Has storage capacity, access modes, and reclaim policy
- Survives pod deletion and rescheduling

**Access Modes:**
- **ReadWriteOnce (RWO)**: Mounted by single node
- **ReadOnlyMany (ROX)**: Mounted by multiple nodes (read-only)
- **ReadWriteMany (RWX)**: Mounted by multiple nodes (read-write)

**Reclaim Policies:**
- **Retain**: Manual reclamation
- **Delete**: Delete volume when claim is deleted
- **Recycle**: Scrub data and make available again (deprecated)

**Example use cases:**
- Databases requiring persistent data
- File uploads that must survive pod restarts
- Shared configuration or data between pods

**Why other options are incorrect:**
- Ephemeral volumes (like emptyDir) exist only during pod lifetime
- Backups are separate from PVs
- Storage controllers are CSI drivers, not PVs
      `
    },
    {
      id: 325,
      question: "What is the difference between a PersistentVolume (PV) and a PersistentVolumeClaim (PVC)?",
      options: [
        "There is no difference, they are the same",
        "PV is the actual storage resource, PVC is a request for storage by a user",
        "PV is for dynamic provisioning, PVC is for static provisioning",
        "PV is used by administrators, PVC is used by applications"
      ],
      correctAnswer: "PV is the actual storage resource, PVC is a request for storage by a user",
      explanation: `
### Concept: Storage Abstraction

**PersistentVolume (PV)** and **PersistentVolumeClaim (PVC)** provide an abstraction between storage resources and pods, separating concerns between admins and users.

**PersistentVolume (PV):**
- Created by cluster administrator or dynamically provisioned
- Represents actual storage (NFS, iSCSI, cloud storage)
- Cluster-level resource
- Defines capacity, access mode, storage class

**PersistentVolumeClaim (PVC):**
- Created by users/developers
- Request for storage (\"I need 10GB RWO storage\")
- Namespace-scoped resource
- Binds to a PV that meets requirements

**The workflow:**
\`\`\`
1. Admin creates PV (or uses dynamic provisioning)
2. User creates PVC requesting storage
3. Kubernetes binds PVC to suitable PV
4. Pod uses PVC to mount storage
\`\`\`

**Analogy:**
- **PV** = Hotel room (physical resource)
- **PVC** = Hotel reservation (request for resource)
- **Pod** = Guest (uses the resource)

**Example:**
\`\`\`yaml
# PVC
apiVersion: v1
kind: PersistentVolumeClaim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
\`\`\`

**Why other options are incorrect:**
- They serve different purposes (resource vs request)
- Both can work with static or dynamic provisioning
- While admins manage PVs, the fundamental difference is resource vs claim
      `
    },
    {
      id: 326,
      question: "What is a StorageClass in Kubernetes?",
      options: [
        "A way to classify different types of pods",
        "A way to describe and provision different types of storage dynamically",
        "A security class for encrypting storage",
        "A namespace for storage resources"
      ],
      correctAnswer: "A way to describe and provision different types of storage dynamically",
      explanation: `
### Concept: Dynamic Storage Provisioning

**StorageClass** provides a way to describe different \"classes\" of storage and enables dynamic provisioning of PersistentVolumes.

**What StorageClass defines:**
- **Provisioner**: What creates the volume (AWS EBS, GCE PD, NFS, etc.)
- **Parameters**: Storage-specific settings (type, IOPS, replication)
- **Reclaim Policy**: What happens when PVC is deleted
- **Volume Binding Mode**: When to provision and bind

**Dynamic provisioning workflow:**
\`\`\`
1. Admin creates StorageClass
2. User creates PVC referencing StorageClass
3. Kubernetes automatically creates PV
4. PVC binds to new PV
5. Pod uses PVC
\`\`\`

**Example StorageClass:**
\`\`\`yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
  iopsPerGB: \"10\"
\`\`\`

**Common use cases:**
- **fast-ssd**: High-performance SSD storage
- **standard**: Regular HDD storage
- **encrypted**: Storage with encryption
- **backup**: Storage optimized for backups

**Benefits:**
- No manual PV creation
- On-demand storage provisioning
- Different tiers of storage (SSD vs HDD)

**Why other options are incorrect:**
- Not for classifying pods (that's labels/selectors)
- Not specifically for encryption (though can be configured)
- Not a namespace (cluster-wide resource)
      `
    }
  ],
  kcsa: [],
  pca: [],
  ica: [],
  cca: [],
  capa: [],
  cgoa: [],
  cba: [],
  otca: [],
  kca: [],
  cnpa: []
};
