// Modal open/close
const modal = document.getElementById("registerModal");
const openBtn = document.getElementById("registerBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Handle registration
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const msg = document.getElementById("message");
  msg.textContent = "⏳ Submitting...";

  try {
    const res = await fetch("save_data.php", { method: "POST", body: data });
    const text = await res.text();

    if (text.toLowerCase().includes("successful")) {
      msg.textContent = "🎉 Registration Successful!";
      e.target.reset();           // clear form
      setTimeout(() => {
        modal.style.display = "none"; // close popup
      }, 1200);
    } else {
      msg.textContent = text;
    }

  } catch (error) {
    msg.textContent = "❌ Network error!";
  }
});
