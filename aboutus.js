document.addEventListener("DOMContentLoaded", function () {
    // Xử lý nút đăng ký
    let registerBtn = document.querySelector(".register-btn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to the registration page...");
            window.location.href = "register.html"; // Điều hướng sang trang đăng ký
        });
    }

    // Xử lý FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");

            const answer = this.querySelector(".faq-answer");
            if (answer) {
                answer.style.display = answer.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Xử lý toggle class cho FAQ
    let faqContainer = document.querySelector(".faq");
    if (faqContainer) {
        document.querySelectorAll(".faq-item").forEach(item => {
            item.addEventListener("click", function () {
                document.querySelectorAll(".faq-item").forEach(i => {
                    if (i !== item) i.classList.remove("active");
                });

                this.classList.toggle("active");

                let isAnyOpen = document.querySelectorAll(".faq-item.active .faq-answer").length > 0;
                faqContainer.classList.toggle("scroll-active", isAnyOpen);
            });
        });
    }

    // Xử lý xác thực email
    function validateEmail() {
        let emailInput = document.getElementById("emailInput");
        let errorMessage = document.getElementById("errorMessage");
        if (!emailInput || !errorMessage) return;

        let email = emailInput.value.trim();
        errorMessage.innerText = "";

        if (email === "") {
            errorMessage.innerText = "Please enter your email!";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage.innerText = "Invalid email! Please enter correct format.";
            return;
        }

        alert("You have successfully registered!");
        emailInput.value = "";
    }

    let subscribeBtn = document.getElementById("subscribeBtn");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            validateEmail();
        });
    }

    let emailInput = document.getElementById("emailInput");
    if (emailInput) {
        emailInput.addEventListener("input", function () {
            let errorMessage = document.getElementById("errorMessage");
            if (errorMessage) errorMessage.innerText = "";
        });

        emailInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                validateEmail();
            }
        });
    }

    // Xử lý form "Contact Us"
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("contactName")?.value.trim();
            let email = document.getElementById("contactEmail")?.value.trim();
            let phone = document.getElementById("contactPhone")?.value.trim();
            let message = document.getElementById("contactMessage")?.value.trim();

            let errorMessage = "";

            if (!name) {
                errorMessage += "Name cannot be left blank.\n";
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errorMessage += "Invalid email.\n";
            }

            if (!phone || !/^\d{10}$/.test(phone)) {
                errorMessage += "Invalid phone number (only contains 10-character numbers).\n";
            }

            if (!message) {
                errorMessage += "Message content cannot be left blank.\n";
            }

            if (errorMessage) {
                alert(errorMessage);
            } else {
                alert("Sent successfully!");
                contactForm.submit();
            }
        });

        // Xóa lỗi ngay khi nhập lại
        ["contactName", "contactEmail", "contactPhone", "contactMessage"].forEach(id => {
            let input = document.getElementById(id);
            if (input) {
                input.addEventListener("input", function () {
                    let errorMessage = document.getElementById("errorMessage");
                    if (errorMessage) errorMessage.innerText = "";
                });
            }
        });
    }


    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}); // <-- Đóng `DOMContentLoaded` đúng chỗ
