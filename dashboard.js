const jobsList = [
    "Online Writing",
    "Transcript Writing",
    "Academic Writing",
    "Data Analysis",
    "Web Design",
    "Graphic Jobs"
];

const container = document.getElementById("jobs");

function loadDashboard() {

    container.innerHTML = "";

    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("Please login first.");
        window.location.href = "index.html";
        return;
    }

    let requests = JSON.parse(localStorage.getItem("requests") || "[]");

    jobsList.forEach(job => {

        // ✅ Updated job card creation
        const div = document.createElement("div");
        div.classList.add("job-card");

        const title = document.createElement("div");
        title.classList.add("job-title");
        title.innerText = job;

        const btn = document.createElement("button");
        btn.classList.add("apply-btn");

        const existingRequest = requests.find(r => 
            r.user === currentUser && r.job === job
        );

        if (!existingRequest) {
            btn.innerText = "Apply";

            btn.onclick = () => {
                btn.classList.add("pending");
                btn.innerText = "Pending";

                requests.push({
                    user: currentUser,
                    job: job,
                    status: "pending"
                });

                localStorage.setItem("requests", JSON.stringify(requests));
            };

        } else {
            if (existingRequest.status === "pending") {
                btn.innerText = "Pending";
                btn.classList.add("pending");
                btn.disabled = true;
            }

            if (existingRequest.status === "rejected") {
                btn.innerText = "Rejected";
                btn.classList.add("rejected");
                btn.disabled = true;
            }

            if (existingRequest.status === "approved") {
                btn.innerText = "Click to Continue";
                btn.classList.add("approved");

                btn.onclick = () => {
                    localStorage.setItem("selectedJob", job);
                    window.location.href = "auction.html";
                };
            }
        }

        // ✅ Append only title and button (remove p)
        div.appendChild(title);
        div.appendChild(btn);
        container.appendChild(div);
    });
}

loadDashboard();
setInterval(loadDashboard, 2000);

