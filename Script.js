// ===== 1. Firebase Config (THAY bằng thông tin thật của bạn) =====
// Import Firebase Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

// Firebase Config bạn cung cấp
const firebaseConfig = {
  apiKey: "AIzaSyBVQ4DyobkB1FQPLObh8UtidhS4ia83Smw",
  authDomain: "webphimnhac.firebaseapp.com",
  projectId: "webphimnhac",
  storageBucket: "webphimnhac.firebasestorage.app",
  messagingSenderId: "3228240460",
  appId: "1:3228240460:web:80a8fb5b795ff186f502e9"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase đã khởi tạo thành công:", app);

// Dữ liệu demo phim và nhạc
const videos = [
  { title: "Phim Hành Động 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Phim Tình Cảm", url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
  { title: "Video Ca Nhạc", url: "https://www.youtube.com/embed/jNQXAC9IVRw" }
];

const musics = [
  { title: "Bài Hát 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Bài Hát 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Bài Hát 3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

// Render danh sách video
function renderVideos(list) {
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = "";
  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${video.title}</h3>
      <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
    `;
    videoList.appendChild(card);
  });
}

// Render danh sách nhạc
function renderMusics(list) {
  const musicList = document.getElementById("musicList");
  musicList.innerHTML = "";
  list.forEach(music => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${music.title}</h3>
      <audio controls>
        <source src="${music.url}" type="audio/mpeg">
        Trình duyệt của bạn không hỗ trợ audio.
      </audio>
    `;
    musicList.appendChild(card);
  });
}

// Tìm kiếm
document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filteredVideos = videos.filter(v => v.title.toLowerCase().includes(keyword));
  const filteredMusics = musics.filter(m => m.title.toLowerCase().includes(keyword));
  renderVideos(filteredVideos);
  renderMusics(filteredMusics);
});

// Khởi tạo ban đầu
renderVideos(videos);
renderMusics(musics);
