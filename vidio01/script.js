const videoList = [

    {
        src: "https://data.vividey.co/backup/20260607/45d32c2957d5497abae745fd778289cb.mp4",
        title: "Momen Santai di Rumah"
    },

    {
        src: "https://data.vividey.co/backup/20260615/f3f434aa4e2d4621b442ec6f864b1bc5.mp4",
        title: "Vlog Jalan Sore"
    },

    {
        src: "https://cdn2.slicedrive.com/48DFeQPD1.mp4",
        title: "Hari Cerah Bersama Teman"
    },

    {
        src: "https://data.vividey.co/backup/20260615/30c2086f54d542b8ad1bfa70174f6c20.mp4",
        title: "Cuplikan Seru Hari Ini"
    },

    {
        src: "https://data.vividey.co/backup/20260615/2c2ee3a7f4ff44c78fd76fda1dadc2b8.mp4",
        title: "Cerita Singkat Akhir Pekan"
    },

    {
        src: "https://cdn2.slicedrive.com/AYcvGVWM1.mp4",
        title: "Kegiatan Pagi yang Tenang"
    },

    {
        src: "https://cdn2.slicedrive.com/0SnkAE8i1.mp4",
        title: "Suasana Alam Terbuka"
    },

    {
        src: "https://data.vividey.co/backup/20260614/0d7f4069d33248689dadabdb19f31257.mp4",
        title: "Perjalanan Kecil Hari Ini"
    },

    {
        src: "https://cdn2.slicedrive.com/60htfE0D1.mp4",
        title: "Momen Lucu Tak Terduga"
    },

    {
        src: "https://cdn2.slicedrive.com/T9MkqIWz1.mp4",
        title: "Santai Menikmati Waktu"
    },

    {
        src: "https://data.vividey.co/backup/20260614/dff632eda5404d1aac64279cc88bc3e7.mp4",
        title: "Kisah Pendek Sore Hari"
    },

    {
        src: "https://cdn2.slicedrive.com/CLN2EI3H1.mp4",
        title: "Potret Aktivitas Harian"
    },

    {
        src: "https://cdn.videy.co/eW6cs9AQ1.mp4",
        title: "Suasana Hangat Bersama"
    },

    {
        src: "https://data.vividey.co/backup/20260615/28b70bdf961d426581b02c39eb2f617e.mp4",
        title: "Jalan-Jalan Ringan"
    },

    {
        src: "https://cdn2.slicedrive.com/mHbOvciU1.mp4",
        title: "Cerita di Balik Kamera"
    },

    {
        src: "https://data.vividey.co/backup/20260615/7b35c95b2dff49d29c74a2e0e291522b.mp4",
        title: "Video Pilihan Hari Ini"
    },

    {
        src: "https://cdn2.videy.co/NuVDPGLq1.mp4",
        title: "Momen Tenang di Luar Rumah"
    },

    {
        src: "https://data.vividey.co/backup/20260614/45161f9d5963483e9656b4bceb0b5d8c.mp4",
        title: "Kumpulan Momen Harian"
    },

    {
        src: "https://cdn.videy.co/FyWyZeus1.mp4",
        title: "Santai Setelah Aktivitas"
    },

    {
        src: "https://data.vividey.co/backup/20260615/fe71eb287ba34bc0a2649ed41dc2a8dc.mp4",
        title: "Cuplikan Random Seru"
    },

    {
        src: "https://cdn2.videy.co/wEkJbSvy1.mp4",
        title: "Hari Biasa yang Menarik"
    },

    {
        src: "https://cdn.videy.co/QBg8cDNP1.mp4",
        title: "Vlog Singkat Terbaru"
    },

    {
        src: "https://cdn.videy.co/n0tjGB8H1.mp4",
        title: "Momen Pilihan Spesial"
    },

    {
        src: "https://data.vividey.co/backup/20260615/43dfd562372e4cc98aa592a6ceba2cee.mp4",
        title: "Rekaman Santai Hari Ini"
    }

];


// =====================================================
// ELEMENT
// =====================================================

const videoContainer =
    document.getElementById("videoList");

const mainVideo =
    document.getElementById("mainVideo");

const videoSource =
    document.getElementById("videoSource");

const videoTitle =
    document.getElementById("videoTitle");

const videoLoading =
    document.getElementById("videoLoading");

const videoCount =
    document.getElementById("videoCount");


// =====================================================
// JUMLAH VIDEO
// =====================================================

videoCount.textContent =
    `${videoList.length} video`;


// =====================================================
// MEMBUAT CARD VIDEO
// =====================================================

function createVideoCards() {

    videoContainer.innerHTML = "";

    videoList.forEach((video, index) => {

        const card =
            document.createElement("article");

        card.className = "stream-card";

        card.innerHTML = `

            <div class="stream-thumbnail">

                <div class="thumbnail-number">
                    ${index + 1}
                </div>

                <div class="thumbnail-icon">
                    ▶
                </div>

            </div>

            <h3>
                ${video.title}
            </h3>

            <p>
                HD • Streaming
            </p>

        `;

        card.addEventListener("click", () => {

            playVideo(index);

        });

        videoContainer.appendChild(card);

    });

}


// =====================================================
// PLAY VIDEO
// =====================================================

function playVideo(index) {

    const video = videoList[index];

    if (!video) return;


    // Tampilkan loading
    videoLoading.style.display = "flex";


    // Ganti source
    videoSource.src = video.src;

    videoTitle.textContent =
        video.title;


    // Reload player
    mainVideo.load();


    // Setelah siap
    mainVideo.addEventListener(
        "canplay",
        function onCanPlay() {

            videoLoading.style.display = "none";

            mainVideo.removeEventListener(
                "canplay",
                onCanPlay
            );

        }
    );


    // Scroll ke player
    document
        .getElementById("watch")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


    // Coba autoplay
    mainVideo.play()
        .catch(() => {
            // Browser bisa memblokir autoplay.
        });

}


// =====================================================
// ERROR VIDEO
// =====================================================

mainVideo.addEventListener("error", () => {

    videoLoading.textContent =
        "Video gagal dimuat.";

});


// =====================================================
// INIT
// =====================================================

createVideoCards();


// =====================================================
// SEARCH
// =====================================================

function toggleSearch() {

    const searchBox =
        document.getElementById("searchBox");

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {

        document
            .getElementById("searchInput")
            .focus();

    }

}


function searchMovie() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const cards =
        document.querySelectorAll(".stream-card");


    cards.forEach((card, index) => {

        const title =
            videoList[index]
            .title
            .toLowerCase();


        if (title.includes(keyword)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// =====================================================
// NAVBAR
// =====================================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8,8,8,.97)";

    } else {

        navbar.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.65), transparent)";

    }

});
