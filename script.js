const validCodes = ["1DA9", "Q3J4", "MJ81","X4V2","UI77"]; // Admin sets these

function submitPreference() {

    const code = document.getElementById("refCode").value;
    const pref = document.getElementById("jobPref").value;
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    if (!validCodes.includes(code)) {
        alert("Invalid reference code");
        return;
    }

    if (pref.trim() === "") {
        alert("Enter job preference");
        return;
    }

    popup.style.display = "flex";
    popupText.innerText = "Matching algorithm running...";

    setTimeout(() => {

        popupText.innerText = "Our algorithm will match up jobs you can be exposed to.";

        localStorage.setItem("currentUser", code);

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);

    }, 1500);
}
