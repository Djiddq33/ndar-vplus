"use client";
const fakeVideos = [
  { id: 1, user: "@Moussa_Ndjam", title: "Nouveau son tchadien 🔥 #musique", likes: "12.5K", video: "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4" },
  { id: 2, user: "@Fatime_Gaming", title: "Free Fire Booyah! #jeux", likes: "8.2K", video: "https://videos.pexels.com/video-files/3191570/3191570-uhd_2560_1440_25fps.mp4" },
];
export default function ClipsPage() {
  return (
    <div className="h-screen w-full bg-black overflow-y-scroll snap-y snap-mandatory">
      {fakeVideos.map((v) => (
        <div key={v.id} className="relative h-screen w-full snap-start flex items-center justify-center">
          <video src={v.video} autoPlay loop muted playsInline className="h-full w-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="font-bold">{v.user}</p><p className="text-sm">{v.title}</p>
            <p className="mt-2">❤️ {v.likes} | 💬 1.2K | ↗️ Partager</p>
          </div>
        </div>
      ))}
    </div>
  );
}
