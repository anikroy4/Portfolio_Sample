
        // Combined function to handle the automatic live clock updates
        function startAutoClock() {
            const now = new Date();
            
            // 1. Configuration options for Bangladesh Time
            const options = { 
                timeZone: 'Asia/Dhaka',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true,
                timeZoneName: 'short' 
            };

            // 2. Direct string generation using browser internal localization
            const bdTimeString = now.toLocaleString('en-BD', options);
            
            // 3. Extract the year safely based on Asia/Dhaka calculation
            const bdYear = now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka', year: 'numeric' });
            
            // 4. Dom injection updates the elements seamlessly
            document.getElementById('bd-year').textContent = bdYear;
            document.getElementById('bd-clock').textContent = bdTimeString;
        }

        // Initialize immediately on content initialization
        startAutoClock();

        // Instructs browser window to run the loop precisely every 1000ms
        setInterval(startAutoClock, 1000);

        $('.sliders').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
            nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
            });