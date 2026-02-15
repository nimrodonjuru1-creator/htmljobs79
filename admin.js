const container = document.getElementById("adminRequests");

function loadRequests() {

    container.innerHTML = "";

    let requests = JSON.parse(localStorage.getItem("requests") || "[]");

    requests.forEach((req, index) => {

        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.padding = "10px";
        div.style.margin = "10px";

        div.innerHTML = `
            <p><strong>User:</strong> ${req.user}</p>
            <p><strong>Job:</strong> ${req.job}</p>
            <p><strong>Status:</strong> ${req.status}</p>
        `;

        if (req.status === "pending") {

            const approve = document.createElement("button");
            approve.innerText = "Approve";

            const reject = document.createElement("button");
            reject.innerText = "Reject";

            approve.onclick = () => {
                requests[index].status = "approved";
                localStorage.setItem("requests", JSON.stringify(requests));
                loadRequests();
            };

            reject.onclick = () => {
                requests[index].status = "rejected";
                localStorage.setItem("requests", JSON.stringify(requests));
                loadRequests();
            };

            div.appendChild(approve);
            div.appendChild(reject);
        }

        container.appendChild(div);
    });
}

loadRequests();

// Auto refresh every 2 seconds
setInterval(loadRequests, 2000);
function loadAuctions() {

    let auctions = JSON.parse(localStorage.getItem("auctions") || "[]");

    auctions.forEach(a => {

        const div = document.createElement("div");
        div.style.border = "2px solid purple";
        div.style.padding = "10px";
        div.style.margin = "10px";

        div.innerHTML = `
            <p><strong>Auction Submission</strong></p>
            <p>User: ${a.user}</p>
            <p>File: ${a.file}</p>
            <p>Price: $${a.price}</p>
        `;

        container.appendChild(div);
    });
}

loadAuctions();
