
$(document).ready(function () {

    // Close menu after clicking any menu link
    $(".menu-links a").on("click", function () {
        $(".menu-dropdown").removeAttr("open");
    });

    // Close menu when clicking outside
    $(document).on("click", function (event) {

        if (!$(event.target).closest(".menu-dropdown").length) {
            $(".menu-dropdown").removeAttr("open");
        }

    });

    // Contact form functionality
    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        let name = $("#visitorName").val().trim();
        let email = $("#visitorEmail").val().trim();
        let message = $("#visitorMessage").val().trim();

        if (name === "" || email === "" || message === "") {
            $("#formMessage").text("Please fill in all fields.");
            return;
        }

        // Replace with your actual email address
        let myEmail = "YOUR_EMAIL@gmail.com";

        let subject = encodeURIComponent("Portfolio Contact Message");

        let body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        $("#formMessage").text("Opening your email application...");

        window.location.href =
            "mailto:" + myEmail +
            "?subject=" + subject +
            "&body=" + body;

    });

});

