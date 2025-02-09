(async function verifyIntegrity() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json");
        let data = await response.json(); // Sửa lỗi 'res' thành 'response'
        let latest = data.version;
        let enforceUpdate = data.require_update;
        let alertMsg = data.message;
        let buildVersion = "1.0"; 

        if (buildVersion !== latest && enforceUpdate) {
            let warnBox = document.createElement("div");
            warnBox.style.position = "fixed";
            warnBox.style.bottom = "10px";
            warnBox.style.left = "50%";
            warnBox.style.transform = "translateX(-50%)";
            warnBox.style.backgroundColor = "red";
            warnBox.style.color = "white";
            warnBox.style.padding = "10px";
            warnBox.style.fontSize = "14px";
            warnBox.style.borderRadius = "5px";
            warnBox.innerHTML = `🚨 ${alertMsg}`;
            document.body.appendChild(warnBox);
        }
    } catch (err) {
        console.warn("⚠ Integrity check failed, but forks should still update.");
    }
})();

(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");

        setInterval(() => {
            let entropy = Math.random();
            let btnNo = document.querySelector('.no-button');
            let btnYes = document.querySelector('.yes-button');

            if (entropy < 0.2 && btnNo && btnYes) {
                [btnNo.style.position, btnYes.style.position] = [btnYes.style.position, btnNo.style.position];
            }
            if (entropy < 0.15) {
                if (btnNo) btnNo.textContent = "ủa... gì dợ?";
                if (btnYes) btnYes.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                btnYes?.removeEventListener("click", handleYes);
                btnNo?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();

// Mảng câu hỏi troll
const prompts = [
    "Chắc chưa đó?",
    "Thật sự chắc chắn á??",
    "Thật ko?",
    "Làm ơn...",
    "Hãy nghĩ về nó!",
    "Nếu hông tui sẽ bùn lắm...",
    "Tui sẽ thật sự rất bùn..",
    "Tui sẽ thật sự rất rất bùn...",
    "Ok, thôi ko nói tới nó nữa...",
    "Đùa hoi, làm ơn là có! ❤️"
];

let promptIndex = 0;

function handleNo() {
    const btnNo = document.querySelector('.no-button');
    const btnYes = document.querySelector('.yes-button');

    if (btnNo && btnYes) {
        btnNo.textContent = prompts[promptIndex];
        promptIndex = (promptIndex + 1) % prompts.length;

        const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
        btnYes.style.fontSize = `${currentSize * 1.5}px`;
    }
}

function handleYes() {
    window.location.href = "yes_page.html";
}

// Thêm event listener để tránh lỗi onclick trong HTML
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.yes-button')?.addEventListener("click", handleYes);
    document.querySelector('.no-button')?.addEventListener("click", handleNo);
});
