        $(document).ready(function() {
            // Activate Carousel
            $("#myCarousel").carousel();

            // Enable Carousel Indicators
            $(".item1").click(function() {
                $("#myCarousel").carousel(0);
            });
            $(".item2").click(function() {
                $("#myCarousel").carousel(1);
            });
            $(".item3").click(function() {
                $("#myCarousel").carousel(2);
            });
            $(".item4").click(function() {
                $("#myCarousel").carousel(3);
            });
            $(".item2").click(function() {
                $("#myCarousel").carousel(4);
            });
            $(".item3").click(function() {
                $("#myCarousel").carousel(5);
            });
            $(".item4").click(function() {
                $("#myCarousel").carousel(6);
            });
            $(".item2").click(function() {
                $("#myCarousel").carousel(7);
            });
            $(".item3").click(function() {
                $("#myCarousel").carousel(8);
            });
            $(".item4").click(function() {
                $("#myCarousel").carousel(9);
            });
            $(".item2").click(function() {
                $("#myCarousel").carousel(10);
            });
            $(".item3").click(function() {
                $("#myCarousel").carousel(11);
            });

            // Enable Carousel Controls
            $(".left").click(function() {
                $("#myCarousel").carousel("prev");
            });
            $(".right").click(function() {
                $("#myCarousel").carousel("next");
            });
        });