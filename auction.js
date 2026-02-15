const userCode = localStorage.getItem("currentUser");
document.getElementById("userCode").innerText = userCode;

document.getElementById("auctionBtn").onclick = function() {

    const confirmed = document.getElementById("confirmRead").checked;
    const price = document.getElementById("priceTag").value;
    const fileInput = document.getElementById("fileUpload");

    if (!confirmed) {
        alert("You must confirm you read the letter.");
        return;
    }

    if (!price) {
        alert("Enter a price.");
        return;
    }

    if (fileInput.files.length === 0) {
        alert("Upload a file.");
        return;
    }

    const fileName = fileInput.files[0].name;

    let auctions = JSON.parse(localStorage.getItem("auctions") || "[]");

    auctions.push({
        user: userCode,
        file: fileName,
        price: price,
        status: "submitted"
    });

    localStorage.setItem("auctions", JSON.stringify(auctions));

    alert("Auction submitted to admin.");

    window.location.href = "dashboard.html";
};
